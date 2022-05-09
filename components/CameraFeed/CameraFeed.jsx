import React, {Component} from 'react';

export class CameraFeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCameraVisible: true
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
            isCameraVisible: true
        })
    }

    sendPhoto = () => {
        const { sendFile } = this.props;
        this.canvas.toBlob(sendFile);

        Router.push("/")
    }

    render() {
        return (
            <div className="c-camera-feed">
                <div className={`c-camera-feed--holder ${this.state.isCameraVisible ? '' : 'd-none'}`}>
                    <div className="c-camera-feed__viewer">
                        {this.state.isCameraVisible}
                        <video ref={ref => (this.videoPlayer = ref)} width="100%" height="100%" />
                    </div>
                    <button onClick={this.takePhoto}>Сфотографировать</button>
                </div>

                <div className={`c-camera-feed--holder ${!this.state.isCameraVisible ? '' : 'd-none'}`}>
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
