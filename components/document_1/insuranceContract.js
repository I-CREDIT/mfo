import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

// Перевод для функционального компонента
import { useTranslation } from "react-i18next";

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

function intToWords(int, names) {
	var result = [];
	if (typeof int === 'number') {
		int = int.toString();
	} else if (typeof int !== 'string') {
		int = '';
	}
	if (!(names instanceof Array) || (typeof names[0] !== 'string') || (typeof names[1] !== 'string') || (typeof names[2] !== 'string')) {
		names = null;
	}
	if (int.length && !/[^0-9]/.test(int)) {
		var selectName = function (number, names) {
			return names[((parseInt(number) % 100 > 4) && (parseInt(number) % 100 < 20)) ? 2 : [2, 0, 1, 1, 1, 2][Math.min(parseInt(number) % 10, 5)]];
		};
		var name = null;
		var zero = 'ноль';
		if (int === '0') {
			result.push(zero);
		} else {
			var from0To2 = [zero, 'одна', 'две'];
			var from0To19 = [
				zero, 'один', 'два', 'три', 'четыре',
				'пять', 'шесть', 'семь', 'восемь', 'девять',
				'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать',
				'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'
			];
			var tens = [
				'десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят',
				'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'
			];
			var hundreds = [
				'сто', 'двести', 'триста', 'четыреста', 'пятьсот',
				'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'
			];
			var thousands = [
				['тысяча', 'тысячи', 'тысяч'],
				['миллион', 'миллиона', 'миллионов'],
				['миллиард', 'миллиарда', 'миллиардов'],
				['триллион', 'триллиона', 'триллионов'],
				['квадриллион', 'квадриллиона', 'квадриллионов'],
				['квинтиллион', 'квинтиллиона', 'квинтиллионов'],
				['секстиллион', 'секстиллиона', 'секстиллионов'],
				['септиллион', 'септиллиона', 'септиллионов'],
				['октиллион', 'октиллиона', 'октиллионов'],
				['нониллион', 'нониллиона', 'нониллионов'],
				['дециллион', 'дециллиона', 'дециллионов']
			];
			var unknown = '{неизвестно}';
			var numberParts = int.replace(/(?=(\d{3})+(?!\d))/g, ' ').split(' ');
			var i = numberParts.length - 1;
			for (var j in numberParts) {
				var numberPart = parseInt(numberParts[j]);
				if (numberPart) {
					var numberPartResult = [];
					var hundred = Math.floor(numberPart / 100);
					if (hundred) {
						numberPartResult.push(hundreds[hundred - 1]);
						numberPart -= hundred * 100;
					}
					if (numberPart > 19) {
						var ten = Math.floor(numberPart / 10);
						numberPartResult.push(tens[ten - 1]);
						numberPart -= ten * 10;
					}
					if (numberPart) {
						numberPartResult.push(((i === 1) && ([1, 2].indexOf(numberPart) !== -1)) ? from0To2[numberPart] : from0To19[numberPart]);
					}
					if (thousands[i - 1] !== undefined) {
						numberPartResult.push(selectName(numberParts[j], thousands[i - 1]));
					} else if (i !== 0) {
						numberPartResult.push(unknown);
					} else if (names) {
						name = selectName(numberParts[j], names);
					}
					result.push(numberPartResult.join(' '));
				}
				i--;
			}
			if (!result.length) {
				result.push(zero);
			}
		}
		if (!name && names) {
			name = selectName(0, names);
		}
		if (name) {
			result.push(name);
		}
	}
	return result.join(' ');
}

const InsuranceContractDocument = (props) => {
  // Translation
  const { t } = useTranslation()

  let insuranceContract = {
    content: [
      {
        text: 'ҚАРЫЗ АЛУШЫНЫҢ ӨМІРІН ЕРІКТІ ОНЛАЙН ТҮРДЕ САҚТАНДЫРУ ПОЛИСЫ/ ПОЛИС',
        bold: true
      },
      {
        text: 'ДОБРОВОЛЬНОГО ОНЛАЙН СТРАХОВАНИЯ ЖИЗНИ',
        bold: true
      },
      {
        text: ' '
      },
      {
        table: {
          width: [20, '*', '*'],
          body: [
            [
              {
                text: 1,
              },
              {
                text: 'Сақтандырушы/Страховщик'
              },
              {
                text: 'Freedom Finance Life» Өмірді сақтандыру компаниясы» Акционерлік қоғамы/ Акционерное общество «Компания по страхованию жизни «Freedom Finance Life» Қазақстан Республикасы, Алматы қ., Әл- Фараби даң., 77/7 үй , 7а т.е.б./ Республика Казахстан, г. Алматы, пр. Аль-Фараби, дом 77/7, н.п.7а БСН/ БИН: 140940003807, ЖСК/ ИИК: KZ916010131000219080, «Қазақстан Халық Банкі» АҚ- да/ в АО «Народный Банк Казахстана» БСК/ БИК HSBKKZKX, Сайт: www.ffin.life',
                alignment: 'justify'
              }
            ],
            [
              {
                text: 2,
              },
              {
                text: 'Сақтанушы (Сақтандырылған тұлға) /Страхователь (Застрахованный)'
              },
              {
                stack: [
                  {
                    text: `${props.fio}`
                  },
                  {
                    text: `ЖСН/ИИН ${props.iin}`
                  },
                  {
                    text: `${props.address}`
                  },
                  {
                    text: `Телефон +${props.phone}`
                  },
                  {
                    text: 'Резиденттік белгісі/Признак резидентства: Резидент'
                  }
                ]
              }
            ],
            [
              {
                text: '3'
              },
              {
                text: 'Сақтандыру агенті / Страховой агент'
              },
              {
                text: '«МҚҰ «i- credit.kz» ЖШС/ ТОО «МФО «i-credit.kz» БСН/БИН 070440003902'
              }
            ],
            [
              {
                text: '4'
              },
              {
                text: 'Сақтандыру агентіне тиесілі комиссиялық сыйақы /Комиссионное вознаграждение, причитающееся страховому агенту, причитающееся страховому агенту'
              },
              {
                text: 'Отсутствует/ Жоқ'
              }
            ],
            [
              {
                text: '5'
              },
              {
                text: 'Сақтандыру жағдайы /Страховой случай'
              },
              {
                stack: [
                  {
                    text: '1)Сақтандыру шартында қарастырылған жағдайлардан басқа, сақтандыру қорғанысы әрекет ететін кезеңде орын алған Сақтандырылушының өлімге ұшырауы. Қайтыс болғаны туралы куәлікте көрсетілген қайтыс болған күні осы тармақта көзделген сақтандыру жағдайының күні болып табылады.',
                    alignment: 'justify'
                  },
                  {
                    text: '2) Сақтандыру ережелерде қарастырылған жағдайлардан басқа, сақтандыру қорғанысы әрекет ететін кезеңде орын алған жазатайым оқиға нәтижесінде Сақтандырылушыда 1 немесе 2 топтағы мүгедектіктің анықталуы болып табылады.',
                    alignment: 'justify'
                  },
                  {
                    text: '1) смерть Застрахованного в результате несчастного случая, наступившая в период действия страховой защиты. При этом Страховщик несет обязательства по осуществлению страховой выплаты, если несчастный случай и смерть в результате данного несчастного случая произошли в период действия страховой защиты;',
                    alignment: 'justify'
                  },
                  {
                    text: '2) установление Застрахованному инвалидности 1 или 2 группы в результате несчастного случая, произошедшего в период действия страховой защиты',
                    alignment: 'justify'
                  },
                ]
              }
            ],
            [
              {
                text: '6'
              },
              {
                text: 'Пайда алушы/Выгодоприобретатель'
              },
              {
                text: 'Сақтандырылған тұлға, Сақтандырылған тұлға қаза болған жағдайда оның заңды мұрагерлері /Застрахованный, либо в случае смерти Застрахованного - его законные наследники.',
                alignment: 'justify'
              }
            ],
            [
              {
                text: '7'
              },
              {
                text: 'Сақтандыру сомасы/Страховая сумма'
              },
              {
                text: `${props.insuranceAmount} (${intToWords(props.insuranceAmount)}) тенге`,
              }
            ],
            [
              {
                text: '8'
              },
              {
                text: 'Сақтандыру сыйлық ақысы/Страховая премия'
              },
              {
                text: `${props.reward} (${intToWords(props.reward)}) тенге`,
              }
            ],
            [
              {
                text: '9'
              },
              {
                text: 'Сақтандыру төлемі/ Страховая выплата'
              },
              {
                text: `${props.reward} (${intToWords(props.reward)}) тенге`,
              }
            ],
            [
              {
                text: '10'
              },
              {
                text: 'Сақтандыру төлемін жүзеге асырудың тәртібі мен мерзімдері /Порядок и сроки осуществления страховой выплаты'
              },
              {
                text: 'Жазатайым оқиғадан ерікті онлайн сақтандыру қағидасының 12-тарауына сәйкес/ согласно главе 12 Правил добровольного онлайн страхования от несчастного случая',
              }
            ],
            [
              {
                text: '11'
              },
              {
                text: 'Сақтанушыны немесе сақтандырылушыны сақтандыру төлемін жүзеге асыру үшін қажетті жетіспейтін құжаттар туралы хабардар ету мерзімдері/ Сроки уведомления страхователя или застрахованного о недостающих документах, необходимых для осуществления страховой выплаты'
              },
              {
                text: '3 жумыс кун/ 3 рабочих дня',
                alignment: 'justify'
              }
            ],
            [
              {
                text: '12'
              },
              {
                text: 'Жасасу күні/Дата заключения'
              },
              {
                text: `${props.givenDate} ж/г`,
                alignment: 'justify'
              }
            ],
            [
              {
                text: '13'
              },
              {
                text: 'Сақтандыру полисінің қолданылу мерзімі /Срок действия страхового полиса'
              },
              {
                text: `${props.period} күнтізбелік күн /календарных дней`,
                alignment: 'justify'
              }
            ],
            [
              {
                text: '14'
              },
              {
                text: 'Сақтандыру полисінің қолданылу аумағы /Территория действия страхового полиса'
              },
              {
                text: `Қазақстан Республикасының аумағында да, одан тыс жерлерде де қолданылады/действует как на территории Республики Казахстан, так и за ее пределами`,
                alignment: 'justify'
              }
            ]
          ]
        }
      },
      {
        text: ' '
      },
      {
        text: ' '
      },
      {
        stack: [
          {
            text: `${props.contractNumber}`,
            
            bold: true,
            alignment: 'center'
          },
          {
            text: 'Қарыз алушының өмірін ерікті онлайн түрде сақтандыруға өтініш/ Заявление на добровольное онлайн страхование жизни',
            
            bold: true,
            alignment: 'center'
          },
        ]
      },
      {
        table: {
          widths: ['*', '*'],
          body: [
            [
              {
                colSpan: 2,
                stack: [
                  {
                    text: [
                      {
                        text: 'Сақтандырушы ', 
                        bold: true
                      }, 
                      '– «Freedom Finance Life» Өмірді сақтандыру компаниясы» АҚ»/Страховщик – АО «Компания по страхованию жизни «Freedom Finance Life»'],
                     
                  },
                  {
                    text: 'Сақтандыру агенті/Страховой агент:',
                    
                    bold: true
                  },
                  {
                    text: 'Атауы/Наименование: «i-credit.kz» «Микроқаржы ұйымы» ЖШС/ТОО «Микрофинансовая организация «i-credit.kz» ',
                    
                  },
                  {
                    text: 'БСН/БИН 070440003902',
                    
                  },
                  {
                    text: 'Сақтанушы Сақтандырылушы болып табылады/Страхователь является Застрахованным ',
                    
                  },
                  {
                    text: 'Пайдаалушы/Выгодоприобретатель',
                    
                  },
                  {
                    text: 'Сақтандырылған тұлға, Сақтандырылған тұлға қаза болған жағдайда оның заңды мұрагерлері /Застрахованный, либо в случае смерти Застрахованного - его законные наследники.',
                    
                  },
                  {
                    text: 'Сақтанушы(Сақтандырылған тұлға)/Страхователь(Застрахованный):',
                    
                    bold: true
                  },
                  {
                    text: [
                      {
                        text: 'Т.А.Ә/Ф.И.О.: ', 
                        bold: true
                      }, 
                      `${props.fio}`
                    ],
                     
                  },
                  {
                    text: 'Сақтанушының заңды мекенжайы және (немесе) тұрғылықты жері/Юридический адрес и (или) место жительства Страхователя:',
                    
                    bold: true
                  },
                  {
                    text: `${props.address}`,
                    
                  },
                  {
                    text: [
                      {
                        text: 'ЖСН/ИИН: ', 
                        bold: true
                      }, 
                      `${props.iin}`
                    ],
                     
                  },
                  {
                    text: [
                      {
                        text: 'Төлқұжат нөмірі / номер удостоверения личности ', 
                        bold: true
                      }, 
                      `${props.cardNumber} ${props.cardGiven} берілген/выдано от ${props.startCard}`
                    ],
                     
                  },
                  {
                    text: [
                      {
                        text: 'Резиденттік белгісі/ Признак резидентства: ', 
                        bold: true
                      }, 
                      'резидент'],
                     
                  },
                  {
                    text: [
                      {
                        text: 'Электрондық пошта мекенжайы (болса)/Адрес электронной почты (при наличии): ', 
                        bold: true
                      }, 
                      `${props.email}`
                    ],
                     
                  },
                  {
                    text: `Абоненттік нөмір/Абонентский номер: +${props.phone}`,
                    
                  },
                ]
              }
            ],
            [
              {
                colSpan:2,
                stack: [
                  {
                    text: [
                      {
                        text: 'Бенефициарлық иесі /Бенефициарный собственник: ', 
                        bold: true
                      }, 
                      'Пайдаалушы/Выгодоприобретатель'],
                     
                  },
                  {
                    text: [
                      {
                        text: 'Жасалатын операцияларды қаржыландыру көздері туралы мәліметтер/ Сведения об источниках финансирования совершаемых операций: ', 
                        bold: true
                      }, 
                      'меншікті қаражат/собственные средства.'],
                     
                  },
                ]
              }
            ],
            [
              {
                colSpan: 2,
                stack: [
                  {
                    text: [
                      {
                        text: '2. Сақтандыру түрі/ Вид страхования: ', 
                        bold: true
                      }, 
                      'Қарыз алушының өмірін ерікті онлайн түрде сақтандыру/Добровольное онлайн страхование жизни заемщика'],
                     
                  },
                ]
              }
            ],
            [
              {
                stack: [
                  {
                    text: 'Сұратылған сақтандыру мерзімі/ Запрашиваемый срок страхования (күн/дней): ',
                    
                    bold: true
                  },
                  {
                    text: `${props.period}`,
                    
                  }
                ]
              },
              {
                stack: [
                  {
                    text: 'Сақтандыру сыйлықақысын төлеу тәртібі/ Условия оплаты страховой премии: ',
                    
                    bold: true
                  },
                  {
                    text: 'бірден/единовременно',
                    
                  }
                ]
              }
            ],
            [
              {
                text: 'Сақтандыру сомасы/ Страховая сумма',
                
                bold: true
              },
              {
                text: `${props.insuranceAmount}`,
                
              }
            ],
          ]
        }
      },
      {
        text: ' '
      },
      {
        table: {
          width: ['*', '*'],
          body: [
            [
              {
                stack: [
                  {
                    text: 'Мен «Freedom Finance Life» өмірді сақтандыру компаниясы» АҚ сақтандыру шартын жасауға келісемін және сақтандыру шартын жасаудың менің ерік білдіруім екендігімді растаймын.',
                    
                    alignment: 'justify'
                  },
                  {
                    text: 'Мен осы «Сақтандыруға өтініш» нысанында көрсетілген мәліметтердің бұдан әрі сақтандыру шартын жасасуға негіз болып табылуына, және қандай да бір мәлімет көрінеу жалған болып шыққан жағдайда, Сақтандырушы сақтандыру төлемін жүзеге асырудан бас тартуға құқылы болуына келісемін.',
                    
                    alignment: 'justify'
                  },
                  {
                    text: 'Мен мүгедек емеспін, психикалық, эпилепсиямен немесе басқа да ауыр неврологиялық аурулармен ауырмайтындығымды растаймын.',
                    
                    alignment: 'justify'
                  },
                  {
                    text: 'Қазақстан Республикасының заңнамасын сақтауды қамтамасыз ету мақсатында, Мен мыналарға келісімімді беремін:',
                    
                    alignment: 'justify'
                  },
                  {
                    text: '1) Сақтандырушының электронды, қағаз және кез келген тасығышта менің дербес деректеріме қатысты ақпаратты (бұдан әрі – Ақпарат) барлық көздерден жинауына және өңдеуіне (соның ішінде жинақтау, сақтау, өзгерту, толықтыру, пайдалану, тарату, иесіздендіру, шектеу және жою);',
                    
                    alignment: 'justify'
                  },
                  {
                    text: '2) Сақтандырушы Қазақстан Республикасының заңнама талаптарына, жасалған шарттарға сәйкес әрекеттер жасауға міндетті немесе құқылы болғанда немесе басқа жағдайларда, Сақтандырушының Ақпаратты уәкілетті мемлекеттік органдарына және кез келген үшінші тұлғаларға беруіне; тиісті шетел мемлекетінің осындай Ақпаратты қорғауды қамтамасыз етуіне қатыссыз трансшекаралық тапсыруына;',
                    
                    alignment: 'justify'
                  },
                  {
                    text: '3) Сақтандырушының Ақпаратқа рұқсат беру талаптарын дербес белгілеуіне.',
                    
                    alignment: 'justify'
                  },
                  {
                    text: 'Мен 17 шілде 2020ж. Директорлар кеңесімен бекітілген Қарыз алушының жазатайым оқиғадан ерікті онлайн сақтандыру ережелермен таныстым және келісемін, және сол Сақтандыру ережелердің көшірмесін алдым.',
                    
                    alignment: 'justify'
                  },
                  {
                    text: 'Менің (Сақтандырылушының, Сақтанушының) Сақтандыруға берілген өтініштегі барлық ақпараты оқылды, тексерілді жән.е сақтандыруға берілетін өтініштегі ақпараттың кіммен толтырылғандығына тәуелсіз нақты және толық болып табылады.',
                    
                    alignment: 'justify'
                  },
                  {
                    text: 'Мен менің тарапымнан жасалып жатқан іс кіріс көзін заңдастыруға (жасыруға), қылмыстық, терроризмді қаржыландыру бағытына еш байланысы жоқ екенін растаймын, шетел лауазымды тұлға (ШЛТ) болып табылмаймын.',
                    
                    alignment: 'justify'
                  }
                ]
              },
              {
                stack: [
                  {
                    text: 'Я даю согласие на заключение договора страхования с АО «Компания по страхованию жизни «Freedom Finance Life» и подтверждаю, что заключение договора страхования является моим волеизъявлением.',
                    
                    alignment: 'justify'
                  },
                  {
                    text: 'Я согласен в дальнейшем, что сведения, указанные в настоящей форме «Заявление на страхование» будут являться основанием для заключения договора страхования, и если какое-либо сведение будет заведомо ложным, Страховщик имеет право отказать в осуществлении страховой выплаты.',
                    
                    alignment: 'justify'
                  },
                  {
                    text: 'Я подтверждаю, что я не являюсь инвалидом, не страдаю психическими, эпилепсией или другими тяжелыми неврологическими заболеваниями;',
                    
                    alignment: 'justify'
                  },
                  {
                    text: 'В целях обеспечения соблюдения законодательства Республики Казахстан, Я предоставляю согласие:',
                    
                    alignment: 'justify'
                  },
                  {
                    text: '1) на сбор Страховщиком из всех источников и обработку (в т.ч. накопление, хранение, изменение, дополнение, использование, распространение, обезличивание, блокирование и уничтожение) Страховщиком информации, относящейся к моим персональным данным на электронном, бумажном и любом ином носителе (далее – Информация);',
                    
                    alignment: 'justify'
                  },
                  {
                    text: '2) на передачу Страховщиком Информации уполномоченным государственным органам и любым третьим лицам, когда Страховщик обязан или вправе совершить такие действия в соответствии с требованиями законодательства Республики Казахстан, заключенными договорами и в иных случаях; трансграничную передачу независимо от обеспечения соответствующим иностранным государством защиты такой Информации;',
                    
                    alignment: 'justify'
                  },
                  {
                    text: '3) на самостоятельное определение Страховщиком условий доступа к Информации.',
                    
                    alignment: 'justify'
                  },
                  {
                    text: 'Я ознакомлен и согласен с Правилами добровольного онлайн страхования жизни заёмщика от несчастного случая, утверждённых Советом Директоров 17 июля 2020 года, копию указанных Правил страхования получил.',
                    
                    alignment: 'justify'
                  },
                  {
                    text: 'Вся информация в заявлении на страхование мною (Застрахованным, Страхователем) прочтена, проверена и является достоверной и полной, вне зависимости от того, кто производил заполнение указанной информации в заявлении на страхование.',
                    
                    alignment: 'justify'
                  },
                  {
                    text: 'Я подтверждаю, что осуществляемая мной операция не связана с легализацией (отмыванием) доходов, полученных преступным путем, и финансированием терроризма и не являюсь иностранным публичным должностным лицом (ИПДЛ).',
                    
                    alignment: 'justify'
                  }
                ]
              }
            ]
          ]
        }
      },
      {
        text: ' '
      },
      {
        text: `Күні/Дата: ${props.givenDate}`,
        
      }
    ],
    defaultStyle: {
      font: 'TimesNewRoman',
      fontSize: 11,
    },
    styles: {
  
    }
  }

  return (
    <li>
      <a onClick={() => pdfMake.createPdf(insuranceContract).open()}>
        3. {t('life-insurance')}
      </a>
    </li>
  )
}

export default InsuranceContractDocument