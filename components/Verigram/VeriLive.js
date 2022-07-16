import { useEffect } from "react";
import swal from "sweetalert";
import cookie from 'js-cookie'
import Router from "next/router";
const VeriLive = ({setLivePhoto}) => {

    const url = "https://services.verigram.ai:8443/verilive/verilive"
    const apiKey = 'PeeKMaNIX9dNL2pB2433rs7zwrs28gGZ'
    const config = {
        'recordVideo': false,
        'videoBitrate': 2500000,
        'rotated': false,
        'lang': "custom",

        'render': {
            'oval': true,
            'faceContourInsteadOfOval': true,
            'ovalRingColor': {
                'default': '#f5f542',
                'actionSuccess': '#00ba00',
                'actionFailure': '#d00000',
                'sessionSuccess': '#00ba00',
                'sessionFailure': '#d00000',
            },
            'ovalWidth': 1.0,

            'overlay': true,
            'overlayColor': {
                'default' : '#2f4f4f',
            },
            'overlayTransparency': {
                'default': 0.55,
            },

            'arrow': true,
            'arrowColor': {
                'default': '#f0f0f0',
            },
            'arrowProgressColor': {
                'default': '#404040',
            },

            'hint': true,
            'hintTextColor': {
                "default": "#eee",
            },
            'hintFontType': "Arial",
            'hintUseProgressiveFontSize': true,
            'hintProgressiveFontSizeMultiplier': 1.0,
            'hintFontSize': 25,
            "hintCloudColor": {
                "default": "#2d312f",
            },

            'videoUploadProgressBar': true,
            'videoUploadProgressBarColor1': "#FFEA82",
            'videoUploadProgressBarColor2': "#eee",
        },

        'hints': {
            'noHint': '',
            'noFace': 'Вас Не Видно',
            'badLight': "Выравните Освещение",
            'closer': 'Ближе',
            'away': 'Отдалитесь',
            'closerToCenter': 'Ближе к Центру Экрана',

            'targetLeft': 'Медленно Поворачивайте Голову Влево',
            'targetRight': 'Медленно Поворачивайте Голову Вправо',
            'targetCenter': 'Посмотрите Прямо',

            'sessionSuccess': 'Вы Прошли!',
            'sessionFailure': 'Вы Не Прошли!',
            'sessionError': 'Произошла какая-то ошибка. Попробуйте перезапустить',
        },
    };

    function onStartButtonClick() {
        const token = verilive.start();
        console.log(verilive.name + ': Token - ' + token);
    }

    const onInitVerilive = () => {
        console.log(global)
        verilive.init(url, apiKey, config)
            .then((data) => {
                swal("Проверка 'живости'", `Если вы готовы нажмите кнопку OK`, "info").then(() => {
                    onStartButtonClick()
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const onInitVeridoc = () => {
        console.log(global)
        let configVeriDoc = {
            autoDocType: false,
            docType: 1,
            recognitionMode: 1,
            translitCheck: false,
            glareCheck: false,
            photocopyCheck: false,
            lang: 'ru',
            hints: 'RU', 
            render: {
                placeholder: true,
                frame: true,
                frameBorderThickness: 3,
                frameBorderRadius: 20,
                frameColor: {
                  default: "#ffffff",
                  detected: "#7eff73"
                },
                overlay: true,
                overlayColor: {
                  default: "#424243"
                },
                overlayTransparency: {
                  default: 0.7
                },
                icons: true,
                hint: true,
                hintTextColor: {
                  default: "#ffffff"
                },
                hintFontType: "Arial",
                hintCloudColor: {
                  default: "#000000"
                },
                mirrorPreview: false
              }
        }
        veridoc.init('https://services.verigram.ai:8443/veridoc/ru/veridoc/', apiKey, configVeriDoc)
            .then(() => {
                var session_token = veridoc.start();
                console.log('session_token is: ' + session_token);
            })
            .catch((error) => {
                console.log(error)
            });
    }

    // useEffect(() => {
        // console.log(global)
        // verilive.init(url, apiKey, config)
        //     .then((data) => {
        //         swal("Проверка 'живости'", `Если вы готовы нажмите кнопку OK`, "info").then(() => {
        //             onStartButtonClick()
        //         })
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
    // },[])

    return(
        <div>
            {/* <button className='check' onClick={() => checkButton()}></button> */}
            <button onClick={onInitVerilive}>
                Verilive
            </button>
            <button onClick={onInitVeridoc}>
                Veridoc
            </button>
            <div id="id_verilive"></div>
            <div id="id_veridoc"></div>
            {/* <div>Hello</div> */}
        </div>
    )
}

export default VeriLive;