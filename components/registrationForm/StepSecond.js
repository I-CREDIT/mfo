import React from "react";
import { connect } from "react-redux";
import { Label, Row } from "reactstrap";
import { Control, Errors, Form } from "react-redux-form";
import InputMask from "react-input-mask";
import {
  postRegistrationSecond,
  fetchRegions,
  emptyMessage,
} from "../../store/actions/ActionCreators";
import {
  relative_type,
  gorods,
  addition_contact_type,
  speciality,
} from "../../defaults/defaultRelative";
import $ from "jquery";
import {
  required,
  phoneCheck,
  acceptCirrilic,
  streetValidation,
} from "../../defaults/validationredux";
import Spinner from "react-spinner-material";
import disableScroll from "disable-scroll";
import cookie from "js-cookie";

// Перевод для классового компонента
import withUseTranslation from "../../public/js/hocs/useTranslation";
import { Field } from "formik";
import { depositeValidation, requiredd } from "../../defaults/validations";

var scrollToElement = require("scroll-to-element");
const mapStateToProps = (state) => {
  return {
    somemessage: state.message,
    regionsReducer: state.regionsReducer,
    loading: state.loading,
    registration2: state.registration2,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchRegions: (reg_id) => dispatch(fetchRegions(reg_id)),
  postRegistrationSecond: (registration) =>
    dispatch(postRegistrationSecond(registration)),
});

const PhoneMask = (props) => (
  <InputMask
    mask="+7(999)-999-9999"
    maskPlaceholder={null}
    className="my-input"
    {...props}
  />
);

class SecondStep extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
      checked: false,
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleRegion = this.handleRegion.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    // this.handleCheck = this.handleCheck.bind(this);
  }

  // handleChange() {
  //   this.setState({
  //     checked: !this.state.checked,
  //   });
  // }

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

  // handleCheck = (e) => {
  //   this.setState({
  //     checked: !this.state.checked,
  //   });
  // };

  // handleRegion(event) {
  //   let input = this.state.input;
  //   input[event.target.name] = event.target.value;
  //   console.log(event.target.name);
  //   this.props.fetchRegions(event.target.value);
  //   this.setState({ input });
  // }

  handleSubmit(values) {
    var object = {};

    // if (this.state.checked) {
    //   object.apartment = "Частный дом";
    // } else {
    //   object.apartment = values.apartmentt;
    // }
    // object.finished_step = 2;

    object.source = "i-credit2";
    if (cookie.get("utm_source") !== undefined) {
      object.source = cookie.get("utm_source") + "_2";
    }

    const finalObjects = {
      ...values,
      ...object,
    };
    this.props.postRegistrationSecond(finalObjects);
  }

  componentDidMount() {
    $("input").on("focus", function () {
      var prev = $(this).offset().top;
      var inputHeight = prev - 210;
      // var inputHeight=prev.offset().top
      if (window.innerWidth <= 768) {
        $("html, body").animate({ scrollTop: inputHeight }, 300);
        return false;
      }
    });

    const progress = document.querySelector(".progress-done");

    progress.style.width = progress.getAttribute("data-done") + "%";
    progress.append(progress.getAttribute("data-done") + "%");
    progress.style.opacity = 1;

    $(document).ready(function () {
      $("input").on("change", function () {
        var cntreq = 0;
        var cntvals = 55;
        $("input").each(function (i, val) {
          cntreq++;
          if ($(this).val() != "") {
            cntvals += 1.5;
          }
        });
        var count = (cntvals / cntreq) * 100 - 20;
        $("#percentage").empty();
        $("#percentage").append(cntvals + "% completed");

        $("#progress-done").data("done", cntvals);
        $("#progress-done").width($("#progress-done").data("done") + "%");
        $("#progress-done").text($("#progress-done").data("done") + "%");
      });
    });
  }

  render() {
    // Достаем функцию-переводчик
    const { t } = this.props.useTranslationValue;

    return (
      <div>
        <div className="progressBar">
          <div
            className="progress-done"
            id="progress-done"
            data-done="55"
          ></div>
          <p className="counter">Вероятность одобрения</p>
        </div>
        {this.props.loading === true ? (
          <div className="modelLoader">{disableScroll.on()}</div>
        ) : (
          <div className="modelLoader loaded">{disableScroll.off()}</div>
        )}

        <Form
          className="container formStepp"
          model="registration2"
          onSubmit={(values) => this.handleSubmit(values)}
        >
          {this.props.somemessage.error !== null ? (
            <div className="alert alert-danger" role="alert">
              <strong>{this.props.somemessage.error}</strong>
            </div>
          ) : null}

          <h2 className="mt-5 mb-5">Информация о месте работы</h2>

          <Row className="form-group">
            <div className="col-md-6 mb-3">
              <Label>Должность *</Label>
              <Control.select
                model=".position"
                name="position"
                className="form-control"
                validators={{
                  required,
                }}
              >
                <option value=""></option>
                {speciality.map((spec) => (
                  <option key={spec.id} value={spec.id}>
                    {spec.name}
                  </option>
                ))}
              </Control.select>
              <Errors
                className="text-danger"
                model=".position"
                show="touched"
                messages={{
                  required: t("choose-one"),
                }}
              />
            </div>

            <div className="col-md-6 mb-3">
              <Label>Место работы *:</Label>
              <div className="input-group">
                <Control.input
                  model=".work_place"
                  autocomplete="off"
                  name="work_place"
                  className="form-control registerCyrril"
                  validators={{
                    required,
                  }}
                />
                <div className="hint">Обязательное поле</div>
              </div>
              <Errors
                className="text-danger "
                model=".work_place"
                show="touched"
                messages={{
                  required: t("mandatory-field"),
                }}
              />
            </div>

            <div className="col-md-6 mb-3">
              <Label htmlFor="">Сфера деятельности *:</Label>
              <div className="input-group">
                <Control.input
                  model=".sphere"
                  autocomplete="off"
                  name="sphere"
                  className="form-control"
                  validators={{
                    required,
                  }}
                />
                <div className="hint">Обязательное поле</div>
              </div>
              <Errors
                className="text-danger "
                model=".sphere"
                show="touched"
                messages={{
                  required: t("mandatory-field"),
                }}
              />
            </div>

            <div className="col-md-6 mb-3">
              <Label>Остаток на депозите *:</Label>
              <div className="input-group">
                <Control.input
                  model=".deposit"
                  autocomplete="off"
                  name="deposit"
                  className="form-control"
                  validators={{
                    required,
                  }}
                />
                <div className="hint">
                  Чем больше сумма депозита тем больше сумма при одобрении
                  микрокредита
                </div>
              </div>
              <Errors
                className="text-danger "
                model=".deposit"
                show="touched"
                messages={{
                  required: t("mandatory-field"),
                }}
              />
            </div>

            <div className="col-md-6 mb-3">
              <Label>
                Сумма платежей закрытых микрокредитов за последние 6 мес. *:
              </Label>
              <div className="input-group">
                <Control.input
                  model=".lastSix"
                  autocomplete="off"
                  name="lastSix"
                  className="form-control"
                  validators={{
                    required,
                  }}
                />
                <div className="hint">Обязательное поле</div>
              </div>
              <Errors
                className="text-danger "
                model=".lastSix"
                show="touched"
                messages={{
                  required: t("mandatory-field"),
                }}
              />
            </div>

            {/*<div className="col-md-6 mb-3">*/}
            {/*  <Label htmlFor="marital_status">{t("marital-status")}</Label>*/}
            {/*  <div className="input-group">*/}
            {/*    <Control.select*/}
            {/*      model=".marital_status"*/}
            {/*      name="marital_status"*/}
            {/*      className="form-control"*/}
            {/*      validators={{*/}
            {/*        required,*/}
            {/*      }}*/}
            {/*    >*/}
            {/*      <option value=""></option>*/}
            {/*      <option value="Женат/Замужем">{t("marital-status-1")}</option>*/}
            {/*      <option value="Холост/Не замужем">*/}
            {/*        {t("marital-status-2")}*/}
            {/*      </option>*/}
            {/*    </Control.select>*/}
            {/*  </div>*/}
            {/*  <Errors*/}
            {/*    className="text-danger"*/}
            {/*    model=".marital_status"*/}
            {/*    show="touched"*/}
            {/*    messages={{*/}
            {/*      required: t("choose-one"),*/}
            {/*    }}*/}
            {/*  />*/}
            {/*</div>*/}
            {/*<div className="col-md-6 mb-3">*/}
            {/*  <Label htmlFor="child_amount">{t("children-amount")}</Label>*/}
            {/*  <Control.select*/}
            {/*    model=".child_amount"*/}
            {/*    name="child_amound"*/}
            {/*    className="form-control"*/}
            {/*    validators={{*/}
            {/*      required,*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    <option value=""></option>*/}
            {/*    <option value="0">0</option>*/}
            {/*    <option value="1">1</option>*/}
            {/*    <option value="2">2</option>*/}
            {/*    <option value="3">3</option>*/}
            {/*    <option value="4">4</option>*/}
            {/*    <option value="5+">5+</option>*/}
            {/*  </Control.select>*/}
            {/*  <Errors*/}
            {/*    className="text-danger"*/}
            {/*    model=".child_amount"*/}
            {/*    show="touched"*/}
            {/*    messages={{*/}
            {/*      required: t("choose-one"),*/}
            {/*    }}*/}
            {/*  />*/}
            {/*</div>*/}
            {/*<div className="col-md-6 mb-3">*/}
            {/*  <Label htmlFor="education">{t("education")}</Label>*/}
            {/*  <Control.select*/}
            {/*    model=".education"*/}
            {/*    name="education"*/}
            {/*    className="form-control"*/}
            {/*    validators={{*/}
            {/*      required,*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    <option value=""></option>*/}
            {/*    <option value="Без образования">{t("education-1")}</option>*/}
            {/*    <option value="Среднее">{t("education-2")}</option>*/}
            {/*    <option value="Высшее">{t("education-3")}</option>*/}
            {/*  </Control.select>*/}
            {/*  <Errors*/}
            {/*    className="text-danger"*/}
            {/*    model=".education"*/}
            {/*    show="touched"*/}
            {/*    messages={{*/}
            {/*      required: t("choose-one"),*/}
            {/*    }}*/}
            {/*  />*/}
            {/*</div>*/}
            {/*<div className="col-md-6 mb-3">*/}
            {/*  <Label>{t("city")}</Label>*/}
            {/*  <Control.select*/}
            {/*    model=".city"*/}
            {/*    name="city"*/}
            {/*    className="form-control"*/}
            {/*    onChange={this.handleRegion}*/}
            {/*    validators={{*/}
            {/*      required,*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    <option value=""></option>*/}
            {/*    {gorods.map((gorod) => (*/}
            {/*      <option key={gorod.id} value={gorod.id}>*/}
            {/*        {gorod.name}*/}
            {/*      </option>*/}
            {/*    ))}*/}
            {/*  </Control.select>*/}
            {/*  <Errors*/}
            {/*    className="text-danger"*/}
            {/*    model=".city"*/}
            {/*    show="touched"*/}
            {/*    messages={{*/}
            {/*      required: t("choose-one"),*/}
            {/*    }}*/}
            {/*  />*/}
            {/*</div>*/}
            {/*<div className="col-md-6 mb-3">*/}
            {/*  <Label>{t("districts")}</Label>*/}
            {/*  <div className="input-group">*/}
            {/*    <Control.select*/}
            {/*      model=".regionOfCity_id"*/}
            {/*      name="regionOfCity_id"*/}
            {/*      className="form-control"*/}
            {/*      validators={{*/}
            {/*        required,*/}
            {/*      }}*/}
            {/*    >*/}
            {/*      <option value="" disabled>*/}
            {/*        {t("districts")}*/}
            {/*      </option>*/}
            {/*      {this.props.regionsReducer.regions.map((gorod) => (*/}
            {/*        <option key={gorod.id} value={gorod.id}>*/}
            {/*          {gorod.name}*/}
            {/*        </option>*/}
            {/*      ))}*/}
            {/*    </Control.select>*/}
            {/*    <div className="hint">{t("districts-1")}</div>*/}
            {/*  </div>*/}
            {/*  <Errors*/}
            {/*    className="text-danger"*/}
            {/*    model=".regionOfCity_id"*/}
            {/*    show="touched"*/}
            {/*    messages={{*/}
            {/*      required: t("choose-one"),*/}
            {/*    }}*/}
            {/*  />*/}
            {/*</div>*/}
            {/*<div className="col-md-6 mb-3">*/}
            {/*  <Label>{t("street")}</Label>*/}
            {/*  <Control.input*/}
            {/*    model=".street"*/}
            {/*    autocomplete="off"*/}
            {/*    name="street"*/}
            {/*    className="form-control"*/}
            {/*    validators={{*/}
            {/*      required,*/}
            {/*      streetValidation,*/}
            {/*    }}*/}
            {/*  />*/}
            {/*  <Errors*/}
            {/*    className="text-danger "*/}
            {/*    model=".street"*/}
            {/*    show="touched"*/}
            {/*    messages={{*/}
            {/*      required: t("mandatory-field"),*/}
            {/*      streetValidation: "Поле должно начинаться с цифры или буквы",*/}
            {/*    }}*/}
            {/*  />*/}
            {/*</div>*/}
            {/*<div className="col-md-6 mb-3">*/}
            {/*  <Label>{t("house")}</Label>*/}
            {/*  <Control.input*/}
            {/*    model=".home"*/}
            {/*    name="home"*/}
            {/*    autocomplete="off"*/}
            {/*    className="form-control"*/}
            {/*    validators={{*/}
            {/*      required,*/}
            {/*    }}*/}
            {/*  />*/}
            {/*  <Errors*/}
            {/*    className="text-danger"*/}
            {/*    model=".home"*/}
            {/*    show="touched"*/}
            {/*    messages={{*/}
            {/*      required: t("mandatory-field"),*/}
            {/*    }}*/}
            {/*  />*/}
            {/*</div>*/}
            {/*{this.state.checked ? (*/}
            {/*  <div className="col-md-6 mb-3">*/}
            {/*    <Label>{t("apartment-number")}</Label>*/}
            {/*    <Control.input*/}
            {/*      type="number"*/}
            {/*      model=".apartmentt"*/}
            {/*      name="apartment"*/}
            {/*      className="form-control"*/}
            {/*      disabled*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*) : (*/}
            {/*  <div className="col-md-6 mb-3">*/}
            {/*    <Label>{t("apartment-number")}</Label>*/}
            {/*    <Control.input*/}
            {/*      type="number"*/}
            {/*      model=".apartmentt"*/}
            {/*      name="apartmentt"*/}
            {/*      className="form-control"*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*)}*/}
            {/*<div className="col-md-6 mb-3">*/}
            {/*  <input*/}
            {/*    type="checkbox"*/}
            {/*    onChange={this.handleCheck}*/}
            {/*    defaultChecked={this.state.checked}*/}
            {/*  />*/}
            {/*  <label className="form-check-label ml-3" for="exampleCheck1">*/}
            {/*    {t("private-house")}*/}
            {/*  </label>*/}
            {/*</div>*/}
          </Row>

          <h2 className="mt-5 mb-5">{t("relative")}</h2>
          <Row>
            <div className="col-md-6 mb-3">
              <Label>{t("relative-name")}</Label>
              <div className="input-group ">
                <Control.input
                  model=".relative_name"
                  name="relative_name"
                  autocomplete="off"
                  className="form-control registerCyrril"
                  validators={{
                    required,
                    acceptCirrilic,
                  }}
                />
                <div className="hint">{t("cyrillic-name-only")}</div>
              </div>
              <Errors
                className="text-danger "
                model=".relative_name"
                show="touched"
                messages={{
                  required: t("mandatory-field"),
                  acceptCirrilic: t(""),
                }}
              />
            </div>

            <div className="col-md-6 mb-3">
              <Label>{t("relative-surname")}</Label>
              <div className="input-group">
                <Control.input
                  model=".relative_last_name"
                  autocomplete="off"
                  name="relative_last_name"
                  className="form-control registerCyrril"
                  validators={{
                    required,
                    acceptCirrilic,
                  }}
                />
                <div className="hint">{t("cyrillic-surname-only")}</div>
              </div>
              <Errors
                className="text-danger "
                model=".relative_last_name"
                show="touched"
                messages={{
                  required: t("mandatory-field"),
                  acceptCirrilic: t(""),
                }}
              />
            </div>

            <div className="col-md-6 mb-3">
              <Label>{t("relative-phone")}</Label>
              <div className="input-group">
                <Control
                  className="form-control"
                  placeholder="+7(705)000-00-00"
                  model=".relative_phone_number"
                  name="relative_phone_number"
                  type="tel"
                  component={PhoneMask}
                  validators={{
                    phoneCheck,
                  }}
                />
              </div>
              <Errors
                className="text-danger"
                model=".relative_phone_number"
                show="touched"
                messages={{
                  phoneCheck: t("no-operator"),
                }}
              />
            </div>

            <div className="col-md-6 mb-3">
              <Label>{t("relative-connection")}</Label>
              <Control.select
                model=".relative_type_id"
                name="relative_type_id"
                className="form-control"
                validators={{
                  required,
                }}
              >
                <option value=""></option>
                {relative_type.map((relative) => (
                  <option key={relative.id} value={relative.id}>
                    {t(relative.name)}
                  </option>
                ))}
              </Control.select>
              <Errors
                className="text-danger"
                model=".relative_type_id"
                show="touched"
                messages={{
                  required: t("choose-one"),
                }}
              />
            </div>
          </Row>

          {/*<h2 className="mt-5 mb-5">{t("relative-additional")}</h2>*/}
          {/*<Row className="mb-5">*/}
          {/*  <div className="col-md-6 mb-3">*/}
          {/*    <Label>{t("relative-name")}</Label>*/}
          {/*    <div className="input-group">*/}
          {/*      <Control.input*/}
          {/*        model=".additional_contact_name"*/}
          {/*        name="additional_contact_name"*/}
          {/*        className="form-control registerCyrril"*/}
          {/*        autocomplete="off"*/}
          {/*        validators={{*/}
          {/*          required,*/}
          {/*          acceptCirrilic,*/}
          {/*        }}*/}
          {/*      />*/}
          {/*      <div className="hint">{t("cyrillic-name-only")}</div>*/}
          {/*    </div>*/}
          {/*    <Errors*/}
          {/*      className="text-danger"*/}
          {/*      model=".additional_contact_name"*/}
          {/*      show="touched"*/}
          {/*      messages={{*/}
          {/*        required: t("mandatory-field"),*/}
          {/*        acceptCirrilic: t(""),*/}
          {/*      }}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*  <div className="col-md-6 mb-3">*/}
          {/*    <Label>{t("relative-surname")}</Label>*/}
          {/*    <div className="input-group">*/}
          {/*      <Control.input*/}
          {/*        model=".additional_contact_last_name"*/}
          {/*        name="additional_contact_last_name"*/}
          {/*        className="form-control registerCyrril"*/}
          {/*        autocomplete="off"*/}
          {/*        validators={{*/}
          {/*          required,*/}
          {/*          acceptCirrilic,*/}
          {/*        }}*/}
          {/*      />*/}
          {/*      <div className="hint">{t("cyrillic-surname-only")}</div>*/}
          {/*    </div>*/}
          {/*    <Errors*/}
          {/*      className="text-danger"*/}
          {/*      model=".additional_contact_last_name"*/}
          {/*      show="touched"*/}
          {/*      messages={{*/}
          {/*        required: t("mandatory-field"),*/}
          {/*        acceptCirrilic: t("cyrillic-only"),*/}
          {/*      }}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*  <div className="col-md-6 mb-3">*/}
          {/*    <Label>{t("relative-phone")}</Label>*/}
          {/*    <div className="input-group">*/}
          {/*      <Control*/}
          {/*        className="form-control"*/}
          {/*        placeholder="+7(705)000-00-00"*/}
          {/*        model=".additional_contact_phone"*/}
          {/*        name="additional_contact_phone"*/}
          {/*        type="tel"*/}
          {/*        component={PhoneMask}*/}
          {/*        validators={{*/}
          {/*          phoneCheck,*/}
          {/*        }}*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*    <Errors*/}
          {/*      className="text-danger"*/}
          {/*      model=".additional_contact_phone"*/}
          {/*      show="touched"*/}
          {/*      messages={{*/}
          {/*        phoneCheck: t("no-operator"),*/}
          {/*      }}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*  <div className="col-md-6 mb-3">*/}
          {/*    <Label>{t("relative-additional-connect")}</Label>*/}
          {/*    <Control.select*/}
          {/*      model=".additional_contact_type_id"*/}
          {/*      name="additional_contact_type_id"*/}
          {/*      className="form-control"*/}
          {/*      validators={{*/}
          {/*        required,*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      <option value=""></option>*/}
          {/*      {addition_contact_type.map((relative) => (*/}
          {/*        <option key={relative.id} value={relative.id}>*/}
          {/*          {t(relative.name)}*/}
          {/*        </option>*/}
          {/*      ))}*/}
          {/*    </Control.select>*/}
          {/*    <Errors*/}
          {/*      className="text-danger"*/}
          {/*      model=".additional_contact_type_id"*/}
          {/*      show="touched"*/}
          {/*      messages={{*/}
          {/*        required: t("choose-one"),*/}
          {/*      }}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*</Row>*/}

          {this.props.somemessage.error !== null ? (
            <div className="alert alert-danger" role="alert">
              <strong>{this.props.somemessage.error || null}</strong>
            </div>
          ) : null}
          <div className="button form-group mb-5">
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
                onClick={() => this.handleFocus()}
              >
                {t("send")}
              </button>
            )}
          </div>
        </Form>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withUseTranslation(SecondStep));
