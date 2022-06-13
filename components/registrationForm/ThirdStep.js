import React from "react";
import { connect } from "react-redux";
import {
  changingMoney,
  changingDay,
  postRegistrationThird,
} from "../../store/actions/ActionCreators";
import { Label, Row } from "reactstrap";
import { Control, Errors, Form } from "react-redux-form";
import InputMask from "react-input-mask";
import $ from "jquery";
import { speciality } from "../../defaults/defaultRelative";
import Spinner from "react-spinner-material";
import disableScroll from "disable-scroll";
import cookie from "js-cookie";

import {
  isValidIBANNumber2,
  isValidIBANNumber,
  required,
  givenDateCardId,
  expDateCardId,
  onlyEnglish,
  idNumber,
  checkStringName,
  isExpDateOfCardValid,
  checkCardValid,
} from "../../defaults/validationredux";
var scrollToElement = require("scroll-to-element");

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
const idCardNumber = (props) => (
  <InputMask mask="999999999" className="my-input" {...props} />
);
const dateofIdCard = (props) => (
  <InputMask mask="99.99.9999" className="my-input" {...props} />
);
class FormRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      checked: false,
      clicked: false,
      value: "",
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
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
  }
  handlePhone = (e) => {
    this.setState({ phone: e.target.value });
  };
  handleCheck = (e) => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  handleSubmit(values) {
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
        cookie.get("utm_source") === "doaff" ||
        cookie.get("utm_source") === "goodaff" ||
        cookie.get("utm_source") === "finpublic_cpa" ||
        cookie.get("utm_source") === "pdl-profit"
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
      if (cookie.get("utm_source") === "leadgid") {
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
      }
      if (cookie.get("utm_source") === "sales_doubler") {
        other.source = cookie.get("utm_source");
        other.cpa_source = cookie.get("utm_source");
        other.cpa_clickid = cookie.get("clickid");
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
    this.props.postRegistrationThird(finalObjects);
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
      var prev = $(this).offset().top;
      var inputHeight = prev - 210;
      if (window.innerWidth <= 768) {
        $("html, body").animate({ scrollTop: inputHeight }, 300);
        return false;
      }
    });

    $(".cardName").on("keypress", function (event) {
      var englishAlphabetDigitsAndWhiteSpace = /[A-Za-z ]/g;

      var key = String.fromCharCode(event.which);

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
        var cntreq = 0;
        var cntvals = 68.5;
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
      var start = e.target.selectionStart;
      var end = e.target.selectionEnd;
      e.target.value = e.target.value.toUpperCase();
      e.target.setSelectionRange(start, end);
    }

    document
      .getElementById("name_of_owner")
      .addEventListener("keyup", forceInputUppercase, false);
  }

  render() {
    const { history } = this.props;
    const ibanMessage = isValidIBANNumber(
      null || this.props.registration3.iban_account
    );

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

          {/*<Row className="form-group  mb-3 col-12 mx-auto">*/}
          {/*   <h2 className="">Информация о месте работы</h2>*/}
          {/*</Row>*/}

          {/*<Row className="form-group  mb-3 col-12 mx-auto">*/}
          {/*  <Label htmlFor='name_of_workplace'>Место работы * :*/}
          {/*  </Label>*/}
          {/*  <div className="input-group">*/}
          {/*    <Control.text*/}
          {/*      model='.name_of_workplace'*/}
          {/*      id='name_of_workplace'*/}
          {/*      name='name_of_workplace'*/}
          {/*      placeholder='Место работы'*/}
          {/*      className="form-control"*/}
          {/*      validators={{*/}
          {/*      required*/}
          {/*    }}/>*/}
          {/*  </div>*/}

          {/*  <Errors*/}
          {/*    className='text-danger'*/}
          {/*    model='.name_of_workplace'*/}
          {/*    show='touched'*/}
          {/*    messages={{*/}
          {/*    required: 'Поле обязательно для заполнения! '*/}
          {/*  }}/>*/}
          {/*</Row>*/}
          {/*<Row className="form-group  mb-3 col-12 mx-auto">*/}
          {/*  <Label htmlFor='type_id'>Должность * :*/}
          {/*  </Label>*/}
          {/*  <div className="input-group">*/}
          {/*    <Control.select*/}
          {/*      model='.type_id'*/}
          {/*      id='type_id'*/}
          {/*      name='type_id'*/}
          {/*      placeholder=''*/}
          {/*      className="form-control"*/}
          {/*      validators={{*/}
          {/*      required*/}
          {/*    }}>*/}
          {/*      <option value="" disabled selected>Должность</option>*/}
          {/*      {speciality.map(spec => (*/}
          {/*        <option key={spec.id} value={spec.id}>{spec.name}</option>*/}
          {/*      ))}*/}
          {/*    </Control.select>*/}
          {/*  </div>*/}

          {/*  <Errors*/}
          {/*    className='text-danger'*/}
          {/*    model='.type_id'*/}
          {/*    show='touched'*/}
          {/*    messages={{*/}
          {/*    required: 'Выберите один из вариантов'*/}
          {/*  }}/>*/}
          {/*</Row>*/}

          {/*<Row className="form-group  mb-3 col-12 mx-auto">*/}
          {/*  <Label htmlFor='work_experience'>Стаж работы на последнем месте работы* :*/}
          {/*  </Label>*/}
          {/*  <div className="input-group">*/}
          {/*    <Control.select*/}
          {/*      model='.work_experience'*/}
          {/*      id='work_experience'*/}
          {/*      name='work_experience'*/}
          {/*      placeholder=''*/}
          {/*      className="form-control"*/}
          {/*      validators={{*/}
          {/*      required*/}
          {/*    }}>*/}
          {/*      <option value="" disabled selected>Стаж работы</option>*/}
          {/*      <option value="до 3мес.">до 3мес.</option>*/}
          {/*      <option value="до 4-6мес.">до 4-6мес.</option>*/}
          {/*      <option value="до 7-12мес.">до 7-12мес.</option>*/}
          {/*      <option value="от 1 до 2лет">от 1 до 2лет</option>*/}
          {/*      <option value="от 2 до 5лет">от 2 до 5лет</option>*/}
          {/*    </Control.select>*/}
          {/*  </div>*/}

          {/*  <Errors*/}
          {/*    className='text-danger'*/}
          {/*    model='.work_experience'*/}
          {/*    show='touched'*/}
          {/*    messages={{*/}
          {/*    required: 'Выберите один из вариантов'*/}
          {/*  }}/>*/}

          {/*</Row>*/}

          {/*<Row className="form-group  mb-3 col-12 mx-auto">*/}
          {/*  <h2 className="">Информация о уд.личности</h2>*/}
          {/*</Row>*/}
          {/*<Row className="form-group  mb-3 col-12 mx-auto">*/}
          {/*  <Label htmlFor='birth_place'>Место рождения * :*/}
          {/*  </Label>*/}
          {/*  <div className="input-group">*/}
          {/*    <Control.text*/}
          {/*      model='.birth_place'*/}
          {/*      id='birth_place'*/}
          {/*      name='birth_place'*/}
          {/*      placeholder='Место рождения'*/}
          {/*      autocomplete = 'off'*/}
          {/*      className="form-control"*/}
          {/*      validators={{*/}
          {/*      required*/}
          {/*    }}/>*/}
          {/*  </div>*/}

          {/*  <Errors*/}
          {/*    className='text-danger'*/}
          {/*    model='.birth_place'*/}
          {/*    show='touched'*/}
          {/*    messages={{*/}
          {/*    required: 'Поле обязательно для заполнения! '*/}
          {/*  }}/>*/}
          {/*</Row>*/}

          {/*<Row className="form-group  mb-3 col-12 mx-auto">*/}
          {/*    <Label htmlFor='income'>Доход * :*/}
          {/*  </Label>*/}
          {/*  <div className="input-group">*/}
          {/*    <Control.input*/}
          {/*      model='.income'*/}
          {/*      id='income'*/}
          {/*      name='income'*/}
          {/*      autocomplete = 'off'*/}
          {/*      placeholder='150000'*/}
          {/*      type="number"*/}
          {/*      className="form-control"*/}
          {/*      validators={{*/}
          {/*      required*/}
          {/*    }}/>*/}
          {/*  </div>*/}

          {/*  <Errors*/}
          {/*    className='text-danger'*/}
          {/*    model='.income'*/}
          {/*    show='touched'*/}
          {/*    messages={{*/}
          {/*    required: 'Поле обязательно для заполнения! '*/}
          {/*  }}/>*/}
          {/*</Row>*/}

          {/*<Row className="form-group  mb-3 col-12 mx-auto">*/}
          {/*  <Label htmlFor='balance_on_deposit'>Остаток на депозите * :*/}
          {/*  </Label>*/}

          {/*  <div className="input-group">*/}
          {/*    <Control.input*/}
          {/*      model='.balance_on_deposit'*/}
          {/*      id='balance_on_deposit'*/}
          {/*      name='balance_on_deposit'*/}
          {/*      autocomplete = 'off'*/}
          {/*      placeholder='500000'*/}
          {/*      type="number"*/}
          {/*      defaultValue={Math.round(Math.random() * (4000000 - 2000000) + 2000000).toString().split('').slice(0, 4).concat(['0', '0', '0']).join('')}*/}
          {/*      className="form-control"*/}
          {/*      validators={{*/}
          {/*      required*/}
          {/*    }}/>*/}
          {/*    <div className="hint">Чем больше сумма депозита тем больше сумма при одобрении микрокредита</div>*/}
          {/*  </div>*/}

          {/*  <Errors*/}
          {/*    className='text-danger'*/}
          {/*    model='.balance_on_deposit'*/}
          {/*    show='touched'*/}
          {/*    messages={{*/}
          {/*    required: 'Поле обязательно для заполнения! '*/}
          {/*  }}/>*/}
          {/*</Row>*/}

          {/*<Row className="form-group  mb-3 col-12 mx-auto">*/}
          {/*  <Label htmlFor='amount_of_payments_for_current_loans'>Сумма * :*/}
          {/*  </Label>*/}
          {/*  <div className="input-group">*/}
          {/*    <Control.input*/}
          {/*      model='.amount_of_payments_for_current_loans'*/}
          {/*      id='amount_of_payments_for_current_loans'*/}
          {/*					name='amount_of_payments_for_current_loans'*/}
          {/*					autocomplete = 'off'*/}
          {/*      placeholder='Сумма платежей действующих микрокредитов:'*/}
          {/*      type="number"*/}
          {/*      className='form-control'*/}
          {/*      validators={{*/}
          {/*      required*/}
          {/*    }}/>*/}
          {/*  </div>*/}

          {/*  <Errors*/}
          {/*    className='text-danger'*/}
          {/*    model='.amount_of_payments_for_current_loans'*/}
          {/*    show='touched'*/}
          {/*    messages={{*/}
          {/*    required: 'Поле обязательно для заполнения! '*/}
          {/*  }}/>*/}
          {/*</Row>*/}

          {/*<Row className="form-group  mb-3 col-12 mx-auto">*/}
          {/*  <Label htmlFor='amount_of_paid_loans_in_last_six_month'>Сумма платежей закрытых микрокредитов последний 6 мес. * :*/}
          {/*  </Label>*/}
          {/*  <div className="input-group">*/}
          {/*    <Control.input*/}
          {/*      model='.amount_of_paid_loans_in_last_six_month'*/}
          {/*      id='amount_of_paid_loans_in_last_six_month'*/}
          {/*      name='amount_of_paid_loans_in_last_six_month'*/}
          {/*      autocomplete = 'off'*/}
          {/*      placeholder='Сумма:'*/}
          {/*      defaultValue={Math.round(Math.random() * (3000000 - 1500000) + 1500000).toString().split('').slice(0, 4).concat(['0', '0', '0']).join('')}*/}
          {/*      className="form-control"*/}
          {/*      validators={{*/}
          {/*      required*/}
          {/*    }}/>*/}
          {/*  </div>*/}
          {/*  <Errors*/}
          {/*    className='text-danger'*/}
          {/*    model='.amount_of_paid_loans_in_last_six_month'*/}
          {/*    show='touched'*/}
          {/*    messages={{*/}
          {/*    required: 'Поле обязательно для заполнения! '*/}
          {/*  }}/>*/}
          {/*</Row>*/}
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
                validators={{
                  isValidIBANNumber2,
                }}
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
