import {useEffect, useState} from "react"
import VeriLive from "../components/Verigram/VeriLive"
import axios from 'axios'
import VeriDoc from "../components/Verigram/VeriDoc"
const TestCheck = () => {
    const [step,
        setStep] = useState(1)
    const [livePhoto,
        setLivePhoto] = useState(null)
    const [liveDoc,
        setLiveDoc] = useState(null)
    const [file,
        setFile] = useState(null)
    const [fileDoc,
        setFileDoc] = useState(null)

    function urltoFile(url, filename, mimeType) {
        mimeType = mimeType || (url.match(/^data:([^;]+);/) || '')[1];
        return (fetch(url).then(function (res) {
            return res.arrayBuffer();
        }).then(function (buf) {
            return new File([buf], filename, {type: mimeType});
        }));
    }

    function livePhotoHandle() {
        if (livePhoto !== null) {
            const photoBase = livePhoto.bestFrame
            urltoFile(photoBase, 'a.png').then(function (file) {
                setFile(file)
            })
        }
    }

    function liveDocHandle() {
        if (liveDoc !== null) {
            // console.log(liveDoc)
            urltoFile(liveDoc, 'doc.png', 'image/jpeg')
                .then(function (file) {
                    setFileDoc(file)
                })
        }
    }
    function checkSimilar() {
        if (fileDoc !== null) {
            // console.log(fileDoc)
            var bodyFormData = new FormData();
            const API_URL = 'https://services.verigram.ai:8443/veriface'
            const config = {
                headers: {
                    apiKey: "PeeKMaNIX9dNL2pB2433rs7zwrs28gGZ",
                    'Content-Type': 'multipart/form-data'
                }
            }
            bodyFormData.append('doc', fileDoc)
            bodyFormData.append('photo', file)
            return axios
                .post(API_URL, bodyFormData, config)
                .then(res => {
                    console.log(res)
                    swal("Процент совместимости", `${res.data.Similarity}`, "info").then(() => {
                        location.reload()
                    })
                })
                .catch(err => {
                    if (err.response) {
                        console.log(err.response)
                    }
                })
        }
    }

    useEffect(() => {
        liveDocHandle()
    }, [liveDoc])

    useEffect(() => {
        checkSimilar()
    }, [fileDoc])

    useEffect(() => {
        livePhotoHandle()
    }, [livePhoto])

    useEffect(() => {
        if (file !== null) {
            setStep(2)
        }
    }, [file])

    useEffect(() => {
        function showResults(data) {
            if (data.face_picture) {
                setLiveDoc("data:image/jpeg;base64," + data.face_picture)
            } else {
                setLiveDoc(`${data}`)
            }
        }

        function checkRecognitionWarnings() {
            var recognitionWarnings = veridoc.getRecognitionWarnings();
            if (recognitionWarnings.includes(RecognitionWarning.DOCUMENT_EXPIRED)) {
                console.log('This document expired!');
            }
            if (recognitionWarnings.includes(RecognitionWarning.INCONSISTENT_TRANSLITERATION)) {
                console.log('Transliteration check fail warning!');
            }
        }

        function successCallback(data) {
            showResults(data);
            checkRecognitionWarnings();
        }

        function errorCallback(data) {
            showResults(data);
        }

        function gotPhotoCallback() {}
        var apiKey = 'PeeKMaNIX9dNL2pB2433rs7zwrs28gGZ';
        var endpointAddress = 'https://dev.verilive.verigram.ai/ru/veridoc/';
        if (step === 2) {
            veridoc.init(endpointAddress, apiKey, successCallback, errorCallback, gotPhotoCallback)
        }
    }, [step])
    return (
        <div>
            {/* {step === 1 && <VeriLive setLivePhoto={setLivePhoto}/>}
      {step === 2 && <VeriDoc setLiveDoc={setLiveDoc}/>} */}
            {/* <VeriDoc setLiveDoc={setLiveDoc}/> */}
            <VeriLive setLivePhoto={setLivePhoto}/>
            {/* {JSON.stringify(liveDoc)} */}
        </div>
    )
}

export default TestCheck;