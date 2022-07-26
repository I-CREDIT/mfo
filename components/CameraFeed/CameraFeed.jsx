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

const config_veridoc = {
  autoDocType: false,
  docType: 1,
  recognitionMode: 1,
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
      isCameraVisible: false,
      isCameraVisibleDocs: false,
      isVerificationCompleted: false,
      isScanning: false,
      isVerificationSecond: false,
      isVerificationThird: false,
      isPreload: true,
      isAfterload: false,
      isDocsReady: false,
      isFaceIDReady: false,
      isDocAccepted: false,
      doc: null,
      selfie: null,
    };
  }

  /**
   * Processes available devices and identifies one by the label
   * @memberof CameraFeed
   * @instance
   */
  processDevices(devices) {
    // const video_devices = devices.filter(
    //   (device) => device.kind === "videoinput"
    // );

    // if (+this.props.isBMG) {
    //   // включает заднюю камеру
    //   this.setDevice(video_devices[video_devices.length - 1]);
    // }

    devices.forEach((device) => {
      this.setDevice(device);
    });
  }

  /**
   * Sets the active device and starts playing the feed
   * @memberof CameraFeed
   * @instance
   */
  async setDevice(device) {
    const { deviceId } = device;
    this.videoPlayer.srcObject = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: { deviceId },
    });
    await this.videoPlayer.play();
  }

  // Подключение скрипта
  async enableScript(url) {
    const script = document.createElement("script");

    script.src = url;
    script.defer = true;
    script.async = true;

    document.body.appendChild(script);
  }

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

  async enableVeridoc() {
    this.setState({
      is_loading: true,
    });

    // Создаем глобальную переменную veridoc с помощью скрипта
    await this.enableScript(
      "https://s3.eu-central-1.amazonaws.com/veridoc-statics.verigram.ai/veridoc-v1.16.0.js"
    );

    // Запускаем veridoc с задержкой, чтобы успеть импортнуть script
    setTimeout(() => {
      veridoc
        .init(
          "https://services.verigram.ai:8443/s/veridoc/ru/veridoc/",
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

  takePhoto = () => {
    if (this.state.isCameraVisible) {
      this.setState({
        isCameraVisible: false,
        isDocsReady: false,
        isFaceIDReady: true,
      });
    } else if (this.state.isCameraVisibleDocs) {
      this.setState({
        isCameraVisibleDocs: false,
        isDocsReady: true,
      });
    }

    const context = this.canvas.getContext("2d");
    this.canvas.width = this.videoPlayer.videoWidth;
    this.canvas.height = this.videoPlayer.videoHeight;

    context.drawImage(
      this.videoPlayer,
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
  };

  takePhotoAgain = () => {
    if (this.state.isDocsReady) {
      this.setState({
        isCameraVisibleDocs: true,
        isDocsReady: false,
      });
    } else if (this.state.isFaceIDReady) {
      this.setState({
        isCameraVisible: true,
        isFaceIDReady: false,
      });
    }
  };

  showCameraDocs = () => {
    this.setState({
      isCameraVisibleDocs: true,
      isPreload: false,
    });
  };

  showCamera = () => {
    setTimeout(() => {
      this.setState({
        isCameraVisible: true,
        isPreload: false,
      });

      setTimeout(() => {
        // 2 секунды - Поместить лицо в рамку, начать сканирование
        this.setState({
          isScanning: true,
        });

        // 1 секунда - Конец сканирования, улыбнуться
        setTimeout(() => {
          this.setState({
            isScanning: false,
            isVerificationSecond: true,
          });

          // 2 секунды - Улыбнуться, начать сканирование
          setTimeout(() => {
            this.setState({
              isVerificationSecond: false,
              isScanning: true,
            });

            // 1 секунда - Конец сканирования, отдалиться
            setTimeout(() => {
              this.setState({
                isScanning: false,
                isVerificationThird: true,
              });

              // 2 секунды - Отдалиться, закончить верификацию
              setTimeout(() => {
                this.setState({
                  isScanning: true,
                });

                // 1 секунда - Конец сканирования, отдалиться
                setTimeout(() => {
                  this.setState({
                    isScanning: false,
                    isVerificationThird: false,
                    isVerificationCompleted: true,
                  });
                }, 1000);
              }, 2000);
            }, 1000);
          }, 2000);
        }, 1000);
      }, 2000);
    }, 1000);
  };

  onStartVerilive = () => {
    verilive.start();

    verilive.successCallback = async (data) => {
      this.sendPhoto(data.bestFrame);
    };
    verilive.failCallback = (data) => {
      swal(
        "Ошибка",
        `${data}. Вы будете перенаправлены на главную страницу1.`,
        "error"
      ).then(() => {
        Router.push("/");
      });
    };
  };

  onStartVeridoc = () => {
    veridoc.start();

    veridoc.successCallback = async (data) => {
      // this.sendPhoto(data.bestFrame);

      await this.enableVerilive();
    };

    veridoc.failCallback = (data) => {
      swal(
        "Ошибка",
        `${data}. Вы будете перенаправлены на главную страницу1-veridoc.`,
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
      if (this.state.isDocAccepted) {
        const { sendFileManually } = this.props;

        this.canvas.toBlob((selfie) => {
          this.state.selfie = selfie;
        });

        setTimeout(() => {
          this.setState({
            isAfterload: true,
          });
          sendFileManually(this.state.doc, this.state.selfie);
        }, 1000);
      }
      // Если не готово УДВ
      else {
        this.canvas.toBlob((doc) => {
          this.state.doc = doc;
        });

        this.setState({
          isDocAccepted: true,
          isCameraVisible: true,
        });
        this.showCamera();
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
