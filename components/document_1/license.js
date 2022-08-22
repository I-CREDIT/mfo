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

const LicenseDocument = () => {
  const license = {
    content: [
      {
        width: 500
      }
    ]
  }
  return (
    <div className="footerCol">
      <a onClick={() => pdfMake.createPdf(license).open()} className="extra-info">
        <img src={require("../../img/svg/Оферта.svg")} />
        <a>
          <h5>
            Лицензия на осуществление микрофинансовой деятельности
          </h5>
        </a>
      </a>
    </div>
  )
}

export default LicenseDocument