import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
pdfMake.fonts = {
  TimesNewRoman: {
    normal: 'TimesNewRoman.ttf',
    bold: 'TimesNewRomanBold.ttf',
    italics: 'TimesNewRomanItalics.ttf',
    bolditalics: 'TimesNewRomanBoldItalics.ttf'
  },
  emptyCheckbox: {
    normal: 'emptyCheckbox.ttf'
  }
}

const MicrocreditInsuranceDocument = (props) => {
  let microcreditInsurance = {
    content: [
      {
        text: 'Директору',
        style: 'bold11',
        alignment: 'right',
        margin: [0, 0, 0, 10]
      },
      {
        text: 'ТОО «Микрофинансовая организация «i-credit.kz»',
        style: 'bold11',
        alignment: 'right',
        margin: [0, 0, 0, 10]
      },
      {
        text: 'Шаншарову Н. А.',
        style: 'bold11',
        alignment: 'right',
        margin: [0, 0, 0, 10]
      },
      {
        table: {
          width: [
            ['*', '*']
          ],
          body: [
            [
              {
                stack: [
                  {
                    text: `Я, ${props.fio} (ФИО полностью) дата и место рождения: ${props.dateOfBirth}, проживающий/ая по адресу ${props.address}, ИИН: ${props.iin}, удостоверение личности №${props.cardNumber}, поручаю ТОО «Микрофинансовая организация «i-credit.kz» по договору №${props.contractNumber} заключенного мной со страховой организацией АО «Компания по страхованию жизни «Freedom Finance Life» на добровольное страхование жизни перечислить страховую премию в размере ${props.reward} тенге, на срок страхования ${props.period} календарных дней, в пользу страховой организации АО «Компания по страхованию жизни «Freedom Finance Life».`,
                    style: 'regular11',
                    alignment: 'justify',
                  },
                  {
                    text: ' ',
                  },
                  {
                    text: `С перечисляемой суммой страховой премии в размере ${props.reward} тенге, в пользу страховой организации АО «Компания по страхованию жизни «Freedom Finance Life» по договору №${props.contractNumber} добровольного страхования жизни согласен.`,
                    style: 'regular11',
                    alignment: 'justify',
                  },
                  {
                    text: ' ',
                  },
                  {
                    text: `С Правилами страхования, размещенными на интернет ресурсе Страховщика и/или ТОО «МФО«i- credit.kz» ознакомлен (-а).`,
                    style: 'regular11',
                    alignment: 'justify',
                  },
                  {
                    text: ' ',
                  },
                  {
                    text: `${props.code}`,
                    style: 'regular11',
                    alignment: 'justify',
                  },
                  {
                    text: '_____________________________________',
                  },
                  {
                    text: ' ',
                  },
                  {
                    text: '(документ подписан двухфакторной аутентификацией)',
                    style: 'bold8',
                  },
                ]
              },
              {
                stack: [
                  {
                    text: `Мен ${props.fio} (аты-жөні толығымен), туған күні мен жері: ${props.dateOfBirth} тұрғылықты мекенжайы ${props.address}, ЖСН: ${props.iin}, жеке куəлігі №${props.cardNumber}, «i-credit.kz» Шағын қаржы ұйымы» ЖШС-не, менің АҚ «Freedom Finance Life» сақтандыру компаниясымен №${props.contractNumber} өмірді ерікті мерзімді сақтандыру шарты бойынша сақтандыру сомасының жарнасын мөлшері ${props.reward} теңгені ${props.period} күн сақтандыру мерзіміне «Freedom Finance Life» АҚ сақтандыру компаниясына аударуды тапсырамын.`,
                    style: 'regular11',
                    alignment: 'justify',
                  },
                  {
                    text: ' ',
                  },
                  {
                    text: `Сонымен қатар, сақтандыру сомасының жарнасын мөлшері ${props.reward} теңгені ${props.period} күн сақтандыру мерзіміне АҚ «Freedom Finance Life» сақтандыру компаниясының №${props.contractNumber} өмірді ерікті мерзімді сақтандыру шартымен толық келісемін.`,
                    style: 'regular11',
                    alignment: 'justify',
                  },
                  {
                    text: ' '
                  },
                  {
                    text: 'Сақтандырушының және/немесе"МҚҰ"i- credit.kz" ЖШС интернет ресурсында орналастырылған сақтандыру қағидаларымен таныстым.',
                    style: 'regular11',
                    alignment: 'justify',
                  },
                  {
                    text: '_____________________________________',
                  },
                  {
                    text: ' ',
                  },
                  {
                    text: `${props.code}`,
                    style: 'regular11',
                    alignment: 'justify',
                  },
                  {
                    text: ' ',
                  },
                  {
                    text: '(құжатқа екіфакторлық аутентификация арқылы қолтаңба қойылған)',
                    style: 'bold8',
                  },
                ]
              }
            ]
          ]
        }
      },
      {
        text: 'Поручение / Согласие на страхование',
        style: 'bold11',
        alignment: 'center'
      },
    ],
    defaultStyle: {
      font: 'TimesNewRoman'
    },
    styles: {
      bold11: {
        fontSize: 11,
        bold: true
      },
      regular11: {
        fontSize: 11,
      },
      bold8: {
        fontSize: 8,
        bold: true
      }
    }
  }
  return (
    <a onClick={() => pdfMake.createPdf(microcreditInsurance).open()}>
      2. Согласие на страхование микрокредита
    </a>
  )
}

export default MicrocreditInsuranceDocument