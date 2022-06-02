import React, {Component} from 'react';

export class CameraFeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCameraVisible: false,
            isVerificationCompleted: false,
            isScanning: false,
            isVerificationSecond: false,
            isVerificationThird: false,
            isPreload: true,
        }
    }

    /**
     * Processes available devices and identifies one by the label
     * @memberof CameraFeed
     * @instance
     */
    processDevices(devices) {
        devices.forEach(device => {
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
        this.videoPlayer.srcObject = await navigator.mediaDevices.getUserMedia({audio: false, video: {deviceId}});
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
        this.processDevices(cameras);
    }

    /**
     * Handles taking a still image from the video feed on the camera
     * @memberof CameraFeed
     * @instance
     */
    takePhoto = () => {
        this.setState({
            isCameraVisible: false
        })

        const context = this.canvas.getContext('2d');

        this.canvas.width = this.videoPlayer.videoWidth
        this.canvas.height = this.videoPlayer.videoHeight

        context.drawImage(this.videoPlayer, 0, 0, this.canvas.width, this.canvas.height);
    };

    takePhotoAgain = () => {
        this.setState({
            isCameraVisible: true,
        })
    }

    startVerification = () => {
        setTimeout(() => {
            this.setState({
                isCameraVisible: true,
                isPreload: false,
            })

            setTimeout(() => {
                // 2 секунды - Поместить лицо в рамку, начать сканирование
                this.setState({
                    isScanning: true,
                })

                // 1 секунда - Конец сканирования, улыбнуться
                setTimeout(() => {
                    this.setState({
                        isScanning: false,
                        isVerificationSecond: true,
                    })

                    // 2 секунды - Улыбнуться, начать сканирование
                    setTimeout(() => {
                        this.setState({
                            isVerificationSecond: false,
                            isScanning: true,
                        })

                        // 1 секунда - Конец сканирования, отдалиться
                        setTimeout(() => {
                            this.setState({
                                isScanning: false,
                                isVerificationThird: true,
                            })

                            // 2 секунды - Отдалиться, закончить верификацию
                            setTimeout(() => {
                                this.setState({
                                    isScanning: true,
                                })

                                // 1 секунда - Конец сканирования, отдалиться
                                setTimeout(() => {
                                    this.setState({
                                        isScanning: false,
                                        isVerificationThird: false,
                                        isVerificationCompleted: true,
                                    })
                                }, 1000)
                            }, 2000)
                        }, 1000)
                    }, 2000)
                }, 1000)
            }, 2000)
        }, 1000)
    }

    sendPhoto = () => {
        const { sendFile } = this.props;
        this.canvas.toBlob(sendFile)
    }

    render() {
        return (
            <div className="c-camera-feed">
                {/* Перед открытием биометрии */}
                <div className={`c-camera-feed__preload ${this.state.isPreload ? '' : 'd-none'}`}>
                    <p>Вам необходимо пройти верификацию</p>
                    <button onClick={this.startVerification}>Начать верификацию</button>
                </div>

                {/* Основной компонент камеры */}
                <div className={`c-camera-feed--holder ${this.state.isCameraVisible && !this.state.isPreload ? '' : 'd-none'}`}>
                    <div className="c-camera-feed__viewer">
                        <video ref={ref => (this.videoPlayer = ref)} width="100%" height="100%" autoPlay playsInline/>
                        <div className={`face-id ${this.state.isVerificationCompleted ? 'd-none' : ''}`}>
                            <div className={`face-id__frame ${this.state.isVerificationThird ? 'scale-smaller' : ''}`}>
                                <div className={`face-id__scanner ${this.state.isScanning ? '' : 'd-none'}`}/p>
                            </div>
                        </div>
                    </div>
                    <p className={`face-id__text ${!this.state.isVerificationCompleted ? '' : 'd-none'}`}>
                        {
                            this.state.isVerificationSecond ?
                                "Улыбнитесь" :
                                this.state.isVerificationThird ?
                                    "Отдалитесь" :
                                    "Поместите лицо в рамку"
                        }
                    </p>
                    <button className={`${this.state.isVerificationCompleted ? '' : 'd-none'}`} onClick={this.takePhoto}>Сфотографировать</button>
                </div>

                {/* Фото результат + возможность переснять */}
                <div className={`c-camera-feed--holder ${!this.state.isCameraVisible && !this.state.isPreload ? '' : 'd-none'}`}>
                    <div className="c-camera-feed__stage">
                        <canvas className="canvas" height="100%" ref={ref => this.canvas = ref} />
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
