import React, { Component } from "react";

export class CameraFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  /**
   * On mount, grab the users connected devices and process them
   * @memberof CameraFeed
   * @instance
   * @override
   */
  async componentDidMount() {
    const cameras = await navigator.mediaDevices.enumerateDevices();

    console.log(cameras, "adiua");
    this.processDevices(cameras);
  }

  /**
   * Handles taking a still image from the video feed on the camera
   * @memberof CameraFeed
   * @instance
   */
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

  startVerification = () => {
    if (this.props.isBMG === "1") {
      this.showCamera();
    } else {
      this.showCameraDocs();
    }
  };

  sendPhoto = () => {
    // Егов регистрация
    if (+this.props.isBMG) {
      this.setState({
        isAfterload: true,
      });

      const { sendFile } = this.props;
      this.canvas.toBlob(sendFile);
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
      <div className="c-camera-feed">
        {/*Loader*/}
        <div
          className={`${this.state.isAfterload ? "modelLoader" : "d-none"}`}
        />

        {/* Перед открытием биометрии */}
        <div
          className={`c-camera-feed__preload ${
            this.state.isPreload ? "" : "d-none"
          }`}
        >
          <p>
            Подтверждение личности. Вам необходимо подтвердить личность с
            помощью фото. Подготовьте камеру.
          </p>
          <button onClick={this.startVerification}>Начать подтверждение</button>
        </div>

        {/* Основной компонент камеры */}
        <div
          className={`c-camera-feed--holder ${
            (this.state.isCameraVisible || this.state.isCameraVisibleDocs) &&
            !this.state.isPreload
              ? ""
              : "d-none"
          }`}
        >
          <div className="c-camera-feed__viewer">
            <video
              ref={(ref) => (this.videoPlayer = ref)}
              width="100%"
              height="100%"
              autoPlay
              playsInline
              muted
            />
            <div
              className={`iin ${
                this.state.isCameraVisibleDocs ? "" : "d-none"
              }`}
            >
              <div className="iin-frame" />
            </div>
            <div
              className={`face-id ${
                this.state.isVerificationCompleted ||
                this.state.isCameraVisibleDocs
                  ? "d-none"
                  : ""
              }`}
            >
              <div
                className={`face-id__frame ${
                  this.state.isVerificationThird ? "scale-smaller" : ""
                }`}
              >
                <div
                  className={`face-id__scanner ${
                    this.state.isScanning ? "" : "d-none"
                  }`}
                />
              </div>
            </div>
          </div>
          <p
            className={`face-id__text ${
              this.state.isCameraVisibleDocs ? "" : "d-none"
            }`}
          >
            Сфотографируйте удостоверение личности
          </p>
          <p
            className={`face-id__text ${
              !this.state.isVerificationCompleted && this.state.isCameraVisible
                ? ""
                : "d-none"
            }`}
          >
            {this.state.isVerificationSecond
              ? "Улыбнитесь"
              : this.state.isVerificationThird
              ? "Отдалитесь"
              : "Поместите лицо в рамку"}
          </p>
          <button
            className={`${
              this.state.isVerificationCompleted ||
              this.state.isCameraVisibleDocs
                ? ""
                : "d-none"
            }`}
            onClick={this.takePhoto}
          >
            Сфотографировать
          </button>
        </div>

        {/* Фото результат + возможность переснять */}
        <div
          className={`c-camera-feed--holder ${
            (this.state.isFaceIDReady ||
              (this.state.isDocsReady && !this.state.isCameraVisible)) &&
            !this.state.isPreload
              ? ""
              : "d-none"
          }`}
        >
          <div className="c-camera-feed__stage">
            <canvas
              className="canvas"
              height="100%"
              ref={(ref) => (this.canvas = ref)}
            />
          </div>
          <div className="d-flex justify-content-between w-100">
            <button onClick={this.takePhotoAgain}>Переснять</button>
            <button onClick={this.sendPhoto}>Отправить фото</button>
          </div>
        </div>
      </div>
    );
  }
}
