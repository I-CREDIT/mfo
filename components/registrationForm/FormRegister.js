import React from "react";
import { connect } from "react-redux";
import {
  changingMoney,
  changingDay,
  postRegistration,
  getSMSFromBMG,
  getInfoFromBMG,
  getSMS,
} from "../../store/actions/ActionCreators";
import { Modal, ModalHeader, ModalBody, Label, Row } from "reactstrap";
import { Formik, Form, Field } from "formik";
import InputMask from "react-input-mask";
import Router from "next/router";
import ProgressBar from "../shared/Progressbar";
import swal from "sweetalert";
import {
  iinValidation,
  passwordCheck,
  phoneValidation,
  acceptCirrilic,
  acceptCirrilicOnly,
  validage,
  getAge,
  requiredd,
  validEmail,
  idNumber,
  CheckGivedDate,
  CheckExpDate,
} from "../../defaults/validations";
import Spinner from "react-spinner-material";
import disableScroll from "disable-scroll";
import $ from "jquery";
import { ifBlckList } from "../../defaults/blacklistPhones";
import { ifSaled } from "../../defaults/saled";
import { isFord } from "../../defaults/frods";

// Перевод для классового компонента
import withUseTranslation from "../../public/js/hocs/useTranslation";

let scrollToElement = require("scroll-to-element");

const mapStateToProps = (state) => {
  return {
    moneyVal: state.moneyVal,
    dayVal: state.dayVal,
    checked: false,
    somemessage: state.message,
    registration: state.registration,
    loading: state.loading,
    registration1: state.registration1,
  };
};

const mapDispatchToProps = (dispatch) => ({
  changingMoney: (money) => {
    dispatch(changingMoney(money));
  },
  changingDay: (day) => {
    dispatch(changingDay(day));
  },
  postRegistration: (registration) => dispatch(postRegistration(registration)),
  getSMSFromBMG: (registration) => dispatch(getSMSFromBMG(registration)),
  getSMS: (registration) => dispatch(getSMS(registration)),
  resetRegistration: () => {
    dispatch(actions.reset("registration"));
  },
});

const PhoneMask = ({ field, form, ...props }) => (
  <InputMask
    mask="+7(999)-999-9999"
    maskPlaceholder={null}
    value=""
    className="my-input"
    {...field}
    {...props}
  />
);

const IinMask = ({ field, form, ...props }) => (
  <InputMask
    mask="999999999"
    maskPlaceholder={null}
    className="my-input"
    value=""
    alwaysShowMask={false}
    {...field}
    {...props}
  />
);

const GivenDate = ({ field, form, ...props }) => (
  <InputMask
    mask="99.99.9999"
    maskPlaceholder={null}
    type="tel"
    className="my-input"
    {...field}
    {...props}
  />
);

class FormRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      checked: false,
      isOnBMG: false,
      phoneError: "",
      firstreg: [
        {
          name: "",
          middlename: "",
          last_name: "",
          iin: "",
          email: "",
          password: "",
          password_confirmation: "",
          phone: "",
        },
      ],
      test: "",
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitFail = this.handleSubmitFail.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handlePhone = (e) => {
    this.setState({ phone: e.target.value });
  };

  handleCheck = (e) => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  onChange = (e) => {
    let value = e.target.value;
    value = value.replace(/[^A-Za-z]/gi, "");
  };

  handleSubmitFail = (errors) => {
    let key = Object.keys(errors).reduce((k, l) => {
      return document.getElementsByName(k)[0].offsetTop <
        document.getElementsByName(l)[0].offsetTop
        ? k
        : l;
    });
    window.scrollTo(0, document.getElementsByName(key)[0].offsetTop - 100);
  };

  handleSubmit(values) {
    if (!validage(values.iin)) {
      // Проверка возвраста по иин
      swal(
        "Oops!",
        `По внутренним нормативным документам  ТОО "МФО i-redit.kz"  выдача микрокредита осуществляется  лицам достигшим 21-го года и не старше 67-х лет.`,
        "error"
      );
      return;
      // setTimeout(() => {
      //   Router.push("/");
      // }, 5000);
    }

    if (ifBlckList(values.phone)) {
      // Черный список телефонов которые не может подавать
      swal(
        "Важно",
        "Вы не можете подавать заявку в нашу организацию! (Черный список)",
        "error"
      );
      return;
      // setTimeout(() => {
      //   Router.push('/')
      // }, 5000);
    }

    if (ifSaled(values.iin)) {
      swal(
        "Важно",
        "Вы не можете подавать заявку в нашу организацию! (Проданный лид)",
        "error"
      );
      return;
      // setTimeout(() => {
      //   Router.push('/')
      // }, 5000);
    }

    if (isFord(values.iin)) {
      swal(
        "Важно",
        "Вы не можете подавать заявку в нашу организацию! (Фрод)",
        "error"
      );
      return;
      // setTimeout(() => {
      //   Router.push('/')
      // }, 5000);
    }

    values.loan_amount = this.props.moneyVal;
    values.period_in_days = this.props.dayVal;

    const user = {
      ...values,
    };

    if (this.state.isOnBMG) {
      this.props.getSMSFromBMG(user).then((response) => {
        if (!response.success) {
          this.setState({
            isOnBMG: false,
          });
        }
      });
    } else {
      // let moneyval = this.props.moneyVal;
      // let dayval = this.props.dayVal;
      // let other = {};
      // values.loan_amount = this.props.moneyVal;
      // values.period_in_days = this.props.dayVal;
      //
      // const finalObjects = {
      //   // ...other,
      //   ...values,
      // };
      // values.major_loan_amount = Math.floor(parseInt(moneyval) * 1.15);
      // values.grace_period_amount = Math.floor(parseInt(moneyval) * 1.15);
      // values.loan_amount_for_max_days = Math.floor(
      //   (Math.round(parseInt(moneyval) * (1 + (parseInt(dayval) / 100) * 2)) /
      //     100) *
      //     100
      // );
      // values.insurance_amount =
      //   Math.floor(parseInt(moneyval) * 1.15) - parseInt(moneyval);
      // values.award_amount =
      //   Math.floor(parseInt(moneyval) * 1.15) - parseInt(moneyval);
      // other.finished_step = 1;

      // const finalObjects = {
      //   // ...other,
      //   ...values,
      // };

      // if (!validage(values.iin)) {
      //   // Проверка возвраста по иин
      //   swal(
      //     "Oops!",
      //     `По внутренним нормативным документам  ТОО "МФО i-redit.kz"  выдача микрокредита осуществляется  лицам достигшим 21-го года и не старше 67-х лет.`,
      //     "error"
      //   );
      //   setTimeout(() => {
      //     Router.push("/");
      //   }, 5000);
      // }
      //
      // if (ifBlckList(values.phone)) {
      //   // Черный список телефонов которые не может подавать
      //   swal(
      //     "Важно",
      //     "Вы не можете подавать заявку в нашу организацию! (Черный список)",
      //     "error"
      //   );
      //   setTimeout(() => {
      //     // Router.push('/')
      //   }, 5000);
      // }
      //
      // if (ifSaled(values.iin)) {
      //   swal(
      //     "Важно",
      //     "Вы не можете подавать заявку в нашу организацию! (Проданный лид)",
      //     "error"
      //   );
      //   setTimeout(() => {
      //     // Router.push('/')
      //   }, 5000);
      // }
      //
      // if (isFord(values.iin)) {
      //   swal(
      //     "Важно",
      //     "Вы не можете подавать заявку в нашу организацию! (Фрод)",
      //     "error"
      //   );
      //   setTimeout(() => {
      //     // Router.push('/')
      //   }, 5000);
      // }

      this.props.getSMS(user);

      // if (
      //   validage(values.iin) &&
      //   !ifBlckList(values.phone) &&
      //   !ifSaled(values.iin) &&
      //   !isFord(values.iin)
      // ) {
      //   this.props.postRegistration(finalObjects);
      // }
    }
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

  getErrorMessage() {
    return this.props.somemessage.error !== null ? (
      <div className="alert alert-danger" role="alert">
        <strong>{this.props.somemessage.error}</strong>
      </div>
    ) : null;
  }

  toggleHideBMG() {
    this.setState({
      isOnBMG: !this.state.isOnBMG,
    });
  }

  componentDidMount() {
    const progress = document.querySelector(".progress-done");
    progress.style.width = progress.getAttribute("data-done") + "%";
    progress.append(progress.getAttribute("data-done") + "%");
    progress.style.opacity = 1;

    $(document).ready(function () {
      $("input").on("change", function () {
        var cntreq = 0;
        var cntvals = 0;
        $("input").each(function (i, val) {
          cntreq++;
          if ($(this).val() != "") {
            cntvals += 5;
          }
        });
        var count = (cntvals / cntreq) * 100 - 20;
        $("#percentage").empty();
        $("#percentage").append(cntvals + "% completed");

        $("#progress-done").data("done", cntvals);
        $("#progress-done").width($("#progress-done").data("done") + "% ");
        $("#progress-done").text($("#progress-done").data("done") + "% ");
      });
    });
  }

  render() {
    // Достаем функцию-переводчик
    const { t, i18n } = this.props.useTranslationValue;

    return (
      <div>
        <div className="progressBar">
          <div className="progress-done" id="progress-done" data-done="0" />
          <p className="counter">{t("probability")}</p>
        </div>
        {this.props.loading === true ? (
          <div className="modelLoader">{disableScroll.on()}</div>
        ) : (
          <div className="modelLoader loaded">{disableScroll.off()}</div>
        )}

        {this.state.isOnBMG ? (
          <Formik
            initialValues={{
              loan_amount: "",
              period_in_days: "",
              major_loan_amount: "",
              grace_period_amount: "",
              loan_amount_for_max_days: "",
              insurance_amount: "",
              award_amount: "",
              source: "i-credit.kz",
              name: "",
              middlename: "",
              last_name: "",
              email: "",
              iin: "",
              phone: "+7",
              password: "",
              password_confirmation: "",
              doc_number: "",
              doc_issue: "",
              start_given: "",
              end_given: "",
            }}
            onSubmit={(values) => {
              this.handleSubmit(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="container formsStep">
                {this.getErrorMessage()}

                <h2 className="text-center">{t("registration")}</h2>

                <div className="row form-group  mx-auto">
                  <div className="col-12 mb-2">
                    <Label htmlFor="name">{t("name")}</Label>
                    <div className="input-group">
                      <Field
                        name="name"
                        autocomplete="off"
                        placeholder={t("name")}
                        className="form-control  text-capitalize registerCyrril"
                        validate={acceptCirrilic}
                      />
                      <div className="hint">{t("cyrillic-name-only")}</div>
                    </div>
                    {errors.name && touched.name && (
                      <div className="text-danger">{t(errors.name)}</div>
                    )}
                  </div>

                  <div className="col-12 mb-2">
                    <Label htmlFor="middlename">{t("surname")}</Label>
                    <div className="input-group">
                      <Field
                        name="middlename"
                        autocomplete="off"
                        placeholder={t("surname")}
                        className="form-control  text-capitalize registerCyrril"
                        validate={acceptCirrilic}
                      />
                      <div className="hint">{t("cyrillic-surname-only")}</div>
                    </div>
                    {errors.middlename && touched.middlename && (
                      <div className="text-danger">{t(errors.middlename)}</div>
                    )}
                  </div>

                  <div className="col-12 mb-2">
                    <Label htmlFor="last_name">{t("patronymic")}</Label>
                    <div className="input-group">
                      <Field
                        name="last_name"
                        autocomplete="off"
                        placeholder={t("patronymic")}
                        className="form-control  text-capitalize registerCyrril"
                        validate={acceptCirrilicOnly}
                      />
                      <div className="hint">Отчество только на киррилице</div>
                    </div>
                    {errors.last_name && touched.last_name && (
                      <div className="text-danger">{t(errors.last_name)}</div>
                    )}
                  </div>
                  <div className="col-12 mb-2">
                    <Label htmlFor="iin">{t("iin")}</Label>
                    <div className="input-group">
                      <Field
                        name="iin"
                        type="tel"
                        className="form-control"
                        validate={iinValidation}
                        component={IinMask}
                        placeholder={t("enter-here--register")}
                      />
                    </div>
                    {errors.iin && touched.iin && (
                      <div className="text-danger">{t(errors.iin)}</div>
                    )}
                  </div>

                  <div className="col-12 mb-2">
                    <Label htmlFor="phone">{t("phone")}</Label>
                    <div className="input-group">
                      <Field
                        name="phone"
                        type="tel"
                        className="form-control"
                        validate={phoneValidation}
                        component={PhoneMask}
                        placeholder="+7(705)000-00-00"
                      />
                    </div>
                    {errors.phone && touched.phone && (
                      <div className="text-danger">{t(errors.phone)}</div>
                    )}
                  </div>

                  <div className="col-12 mb-2">
                    <Label htmlFor="phone">{t("password")}</Label>
                    <div className="input-group">
                      <Field
                        name="password"
                        className="form-control"
                        validate={passwordCheck}
                        placeholder={t("password")}
                        type="password"
                      />
                    </div>
                    {errors.password && touched.password && (
                      <div className="text-danger">{t(errors.password)}</div>
                    )}
                  </div>

                  {/*<div className="col-12 mb-2">*/}
                  {/*  <Label htmlFor="phone">{t("password-repeat")}</Label>*/}
                  {/*  <div className="input-group">*/}
                  {/*    <Field*/}
                  {/*      name="password_confirmation"*/}
                  {/*      className="form-control"*/}
                  {/*      type="password"*/}
                  {/*      validate={requiredd}*/}
                  {/*      placeholder={t("password-repeat")}*/}
                  {/*    />*/}
                  {/*  </div>*/}
                  {/*  {errors.password_confirmation &&*/}
                  {/*    touched.password_confirmation && (*/}
                  {/*      <div className="text-danger">*/}
                  {/*        {t(errors.password_confirmation)}*/}
                  {/*      </div>*/}
                  {/*    )}*/}
                  {/*</div>*/}
                </div>

                <div className="col-12 mb-2 form-group d-flex align-items-center col-12 mx-auto">
                  <input
                    type="checkbox"
                    onChange={this.handleCheck}
                    defaultChecked={this.state.checked}
                  />
                  {i18n.language === "ru" ? (
                    <label
                      className="form-check-label ml-3"
                      htmlFor="exampleCheck1"
                    >
                      {t("agree-1")}
                      <a
                        className="agreement "
                        href="https://api.money-men.kz/docs/approve.pdf"
                        target="_blank"
                      >
                        {t("agree-red")}
                      </a>
                    </label>
                  ) : (
                    <label
                      className="form-check-label ml-3"
                      htmlFor="exampleCheck1"
                    >
                      {t("agree-1")}
                      <a
                        className="agreement "
                        href="https://api.money-men.kz/docs/approve.pdf"
                        target="_blank"
                      >
                        {t("agree-red")}
                      </a>
                      {t("agree-2")}
                    </label>
                  )}
                </div>

                {this.getErrorMessage()}

                <div className="button form-group">
                  {this.props.loading === true ? (
                    <div>
                      <Spinner
                        className="loading"
                        size={200}
                        spinnerColor={"#ef2221"}
                        spinnerWidth={2}
                        visible={true}
                      />
                    </div>
                  ) : (
                    <div className="registration-buttons">
                      <button
                        onClick={() => this.toggleHideBMG()}
                        className="agreement-btn"
                      >
                        Регистрация вручную
                      </button>
                      <button
                        disabled={!this.state.checked}
                        type="submit"
                        onClick={() => this.handleFocus()}
                        className="agreement-btn"
                      >
                        {t("get-code")}
                      </button>
                    </div>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        ) : (
          <Formik
            initialValues={{
              loan_amount: "",
              period_in_days: "",
              major_loan_amount: "",
              grace_period_amount: "",
              loan_amount_for_max_days: "",
              insurance_amount: "",
              award_amount: "",
              source: "i-credit.kz",
              name: "",
              middlename: "",
              last_name: "",
              email: "",
              iin: "",
              phone: "+7",
              password: "",
              password_confirmation: "",
              doc_number: "",
              doc_issue: "",
              start_given: "",
              end_given: "",
            }}
            onSubmit={(values) => {
              this.handleSubmit(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="container formsStep">
                {this.getErrorMessage()}

                <h2 className="text-center">{t("registration")}</h2>
                <div className="row form-group  mx-auto">
                  <div className="col-12 mb-2">
                    <Label htmlFor="loan_amount">{t("sum")}</Label>
                    <div className="input-group">
                      <Field
                        name="loan_amount"
                        className="form-control focus-visible"
                        value={this.props.moneyVal}
                        disabled
                        data-focus-visible-added
                      />
                      <div className="input-group-append">
                        <a
                          data-toggle="modal"
                          data-target="#myModalCalc"
                          className="input-group-text"
                          onClick={this.toggleModal}
                        >
                          {t("change")}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mb-2">
                    <Label htmlFor="period_in_days">
                      {t("days--uppercase")}
                    </Label>
                    <div className="input-group">
                      <Field
                        name="period_in_days"
                        className="form-control focus-visible"
                        value={this.props.dayVal}
                        disabled
                        data-focus-visible-added
                      />
                      <div className="input-group-append">
                        <a
                          data-toggle="modal"
                          data-target="#myModalCalc"
                          className="input-group-text"
                          onClick={this.toggleModal}
                        >
                          {t("change")}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mb-2">
                    <Label htmlFor="name">{t("name")}</Label>
                    <div className="input-group">
                      <Field
                        name="name"
                        autocomplete="off"
                        placeholder={t("name")}
                        className="form-control  text-capitalize registerCyrril"
                        validate={acceptCirrilic}
                      />
                      <div className="hint">{t("cyrillic-name-only")}</div>
                    </div>
                    {errors.name && touched.name && (
                      <div className="text-danger">{t(errors.name)}</div>
                    )}
                  </div>

                  <div className="col-12 mb-2">
                    <Label htmlFor="middlename">{t("surname")}</Label>
                    <div className="input-group">
                      <Field
                        name="middlename"
                        autocomplete="off"
                        placeholder={t("surname")}
                        className="form-control  text-capitalize registerCyrril"
                        validate={acceptCirrilic}
                      />
                      <div className="hint">{t("cyrillic-surname-only")}</div>
                    </div>
                    {errors.middlename && touched.middlename && (
                      <div className="text-danger">{t(errors.middlename)}</div>
                    )}
                  </div>

                  <div className="col-12 mb-2">
                    <Label htmlFor="last_name">{t("patronymic")}</Label>
                    <div className="input-group">
                      <Field
                        name="last_name"
                        autocomplete="off"
                        placeholder={t("patronymic")}
                        className="form-control  text-capitalize registerCyrril"
                        validate={acceptCirrilicOnly}
                      />
                      <div className="hint">Отчество только на киррилице</div>
                    </div>
                    {errors.last_name && touched.last_name && (
                      <div className="text-danger">{t(errors.last_name)}</div>
                    )}
                  </div>

                  <div className="col-12 mb-2">
                    <Label htmlFor="email">{t("mail")}</Label>
                    <div className="input-group">
                      <Field
                        name="email"
                        className="form-control"
                        validate={validEmail}
                        placeholder={t("mail")}
                      />
                    </div>
                    {errors.email && touched.email && (
                      <div className="text-danger">{t(errors.email)}</div>
                    )}
                  </div>

                  <div className="col-12 mb-2">
                    <Label htmlFor="iin">{t("iin")}</Label>
                    <div className="input-group">
                      <Field
                        name="iin"
                        type="tel"
                        className="form-control"
                        validate={iinValidation}
                        component={IinMask}
                        placeholder={t("enter-here--register")}
                      />
                    </div>
                    {errors.iin && touched.iin && (
                      <div className="text-danger">{t(errors.iin)}</div>
                    )}
                  </div>

                  <div className="col-12 mb-2">
                    <Label htmlFor="phone">{t("phone")}</Label>
                    <div className="input-group">
                      <Field
                        name="phone"
                        type="tel"
                        className="form-control"
                        validate={phoneValidation}
                        component={PhoneMask}
                        placeholder="+7(705)000-00-00"
                      />
                    </div>
                    {errors.phone && touched.phone && (
                      <div className="text-danger">{t(errors.phone)}</div>
                    )}
                  </div>

                  <div className="col-12 mb-2">
                    <Label htmlFor="doc_number">
                      Номер удостворения личности *
                    </Label>
                    <Field
                      validate={idNumber}
                      name="doc_number"
                      className="form-control"
                      component={IinMask}
                    />
                    {errors.doc_number && touched.doc_number && (
                      <p className="text-danger">{t(errors.doc_number)}</p>
                    )}
                  </div>

                  <div className="col-12 mb-2">
                    <Label htmlFor="start_given">
                      Дата выдачи(дд.мм.гггг) * :
                    </Label>
                    <div className="input-group">
                      <Field
                        name="start_given"
                        className="form-control"
                        validate={CheckGivedDate}
                        component={GivenDate}
                      ></Field>

                      <div className="hint">Дата выдачи (ДД.ММ.ГГГГ)</div>
                    </div>
                    {errors.start_given && touched.start_given && (
                      <p className="text-danger">{t(errors.start_given)}</p>
                    )}
                  </div>

                  <div className="col-12 mb-2">
                    <Label htmlFor="end_given">
                      Срок действия (дд.мм.гггг) * :
                    </Label>
                    <div className="input-group">
                      <Field
                        name="end_given"
                        className="form-control"
                        validate={CheckExpDate}
                        component={GivenDate}
                      ></Field>

                      <div className="hint">Срок действия (ДД.ММ.ГГГГ)</div>
                    </div>
                    {errors.end_given && touched.end_given && (
                      <p className="text-danger">{t(errors.end_given)}</p>
                    )}
                  </div>

                  <div className="col-12 mb-2">
                    <Label htmlFor="doc_issue">Кем выдано *</Label>
                    <Field
                      as="select"
                      name="doc_issue"
                      validate={requiredd}
                      className="form-control"
                    >
                      <option value="" disabled selected>
                        Кем выдано
                      </option>
                      <option value="МЮ РК">МЮ РК</option>
                      <option value="МВД РК">МВД РК</option>
                    </Field>
                    {errors.doc_issue && touched.doc_issue && (
                      <p className="text-danger">{t(errors.doc_issue)}</p>
                    )}
                  </div>

                  <div className="col-12 mb-2">
                    <Label htmlFor="phone">{t("password")}</Label>
                    <div className="input-group">
                      <Field
                        name="password"
                        className="form-control"
                        validate={passwordCheck}
                        placeholder={t("password")}
                        type="password"
                      />
                    </div>
                    {errors.password && touched.password && (
                      <div className="text-danger">{t(errors.password)}</div>
                    )}
                  </div>

                  {/*<div className="col-12 mb-2">*/}
                  {/*  <Label htmlFor="phone">{t("password-repeat")}</Label>*/}
                  {/*  <div className="input-group">*/}
                  {/*    <Field*/}
                  {/*      name="password_confirmation"*/}
                  {/*      className="form-control"*/}
                  {/*      type="password"*/}
                  {/*      validate={requiredd}*/}
                  {/*      placeholder={t("password-repeat")}*/}
                  {/*    />*/}
                  {/*  </div>*/}
                  {/*  {errors.password_confirmation &&*/}
                  {/*    touched.password_confirmation && (*/}
                  {/*      <div className="text-danger">*/}
                  {/*        {t(errors.password_confirmation)}*/}
                  {/*      </div>*/}
                  {/*    )}*/}
                  {/*</div>*/}
                </div>
                <div className="col-12 mb-2 form-group d-flex align-items-center col-12 mx-auto">
                  <input
                    type="checkbox"
                    onChange={this.handleCheck}
                    defaultChecked={this.state.checked}
                  />
                  {i18n.language === "ru" ? (
                    <label
                      className="form-check-label ml-3"
                      htmlFor="exampleCheck1"
                    >
                      {t("agree-1")}
                      <a
                        className="agreement "
                        href="https://api.money-men.kz/docs/approve.pdf"
                        target="_blank"
                      >
                        {t("agree-red")}
                      </a>
                    </label>
                  ) : (
                    <label
                      className="form-check-label ml-3"
                      htmlFor="exampleCheck1"
                    >
                      {t("agree-1")}
                      <a
                        className="agreement "
                        href="https://api.money-men.kz/docs/approve.pdf"
                        target="_blank"
                      >
                        {t("agree-red")}
                      </a>
                      {t("agree-2")}
                    </label>
                  )}
                </div>

                {this.getErrorMessage()}

                <div className="button form-group">
                  {this.props.loading === true ? (
                    <div>
                      <Spinner
                        className="loading"
                        size={200}
                        spinnerColor={"#ef2221"}
                        spinnerWidth={2}
                        visible={true}
                      />
                    </div>
                  ) : (
                    <div className="registration-buttons">
                      {/*<button*/}
                      {/*  onClick={() => this.toggleHideBMG()}*/}
                      {/*  className="agreement-btn"*/}
                      {/*>*/}
                      {/*  Регистрация egov*/}
                      {/*</button>*/}
                      <button
                        disabled={!this.state.checked}
                        type="submit"
                        onClick={() => this.handleFocus()}
                        className="agreement-btn"
                      >
                        {t("get-code")}
                      </button>
                    </div>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        )}

        <Modal
          class="modal modal-calculator"
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal}
          size="lg"
        >
          <ModalHeader toggle={this.toggleModal}>Калькулятор</ModalHeader>
          <ModalBody>
            <ProgressBar className="progressbar modal" />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withUseTranslation(FormRegister));
