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

const RulesMicrocreditDocument = (props) => {
  let RulesMicrocredit = {
    content: [
      {
        text: 'Утверждены',
        fontSize: 12,
        alignment: 'right'
      },
      {
        text: 'единственным участником',
        fontSize: 12,
        alignment: 'right'
      },
      {
        text: 'ТОО «МФО «I-CREDIT.KZ»',
        fontSize: 12,
        alignment: 'right'
      },
      {
        text: ''
      },
      {
        text: ''
      },
      {
        text: ''
      },
      {
        text: ''
      },
      {
        text: 'Правила предоставления микрокредитов',
        fontSize: 16,
        bold: true,
        alignment: 'center'
      },
      {
        text: ''
      },
      {
        text: 'ТОО «МИКРОФИНАНСОВАЯ ОРГАНИЗАЦИЯ',
        fontSize: 16,
        bold: true,
        alignment: 'center',
        color: '#1f4e79'
      },
      {
        text: '«I-CREDIT.KZ»',
        fontSize: 16,
        bold: true,
        alignment: 'center',
        color: '#1f4e79'
      },
      {
        text: ''
      },
      {
        text: ''
      },
      {
        text: ''
      },
      {
        text: ''
      },
      {
        text: ''
      },
      {
        text: ''
      },
      {
        text: 'Глава 1. Общие положения',
        fontSize: 12,
        bold: true,
        alignment: 'center'
      },
      {
        text: '1. Настоящие Правила предоставления микрокредитов электронным способом (далее - Правила) разработаны в соответствии с Гражданским кодексом Республики Казахстан (ГК РК), Законом Республики Казахстан «О микрофинансовой деятельности» (Закон), нормативными правовыми актами Республики Казахстан и определяют порядок предоставления микрокредитов электронным способом.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '2. В настоящих Правилах используются понятия, предусмотренные Законом, а также следующие понятия:',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '1) аутентификация – процедура проверки подлинности клиента, электронных сообщений и иных документов, в том числе электронных копий документов, необходимых для предоставления микрокредита, а также определяющих клиента и содержание его волеизъявления;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '2) двухфакторная аутентификация – аутентификация, осуществляемая с применением двух из трех различных факторов: знания, владения, неотъемлемости;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '3) биометрическая идентификация – комплекс мер, идентифицирующих личность на основании физиологических и биологических неизменных признаков;',
        fontSize: 12,
        alignment: 'justify'
      },
    ],
    defaultStyle: {
      font: 'TimesNewRoman'
    },
  }
  return (
    <div className="col-md-4  footerCol">
      <div className="extra-info">
        <img src={require("../../img/svg/Оферта.svg")} />
        <a onClick={() => pdfMake.createPdf(RulesMicrocredit).open()}>
          <h5>
            Правила<br />предоставления займов
          </h5>
        </a>
      </div>
    </div>
    // <li>
      // <a onClick={() => pdfMake.createPdf(RulesMicrocredit).open()}>
      //   4. Заявление-Оферта на реструктуризацию долга
      // </a>
    // </li>
  )
}



export default RulesMicrocreditDocument