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
        image: 'data:image/jpeg;base64,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IFlWMqklVUFjtiAAWP5Ovc/1MCw9Pr59zgnc1x7nFe4F8/Ty1y15PjevJ/MDIuOo8BQBvetDW973/ffnf5gFx1HkKN/nQ3AvAgIFYFIFYCAgICAgICAgICAgICAgICAgICAgICBHkCQ4CAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR5AkOAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEeQJDgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHkCQ4CAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR5AkOAgIGj1jqZqQOK7bd2U18KlDOO9clXcIJUdurn3bW39NSOwDEBSG9AQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQI8gSHAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECPIEhwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAjyBIcBAQEBAQEBAQEBAQECgH/f4gVgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR5AkOAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgULf84FYCAgICAgICAgICAgR5AkOAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEeQJDgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHkCQ4CAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR5AkOBQmBWAgICAgUYQKwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQI8gSHAQEBAQEBAQEBAt5jevv76/od6/6H/hAugICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR5AkOAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEeQJDgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHkCQ4CAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR5AkOAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEeQJDgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHkCQ4CAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR5AkOAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEeQJDgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHkD36WHQ2NE/b31/fXj/239zAuB/p/8QKOx+w/560Pz/8AEDyXounqwyeoHqFvT3xDev8AKlw6MmrJrxuJLfP2X5FtVl/Iqg+XrrTVZsP+cKqA9YHO/b/n9oFxYQLoFCYFps86gFtBGxo/j+v4/wBxgWvkge515C/3LewH53/+/wAGBjOaAwU6BI3+5dg/Ya3s7+ogga+g+3iBl7vv4Ohrz4+r86G9+P6gf03Ax15qkkDewSD9J+3+7/8Av23sbDEuedttGADKqnYBs34JAYqRxIJ/9SgFeW9ALb+t1rxDNxZtaUg8/Ks3lf3DwjnyP9LfgwMi9RUlwoZih4kcSNtxVtBm4qfDDyDx3td7VgAuXOH4b2YnSk64kAjxvZ8+Au96OtwLzkjWwC3jfj7+deCdA/8AH21+RsMWF1EON8XXwCQ6MhG9jX1DyRrzrY8ggkMCQyvlqCBvyfYAEn7efHsPI8nwNjz5gXWXgAknwPf76/3Dzv8AoPeBVLQfY73AsOYmiSygLvkdjS699n7a++/aBkWwf7/x9/uPb+ujr86gWV5KkbDAjZXYII5KxUjY+4YFSPcMCPcQMm4Bm1AbgVgIFIFYCAgICAgICAgICAgICAgIEeQJDgICAgIFNQKwEC0IP/aBUrAsFI8HXkb0fcjfvon8/j+34gV7Q1r3Hj38+3t7+58e5gGq2NbP/Q/8oFeA/wC/vAtvoVgVYAqwKsCNhgRogj7gg61AxjEH23rztfdW3/fevv7a3vzuBkrpA8Af0H9B+P7QKpUB4AAH9BAoKB+Px7ePbevb7eT4/qfzAocca17De9Dx99/b7b+3sfaBV6AQR5GxrwSCPGvBHkf3GtQLDijRGyN78jwRv7jxrY+3iBSrE1/qY+SfJH3J/AA++v8AcD5OyQufH8HTMCSDsaPsR40wIAIGiAPYnWj5gXNTv8/b2JHsd/b/AJ/n7wKhf7f0gUSkA7+/9/8Av8wKLWfbf49/7+fv+PEAMYe5AJIALEDZCkkAkAeASSB7Ak/kwKiryD48bHt5148A/YeP9/iBRKzvyT99efsdHyPbx7D+n9zAtNB1+7R0QWAGyPOvfftvf439tEiBkNfnf31qBQ1eNEk7353o+fttda17A+/j3J8wL4FYFBAAQKwLV394BCdDfv8AfXkb/ofH/SBdAQECkBArAQI8gSHAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECPIEhwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAjyBIcBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQI8gSHAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECPIEhwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAjyBIcBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQI8gSHAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECPIEhwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAjyBIcBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQI8gSHAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECPIEhwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAjyBIcBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQI8gSHAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECPIEhwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAjyBIcBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQI8gSHAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECPIEhwEDn+oMu6vHvsx6RkXpTa9OObFpGTcqM1dJtYFaha4CdxgQnLkQQIG3jOxVSwCsVBZQeQVteQDobAPjehuBlgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEeQP/Z',
        width: 550
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
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
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: 'Правила предоставления микрокредитов',
        fontSize: 16,
        bold: true,
        alignment: 'center'
      },
      {
        text: ' '
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
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        text: ' '
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
      {
        text: '4) одноразовый пароль – пароль, действительный только для одного сеанса аутентификации субъектов получения услуг в электронной форме;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '5) личный кабинет – многофункциональный защищенный сервис, обеспечивающий взаимодействие между организацией, осуществляющей микрофинансовую деятельность, и клиентом в рамках предоставления микрокредитов электронным способом;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '6) клиент – физическое лицо, заключившее с организацией, осуществляющей микрофинансовую деятельность, договор о предоставлении микрокредита или подавшее (намеревающееся подать) заявление на получение микрокредита;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '7) идентификация клиента – процедура предоставления клиентом своих идентификационных данных с целью проведения дальнейшей его аутентификации;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '8) мобильное приложение – программный продукт, используемый на абонентском устройстве сотовой связи и предоставляющий доступ к личному кабинету посредством услуг сотовой связи или интернета;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '9) идентификатор – уникальный цифровой, буквенный или содержащий иные символы код, присваиваемый клиенту для входа в личный кабинет;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '10) задолженность – сумма долга по микрокредиту, включая суммы остатка основного долга, начисленное, но не уплаченное вознаграждение, неустойку (штрафы, пени), предусмотренные договором о предоставлении микрокредита, заключенным с заемщиком;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '11) токен – устройство, предназначенное для обеспечения информационной безопасности пользователя, а также для идентификации его владельца, безопасного удалённого доступа к информационным ресурсам;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '13) МФО – ТОО «Микрофинансовая организация «I-CREDIT.KZ»;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '14) сайт - интернет-страница МФО, находящаяся по адресу: www.i-credit.kz;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '15) договор о предоставлении микрокредита (далее – договор) – договор, в соответствии с которым МФО, предоставляет клиенту микрокредит;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '16) оферта/заявление/анкета (далее заявка) - предложение клиента, оформленное в установленной форме на сайте МФО о заключении договора в соответствии с условиями, изложенными в настоящих Правилах;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '17) акцепт - согласие МФО с условиями заявка клиента, выраженное в перечислении микрокредита на банковский счет (платежную карточку) клиента;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '18) счет - банковский счет (IBAN) и/или реквизиты платежной карточки клиента;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '19) вознаграждение – плата за предоставленный микрокредит, определенная в процентном выражении к основному долгу в соответствии с условиями договора и установленным МФО порядком погашения;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '20) годовая эффективная ставка вознаграждения - ставка вознаграждения в достоверном, годовом, эффективном, сопоставимом исчислении (реальная стоимость) по договору, рассчитываемая в соответствии с Правилами;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '21) кредитная история – совокупность информации о субъекте кредитной истории;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '22) кредитное бюро – организация, осуществляющая формирование кредитных историй, предоставление кредитных историй и оказание иных услуг;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '23) кредитное досье – документы и сведения, формируемые МФО на каждого клиента;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '24) кредитный скоринг – автоматизированная система оценки кредитоспособности (кредитных рисков) клиента, основанная на численных статистических методах;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '25) платежеспособность – наличие у клиента экономической возможности надлежащего исполнения обязательств перед МФО в срок и полностью;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '26) КДН - коэффициент долговой нагрузки. Определяется, как величина обязательств клиента по всем непогашенным микрокредитам, займам клиента в финансовых организациях, включая суммы просроченных платежей и среднего ежемесячного платежа по возникающей задолженности по отношению к его среднему ежемесячному доходу. МФО самостоятельно определяет долговую нагрузку клиента на основании собственной системы оценки кредитоспособности клиента;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '27) микрокредит - деньги, предоставляемые МФО клиенту;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '28) МРП – месячный расчетный показатель, установленный на соответствующий финансовый год законом о республиканском бюджете;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '29) SMS-код – уникальный конфиденциальный символьный код, который представляет собой аналог собственноручной подписи. Используется клиентом для подписания электронных документов в ходе дистанционного взаимодействия с МФО;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '30) Реструктуризация долга – изменение условий договора, влекущих изменение срока уплаты задолженности посредством заключения нового договора и выдачи нового графика погашения с учетом новых условий.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '31) Уполномоченный орган – государственный орган, осуществляющий государственное регулирование, контроль и надзор финансового рынка и финансовых организаций;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: ' ',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'Глава 2. Предоставление микрокредитов электронным способом',
        fontSize: 12,
        bold: true,
        alignment: 'center'
      },
      {
        text: ' ',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '3.МФО предоставляет клиентам микрокредиты электронным способом при прохождении клиентами процедур идентификации и многофакторной аутентификации для заключения договора и получения доступа к личному кабинету клиента на интернет-ресурсе МФО в порядке и на условиях, установленных Правилами, договором, внутренними документами МФО и законодательством Республики Казахстан.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '4. Обязательным условием для получения микрокредитов электронным способом является наличие у клиента мобильного телефона или иного устройства, позволяющего осуществлять прием и передачу SMS-сообщений, подключенного к сети оператора мобильной связи, и возможность доступа в интернет.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '5. Регистрация клиента в личном кабинете осуществляется одним из способов, указанных в пункте 6 Правил.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'После регистрации клиента в личном кабинете последующий допуск клиента к личному кабинету осуществляется путем генерации и/или ввода паролей или с использованием не менее одного из аутентификационных признаков (токенов, смарт-карт, одноразовых паролей).',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'Внесение изменений в данные об абонентском номере устройства сотовой связи клиента и реквизитов банковского счета (за исключением предоставления микрокредитов посредством терминалов), осуществляется в личном кабинете клиента с применением одного из способов, указанных в пункте 6 Правил.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'В личном кабинете не подлежат изменению данные об ИИН клиента.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '6. Для идентификации и аутентификации клиента в личном кабинете клиента используются один из следующих способов:',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '1) средства биометрической идентификации;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '2) двухфакторная аутентификация',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'Допускается использование одного или в совокупности нескольких из способов идентификации и аутентификации клиента.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'Двухфакторная аутентификация клиента осуществляется путем применения как минимум двух из следующих факторов:',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'подтверждение фактора знания: ввода клиентом самостоятельно заданного при регистрации пароля или кодового слова;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'подтверждение фактора владения: ввода клиентом одноразового пароля, автоматически сгенерированного токеном, зарегистрированным за клиентом, или подключения к устройству считывания клиентом смарт-карты, зарегистрированной за клиентом, или ввода клиентом одноразового пароля, автоматически сгенерированного и переданного на указанный клиентом абонентский номер устройства сотовой связи клиента, с проверкой принадлежности клиенту данного абонентского номера путем сверки индивидуального идентификационного номера клиента с индивидуальным идентификационным номером владельца абонентского номера в базе данных оператора мобильной связи или получения информации о принадлежности клиенту данного абонентского номера путем сверки индивидуального идентификационного номера клиента в базе номеров мобильных телефонов клиентов посредством веб-портала «электронного правительства»;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'подтверждение фактора неотъемлемости: сверки изображения лица клиента в режиме реального времени с его изображением на документе, удостоверяющем личность, при которой обеспечивается защита от использования вместо изображения в режиме реального времени лица клиента статичного изображения или видеозаписи лица клиента.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '7. Личный кабинет предоставляет клиенту возможность осуществления следующих, но, не ограничиваясь ими, действий:',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '1) подача заявления на получение микрокредита;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '2) просмотр сведений о МФО (юридический и (или) фактический адрес, контактные телефоны, факс, адрес электронной почты и другие сведения)',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '3) просмотр договора (договоров) клиента о предоставлении микрокредита (до и после заключения договора);',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '4) просмотр информации о ходе и результатах рассмотрения заявления клиента на получение микрокредита;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '5) просмотр информации о сумме текущей задолженности клиента по микрокредиту (микрокредитам), предстоящих и фактических платежах клиента, в том числе о сумме основного долга, вознаграждения, неустойки (штрафов, пени);',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '6) просмотр информации о способах погашения микрокредита клиентом;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '7) обмен письмами (сообщениями) между клиентом и организацией, осуществляющей микрофинансовую деятельность.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '8. До предоставления микрокредита электронным способом МФО: ',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '1)осуществляет надлежащую проверку клиента в соответствии с законодательством Республики Казахстан в сфере противодействия легализации (отмыванию) доходов, полученных преступным путем, и финансированию терроризма и внутренними документами;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '2) ознакамливает клиента с правилами предоставления микрокредитов;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '3) предоставляет клиенту полную и достоверную информацию о платежах и переводах, связанных с получением, обслуживанием и погашением (возвратом) микрокредита;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '4) предоставляет клиенту для ознакомления и выбора метода погашения микрокредита проекты графиков погашения, рассчитанных различными методами (методом дифференцированных платежей, аннуитетных платежей или методом, рассчитанным в соответствии с правилами предоставления микрокредитов);',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '5) информирует клиента о его правах и обязанностях, связанных с получением микрокредита.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '6) при наличии согласия клиента запрашивать / получать информацию от кредитных бюро, НАО «ГК «Правительство для граждан», других организаций, любых источников.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: ' ',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'Глава 3. Порядок подачи заявки на предоставление микрокредита и порядок его рассмотрения. Заключение Договора.',
        fontSize: 12,
        bold: true,
        alignment: 'justify'
      },
      {
        text: '8. Договор заключается путем акцепта МФО заявки клиента.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '9. МФО не обязана предоставлять микрокредит и нести обязательства, предусмотренные настоящими Правилами, до момента акцепта заявки (перечисления суммы микрокредита клиенту).',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '10. Заявка составляется клиентом в установленной МФО форме, размещенной на сайте МФО.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '11. При заполнении заявки клиент самостоятельно выбирает сумму и срок микрокредита, а также способ получения микрокредита, заполняя необходимые поля (реквизиты банковского счета (IBAN) и/или реквизиты платежной карточки, наименование банка).',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '12. В целях получения микрокредита клиент должен осуществить следующие действия:',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '1) зарегистрироваться на сайте;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '2) заполнить заявку, размещенную на сайте;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '3) по запросу МФО предоставить способами, установленными МФО, Согласия на предоставление – получение информации по нему в/из организации (–й) (кредитные бюро, НАО «ГК «Правительство для граждан», АО «Центр развития трудовых ресурсов»);',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '4) при необходимости предоставить иные дополнительные документы согласно требованиям внутренних нормативных документов МФО; ',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '5) предоставить МФО следующую информацию:',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'фамилию, имя, отчество (при наличии);',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'пол;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'дату и место рождения;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'ИИН;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'номер и срок действия документа удостоверяющего личность;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'семейное положение,',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'количество детей,',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'уровень образования;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'сведения о занятости;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'размер месячного дохода;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'дату следующей зарплаты;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'адрес фактического проживания;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'адрес регистрации;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'время проживания по текущему адресу;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'номер сотового телефона; номер домашнего телефона (при наличии)/домашнего телефона контактного лица;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'номер рабочего телефона (при наличии);',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'электронная почта.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '5) предоставить данные документа, удостоверяющего личность и/или предоставить копию документа, удостоверяющего его личность, фотографию клиента в анфас на светлом фоне, с нейтральным выражением лица и закрытым ртом;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '6) при необходимости, предоставить иные дополнительные документы, согласно требованиям внутренних нормативных документов МФО;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '13. При заполнении заявки клиент самостоятельно выбирает способ получения микрокредита, заполняя необходимые поля (номер банковского счета (IBAN) и наименование банка и/или реквизиты платежной карточки).',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '14. МФО не несет ответственности за ошибочно оформленные клиентом платежные документы, а также за приём и обработку ошибочной информации и/или недостоверных документов, а также контактных данных, таких как номер телефона, адрес электронной почты, предоставленных клиентом, в результате чего произошло несанкционированное, несвоевременное или ошибочное списание/зачисление денег клиенту, а также замена и/или задержка обработки расчетных документов, направлена информация, касающаяся тайны раскрытия микрокредита клиента.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '15. Перед направлением заявки на получение микрокредита клиент обязан ознакомиться с Правилами.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '16. Клиент должен подтвердить верность заполненных контактных и персональных данных, предоставления согласия на получение и предоставление кредитных отчетов/данных из/во все кредитные бюро РК, НАО «ГК «Правительство для граждан», АО «Центр развития трудовых ресурсов» и др. организации), а также на получение, обработку, хранение конфиденциальных данных, посредством активации в личном кабинете на сайте МФО специального кода (средства идентификации), направленного МФО клиенту на мобильный телефон, указанный клиентом при заполнении заявки (регистрации) на сайте.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '17. В случае, если клиент согласен получить микрокредит на указанных в Правилах условиях, он должен подтвердить свое согласие на подписание договора, отправив заявку в МФО с использованием механизма личного кабинета на сайте МФО.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '18. В том случае, если клиент отказывается от микрокредита после акцепта МФО его заявки и перечисления суммы микрокредита, клиент обязан в течение 1 (одного) рабочего дня с момента предоставления МФО микрокредита осуществить возврат суммы микрокредита на банковский счет МФО. В противном случае на Заемщика возлагаются все обязательства, предусмотренные договором по возврату микрокредита, уплате вознаграждения, штрафных санкций.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '19. Заявление на предоставление микрокредита рассматривается от 10 (десяти) минут до 2 (двух) часов.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '20. На основе полученных данных внутренним скорингом МФО определяется оценка кредитоспособности клиента и рассчитывается возможная сумма микрокредита.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '21. МФО может учитывать кредитный скоринг клиента, рассчитанный на основании данных, полученных из кредитных бюро, зарегистрированных на территории Республики Казахстан и осуществляющих свою деятельность на основании законодательства Республики Казахстан, а также на основании исторических данных МФО о клиентах.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '22. Информация по выданному микрокредиту передается в кредитные бюро, в том числе и с государственным участием, а также АО «Центр развития трудовых ресурсов» на условиях, определенных законодательством Республики Казахстан о кредитных бюро и формировании кредитных историй.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '23. МФО уведомляет клиента о принятом решении о предоставлении микрокредита или отказе от предоставления микрокредита любым доступным способом, в том числе посредством электронной почты, указанной клиентом в заявке и/или SMS - уведомления.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '24. На основании заявления на предоставление микрокредита и после проведения рассмотрения кредитного скоринга заявителя заключается договор.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '25. Договор формируется в соответствии с требованиями действующего законодательства Республики Казахстан. Подписание всех необходимых документов осуществляется клиентом дистанционно путем генерации и ввода паролей или с использованием не менее одного из аутентификационных признаков (токенов, смарт-карт, одноразовых паролей), который приравнивается надлежащим образом к подписанной письменной форме договора согласно положениям закона РК «Об электронном документе и электронной цифровой подписи» и Гражданского кодекса РК. Также к совершению сделки в письменной форме по настоящему договору приравнивается, обмен электронной оферты на электронный акцепт в виде дополнительного соглашения и приложения к нему.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '26. Все изменения или дополнения к договору оформляются соответствующими дополнительными соглашениями к нему, заключаемыми аналогично порядку заключения договора согласно настоящих Правил.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: ' ',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'Глава 4. Общие требования к микрокредитованию ТОО «МФО«I-CREDIT.KZ»',
        fontSize: 12,
        bold: true,
        alignment: 'justify'
      },
      {
        text: '§1. Общие требования к заемщикам',
        fontSize: 12,
        bold: true,
        alignment: 'justify'
      },
      {
        text: '27. Заемщиком МФО может быть:',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        fontSize: 12,
        alignment: 'justify',
        ul: [
          'физическое лицо - резидент Республики Казахстан, в возрасте от 21 года до 58 лет;',
          'имеющий стабильный источник дохода;',
          'обладающий право и дееспособностью, а равно всеми правами и полномочиями, необходимыми и достаточными для заключения договора;',
          'лицо, предельное значение КДН, которого не превышает 0,5.'
        ]
      },
      {
        text: ' ',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '§ 2. Условия предоставления микрокредита',
        fontSize: 12,
        bold: true,
        alignment: 'justify'
      },
      {
        text: '28. МФО предоставляет микрокредит:',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        ul: [
          'на условиях платности, срочности и возвратности в соответствии с п. 3-1 ст. 4 Закона РК «О микрофинансовой деятельности»;',
          'в национальной валюте Республики Казахстан – тенге;',
          'без обеспечения;',
          'путем перевода денег с банковского счета МФО на банковский счет (IBAN) либо платежную карточку клиента.'
        ],
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: ' ',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '§3. Размер суммы и срок предоставления микрокредитов',
        fontSize: 12,
        bold: true,
        alignment: 'justify'
      },
      {
        text: '29. Предельный размер суммы микрокредита:',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '1) минимальный размер суммы микрокредита – 10 000 (десять тысяч) тенге.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '2) максимальная сумма микрокредита - устанавливается индивидуально для каждого клиента, но не более пятидесятикратного размера МРП, установленного на соответствующий финансовый год законом о республиканском бюджете.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'Предельные сроки предоставления микрокредита составляют:',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '1) минимальный срок микрокредита – 15 (пятнадцать) календарных дней;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '2) максимальный срок микрокредита - 30 (тридцать) календарных дней.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: ' ',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '§4. Предельные величины ставок вознаграждения по представляемым микрокредитам.',
        fontSize: 12,
        bold: true,
        alignment: 'justify'
      },
      {
        text: '30. Предельное значение вознаграждения по договору не превышает размер, установленный Постановлением Правления Национального Банка РК от 26.11.2012 года № 209 «Об установлении предельного значения вознаграждения по договору о предоставлении микрокредита».',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: ' ',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '§5. Порядок выплаты вознаграждения по предоставленным микрокредитам.',
        fontSize: 12,
        bold: true,
        alignment: 'justify'
      },
      {
        text: '31. За пользование предоставленным микрокредитом клиент выплачивает вознаграждение в размере и в сроки, установленные договором.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '32. Вознаграждение за пользование микрокредитом начисляется на сумму микрокредита со дня получения и по дату возврата микрокредита включительно.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '32-1. Вознаграждение за пользование микрокредитом уплачивается единовременно вместе с возвратом суммы микрокредита (в конце срока микрокредита).',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '32-2. За пользование микрокредитом МФО предоставляет Заемщику льготный период продолжительностью 7 (семь) календарных дней, в течение которых не начисляет вознаграждение. При этом, в случае если, Заемщик не возвратил микрокредит в льготном периоде, МФО начисляет вознаграждение за каждый день льготного периода, предоставленного Заемщику.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '33. Если клиент не возвращает в срок микрокредит, вознаграждение выплачивается за весь период пользования микрокредитом.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '34. МФО устанавливает размер штрафов и пени за неисполнение обязательств по договору.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '35. Допускается как полное досрочное, так и частичное досрочное погашение микрокредита.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: ' ',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '§6. Правила расчета годовой эффективной ставки вознаграждения по предоставляемым микрокредитам',
        fontSize: 12,
        bold: true,
        alignment: 'justify'
      },
      {
        text: '36. Расчет годовой эффективной ставки вознаграждения производится:',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '1) на дату заключения договора;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '2) в случае внесения изменений и (или) дополнений в договор путем заключения дополнительного соглашения к договору, которые влекут изменение суммы (размера) денежных обязательств заемщика и (или) срока их уплаты.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '37. В случае внесения изменений и (или) дополнений в договор путем заключения дополнительного соглашения к договору, которые влекут изменение суммы (размера) денежных обязательств заемщика и (или) срока их уплаты, включая изменение ставки вознаграждения в случаях, предусмотренных договором, годовая эффективная ставка вознаграждения по договору займа рассчитывается МФО на основании остатка основного долга, оставшегося срока погашения займа на дату, с которой изменяются условия договора займа, комиссий и иных платежей, подлежащих оплате заемщиком, и указывается в дополнительном соглашении к договору.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'Годовая эффективная ставка вознаграждения по договору займа рассчитывается по следующей формуле:',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        image: 'data:image/png;base64,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',
        width: 250
      },
      {
        text: 'где:',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'n - порядковый номер последней выплаты заемщику;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'j - порядковый номер выплаты заемщику;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'Sj - сумма j-той выплаты заемщику;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'APR - годовая эффективная ставка вознаграждения;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'tj - период времени со дня предоставления займа до момента j-той выплаты заемщику (в днях);',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'm - порядковый номер последнего платежа заемщика;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'і - порядковый номер платежа заемщика;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'Pi - сумма і-того платежа заемщика;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'ti - период времени со дня предоставления займа до момента і-того платежа заемщика (в днях).',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'В расчет годовой эффективной ставки вознаграждения по договору включаются все платежи заемщика по основному долгу и вознаграждению, а также комиссии и иные платежи за весь период действия договора.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '38. В расчет годовой эффективной ставки вознаграждения по договору займа не включается неустойка (штраф, пеня) за нарушение обязательства по возврату суммы займа и (или) уплате вознаграждения по договору займа.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '39. Произведенные выплаты клиента МФО и выплаты МФО клиенту учитываются на даты их фактического осуществления, будущие - по графику выплат (при наличии).',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '40. Если при расчете годовой эффективной ставки вознаграждения полученное число имеет более одного десятичного знака, оно подлежит округлению до десятых долей следующим образом:',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '1) если сотая доля больше или равна 5, десятая доля увеличивается на 1, все следующие за ней знаки исключаются;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '2) если сотая доля меньше 5, десятая доля остается без изменений, все следующие за ней знаки исключаются.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: ' ',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '§6. Метод погашения микрокредита.',
        fontSize: 12,
        bold: true,
        alignment: 'justify'
      },
      {
        text: '41. Метод погашения микрокредита – единовременный платеж в конце срока микрокредита.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: ' ',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '§7. Основания для отказа в предоставлении микрокредита',
        fontSize: 12,
        bold: true,
        alignment: 'justify'
      },
      {
        text: '42. МФО принимает решение о выдачи или отказе в выдачи микрокредита не позднее 48 часов с даты получения МФО от клиента полной информации.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '43. Одобрение получают заявки с приемлемым риском невозврата микрокредита.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '44. МФО вправе не предоставлять клиенту микрокредит в следующих случаях:',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '1) наличия у МФО оснований полагать, что микрокредит не будет возвращен в срок, так как представленная клиентом информация/информация, ставшая известной МФО, свидетельствует о возможной неплатежеспособности клиента;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '2) несоответствие данных о клиенте условиям предоставления микрокредита, установленным настоящими Правилами;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '3) информация, представленная Клиентом, не является достоверной или является неполной;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '4) наличие у клиента непогашенной задолженности перед МФО за ранее предоставленный микрокредит (в том числе задолженности по микрокредитам, срок возврата которого не наступил на момент обращения клиента за повторным микрокредитом);',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '5) не представлены необходимые документы;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '6) кредитная история клиента содержит сведения о ненадлежащем выполнении клиентом своих обязательств перед третьими лицами;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '7) по основаниям, предусмотренным законодательством Республики Казахстан в сфере противодействия легализации (отмыванию) доходов, полученных преступным путем, и финансированию терроризма;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '8) значение КДН клиента превышает значение 0,5;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '9) в других случаях, установленных действующим законодательством Республики Казахстан.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: ' ',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '§8. Предоставление микрокредита',
        fontSize: 12,
        bold: true,
        alignment: 'justify'
      },
      {
        text: '45. В случае принятия МФО положительного решения о выдаче клиенту микрокредита, МФО предоставляет микрокредит заемщику в виде единовременного перечисления суммы микрокредита, указанной в заявке, на счёт клиента.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '46. Перечисление денег осуществляется МФО в срок не позднее 3 (трех) рабочих дней со дня принятия МФО положительного решения о предоставлении микрокредита.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '47. Моментом предоставления денег клиенту признается момент перечисления суммы микрокредита с банковского счета МФО на банковский/карточный счет Заемщика.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '48. Перечисление микрокредита является акцептом заявки, а дата перечисления суммы микрокредита - датой заключения договора.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: ' ',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '§9. Формирование кредитного досье',
        fontSize: 12,
        bold: true,
        alignment: 'justify'
      },
      {
        text: '49. Кредитное досье открывается в день подписания клиентом первого договора.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '50. Кредитное досье МФО формируется в электронном виде.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '51. Кредитное досье должно содержать следующие документы:',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '1) заявка на предоставление микрокредита;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '2) информация о документе, удостоверяющем личность клиента, содержащую фамилию, имя, отчество (при его наличии), индивидуальный идентификационный номер, дату рождения, номер документа, орган выдачи, дату выдачи и срок действия документа);',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '3) договор;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '4) дополнительные соглашения к договору (при наличии);',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '5) график погашения микрокредита (при наличии);',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '6) расчеты уточненного значения годовой эффективной ставки вознаграждения (при наличии);',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '7) переписка между МФО и заемщиком;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '8) документы (или их копии), подтверждающие полное или частичное погашение задолженности по договору;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '9) информацию, подтверждающую получение согласия субъекта кредитной истории на предоставление информации о нем в кредитные бюро;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '10) информацию, подтверждающую получение согласия субъекта кредитной истории на выдачу кредитного отчета получателю кредитного отчета;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '52. По запросу клиента МФО, предоставляет ему подтверждение об отправке и (или) получении электронных документов, подтверждающих предоставление (получение) микрокредита электронным способом, в порядке и сроки, предусмотренные договором о предоставлении микрокредита.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '53. МФО обеспечивает безопасное хранение электронных сообщений и иных документов, предоставленных заемщику и полученных от него, с соблюдением их целостности и конфиденциальности в течение не менее 5 (пяти) лет после прекращения обязательств сторон по договору о предоставлении микрокредита.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '54. Хранение электронных сообщений и иных документов осуществляется в том формате, в котором они были сформированы, отправлены клиенту или получены от него.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '55. В случае обнаружения несанкционированного доступа к информации, составляющей тайну предоставления микрокредита, ее несанкционированного изменения, осуществления несанкционированных действий со стороны третьих лиц, МФО, в течение двух рабочих дней принимает меры для устранения причин и последствий таких действий, а также в течение одного рабочего дня информирует об этом клиента и уполномоченный орган.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'На основании внесенного представления о принятии мер по устранению обстоятельств, способствовавших совершению уголовного правонарушения, представленного правоохранительными органами в соответствии со статьей 200 Уголовно-процессуального кодекса Республики Казахстан, не позднее 3 (трех) календарных дней, организация, осуществляющая микрофинансовую деятельность:',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'приостанавливает начисление вознаграждения по такому микрокредиту;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'прекращает претензионно-исковую работу по клиенту;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'продолжает взаимодействие с правоохранительными органами в целях выявления лиц, непосредственно виновных в оформлении микрокредита мошенническим способом на третьих лиц.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'На основании вступившего в законную силу решения суда, подтверждающего факт неполучения клиентом микрокредита, организация, осуществляющая микрофинансовую деятельность:',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'принимает решение о списании задолженности клиента по данному микрокредиту;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'вносит корректировки в кредитную историю клиента.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: ' ',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '§10. Права и обязанности Клиента, связанных с получением микрокредита',
        fontSize: 12,
        bold: true,
        alignment: 'justify'
      },
      {
        text: '56. Клиент имеет право:',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '1) ознакомиться с правилами предоставления микрокредитов, тарифами микрофинансовой организации по предоставлению микрокредитов;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '2) распоряжаться полученным микрокредитом в порядке и на условиях, установленных договором;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '3) защищать свои права в порядке, установленном законами Республики Казахстан;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '4) досрочно полностью или частично возвратить микрокредит;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '5) осуществлять иные права, установленные настоящим Законом, иными законами Республики Казахстан и договором о предоставлении микрокредита.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '57. Клиент обязан:',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '1) возвратить полученный микрокредит и выплатить вознаграждение по нему в сроки и порядке, которые установлены договором;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '2) представлять документы и сведения, запрашиваемые МФО;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '3) выполнять иные требования, установленные Законом, иным законодательством Республики Казахстан и договором.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: ' ',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '§11. Права и обязанности МФО',
        fontSize: 12,
        bold: true,
        alignment: 'justify'
      },
      {
        text: '58. МФО имеет право:',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '1) запрашивать у клиента документы и сведения, необходимые для заключения договора о предоставлении микрокредита и исполнения обязательств по нему, определенных Правилами;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '2) уступить право (требование) по договору лицу, указанному в пунктах 4 и 5 статьи 9-1 Закона;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '3) требовать от клиента надлежащего исполнения всех обязанностей, принятых в соответствии с заключенным договором;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '4) запрашивать информацию о клиенте в целях установления его платежеспособности из любых источников;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '5) осуществлять иные права, установленные настоящим Законом, иными законами Республики Казахстан и договором.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '59. МФО обязана:',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '1) в случае изменения места нахождения либо изменения наименования письменно известить об этом уполномоченный орган, а также заемщиков (заявителей) путем опубликования соответствующей информации в двух печатных изданиях на казахском и русском языках по месту нахождения микрофинансовой организации, а также по юридическому адресу заемщика (заявителя) - физического лица и по месту нахождения заемщика (заявителя) - юридического лица либо путем письменного уведомления каждого заемщика (заявителя) в срок не позднее тридцати календарных дней с даты таких изменений;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '2) разместить копию правил предоставления микрокредитов в месте, доступном для обозрения и ознакомления клиентом, в том числе на интернет-ресурсе;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '3) предоставлять клиенту полную и достоверную информацию о платежах, связанных с получением, обслуживанием и погашением (возвратом) микрокредита;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '4) отказывать в предоставлении микрокредита в случаях, предусмотренных Законом Республики Казахстан «О противодействии легализации (отмыванию) доходов, полученных преступным путем, и финансированию терроризма»;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '5) соблюдать иные требования, установленные настоящим Законом и иным законодательством Республики Казахстан.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '60. МФО не вправе:',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '1) в одностороннем порядке изменять ставки вознаграждения (за исключением случаев их снижения) и (или) способ и метод погашения микрокредита;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '2) предоставлять микрокредит физическим лицам, имеющим просроченную задолженность по беззалоговым банковским займам и микрокредитам свыше шестидесяти календарных дней, в размере, равном или превышающем пятикратный размер месячного расчетного показателя, установленного на соответствующий финансовый год законом о республиканском бюджете;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '3) устанавливать и взимать с заемщика (заявителя) любые платежи, за исключением вознаграждения и неустойки (штрафа, пени) по микрокредиту;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '4) требовать от заемщика, являющегося физическим лицом, досрочно полностью или частично возвратившего микрофинансовой организации сумму микрокредита, неустойку (штраф, пеню) и другие платежи за досрочный возврат микрокредита;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '5) начислять и требовать неустойку (штрафы, пени) по истечении девяноста последовательных календарных дней просрочки исполнения обязательства по погашению любого из платежей по суммам основного долга и (или) вознаграждения по микрокредиту заемщика - физического лица, не связанному с осуществлением предпринимательской деятельности.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: ' ',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '§12. Работа с просроченной задолженностью',
        fontSize: 12,
        bold: true,
        alignment: 'justify'
      },
      {
        text: '61. За нарушение обязательства по возврату суммы микрокредита и (или) уплате вознаграждения по Договору, МФО вправе требовать от Заемщика уплаты суммы неустойки (пени) в размере 0,5% от суммы неисполненного обязательства за каждый день просрочки.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '62. При наличии у Заемщика просроченных платежей по Микрокредиту, МФО осуществляет работу по возврату задолженности, путем:',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '1) SMS–уведомлений;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '2) оповещений на электронную почту;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '3) размещения уведомления в личном кабинете;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '4) начисления неустойки (штрафов, пени);',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '5) информационных телефонных звонков;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '6) передачи данных о невозврате микрокредита в кредитные бюро;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '7) передачи задолженности на досудебное взыскание и урегулирование коллекторскому агентству;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '8) взыскания задолженности посредством совершения исполнительной надписи;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '9) взыскания задолженности в судебном порядке;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '10) уступки прав требований по микрокредиту третьим лицам;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '11) иных методов, не запрещенных законодательством Республики Казахстан.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '65. МФО вправе производить уступку права (требования) следующим лицам:',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '1) банку второго уровня;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '2) коллекторскому агентству;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '3) микрофинансовой организации;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '4) специальной финансовой компании, созданной в соответствии с законодательством Республики Казахстан о проектном финансировании и секьюритизации, при сделке секьюритизации;',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '5) юридическому лицу - залогодержателю прав требования по договору о предоставлении микрокредита при выпуске микрофинансовой организацией обеспеченных облигаций или получении займов.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '63. Условия и порядок урегулирования задолженности и меры, применяемые в отношении неплатежеспособного клиента, устанавливаются Законом.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: ' ',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '§12. Реструктуризация микрокредита',
        fontSize: 12,
        bold: true,
        alignment: 'justify'
      },
      {
        text: '64. В случае выхода заемщика на просрочку, а также до выхода на просрочку МФО вправе предоставить Заемщику услугу продления (пролонгации) срока микрокредита на тот же срок, на который первоначально заключен Договор.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '64.1. Реструктуризация микрокредита возможна на основании заявления Заемщика, подтверждающего необходимость реструктуризации микрокредита.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '65. Условия реструктуризации:',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '1) Заемщик подает заявление о реструктуризации микрокредита с применением личного кабинета.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '1-1) При этом, Заемщик:',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        ul: [
          'соглашается оставить в Договоре о реструктуризации ставку вознаграждения в размере, предусмотренном предыдущим Договором;',
          'самостоятельно распределяет денежные средства, оплаченные в рамках Договора:',
          {
            ol: [
              'на оплату имеющейся неустойки (штраф, пеня), при её наличии;',
              'на погашение вознаграждения за истекший использованный период;',
              'на оплату суммы за добровольное страхование жизни.'
            ]
          }
        ],
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: 'Заполняя заявление о реструктуризации микрокредита Заемщик, тем самым дает заказ на одобрение реструктуризации долга, которая является согласием Заемщика на заключение Договора о реструктуризации долга.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '66. Срок рассмотрения заявления о реструктуризации микрокредита 24 часа с момента получения МФО от Заемщика заявления о реструктуризации микрокредита.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '67. По итогам рассмотрения заявления о реструктуризации МФО принимает решение о реструктуризации по договору либо об отказе в удовлетворении заявления:',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        ul: [
          'В случае одобрения (акцепта) реструктуризации МФО изменяется срок погашения микрокредита, автоматически формируется Договор о реструктуризации долга и выдается новый график погашения микрокредита с учетом новых условий.',
          'Если Заемщик не своевременно перечислил необходимую сумму для реструктуризации, то МФО вправе отказать в продлении срока микрокредита. В случае отказа МФО по любым основаниям, Заемщик обязан оплатить имеющуюся задолженность в полном объеме.'
        ],
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '68. В случае, если сумма денежных средств будет превышать платежи в пп.1-1 Правил, сумма остается до востребования, а при необходимости производится безакцептное списание в счет погашения образовавшейся задолженности Заемщика, при ее наличии.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: ' ',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '§13. Иные положения',
        fontSize: 12,
        bold: true,
        alignment: 'justify'
      },
      {
        text: '69. Настоящие Правила могут изменяться и дополняться с учетом изменений в структуре ссудного портфеля, финансовых результатов деятельности МФО, изменения действующего законодательства Республики Казахстан, а также с учетом изменений в экономической ситуации и в конъюнктуре финансовых рынков Республики Казахстан.',
        fontSize: 12,
        alignment: 'justify'
      },
      {
        text: '70. Иное, непредусмотренное настоящими Правилами, регулируется в соответствии с требованиями законодательства Республики Казахстан.',
        fontSize: 12,
        alignment: 'justify'
      },
    ],
    defaultStyle: {
      font: 'TimesNewRoman'
    },
  }
  return (
    <div className="footerCol">
      <a onClick={() => pdfMake.createPdf(RulesMicrocredit).open()} className="extra-info">
        <img src={require("../../img/svg/Оферта.svg")} />
        <a>
          <h5>
            Правила<br />предоставления микрокредитов
          </h5>
        </a>
      </a>
    </div>
    // <li>
      // <a onClick={() => pdfMake.createPdf(RulesMicrocredit).open()}>
      //   4. Заявление-Оферта на реструктуризацию долга
      // </a>
    // </li>
  )
}



export default RulesMicrocreditDocument