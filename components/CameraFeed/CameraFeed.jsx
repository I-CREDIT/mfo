import React, { Component } from "react";
import swal from "sweetalert";
import Router from "next/router";

// Настройки verilive
const config_verilive = {
  recordVideo: false,
  videoBitrate: 2500000,
  rotated: false,
  lang: "custom",

  render: {
    oval: true,
    faceContourInsteadOfOval: true,
    ovalRingColor: {
      default: "#f5f542",
      actionSuccess: "#00ba00",
      actionFailure: "#d00000",
      sessionSuccess: "#00ba00",
      sessionFailure: "#d00000",
    },
    ovalWidth: 1.0,

    overlay: true,
    overlayColor: {
      default: "#2f4f4f",
    },
    overlayTransparency: {
      default: 0.55,
    },

    arrow: true,
    arrowColor: {
      default: "#f0f0f0",
    },
    arrowProgressColor: {
      default: "#404040",
    },

    hint: true,
    hintTextColor: {
      default: "#eee",
    },
    hintFontType: "Arial",
    hintUseProgressiveFontSize: true,
    hintProgressiveFontSizeMultiplier: 1.0,
    hintFontSize: 25,
    hintCloudColor: {
      default: "#2d312f",
    },

    videoUploadProgressBar: true,
    videoUploadProgressBarColor1: "#FFEA82",
    videoUploadProgressBarColor2: "#eee",
  },

  hints: {
    noHint: "",
    noFace: "Вас Не Видно",
    badLight: "Выравните Освещение",
    closer: "Ближе",
    away: "Отдалитесь",
    closerToCenter: "Ближе к Центру Экрана",

    targetLeft: "Медленно Поворачивайте Голову Влево",
    targetRight: "Медленно Поворачивайте Голову Вправо",
    targetCenter: "Посмотрите Прямо",

    sessionSuccess: "Вы Прошли!",
    sessionFailure: "Вы Не Прошли!",
    sessionError: "Произошла какая-то ошибка. Попробуйте перезапустить",
  },
};

// Настройки veridoc
const config_veridoc = {
  autoDocType: false,
  docType: 1,
  recognitionMode: 0,
  translitCheck: false,
  glareCheck: false,
  photocopyCheck: false,
  lang: "ru",
  hints: {},
  render: {
    placeholder: true,
    startButton: true,
    containerBorderThickness: 1,
    containerBorderRadius: 3,
    containerBorderColor: "#000000",
    frame: true,
    frameBorderThickness: 3,
    frameBorderRadius: 20,
    frameColor: {
      default: "rgba(255, 255, 255, 1.0)",
      detected: "rgba(30, 255, 88, 1.0)",
    },
    overlay: true,
    overlayPermanent: true,
    overlayColor: {
      default: "#ffffff",
    },
    upperBarColor: {
      default: "rgba(255, 255, 255, 1.0)",
    },
    lowerBarColor: {
      default: "#a2d2ff",
      error: "#ffccd5",
    },
    buttonColor: {
      default: "#a2d2ff",
    },
    buttonTextColor: {
      default: "#353535",
    },
    overlayTransparency: {
      default: 0.7,
    },
    icons: true,
    hint: true,
    hintTextColor: {
      default: "#353535",
    },
    hintFontType: "Arial",
    mirrorPreview: false,
  },
};

export class CameraFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_loading: true,
      is_on_verilive: false,
      is_on_veridoc: false,
      //
      doc: null,
      // selfie: null,
    };
  }

  // Подключение скрипта
  async enableScript(url) {
    const script = document.createElement("script");

    script.src = url;
    script.defer = true;
    script.async = true;

    document.body.appendChild(script);
  }

  // Подключение проверки на живость
  async enableVerilive() {
    this.setState({
      is_loading: true,
    });

    // Создаем глобальную переменную verilive с помощью скрипта
    await this.enableScript(
      "https://s3.eu-central-1.amazonaws.com/verilive-statics.verigram.ai/verilive.js"
    );

    // Запускаем verilive с задержкой, чтобы успеть импортнуть script
    setTimeout(() => {
      verilive
        .init(
          "https://services.verigram.ai:8443/verilive/verilive",
          "PeeKMaNIX9dNL2pB2433rs7zwrs28gGZ",
          config_verilive
        )
        .then(() => {
          this.onStartVerilive();
        })
        .catch((error) => {
          console.log(error, "error_verilive");
        })
        .finally(() => {
          this.setState({
            is_loading: false,
            is_on_veridoc: false,
            is_on_verilive: true,
          });
        });
    }, 2000);
  }

  // Подключение распознавания УДВ
  async enableVeridoc() {
    this.setState({
      is_loading: true,
    });

    // Создаем глобальную переменную veridoc с помощью скрипта
    await this.enableScript(
      "https://s3.eu-central-1.amazonaws.com/veridoc-statics.verigram.ai/veridoc-v1.16.x.js"
    );

    // Запускаем veridoc с задержкой, чтобы успеть импортнуть script
    setTimeout(() => {
      veridoc
        .init(
          "https://services.verigram.ai:8443/veridoc/ru/veridoc/",
          "PeeKMaNIX9dNL2pB2433rs7zwrs28gGZ",
          config_veridoc
        )
        .then(() => {
          this.onStartVeridoc();
        })
        .catch((error) => {
          swal("Ошибка", `${error}`, "error").then(() => Router.push("/"));
        })
        .finally(() => {
          this.setState({
            is_loading: false,
            is_on_verilive: false,
            is_on_veridoc: true,
          });
        });
    }, 2000);
  }

  async componentDidMount() {
    // Егов регистрация
    if (this.props.isBMG === "1") {
      await this.enableVerilive();
    }
    // Ручная регистрация
    else {
      await this.enableVeridoc();
    }
  }

  // Старт проверки на живость
  onStartVerilive = () => {
    verilive.start();

    verilive.successCallback = async (data) => {
      this.sendPhoto(data.bestFrame);
    };

    verilive.failCallback = (data) => {
      swal(
        "Ошибка",
        `${data}. Вы будете перенаправлены на главную страницу.`,
        "error"
      ).then(() => {
        Router.push("/");
      });
    };
  };

  // Старт сканирования УДВ
  onStartVeridoc = () => {
    veridoc.start();

    veridoc.successCallback = async (data) => {
      console.log(data, "veridoc-data");
      this.sendPhoto(data.original_image).then(() => {
        veridoc.dispose();
      });

      await this.enableVerilive();
    };

    veridoc.failCallback = (data) => {
      swal(
        "Ошибка",
        `${data}. Вы будете перенаправлены на главную страницу.`,
        "error"
      ).then(() => {
        Router.push("/");
      });
    };
  };

  sendPhoto = (file) => {
    // Егов регистрация
    if (this.props.isBMG === "1") {
      this.setState({
        is_loading: true,
      });

      const { sendFile } = this.props;
      sendFile(file);
    }
    // Ручная регистрация
    else {
      // Если готово УДВ
      if (this.state.doc) {
        const { sendFileManually } = this.props;
        sendFileManually(this.state.doc, file);

        this.setState({
          doc: file,
          is_loading: false,
          is_on_veridoc: false,
          is_on_verilive: false,
        });
      }
      // Если не готово УДВ
      else {
        this.setState({
          doc: file,
          is_loading: false,
          is_on_veridoc: false,
          is_on_verilive: true,
        });
      }
    }
  };

  render() {
    return (
      <div>
        {/* VERILIVE FRAME */}
        <div
          id="id_verilive"
          className={`${this.state.is_on_verilive ? "" : "d-none"}`}
        ></div>

        {/* VERIDOC FRAME */}
        <div
          id="id_veridoc"
          className={`${this.state.is_on_veridoc ? "" : "d-none"}`}
        ></div>

        {/* LOADER */}
        <div
          className={`${this.state.is_loading ? "modelLoader" : "d-none"}`}
        />
      </div>
    );
  }
}
