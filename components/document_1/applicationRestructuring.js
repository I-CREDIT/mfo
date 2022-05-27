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

const ApplicationRestructuringDocument = (props) => {
  let ApplicationRestructuring = {
    content: [
      {
        stack: [
          {
            text: `от ${props.fio}`,
            fontSize: 12,
            alignment: 'right'
          },
          {
            text: `ИИН ${props.iin}`,
            fontSize: 12,
            alignment: 'right'
          },
          {
            text: `уд/л. №${props.cardNumber}`,
            fontSize: 12,
            alignment: 'right'
          },
          {
            text: `тел +${props.phone}`,
            fontSize: 12,
            alignment: 'right'
          }
        ]
      },
      {
        text: ' ',
      },
      {
        text: ' ',
      },
      {
        text: ' ',
      },
      {
        text: 'Заявление-Оферта на реструктуризацию долга',
        fontSize: 12,
        alignment: 'center'
      },
      {
        text: ' ',
      },
      {
        text: `Прошу реструктуризовать мою задолженность по договору (далее - договор) путем заключения договора реструктуризации долга (далее - вновь заключаемый договор) со ставкой вознаграждения в размере ${props.period}%, на срок ${props.period} дней, для чего оплачиваю сумму в размере ${props.penalty ? props.moneyForRestructuring + (+props.penalty) : props.moneyForRestructuring} тенге, которую прошу распределить на:`,
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: ' ',
      },
      {
        fontSize: 12,
        alignment: 'justify',
        ul: [
          `погашение неустойки (при её наличии) по договору в размере ${props.penalty ? props.penalty : 0} тенге;`,
          `погашение вознаграждения в размере ${props.reward} тенге по договору;`,
          `оплату суммы страховой премии в размере ${props.reward} тенге, по вновь заключаемому договору, которую прошу перечислить страховой организации на основании договора добровольного страхования жизни;`
        ]
      },
      {
        text: ' ',
      },
      {
        text: 'В случае, если после распределения, останется сумма, то прошу учесть ее в конце срока погашения по вновь заключаемому договору.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: ' ',
      },
      {
        text: 'Остаток суммы прошу считать как основной долг по вновь заключаемому договору.',
        fontSize: 12,
        alignment: 'justify'
      }
    ],
    defaultStyle: {
      font: 'TimesNewRoman'
    },
  }
  return (
    <a onClick={() => pdfMake.createPdf(ApplicationRestructuring).open()}>
      4. Заявление-Оферта на реструктуризацию долга
    </a>
  )
}



export default ApplicationRestructuringDocument