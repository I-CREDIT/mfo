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

  let insuranceContract = {
    header: {
      margin: [20, 10],
      columns: [
        {
          image: 'data:image/png;base64,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',
          width: 100
        },
        {
          margin: [2, 0],
          stack: [
            {
              text: '«Freedom Finance Life» өмірді сақтандыру компаниясы» Акционерлік қоғамы, Қазақстан Республикасы, Алматы қ., Бостандық ауданы, Әл-Фараби даңғылы, 77/7 үй, 7а т.е.б., Банк деректемелері: БСН 140940003807, БСК HSBKKZKX, р/c KZ916010131000219080 «Қазақстан Халық Банкі» АҚ,',
              fontSize: 4
            },
            {
              text: '+ 7 (727) 228 06 07',
              fontSize: 4
            },
            {
              text: '№ 2.2.51 лицензия 28.05.2019 ж.',
              fontSize: 4
            }
          ]
        },
        {
          margin: [2, 0],
          stack: [
            {
              text: 'Акционерное общество «Компания по страхованию жизни «Freedom Finance Life», Республика Казахстан, г. Алматы, район Бостандыкский, пр. Аль-Фараби, дом 77/7, н.п. 7а, Банковские реквизиты: БИН 140940003807, БИК HSBKKZKX, р/c KZ916010131000219080 в АО «Народный Банк Казахстана»,',
              fontSize: 4
            },
            {
              text: '+ 7 (727) 228 06 07',
              fontSize: 4
            },
            {
              text: '№ 2.2.51 лицензия 28.05.2019 ж.',
              fontSize: 4
            }
          ]
        },
        {
          margin: [2, 0],
          stack: [
            {
              text: '«Freedom Finance Life» Life Insurance Company JSC, n.r.p. 7a, Al-Farabi Ave. 77/7, Bostandyk district, Almaty, Republic of Kazakhstan, Bank details: BIN 140940003807, BIC HSBKKZKX, c/a KZ916010131000219080 in «Halyk Bank» JSC,',
              fontSize: 4
            },
            {
              text: '+ 7 (727) 228 06 07',
              fontSize: 4
            },
            {
              text: 'Lisence №. 2.2.51 dated May 28, 2019.',
              fontSize: 4
            }
          ]
        }
      ]
    },
    content: [
      {
        text: ' '
      },
      {
        stack: [
          {
            text: 'ҚАРЫЗ АЛУШЫНЫҢ ӨМІРІН ЕРІКТІ ОНЛАЙН ТҮРДЕ САҚТАНДЫРУ ПОЛИСЫ',
            fontSize: 8,
            bold: true,
            alignment: 'center'
          },
          {
            text: 'ПОЛИС ДОБРОВОЛЬНОГО ОНЛАЙН СТРАХОВАНИЯ ЖИЗНИ ЗАЁМЩИКА',
            fontSize: 8,
            bold: true,
            alignment: 'center'
          },
          {
            text: `СЕРИЯ ZAEM № ${props.contractNumber}`,
            fontSize: 8,
            bold: true,
            alignment: 'center'
          }
        ]
      },
      {
        text: ' '
      },
      {
        table: {
          widths: ['*', '*'],
          body: [
            [
              {
                text: 'Сақтандырушы/Страховщик',
                fontSize: 7.5,
                bold: true
              },
              {
                stack: [
                  {
                    text: '«Freedom Finance Life» Өмірді сақтандыру компаниясы» Акционерлік қоғамы/ Акционерное общество «Компания по страхованию жизни «Freedom Finance Life»',
                    fontSize: 7.5,
                    bold: true,
                    alignment: 'justify'
                  },
                  {
                    text: 'Қазақстан Республикасы, Алматы қ., Әл-Фараби даң., 77/7 үй , 7а т.е.б./Республика Казахстан, г. Алматы, пр. Аль-Фараби, дом 77/7, н.п.7а',
                    fontSize: 7.5,
                    alignment: 'justify'
                  },
                  {
                    text: 'БСН/БИН: 140940003807, ЖСК/ИИК: KZ916010131000219080, «Қазақстан Халық Банкі» АҚ-да/в АО «Народный Банк Казахстана» БСК/БИК HSBKKZKX, Сайт: www.ffin.life',
                    fontSize: 7.5,
                    alignment: 'justify'
                  }
                ]
              }
            ],
            [
              {
                text: 'Сақтандыру полисін жасасу күні/Дата заключения страхового полиса:',
                fontSize: 7.5,
                bold: true
              },
              {
                text: `${props.givenDate}`,
                fontSize: 7.5,
              }
            ],
            [
              {
                colSpan: 2,
                text: 'Сақтандыру жағдайы/страховой случай',
                fontSize: 7.5,
                bold: true,
                alignment: 'center'
              }
            ],
            [
              {
                stack: [
                  {
                    text: '- Сақтандыру шартында қарастырылған жағдайлардан басқа, сақтандыру қорғанысы әрекет ететін кезеңде орын алған Сақтандырылушының өлімге ұшырауы. Қайтыс болғаны туралы куәлікте көрсетілген қайтыс болған күні осы тармақта көзделген сақтандыру жағдайының күні болып табылады.',
                    fontSize: 7.5,
                    alignment: 'justify'
                  },
                  {
                    text: '- Сақтандыру ережелерде қарастырылған жағдайлардан басқа, сақтандыру қорғанысы әрекет ететін кезеңде орын алған жазатайым оқиға нәтижесінде Сақтандырылушыда 1 немесе 2 топтағы мүгедектіктің анықталуы болып табылады',
                    fontSize: 7.5,
                    alignment: 'justify'
                  }
                ]
              },
              {
                stack: [
                  {
                    text: '- смерть Застрахованного, произошедшая в период действия страховой защиты, за исключением случаев, предусмотренных Правилами страхования. Датой страхового случая, предусмотренного в настоящем пункте, является дата смерти, указанная в свидетельстве о смерти.',
                    fontSize: 7.5,
                    alignment: 'justify'
                  },
                  {
                    text: '- установление Застрахованному инвалидности 1 или 2 группы в результате несчастного случая, произошедшего в период действия страховой защиты, за исключением случаев, предусмотренных Правилами страхования.',
                    fontSize: 7.5,
                    alignment: 'justify'
                  }
                ]
              },
            ],
            [
              {
                text: 'Полисiнiң қолданылу мерзiмi/Срок действия страхового полиса',
                fontSize: 7.5,
                bold: true,
              },
              {
                text: `С ${props.givenDate} бастап/по ${props.endDate} дейін`,
                fontSize: 7.5,
              }
            ],
            [
              {
                text: 'Сақтанушы (Сақтандырылған тұлға) Страхователь (Застрахованный):',
                fontSize: 7.5,
                bold: true,
              },
              {
                stack: [
                  {
                    text: `Т.А.Ә/Ф.И.О.: ${props.fio}`,
                    fontSize: 7.5,
                  },
                  {
                    text: `Сақтанушының заңды мекенжайы және (немесе) тұрғылықты жері/Юридический адрес и (или) место жительства Страхователя: ${props.address}`,
                    fontSize: 7.5,
                  },
                  {
                    text: `Телефоны: +${props.phone}`,
                    fontSize: 7.5,
                  },
                  {
                    text: `ЖСН/ИИН: ${props.iin}`,
                    fontSize: 7.5,
                  },
                  {
                    text: 'Резиденттік белгісі/Признак резидентства: Резидент',
                    fontSize: 7.5,
                  }
                ]
              }
            ],
            [
              {
                colSpan: 2,
                text: 'Ерекше жағдайлар/Особые условия',
                fontSize: 7.5,
                alignment: 'center'
              }
            ],
            [
              {
                stack: [
                  {
                    text: 'Сақтандыруға жатпайды:',
                    fontSize: 7.5,
                  },
                  {
                    text: '1) сақтандыру полисі жасалған күні 67 (алпыс жеті) жасқа толған ер адамдар және 70 (жетпіс) жасқа толған әйелдер;',
                    fontSize: 7.5,
                    alignment: 'justify'
                  },
                  {
                    text: '2) Сақтандыру өтеу кезеңінде жасы 67 (алпыс жеті) жасқа жеткен ер адамдар және cақтандыру өтеу кезеңінде жасы 70 (жетпіс) жасқа жеткен әйелдер.',
                    fontSize: 7.5,
                    alignment: 'justify'
                  },
                  {
                    text: 'Сақтандырылушыға сақтандыру төлемі Сақтандырылған тұлға 67 (алпыс жеті) жасқа (ерлер үшін) және 70 жасқа (әйелдер үшін) толған кезде тоқтатылады.',
                    fontSize: 7.5,
                    alignment: 'justify'
                  },
                  {
                    text: 'Бұл жағдайда Сақтандырушы сақтандыру сыйлықақысының бір бөлігін сақтандыру мерзімі болған уақытқа пропорционалды түрде алуға, сондай-ақ 95% (қоса алғанда) сақтандыру полисінде көрсетілген сақтандыру сыйлықақысының мөлшерінде кәсіпкерлік қызметпен айналысуға кеткен шығындарды өтеуге құқылы.',
                    fontSize: 7.5,
                    alignment: 'justify'
                  }
                ]
              },
              {
                stack: [
                  {
                    text: 'Не подлежат страхованию:',
                    fontSize: 7.5,
                  },
                  {
                    text: '1) Мужчины, достигшие 67 (шестьдесяти семи) лет и женщины, достигшие 70 (семидесяти) лет на дату заключения страхового полиса;',
                    fontSize: 7.5,
                    alignment: 'justify'
                  },
                  {
                    text: '2) Мужчины, возраст которых достигает в период действия страховой защиты 67 (шестьдесят семь) лет и женщины, возраст которых достигает в период действия страховой защиты 70 (семьдесят) лет.',
                    fontSize: 7.5,
                    alignment: 'justify'
                  },
                  {
                    text: 'Страховая защита в отношении Застрахованного прекращает действие при достижении Застрахованным возраста 67 лет (для мужчин) и 70 лет (для женщин).',
                    fontSize: 7.5,
                    alignment: 'justify'
                  },
                  {
                    text: 'При этом Страховщик имеет право на часть страховой премии пропорционально времени, в течение которого действовало страхование, а также на возмещение расходов на ведение дела размере до 95% (включительно) от суммы страховой премии, указанной в страховом полисе.',
                    fontSize: 7.5,
                    alignment: 'justify'
                  }
                ]
              }
            ],
            [
              {
                text: 'Пайдаалушы/Выгодоприобретатель',
                fontSize: 7.5,
                bold: true,
              },
              {
                text: 'Сақтандырылған тұлға, Сақтандырылған тұлға қаза болған жағдайда оның заңды мұрагерлері /Застрахованный, либо в случае смерти Застрахованного - его законные наследники.',
                fontSize: 7.5,
                alignment: 'justify'
              }
            ],
            [
              {
                text: 'Сақтандыру объектісі/Объект страхования',
                fontSize: 7.5,
                bold: true,
              },
              {
                text: 'Сақтандыру кезінде Сақтандырылғанның денсаулығы мен өміріне қауіпті Сақтанушының (Пайда көрушінің) мүддесіндегі мүлігі. Сақтанушының мүддесі сақтандыру құқығына жатпайды/имущественные интересы Страхователя (Выгодоприобретателя), непосредственно связанные с причинением вреда жизни и здоровью Застрахованного вследствие наступления страхового случая. Не подлежат страхованию противоправные интересы Страхователя.',
                fontSize: 7.5,
                alignment: 'justify'
              }
            ],
            [
              {
                text: 'Сақтандыру сомасы/Страховая сумма ',
                fontSize: 7.5,
                bold: true,
              },
              {
                stack: [
                  {
                    text: `${props.insuranceAmount}          ${intToWords(props.insuranceAmount)}`,
                    fontSize: 7.5,
                    alignment: 'justify'
                  },
                  {
                    text: 'цифрлармен/цифрами          жазумен/прописью',
                    fontSize: 7.5,
                    alignment: 'justify',
                    italics: true
                  }
                ]
              }
            ],
            [
              {
                text: 'Сақтандыру сыйлықақысы/Страховая премия',
                fontSize: 7.5,
                bold: true,
              },
              {
                stack: [
                  {
                    text: `${props.reward}          ${intToWords(props.reward)}`,
                    fontSize: 7.5,
                    alignment: 'justify'
                  },
                  {
                    text: 'цифрлармен/цифрами          жазумен/прописью',
                    fontSize: 7.5,
                    alignment: 'justify',
                    italics: true
                  }
                ]
              }
            ],
            [
              {
                text: 'Сақтандыру сыйлықақысын төлеу тәртібі мен мерзімдері/Порядок и сроки уплаты страховой премии',
                fontSize: 7.5,
                bold: true,
                alignment: 'justify'
              },
              {
                text: 'Бір уақытта, сақтандыру полисі жасалған (рәсімделген) күннен бастап 10 (он) күнтізбелік күнінен кешіктірмей, бірақ сақтандыру келісімшарты аяқталғаннан кешіктірмей. Егер сақтандыру полисі көрсетілген мерзімде сақтандыру толық көлемде төлемеген жағдайда, Шарт автоматты түрде мұндай төлем кешіктірілген күні болып саналған күнінің 00.00 сағатта автоматты түрде тоқтатылады, және Сақтандырушы Сақтандыру шарты бойынша болған сақтандыру оқиғалар үшін жауап бермейді/Единовременно, не позднее 10 (десяти) календарных дней с даты заключения (оформления) страхового полиса, но не позднее окончания срока действия полиса. В случае неоплаты страховой премии в течение указанного срока, договор страхования автоматически расторгается в 00.00 часов календарного дня, когда такой платеж считается просроченным и Страховщик не несет обязательств по наступившим страховым случаям по Договору страхования.',
                fontSize: 7.5,
                alignment: 'justify'
              }
            ],
            [
              {
                text: 'Сақтандыру төлемінің тәртібі мен мерзімдері/ Порядок и сроки осуществления страховой выплаты',
                fontSize: 7.5,
                bold: true,
                alignment: 'justify'
              },
              {
                text: 'Сақтандыру ережелерінің 12 бабына сәйкес/Согласно статьи 12 Правил страхования',
                fontSize: 7.5,
                alignment: 'justify'
              }
            ],
            [
              {
                text: 'Сақтандыру сомасының, сақтандыру төлемі мен сақтандыру сыйақысының валюта түрі/ Вид валюты страховой суммы, страховой выплаты и страховой премии',
                fontSize: 7.5,
                bold: true,
                alignment: 'justify'
              },
              {
                text: 'теңге/тенге',
                fontSize: 7.5,
                alignment: 'justify'
              }
            ],
            [
              {
                text: 'Өзгерістер пайда болған жағдайда сақтандыру шартына енгізу тәртібі/Случаи и порядок внесения изменений в условия договора страхования',
                fontSize: 7.5,
                bold: true,
                alignment: 'justify'
              },
              {
                text: 'Сақтандыру ережелерінің 18 бабына сәйкес/Согласно статьи 18 Правил страхования',
                fontSize: 7.5,
                alignment: 'justify'
              }
            ],
            [
              {
                text: 'Cақтандыру төлемін жүзеге асыруға қажетті жетіспейтін құжаттар туралы сақтанушыға немесе сақтандырылушыға хабарлау мерзімдері/ Сроки уведомления страхователя или застрахованного о недостающих документах, необходимых для осуществления страховой выплаты',
                fontSize: 7.5,
                bold: true,
                alignment: 'justify'
              },
              {
                text: '3 (үш) жұмыс күні ішінде/в течение 3 (трёх) рабочих дней',
                fontSize: 7.5,
                alignment: 'justify'
              }
            ],
            [
              {
                colSpan: 2,
                text: 'Cақтандыру полисiнің қолданылатын аумағы/ Территория действия страхового полиса',
                fontSize: 7.5,
                bold: true,
                alignment: 'center'
              }
            ],
            [
              {
                stack: [
                  {
                    text: 'Сақтандыру келісімшарты Қазақстан Республикасының аумағында қалай әрекет етсе, шекара сыртында да солай әрекет етеді, келесі аумақтарды қоспағанда:',
                    fontSize: 7.5,
                    alignment: 'justify'
                  },
                  {
                    text: '- әскери іс-қимылдар және (немесе) лаңкестікке қарсы операциялар жүргізіліп жатқан мемлекеттердің аумағы;',
                    fontSize: 7.5,
                    alignment: 'justify',
                  },
                  {
                    text: '- әскери ықпалшараларға ұшыраған мемлекеттер;',
                    fontSize: 7.5,
                    alignment: 'justify',
                  },
                  {
                    text: '- індет ошақтары табылған және мойындалған аумақтар;',
                    fontSize: 7.5,
                    alignment: 'justify',
                  },
                  {
                    text: '- Қазақстан Республикасының СІМ аттануға ресми түрде ұсынбайтын мемлекеттердің аумағы',
                    fontSize: 7.5,
                    alignment: 'justify',
                  }
                ]
              },
              {
                stack: [
                  {
                    text: 'Договор страхования действует как на территории Республики Казахстан, так и за ее пределами, за исключением следующих территорий:',
                    fontSize: 7.5,
                    alignment: 'justify'
                  },
                  {
                    text: '- территории государств, в пределах которых ведутся военные действия и (или) антитеррористические операции;',
                    fontSize: 7.5,
                    alignment: 'justify',
                  },
                  {
                    text: '- государства, в отношении которых применены военные санкции;',
                    fontSize: 7.5,
                    alignment: 'justify',
                  },
                  {
                    text: '- территории, в пределах которых обнаружены и признаны очаги эпидемий;',
                    fontSize: 7.5,
                    alignment: 'justify',
                  },
                  {
                    text: '- территории государств, выезд в которые официально не рекомендован МИД Республики Казахстан.',
                    fontSize: 7.5,
                    alignment: 'justify',
                  }
                ]
              }
            ],
            [
              {
                text: 'Сақтандыру агенті және тиесілі комиссиялық сыйақы туралы ақпарат/Информация по страховому агенту и комиссионному вознаграждению',
                fontSize: 7.5,
                bold: true,
                alignment: 'justify'
              },
              {
                stack: [
                  {
                    text: 'Т.А.Ә/атауы/Ф.И.О./наименование: «МҚҰ «i-credit.kz» ЖШС/ ТОО «МФО «i-credit.kz»',
                    fontSize: 7.5,
                    alignment: 'justify'
                  },
                  {
                    text: 'БСН/БИН: 070440003902',
                    fontSize: 7.5,
                    alignment: 'justify',
                  },
                  {
                    text: 'Орналасқан жері (тек агент-заңды тұлға үшін /Местонахождение (только для агента-юридического лица): ҚР, Алматы қ. Толе би көшесі, 101/РК, г. Алматы, ул. Толе би, 101',
                    fontSize: 7.5,
                    alignment: 'justify',
                  },
                  {
                    text: 'Тел: 8 (727) 2 501 500',
                    fontSize: 7.5,
                    alignment: 'justify',
                  },
                  {
                    text: 'Шарт бойынша комиссиялық сыйақы/Комиссионное вознаграждение по Договору: Бар/Имеется',
                    fontSize: 7.5,
                    alignment: 'justify',
                  }
                ]
              }
            ],
          ]
        }
      },
      {
        stack: [
          {
            text: 'Тараптардың негізгі құқықтары мен міндеттерінің сипаттамасы сақтандыру полиске №1 Қосымшада/ Описание прав и обязанностей в Приложении 1 к страховому полису',
            fontSize: 7.5,
            alignment: 'justify',
          },
          {
            text: '27 шілде 2020. Компанияның Директорлар Кеңесімен бекітілген Қарыз алушының өмірін ерікті онлайн түрде сақтандыру ережелері Сақтандырушының әріптесінің www.i-credit.kz интернет-ресурсында орналастырылған/ Правила добровольного онлайн страхования жизни заёмщика, утвержденных Советом Директоров 27 июля 2020 года.',
            fontSize: 7.5,
            alignment: 'justify',
          },
          {
            text: 'Настоящим Страхователь/Застрахованный подтверждает, что ознакомлен и согласен, что настоящий страховой полис подтверждает присоединение к Правилам добровольного онлайн страхования жизни заёмщика, утвержденных Советом Директоров 27 июля 2020 года.',
            fontSize: 7.5,
            alignment: 'justify',
          },
          {
            text: 'Осымен Сақтанушы/Сақтандырылған тұлға растайды 27 шілде 2020 . Сақтандырушының Директорлар Кеңесімен бекітілген Қарыз алушының өмірін ерікті онлайн түрде сақтандыру ережелеріне қосылуды осы сақтандыру полис растайтынымен таныстым және келісемін.',
            fontSize: 7.5,
            alignment: 'justify',
          }
        ]
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
      },{
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
        stack: [
          {
            text: `${props.contractNumber}`,
            fontSize: 8,
            bold: true,
            alignment: 'center'
          },
          {
            text: 'Қарыз алушының өмірін ерікті онлайн түрде сақтандыруға өтініш/ Заявление на добровольное онлайн страхование жизни',
            fontSize: 8,
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
                    fontSize: 8, 
                  },
                  {
                    text: 'Сақтандыру агенті/Страховой агент:',
                    fontSize: 8,
                    bold: true
                  },
                  {
                    text: 'Атауы/Наименование: «i-credit.kz» «Микроқаржы ұйымы» ЖШС/ТОО «Микрофинансовая организация «i-credit.kz» ',
                    fontSize: 8,
                  },
                  {
                    text: 'БСН/БИН 070440003902',
                    fontSize: 8,
                  },
                  {
                    text: 'Сақтанушы Сақтандырылушы болып табылады/Страхователь является Застрахованным ',
                    fontSize: 8,
                  },
                  {
                    text: 'Пайдаалушы/Выгодоприобретатель',
                    fontSize: 8,
                  },
                  {
                    text: 'Сақтандырылған тұлға, Сақтандырылған тұлға қаза болған жағдайда оның заңды мұрагерлері /Застрахованный, либо в случае смерти Застрахованного - его законные наследники.',
                    fontSize: 8,
                  },
                  {
                    text: 'Сақтанушы(Сақтандырылған тұлға)/Страхователь(Застрахованный):',
                    fontSize: 8,
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
                    fontSize: 8, 
                  },
                  {
                    text: 'Сақтанушының заңды мекенжайы және (немесе) тұрғылықты жері/Юридический адрес и (или) место жительства Страхователя:',
                    fontSize: 8,
                    bold: true
                  },
                  {
                    text: `${props.address}`,
                    fontSize: 8,
                  },
                  {
                    text: [
                      {
                        text: 'ЖСН/ИИН: ', 
                        bold: true
                      }, 
                      `${props.iin}`
                    ],
                    fontSize: 8, 
                  },
                  {
                    text: [
                      {
                        text: 'Төлқұжат нөмірі / номер удостоверения личности ', 
                        bold: true
                      }, 
                      `${props.cardNumber} ${props.cardGiven} берілген/выдано от ${props.startCard}`
                    ],
                    fontSize: 8, 
                  },
                  {
                    text: [
                      {
                        text: 'Резиденттік белгісі/ Признак резидентства: ', 
                        bold: true
                      }, 
                      'резидент'],
                    fontSize: 8, 
                  },
                  {
                    text: [
                      {
                        text: 'Электрондық пошта мекенжайы (болса)/Адрес электронной почты (при наличии): ', 
                        bold: true
                      }, 
                      `${props.email}`
                    ],
                    fontSize: 8, 
                  },
                  {
                    text: `Абоненттік нөмір/Абонентский номер: +${props.phone}`,
                    fontSize: 8,
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
                    fontSize: 8, 
                  },
                  {
                    text: [
                      {
                        text: 'Жасалатын операцияларды қаржыландыру көздері туралы мәліметтер/ Сведения об источниках финансирования совершаемых операций: ', 
                        bold: true
                      }, 
                      'меншікті қаражат/собственные средства.'],
                    fontSize: 8, 
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
                    fontSize: 8, 
                  },
                ]
              }
            ],
            [
              {
                stack: [
                  {
                    text: 'Сұратылған сақтандыру мерзімі/ Запрашиваемый срок страхования (күн/дней): ',
                    fontSize: 8,
                    bold: true
                  },
                  {
                    text: `${props.period}`,
                    fontSize: 8
                  }
                ]
              },
              {
                stack: [
                  {
                    text: 'Сақтандыру сыйлықақысын төлеу тәртібі/ Условия оплаты страховой премии: ',
                    fontSize: 8,
                    bold: true
                  },
                  {
                    text: 'бірден/единовременно',
                    fontSize: 8
                  }
                ]
              }
            ],
            [
              {
                text: 'Сақтандыру сомасы/ Страховая сумма',
                fontSize: 8,
                bold: true
              },
              {
                text: `${props.insuranceAmount}`,
                fontSize: 8
              }
            ],
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
        text: ' '
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
                    fontSize: 7,
                    alignment: 'justify'
                  },
                  {
                    text: 'Мен осы «Сақтандыруға өтініш» нысанында көрсетілген мәліметтердің бұдан әрі сақтандыру шартын жасасуға негіз болып табылуына, және қандай да бір мәлімет көрінеу жалған болып шыққан жағдайда, Сақтандырушы сақтандыру төлемін жүзеге асырудан бас тартуға құқылы болуына келісемін.',
                    fontSize: 7,
                    alignment: 'justify'
                  },
                  {
                    text: 'Мен мүгедек емеспін, психикалық, эпилепсиямен немесе басқа да ауыр неврологиялық аурулармен ауырмайтындығымды растаймын.',
                    fontSize: 7,
                    alignment: 'justify'
                  },
                  {
                    text: 'Қазақстан Республикасының заңнамасын сақтауды қамтамасыз ету мақсатында, Мен мыналарға келісімімді беремін:',
                    fontSize: 7,
                    alignment: 'justify'
                  },
                  {
                    text: '1) Сақтандырушының электронды, қағаз және кез келген тасығышта менің дербес деректеріме қатысты ақпаратты (бұдан әрі – Ақпарат) барлық көздерден жинауына және өңдеуіне (соның ішінде жинақтау, сақтау, өзгерту, толықтыру, пайдалану, тарату, иесіздендіру, шектеу және жою);',
                    fontSize: 7,
                    alignment: 'justify'
                  },
                  {
                    text: '2) Сақтандырушы Қазақстан Республикасының заңнама талаптарына, жасалған шарттарға сәйкес әрекеттер жасауға міндетті немесе құқылы болғанда немесе басқа жағдайларда, Сақтандырушының Ақпаратты уәкілетті мемлекеттік органдарына және кез келген үшінші тұлғаларға беруіне; тиісті шетел мемлекетінің осындай Ақпаратты қорғауды қамтамасыз етуіне қатыссыз трансшекаралық тапсыруына;',
                    fontSize: 7,
                    alignment: 'justify'
                  },
                  {
                    text: '3) Сақтандырушының Ақпаратқа рұқсат беру талаптарын дербес белгілеуіне.',
                    fontSize: 7,
                    alignment: 'justify'
                  },
                  {
                    text: 'Мен 17 шілде 2020ж. Директорлар кеңесімен бекітілген Қарыз алушының жазатайым оқиғадан ерікті онлайн сақтандыру ережелермен таныстым және келісемін, және сол Сақтандыру ережелердің көшірмесін алдым.',
                    fontSize: 7,
                    alignment: 'justify'
                  },
                  {
                    text: 'Менің (Сақтандырылушының, Сақтанушының) Сақтандыруға берілген өтініштегі барлық ақпараты оқылды, тексерілді жән.е сақтандыруға берілетін өтініштегі ақпараттың кіммен толтырылғандығына тәуелсіз нақты және толық болып табылады.',
                    fontSize: 7,
                    alignment: 'justify'
                  },
                  {
                    text: 'Мен менің тарапымнан жасалып жатқан іс кіріс көзін заңдастыруға (жасыруға), қылмыстық, терроризмді қаржыландыру бағытына еш байланысы жоқ екенін растаймын, шетел лауазымды тұлға (ШЛТ) болып табылмаймын.',
                    fontSize: 7,
                    alignment: 'justify'
                  }
                ]
              },
              {
                stack: [
                  {
                    text: 'Я даю согласие на заключение договора страхования с АО «Компания по страхованию жизни «Freedom Finance Life» и подтверждаю, что заключение договора страхования является моим волеизъявлением.',
                    fontSize: 7,
                    alignment: 'justify'
                  },
                  {
                    text: 'Я согласен в дальнейшем, что сведения, указанные в настоящей форме «Заявление на страхование» будут являться основанием для заключения договора страхования, и если какое-либо сведение будет заведомо ложным, Страховщик имеет право отказать в осуществлении страховой выплаты.',
                    fontSize: 7,
                    alignment: 'justify'
                  },
                  {
                    text: 'Я подтверждаю, что я не являюсь инвалидом, не страдаю психическими, эпилепсией или другими тяжелыми неврологическими заболеваниями;',
                    fontSize: 7,
                    alignment: 'justify'
                  },
                  {
                    text: 'В целях обеспечения соблюдения законодательства Республики Казахстан, Я предоставляю согласие:',
                    fontSize: 7,
                    alignment: 'justify'
                  },
                  {
                    text: '1) на сбор Страховщиком из всех источников и обработку (в т.ч. накопление, хранение, изменение, дополнение, использование, распространение, обезличивание, блокирование и уничтожение) Страховщиком информации, относящейся к моим персональным данным на электронном, бумажном и любом ином носителе (далее – Информация);',
                    fontSize: 7,
                    alignment: 'justify'
                  },
                  {
                    text: '2) на передачу Страховщиком Информации уполномоченным государственным органам и любым третьим лицам, когда Страховщик обязан или вправе совершить такие действия в соответствии с требованиями законодательства Республики Казахстан, заключенными договорами и в иных случаях; трансграничную передачу независимо от обеспечения соответствующим иностранным государством защиты такой Информации;',
                    fontSize: 7,
                    alignment: 'justify'
                  },
                  {
                    text: '3) на самостоятельное определение Страховщиком условий доступа к Информации.',
                    fontSize: 7,
                    alignment: 'justify'
                  },
                  {
                    text: 'Я ознакомлен и согласен с Правилами добровольного онлайн страхования жизни заёмщика от несчастного случая, утверждённых Советом Директоров 17 июля 2020 года, копию указанных Правил страхования получил.',
                    fontSize: 7,
                    alignment: 'justify'
                  },
                  {
                    text: 'Вся информация в заявлении на страхование мною (Застрахованным, Страхователем) прочтена, проверена и является достоверной и полной, вне зависимости от того, кто производил заполнение указанной информации в заявлении на страхование.',
                    fontSize: 7,
                    alignment: 'justify'
                  },
                  {
                    text: 'Я подтверждаю, что осуществляемая мной операция не связана с легализацией (отмыванием) доходов, полученных преступным путем, и финансированием терроризма и не являюсь иностранным публичным должностным лицом (ИПДЛ).',
                    fontSize: 7,
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
        fontSize: 8
      }
    ],
    defaultStyle: {
      font: 'TimesNewRoman'
    },
    styles: {
  
    }
  }

  return (
    <li>
      <a onClick={() => pdfMake.createPdf(insuranceContract).open()}>
        3. Договор добровольного срочного страхования жизни
      </a>
    </li>
  )
}

export default InsuranceContractDocument