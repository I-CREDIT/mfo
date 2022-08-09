import React from "react";
import { connect } from "react-redux";
import {
  changingMoney,
  changingDay,
  postRegistrationThird,
  errorMessage,
} from "../../store/actions/ActionCreators";
import { Label, Row } from "reactstrap";
import { Control, Errors, Form } from "react-redux-form";
import InputMask from "react-input-mask";
import $ from "jquery";
import Spinner from "react-spinner-material";
import disableScroll from "disable-scroll";
import cookie from "js-cookie";

import {
  isValidIBANNumber,
  required,
  onlyEnglish,
  checkStringName,
  isExpDateOfCardValid,
  checkCardValid,
} from "../../defaults/validationredux";

const scrollToElement = require("scroll-to-element");

const mapStateToProps = (state) => {
  return {
    moneyVal: state.moneyVal,
    dayVal: state.dayVal,
    checked: false,
    somemessage: state.message,
    registration3: state.registration3,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  changingMoney: (money) => {
    dispatch(changingMoney(money));
  },
  changingDay: (day) => {
    dispatch(changingDay(day));
  },
  postRegistrationThird: (registration) =>
    dispatch(postRegistrationThird(registration)),
  errorMessage: (message) => {
    dispatch(errorMessage(message));
  },
});

const IbanInput = (props) => (
  <InputMask mask="KZ******************" className="my-input" {...props} />
);
const CardInput = (props) => (
  <InputMask mask="9999-9999-9999-9999" className="my-input" {...props} />
);
const ExpireDateInput = (props) => (
  <InputMask mask="99/99" className="my-input" {...props} />
);
class FormRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnDisabled: false,
      isModalOpen: false,
      checked: false,
      clicked: false,
      value: "",
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleFocus() {
    setTimeout(() => {
      scrollToElement(".text-danger", {
        offset: 0,
        align: "middle",
        ease: "outExpo",
        duration: 600,
      });
    }, 100);
    localStorage.removeItem("step");
  }

  handleSubmit(values) {
    if (!isValidIBANNumber(values.iban_account)) {
      this.props.errorMessage("Введите другой IBAN.");
      return;
    }

    let other = {};

    other.bank_name = isValidIBANNumber(values.iban_account);
    other.source = "i-credit.kz";

    if (cookie.get("utm_source") !== undefined) {
      if (cookie.get("utm_source").includes("sms")) {
        other.source = cookie.get("utm_source");
      }
      if (cookie.get("utm_source").includes("loangate")) {
        other.source = cookie.get("utm_source");
        other.cpa_source = cookie.get("utm_source");
        other.cpa_clickid = cookie.get("afclick");
      }
      if (
        cookie.get("utm_source") === "upsala" ||
        cookie.get("utm_source") === "goodaff" ||
        cookie.get("utm_source") === "finpublic_cpa"
      ) {
        other.source = cookie.get("utm_source");
        other.cpa_source = cookie.get("utm_source");
        other.cpa_clickid = cookie.get("clickid");
      }
      if (cookie.get("utm_source") === "marketing") {
        other.source = cookie.get("utm_source");
        other.cpa_source = cookie.get("utm_source");
        other.cpa_clickid = cookie.get("clickid");
      }
      if (
        cookie.get("utm_source") === "leadgid" ||
        cookie.get("utm_source") === "pdl-profit" ||
        cookie.get("utm_source") === "doaff"
      ) {
        other.source = cookie.get("utm_source");
        other.cpa_source = cookie.get("utm_source");
        other.webID = cookie.get("wmid");
        other.cpa_clickid = cookie.get("clickid");
      }
      if (cookie.get("utm_source") === "sales_doubler") {
        other.source = cookie.get("utm_source");
        other.cpa_source = cookie.get("utm_source");
        other.webID = cookie.get("utm_term");
        other.cpa_clickid = cookie.get("clickid");
      }
      if (cookie.get("utm_source") === "leadssu") {
        other.source = cookie.get("utm_source");
        other.cpa_source = cookie.get("utm_source");
        other.cpa_clickid = cookie.get("clickid");
      }
      if (cookie.get("utm_source").includes("smartzaim")) {
        other.source = cookie.get("utm_source");
        other.cpa_source = cookie.get("utm_source");
        other.utm_campaign = cookie.get("utm_campaign");
        other.utm_term = "smartzaim";
      }
      if (cookie.get("utm_source").includes("qaz")) {
        other.source = "qazlead";
        other.cpa_source = cookie.get("utm_campaign");
        other.cpa_clickid = cookie.get("clickid");
      }
      if (cookie.get("utm_source").includes("click2money")) {
        other.source = cookie.get("utm_source");
        other.cpa_source = cookie.get("utm_source");
        other.cpa_clickid = cookie.get("clickid");
      }
      if (cookie.get("utm_source") === "guruleads") {
        other.source = cookie.get("utm_source");
        other.cpa_source = cookie.get("utm_source");
        other.cpa_clickid = cookie.get("clickid");
        other.webID = cookie.get("wmid");
      }
      if (cookie.get("utm_source") === "rafinad") {
        other.source = cookie.get("utm_source");
        other.cpa_source = cookie.get("utm_source");
        other.cpa_clickid = cookie.get("clickid");
      }
      if (cookie.get("utm_source") === "crezu") {
        other.source = cookie.get("utm_source");
        other.cpa_source = cookie.get("utm_source");
        other.cpa_clickid = cookie.get("clickid");
      }
      if (cookie.get("utm_source") === "admitad") {
        other.source = cookie.get("utm_source");
        other.cpa_source = cookie.get("utm_source");
        other.cpa_clickid = cookie.get("clickid");
      }
      if (cookie.get("utm_source") === "sales_doubler") {
        other.source = cookie.get("utm_source");
        other.cpa_source = cookie.get("utm_source");
        other.cpa_clickid = cookie.get("clickid");
        other.webID = cookie.get("utm_term");
      }
      if (cookie.get("utm_source") === "sales_doubler") {
        other.source = cookie.get("utm_source");
        other.cpa_source = cookie.get("utm_source");
        other.cpa_clickid = cookie.get("clickid");
        other.webID = cookie.get("utm_term");
      }
      if (cookie.get("utm_source") === "google") {
        other.source = cookie.get("utm_source");
        other.cpa_source = cookie.get("utm_source");
        // other.cpa_clickid = cookie.get("utm_content");
        // other.webID = cookie.get("utm_campaign");
      }

      if (cookie.get("utm_source") === "altel_2365") {
        other.source = cookie.get("utm_source");
        other.cpa_source = cookie.get("utm_source");
        other.cpa_clickid = cookie.get("clickid");
      }
      if (cookie.get("utm_source") === "altel_4291") {
        other.source = cookie.get("utm_source");
        other.cpa_source = cookie.get("utm_source");
        other.cpa_clickid = cookie.get("clickid");
      }
      if (cookie.get("utm_source") === "altel_7846") {
        other.source = cookie.get("utm_source");
        other.cpa_source = cookie.get("utm_source");
        other.cpa_clickid = cookie.get("clickid");
      }
      if (cookie.get("utm_source") === "altel_3954") {
        other.source = cookie.get("utm_source");
        other.cpa_source = cookie.get("utm_source");
        other.cpa_clickid = cookie.get("clickid");
      }
      if (cookie.get("utm_source") === "altel_8132") {
        other.source = cookie.get("utm_source");
        other.cpa_source = cookie.get("utm_source");
        other.cpa_clickid = cookie.get("clickid");
      }
      if (cookie.get("utm_source") === "altel_5673") {
        other.source = cookie.get("utm_source");
        other.cpa_source = cookie.get("utm_source");
        other.cpa_clickid = cookie.get("clickid");
      }
      if (cookie.get("utm_source") === "altel_6728") {
        other.source = cookie.get("utm_source");
        other.cpa_source = cookie.get("utm_source");
        other.cpa_clickid = cookie.get("clickid");
      }
      if (cookie.get("utm_source") === "altel_1589") {
        other.source = cookie.get("utm_source");
        other.cpa_source = cookie.get("utm_source");
        other.cpa_clickid = cookie.get("clickid");
      }
      if (cookie.get("utm_source") === "altel_4376") {
        other.source = cookie.get("utm_source");
        other.cpa_source = cookie.get("utm_source");
        other.cpa_clickid = cookie.get("clickid");
      }
    }

    const finalObjects = {
      ...other,
      ...values,
    };


    var BANKS = [
      { id: "947", name: 'АО "Дочерний Банк "АЛЬФА-БАНК"' },
      { id: "826", name: 'АО "АТФБанк"' },
      {
        id: "949",
        name: 'АО "Altyn Bank" (ДБ China Citic Bank Corporation Limited)',
      },
      { id: "913", name: 'АО ДБ "БАНК КИТАЯ В КАЗАХСТАНЕ"' },
      { id: "722", name: 'АО "KASPI BANK"' },
      { id: "766", name: 'АО "Центральный Депозитарий Ценных Бумаг"' },
      { id: "832", name: 'АО "Ситибанк Казахстан"' },
      { id: "907", name: 'АО "Банк Развития Казахстана"' },
      { id: "700", name: "ЕВРАЗИЙСКИЙ БАНК РАЗВИТИЯ" },
      { id: "948", name: 'АО "Евразийский Банк"' },
      {
        id: "009",
        name: 'НАО Государственная корпорация "Правительство для граждан"',
      },
      { id: "972", name: 'АО "Жилстройсбербанк Казахстана"' },
      { id: "246", name: 'АО "Исламский Банк "Al Hilal"' },
      { id: "601", name: 'АО "Народный Банк Казахстана"' },
      { id: "930", name: 'АО "Торгово-промышленный Банк Китая в г. Алматы"' },
      { id: "550", name: "г.Москва Межгосударственный Банк" },
      { id: "886", name: 'ДБ АО "Хоум Кредит энд Финанс Банк"' },
      { id: "965", name: 'АО "ForteBank"' },
      { id: "927", name: 'АО "Казахстанская фондовая биржа"' },
      { id: "821", name: 'АО "Банк "Bank RBK"' },
      {
        id: "224",
        name: 'РГП "Казахстанский центр межбанковских расчетов НБРК"',
      },
      { id: "070", name: 'РГУ "Комитет казначейства Министерства финансов РК"' },
      { id: "563", name: 'АО "КАЗПОЧТА"' },
      { id: "551", name: 'АО "Банк Kassa Nova" (Дочерний банк АО "ForteBank")' },
      { id: "885", name: 'АО "ДБ "КАЗАХСТАН-ЗИРААТ ИНТЕРНЕШНЛ БАНК"' },
      { id: "774", name: 'АО "AsiaCredit Bank (АзияКредит Банк)" ' },
      { id: "553", name: 'АО ДБ "Национальный Банк Пакистана" в Казахстане' },
      { id: "147", name: '"Банк-кастодиан АО  "ЕНПФ"' },
      { id: "125", name: "РГУ Национальный Банк Республики Казахстан" },
      { id: "849", name: 'АО "Нурбанк"' },
      { id: "914", name: 'ДБ АО "Сбербанк"' },
      { id: "435", name: 'АО "Шинхан Банк Казахстан"' },
      { id: "781", name: 'АО "Capital Bank Kazakhstan"' },
      { id: "620", name: 'АО "Tengri Bank"' },
      { id: "998", name: 'АО "First Heartland Jysan Bank"' },
      { id: "432", name: "ДО АО Банк ВТБ (Казахстан)" },
      { id: "896", name: 'АО "Исламский банк "Заман-Банк"' },
      { id: "856", name: 'АО "Банк ЦентрКредит"' },
      "",
    ];

    let bool = false
    for(let i = 0; i < BANKS.length; i++) {
      if(values.iban_account.slice(4, 7) === BANKS[i].id) {
        bool = true;
        break
      }
      bool = false
    }
    let regex = new RegExp('[^A-Z0-9]', 'g')
    if(values.iban_account.replace(regex, '').length === 20 && bool) {
      this.props.postRegistrationThird(finalObjects)
        .then(() => {
          this.setState({
            btnDisabled: true
          })
        })
    }
  }

  getErrorMessage() {
    return this.props.somemessage.error !== null ? (
      <div className="alert alert-danger" role="alert">
        <strong>{this.props.somemessage.error}</strong>
      </div>
    ) : null;
  }

  componentDidMount() {
    $("input").on("focus", function () {
      const prev = $(this).offset().top;
      const inputHeight = prev - 210;
      if (window.innerWidth <= 768) {
        $("html, body").animate({ scrollTop: inputHeight }, 300);
        return false;
      }
    });

    $(".cardName").on("keypress", function (event) {
      const englishAlphabetDigitsAndWhiteSpace = /[A-Za-z ]/g;
      const key = String.fromCharCode(event.which);

      if (
        event.keyCode == 8 ||
        event.keyCode == 37 ||
        event.keyCode == 39 ||
        englishAlphabetDigitsAndWhiteSpace.test(key)
      ) {
        return true;
      }

      return false;
    });
    $(".cardName").on("paste", function (e) {
      e.preventDefault();
    });

    const progress = document.querySelector(".progress-done");
    progress.style.width = progress.getAttribute("data-done") + "%";
    progress.append(progress.getAttribute("data-done") + "%");
    progress.style.opacity = 1;
    $(document).ready(function () {
      $("input").on("change", function () {
        let cntreq = 0;
        let cntvals = 68.5;
        $("input").each(function (i, val) {
          cntreq++;
          if ($(this).val() != "") {
            cntvals += 1;
          }
          if ($(this).val() != "" && cntvals >= 81.5) {
            cntvals += 6;
          }
        });
        $("#percentage").empty();
        $("#percentage").append(cntvals + "% completed");

        $("#progress-done").data("done", cntvals);
        $("#progress-done").width($("#progress-done").data("done") + "%");
        $("#progress-done").text($("#progress-done").data("done") + "%");
      });
    });

    function forceInputUppercase(e) {
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      e.target.value = e.target.value.toUpperCase();
      e.target.setSelectionRange(start, end);
    }

    document
      .getElementById("name_of_owner")
      .addEventListener("keyup", forceInputUppercase, false);
  }

  render() {
    const ibanMessage =
      isValidIBANNumber(this.props.registration3.iban_account) ||
      `Временно не принимаем карты данного банка. Попробуйте ввести другой IBAN.`;

    const IbanToUppercase = (e) => {
      this.setState({
        value: e.target.value.toUpperCase(),
      });
    };

    return (
      <div>
        <div className="progressBar">
          <div
            className="progress-done"
            id="progress-done"
            data-done="68.5"
          ></div>
          <p className="counter">Вероятность одобрения</p>
        </div>

        {this.props.loading === true ? (
          <div className="modelLoader">{disableScroll.on()}</div>
        ) : (
          <div className="modelLoader loaded">{disableScroll.off()}</div>
        )}

        <Form
          className="container formsStep"
          model="registration3"
          onSubmit={(values) => this.handleSubmit(values)}
        >
          {this.getErrorMessage()}

          <Row className="form-group  mb-3 col-12 mx-auto">
            <h2 className="">Информация о счетах</h2>
          </Row>

          <Row className="form-group  mb-3 col-12 mx-auto">
            <Label htmlFor="iban_account">IBAN счет * :</Label>
            <div className="input-group">
              <Control
                component={IbanInput}
                onInput={(e) => IbanToUppercase(e)}
                value={this.state.value}
                model=".iban_account"
                id="iban_account"
                placeholder="KZ__________________"
                className="form-control text-uppercase"
              />
            </div>
            <div className="text-info">
              <p>{ibanMessage}</p>
            </div>
          </Row>

          <Row className="form-group  mb-3 col-12 mx-auto">
            <Label htmlFor="card_number">Номер карты * :</Label>
            <Control
              className="form-control"
              model=".card_number"
              placeholder="____-____-____-____"
              component={CardInput}
              validators={{
                checkCardValid,
              }}
            ></Control>
            <Errors
              className="text-danger"
              model=".card_number"
              show="touched"
              messages={{
                checkCardValid: "Введите корректный номер! ",
              }}
            />
          </Row>
          <Row className="form-group  mb-3 col-12 mx-auto">
            <Label htmlFor="expiration_date_of_bcard">Дата окончания * :</Label>
            <Control
              className="form-control"
              model=".expiration_date_of_bcard"
              id="expiration_date_of_bcard"
              placeholder="__/__"
              component={ExpireDateInput}
              validators={{
                isExpDateOfCardValid,
              }}
            ></Control>
            <Errors
              className="text-danger"
              model=".expiration_date_of_bcard"
              show="touched"
              messages={{
                isExpDateOfCardValid: "Неправильно",
              }}
            />
          </Row>

          <Row className="form-group  mb-3 col-12 mx-auto">
            <Label htmlFor="name_of_owner">
              Имя владельца карты латинскими буквами * :
            </Label>
            <div className="input-group">
              <Control.text
                model=".name_of_owner"
                autocomplete="off"
                id="name_of_owner"
                name="name_of_owner"
                placeholder="ИМЯ Фамилия"
                className="form-control  input-uppercase cardName"
                validators={{
                  required,
                  onlyEnglish,
                  checkStringName,
                }}
              />
              <div className="hint">Только на латинском</div>
            </div>
            <Errors
              className="text-danger"
              model=".name_of_owner"
              show="touched"
              messages={{
                required: "Поле обязательно для заполнения! ",
                onlyEnglish: "Некорректно ",
                checkStringName: "Имя и Фамилия обязательно ",
              }}
            />
          </Row>

          {this.getErrorMessage()}

          <div className="button form-group">
            {this.props.loading === true ? (
              <Spinner
                className="loading"
                size={200}
                spinnerColor={"#ef2221"}
                spinnerWidth={2}
                visible={true}
              />
            ) : (
              <button
                type="submit"
                className="agreement-btn"
                to="/newAggrements"
                disabled={this.state.btnDisabled}
                onClick={() => this.handleFocus()}
              >
                Отправить
              </button>
            )}
          </div>
        </Form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormRegister);
