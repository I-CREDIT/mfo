import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Router from "next/router";
import usersReducer from "../../store/reducers/userReducer";
import Spinner from "react-spinner-material";
import swal from "sweetalert";
import MicrocreditAgreementDocument from "../document_1/microcreditAgreement";
import MicrocreditInsuranceDocument from "../document_1/microcreditInsurance";
import InsuranceApplicationDocument from "../document_1/insuranceApplication";
import InsuranceContractDocument from "../document_1/insuranceContract";
import ApplicationRestructuringDocument from "../document_1/applicationRestructuring";
import RestructuringAgreementDocument from "../document_1/restructuringAgreement";
import cookie from "js-cookie";

// Перевод для классового компонента
import withUseTranslation from "../../public/js/hocs/useTranslation";
import { stepRegistration } from "../../store/actions/ActionCreators";

// export const clientData = {
//   name: props.userReducer.user.UF_5,
//   secondName: props.userReducer.user.UF_6
// }
// console.log(clientData)

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
    userStatus: state.userStatus,
    userHistory: state.userHistory,
  };
};

// console.log(this.props.userStatus.userStatus.todayAmount)
class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnLoading: false,
    };
    this.state = {
      sendRepeat: true,
    };
    this.state = {
      step: "",
    };
    this.state = {
      repeatMessage: "",
    };
    this.state = {
      timeChSI: true,
    };
  }

  getCurrentStep() {
    axios
      .post(
        `https://api.i-credit.kz/api/notFull`,
        {
          token: cookie.get("token"),
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        console.log(res); // нужно отсюда взять step!
        if (res.data.success) {
          this.setState({
            step: res.data.step,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getCurrentStep();

    let time;

    if (this.props.userStatus.userStatus.stage === 12) {
      const getTimeRemaining = (endtime) => {
        // создаем функцию котороая показывает сколько времени осталось
        const t = Date.parse(endtime) - Date.parse(new Date()); // переменная сколько милисекунд осталось
        let days = Math.floor(t / (1000 * 60 * 60 * 24)), // переменная сколько дней осталось
          hours = Math.floor((t / (1000 * 60 * 60)) % 24), // переменная сколько часов осталось
          minutes = Math.floor((t / (1000 * 60)) % 60), // переменная сколько минут осталось
          seconds = Math.floor((t / 1000) % 60); // переменная сколько секунд осталось

        time = t;

        if (time <= 0) {
          this.setState({
            timeChSI: false,
          });
        }

        return {
          // и возвращаем все эти данные в объекте, чтобы удобнее их было использовать
          total: t,
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds,
        };
      };

      function getZero(num) {
        // это функция которая добавляет нолик перед числом, если число становится однозначным, чтобы выглядело красиво
        if (num >= 0 && num < 10) {
          return `0${num}`;
        } else {
          return num;
        }
      }

      function setClock(selector, endtime) {
        // это функция которая будет отображать нам непосредственно в HTML нажи часы обновляя время
        let timer = document.querySelector(selector), // создаем переменную которая будет являтся родительским кодом для наших элементов (дни, часы, минуты, секунды)
          days = timer.querySelector("#days"), // тут берем уже дни
          hours = timer.querySelector("#hours"), // тут берем уже часы
          minutes = timer.querySelector("#minutes"), // тут берем уже минуты
          seconds = timer.querySelector("#seconds"), // тут берем уже секунды
          timerInterval = setInterval(updateClock, 1000); // тут вызываем функцию updateClock каждую секунду чтобы на странице по сендно обновляло время

        updateClock(); // тут мы отдельно вызываем функцию, чтобы с первых мгновений показывало правильное время

        function updateClock() {
          // эта функция добавляет в HTML код наши данные
          const t = getTimeRemaining(endtime); // тут переменная уже берет данные с объекта функции вначале

          console.log(t.total);

          days.innerHTML = getZero(t.days); // и тут вкладываем наше время куда надо в HTML код
          hours.innerHTML = getZero(t.hours); // и тут вкладываем наше время куда надо в HTML код
          minutes.innerHTML = getZero(t.minutes); // и тут вкладываем наше время куда надо в HTML код
          seconds.innerHTML = getZero(t.seconds); // и тут вкладываем наше время куда надо в HTML код
          if (t.total <= 0) {
            clearInterval(timerInterval);
          }
        }
      }
      setClock(".timer", "2022-06-30");
    }
  }

  myFunc() {
    if (this.state.step === 2 || this.state.step === 3) {
      window.scrollTo(0, 0);
      Router.push(`/cabinet/continue`);
    }
  }

  handleSubmit() {
    let values = {
      iin: this.props.userReducer.user.UF_4,
      amount:
        +this.props.userStatus.userStatus.todayAmount >
        +this.props.userStatus.userStatus.mainAmount * 2.001
          ? +this.props.userStatus.userStatus.mainAmount * 2
          : +this.props.userStatus.userStatus.todayAmount,
    };
    this.setState({
      btnLoading: true,
    });
    // swal("Проверьте ваши данные", {
    //   text: `Проверьте ваши данные

    //   Ваш ИИН: ${values.iin}    Сумма оплаты: ${(+values.amount).toLocaleString("ru-RU")} тг`,
    //   buttons: {
    //     catch: {
    //       text: "Подтвердить",
    //       value: "catch",
    //     },
    //     cancel: "Отмена"
    //   }
    // }).then(value=>{
    //   switch (value) {
    //     case "catch":
    this.setState({
      btnLoading: true,
    });
    axios
      .post(`https://api.i-credit.kz/api/make_payment123`, values)
      .then((response) => {
        this.setState({
          btnLoading: false,
        });
        location.replace(response.data[0] + "?" + response.data[1]);
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          btnLoading: false,
        });
      });
    //     case "cancel":
    //       this.setState({
    //         btnLoading: false,
    //       });
    //       break
    //   }
    // })
  }

  handleVerify() {
    axios
      .get(`https://api.i-credit.kz/api/getScore`, {
        params: {
          token: cookie.get("token"),
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${cookie.get("token")}`,
        },
      })
      .then((response) => {
        if (response.data?.success && response.data?.decision) {
          Router.push(
            `/newAgreements?token=${cookie.get("token")}&bmg=${
              response.data?.bmg ? 1 : 0
            }`
          );
        } else {
          swal(
            "Ошибка!",
            response.data?.message || "Что-то пошло не так.",
            "error"
          );
        }
      });
  }

  handleSubmitProlongation() {
    let values = {
      iin: this.props.userReducer.user.UF_4,
      amount:
        +this.props.userStatus.userStatus.todayAmount >
        +this.props.userStatus.userStatus.mainAmount * 2.001
          ? +this.props.userStatus.userStatus.mainAmount * 2 -
            +this.props.userStatus.userStatus.amount
          : this.props.userStatus.userStatus.prolongation,
    };
    this.setState({
      btnLoading: true,
    });
    // swal("Проверьте ваши данные", {
    //   text: `Проверьте ваши данные

    //   Ваш ИИН: ${values.iin}    Сумма оплаты: ${(+values.amount).toLocaleString("ru-RU")} тг`,
    //   buttons: {
    //     catch: {
    //       text: "Подтвердить",
    //       value: "catch",
    //     },
    //     cancel: "Отмена"
    //   }
    // }).then(value=>{
    //   switch (value) {
    //     case "catch":
    this.setState({
      btnLoading: true,
    });
    axios
      .post(`https://api.i-credit.kz/api/make_payment123`, values)
      .then((response) => {
        this.setState({
          btnLoading: false,
        });
        location.replace(response.data[0] + "?" + response.data[1]);
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          btnLoading: false,
        });
      });
    //   case "cancel":
    //     this.setState({
    //       btnLoading: false,
    //     });
    //     break
    // }
    // })
  }

  handleSubmitChSI() {
    let values = {
      iin: this.props.userReducer.user.UF_4,
      amount: +this.props.userStatus.userStatus.mainAmount,
    };
    this.setState({
      btnLoading: true,
    });
    // swal("Проверьте ваши данные", {
    //   text: `Проверьте ваши данные

    //   Ваш ИИН: ${values.iin}    Сумма оплаты: ${(+values.amount).toLocaleString("ru-RU")} тг`,
    //   buttons: {
    //     catch: {
    //       text: "Подтвердить",
    //       value: "catch",
    //     },
    //     cancel: "Отмена"
    //   }
    // }).then(value=>{
    //   switch (value) {
    //     case "catch":
    this.setState({
      btnLoading: true,
    });
    axios
      .post(`https://api.i-credit.kz/api/make_payment123`, values)
      .then((response) => {
        this.setState({
          btnLoading: false,
        });
        location.replace(response.data[0] + "?" + response.data[1]);
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          btnLoading: false,
        });
      });
    //     case "cancel":
    //       this.setState({
    //         btnLoading: false,
    //       });
    //       break
    //   }
    // })
  }

  render() {
    // Достаем функцию-переводчик
    const { t, i18n } = this.props.useTranslationValue;
    switch (this.props.userStatus.userStatus.stage) {
      case 1:
        return (
          <div className="mt-5">
            <h5 className="text-center">{t("current-application")}</h5>
            {i18n.language === "ru" ? (
              <div className="cabinetmessage text-center">
                У вас микрокредит в статусе
                <b>"Льготный период"</b>
              </div>
            ) : (
              <div className="cabinetmessage text-center">
                Сізде
                <b>"Льготный период"</b>
                мәртебесінде шағын несие бар
              </div>
            )}
            <div>
              <table className="lperiod">
                <thead>
                  <tr>
                    <th>{t("give-date")} 📅</th>
                    {/* <th>
                      Сумма на руки 💰
                    </th> */}
                    <th>{t("grace-period-end-date")} 📅</th>
                    <th>{t("main-debt")} 💸</th>
                    <th>{t("repayment-amount-grace-period")} 💸</th>
                    <th>{t("debt-sum")}</th>
                    <th>{t("pay-date")} 📅</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.props.userStatus.userStatus.givenDate}</td>
                    {/* <td>{this.props.userStatus.userStatus.amount}</td> */}
                    <td>{this.props.userStatus.userStatus.lp}</td>
                    <td>
                      {(+this.props.userStatus.userStatus
                        .mainAmount).toLocaleString()}{" "}
                      тг
                    </td>
                    <td>
                      {(+this.props.userStatus.userStatus
                        .lpAmount).toLocaleString()}{" "}
                      тг
                    </td>
                    <td>
                      {(+this.props.userStatus.userStatus
                        .todayAmount).toLocaleString()}{" "}
                      тг
                    </td>
                    <td>{this.props.userStatus.userStatus.endDate}</td>
                  </tr>
                </tbody>
              </table>
              <div className="buttonForm">
                {this.state.btnLoading === true ? (
                  <Spinner
                    className="loading"
                    size={200}
                    spinnerColor={"#ef2221"}
                    spinnerWidth={2}
                    visible={true}
                  />
                ) : (
                  <button
                    onClick={() => this.handleSubmit()}
                    className=" oplataform--button"
                    type="submit"
                  >
                    {i18n.language === "ru"
                      ? `Погасить ${(+this.props.userStatus.userStatus
                          .todayAmount).toLocaleString("ru-RU")} тенге`
                      : `${(+this.props.userStatus.userStatus
                          .todayAmount).toLocaleString("ru-RU")} теңгені өтеу`}
                  </button>
                )}
              </div>
              {this.props.userStatus.userStatus.doctype === 1 ? (
                <div className="documents">
                  {i18n.language === "ru" ? (
                    <h4>
                      Документы по договору{" "}
                      <span>
                        №{this.props.userStatus.userStatus.contractNumber} от{" "}
                        {this.props.userStatus.userStatus.givenDate}
                      </span>
                    </h4>
                  ) : (
                    <h4>
                      <span>
                        №{this.props.userStatus.userStatus.contractNumber}{" "}
                        {this.props.userStatus.userStatus.givenDate}
                      </span>{" "}
                      келісім-шарт бойынша құжаттар
                    </h4>
                  )}
                  <ul className="documentsContainer">
                    <li>
                      <InsuranceApplicationDocument
                        fio={this.props.userStatus.userStatus.fio}
                        dateOfBirth={this.props.userReducer.user.UF_10}
                        address={this.props.userStatus.userStatus.address}
                        phone={this.props.userStatus.userStatus.phone}
                        email={this.props.userStatus.userStatus.email}
                        placeOfWork={this.props.userReducer.user.UF_31}
                        position={this.props.userReducer.user.UF_33}
                        iin={this.props.userStatus.userStatus.iin}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        startCard={this.props.userStatus.userStatus.startCard}
                        endCard={this.props.userStatus.userStatus.endCard}
                        placeOfBirth={this.props.userReducer.user.UF_46}
                        insuranceAmount={
                          this.props.userStatus.userStatus.insuranceAmount
                        }
                        givenDate={this.props.userStatus.userStatus.givenDate}
                        code={this.props.userStatus.userStatus.code}
                        period={this.props.userStatus.userStatus.period}
                      />
                    </li>
                    <li>
                      <MicrocreditInsuranceDocument
                        fio={this.props.userStatus.userStatus.fio}
                        dateOfBirth={this.props.userReducer.user.UF_10}
                        address={this.props.userStatus.userStatus.address}
                        iin={this.props.userStatus.userStatus.iin}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        contractNumber={
                          this.props.userStatus.userStatus.contractNumber
                        }
                        insuranceAmount={
                          this.props.userStatus.userStatus.insuranceAmount
                        }
                        code={this.props.userStatus.userStatus.code}
                        period={this.props.userStatus.userStatus.period}
                        reward={this.props.userStatus.userStatus.reward}
                      />
                    </li>
                    <li>
                      <InsuranceContractDocument
                        contractNumber={
                          this.props.userStatus.userStatus.contractNumber
                        }
                        givenDate={this.props.userStatus.userStatus.givenDate}
                        endDate={this.props.userStatus.userStatus.endDate}
                        fio={this.props.userStatus.userStatus.fio}
                        address={this.props.userStatus.userStatus.address}
                        phone={this.props.userStatus.userStatus.phone}
                        iin={this.props.userStatus.userStatus.iin}
                        insuranceAmount={
                          this.props.userStatus.userStatus.insuranceAmount
                        }
                        reward={this.props.userStatus.userStatus.reward}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        cardGiven={this.props.userStatus.userStatus.cardGiven}
                        startCard={this.props.userStatus.userStatus.startCard}
                        email={this.props.userStatus.userStatus.email}
                        period={this.props.userStatus.userStatus.period}
                      />
                    </li>
                    <li>
                      <MicrocreditAgreementDocument
                        main={this.props.userStatus.userStatus.main}
                        reward={this.props.userStatus.userStatus.reward}
                        fio={this.props.userStatus.userStatus.fio}
                        iin={this.props.userStatus.userStatus.iin}
                        address={this.props.userStatus.userStatus.address}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        cardGiven={this.props.userStatus.userStatus.cardGiven}
                        startCard={this.props.userStatus.userStatus.startCard}
                        endCard={this.props.userStatus.userStatus.endCard}
                        dateOfBirth={this.props.userReducer.user.UF_10}
                        phone={this.props.userStatus.userStatus.phone}
                        iban={this.props.userStatus.userStatus.iban}
                        email={this.props.userStatus.userStatus.email}
                        contractNumber={
                          this.props.userStatus.userStatus.contractNumber
                        }
                        givenDate={this.props.userStatus.userStatus.givenDate}
                        endDate={this.props.userStatus.userStatus.endDate}
                        total={this.props.userStatus.userStatus.total}
                        period={this.props.userStatus.userStatus.period}
                      />
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="documents">
                  {i18n.language === "ru" ? (
                    <h4>
                      Документы по договору{" "}
                      <span>
                        №{this.props.userStatus.userStatus.contractNumber} от{" "}
                        {this.props.userStatus.userStatus.givenDate}
                      </span>
                    </h4>
                  ) : (
                    <h4>
                      <span>
                        №{this.props.userStatus.userStatus.contractNumber}{" "}
                        {this.props.userStatus.userStatus.givenDate}
                      </span>{" "}
                      келісім-шарт бойынша құжаттар
                    </h4>
                  )}
                  <ul className="documentsContainer">
                    <li>
                      <InsuranceApplicationDocument
                        fio={this.props.userStatus.userStatus.fio}
                        dateOfBirth={this.props.userReducer.user.UF_10}
                        address={this.props.userStatus.userStatus.address}
                        phone={this.props.userStatus.userStatus.phone}
                        email={this.props.userStatus.userStatus.email}
                        placeOfWork={this.props.userReducer.user.UF_31}
                        position={this.props.userReducer.user.UF_33}
                        iin={this.props.userStatus.userStatus.iin}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        startCard={this.props.userStatus.userStatus.startCard}
                        endCard={this.props.userStatus.userStatus.endCard}
                        placeOfBirth={this.props.userReducer.user.UF_46}
                        insuranceAmount={
                          this.props.userStatus.userStatus.insuranceAmount
                        }
                        givenDate={this.props.userStatus.userStatus.givenDate}
                        code={this.props.userStatus.userStatus.code}
                        period={this.props.userStatus.userStatus.period}
                      />
                    </li>
                    <li>
                      <MicrocreditInsuranceDocument
                        fio={this.props.userStatus.userStatus.fio}
                        dateOfBirth={this.props.userReducer.user.UF_10}
                        address={this.props.userStatus.userStatus.address}
                        iin={this.props.userStatus.userStatus.iin}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        contractNumber={
                          this.props.userStatus.userStatus.contractNumber
                        }
                        insuranceAmount={
                          this.props.userStatus.userStatus.insuranceAmount
                        }
                        code={this.props.userStatus.userStatus.code}
                        period={this.props.userStatus.userStatus.period}
                        reward={this.props.userStatus.userStatus.reward}
                      />
                    </li>
                    <li>
                      <InsuranceContractDocument
                        contractNumber={
                          this.props.userStatus.userStatus.contractNumber
                        }
                        givenDate={this.props.userStatus.userStatus.givenDate}
                        endDate={this.props.userStatus.userStatus.endDate}
                        fio={this.props.userStatus.userStatus.fio}
                        address={this.props.userStatus.userStatus.address}
                        phone={this.props.userStatus.userStatus.phone}
                        iin={this.props.userStatus.userStatus.iin}
                        insuranceAmount={
                          this.props.userStatus.userStatus.insuranceAmount
                        }
                        reward={this.props.userStatus.userStatus.reward}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        cardGiven={this.props.userStatus.userStatus.cardGiven}
                        startCard={this.props.userStatus.userStatus.startCard}
                        email={this.props.userStatus.userStatus.email}
                        period={this.props.userStatus.userStatus.period}
                      />
                    </li>
                    <li>
                      <ApplicationRestructuringDocument
                        fio={this.props.userStatus.userStatus.fio}
                        iin={this.props.userStatus.userStatus.iin}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        phone={this.props.userStatus.userStatus.phone}
                        period={this.props.userStatus.userStatus.period}
                        moneyForRestructuring={
                          +this.props.userStatus.userStatus.reward * 2
                        }
                        reward={this.props.userStatus.userStatus.reward}
                        penalty={
                          this.props.userStatus.userStatus.penalty
                            ? this.props.userStatus.userStatus.penalty
                            : 0
                        }
                      />
                    </li>
                    <li>
                      <RestructuringAgreementDocument
                        contractNumber={
                          this.props.userStatus.userStatus.contractNumber
                        }
                        iin={this.props.userStatus.userStatus.iin}
                        givenDate={this.props.userStatus.userStatus.givenDate}
                        fio={this.props.userStatus.userStatus.fio}
                        penalty={
                          this.props.userStatus.userStatus.penalty
                            ? this.props.userStatus.userStatus.penalty
                            : 0
                        }
                        moneyForRestructuring={
                          +this.props.userStatus.userStatus.reward * 2
                        }
                        period={this.props.userStatus.userStatus.period}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        startCard={this.props.userStatus.userStatus.startCard}
                        endCard={this.props.userStatus.userStatus.endCard}
                        cardGiven={this.props.userStatus.userStatus.cardGiven}
                        address={this.props.userStatus.userStatus.address}
                        phone={this.props.userStatus.userStatus.phone}
                        email={this.props.userStatus.userStatus.email}
                        main={this.props.userStatus.userStatus.main}
                        total={this.props.userStatus.userStatus.total}
                        reward={this.props.userStatus.userStatus.reward}
                        endDate={this.props.userStatus.userStatus.endDate}
                      />
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="mt-5">
            <h5 className="text-center">{t("current-application")}</h5>
            {i18n.language === "ru" ? (
              <div className="cabinetmessage text-center">
                У вас микрокредит в статусе
                <b>"Стандартный микрокредит"</b>
              </div>
            ) : (
              <div className="cabinetmessage text-center">
                Сізде
                <b>"Стандартты шағын несие"</b>
                мәртебесінде шағын несие бар
              </div>
            )}
            <div>
              <table className="vdolge">
                <thead>
                  <tr>
                    <th>{t("give-date")} 📅</th>
                    {/* <th>
                      Сумма на руки 💰
                    </th> */}

                    <th>{t("main-debt")} 💸</th>
                    <th>{t("debt-sum")}</th>
                    <th>{t("pay-date")} 📅</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.props.userStatus.userStatus.givenDate}</td>
                    {/* <td>{this.props.userStatus.userStatus.amount}</td> */}
                    <td>
                      {(+this.props.userStatus.userStatus
                        .mainAmount).toLocaleString()}{" "}
                      тг
                    </td>
                    <td>
                      {+this.props.userStatus.userStatus.todayAmount >
                      +this.props.userStatus.userStatus.mainAmount * 2.001
                        ? (
                            +this.props.userStatus.userStatus.mainAmount * 2
                          ).toLocaleString()
                        : (+this.props.userStatus.userStatus
                            .todayAmount).toLocaleString()}{" "}
                      тг
                    </td>
                    {/* <td>{(+this.props.userStatus.userStatus.todayAmount).toLocaleString()} тг</td> */}
                    <td>{this.props.userStatus.userStatus.endDate}</td>
                  </tr>
                </tbody>
              </table>
              <div className="buttonForm">
                {/* {this.state.btnLoading === true ?
                  <Spinner className="loading" size={200} spinnerColor={"#ef2221"} spinnerWidth={2} visible={true} /> :
                  <button onClick={() => this.handleSubmit()} className=" oplataform--button" type="submit">Погасить {(+this.props.userStatus.userStatus.todayAmount).toLocaleString("ru-RU")} тенге</button>} */}
                {+this.props.userStatus.userStatus.todayAmount >
                +this.props.userStatus.userStatus.mainAmount * 2.001 ? (
                  this.state.btnLoading === true ? (
                    <Spinner
                      className="loading"
                      size={200}
                      spinnerColor={"#ef2221"}
                      spinnerWidth={2}
                      visible={true}
                    />
                  ) : (
                    <button
                      onClick={() => this.handleSubmit()}
                      className=" oplataform--button"
                      type="submit"
                    >
                      {i18n.language === "ru"
                        ? `Погасить ${(
                            +this.props.userStatus.userStatus.mainAmount * 2
                          ).toLocaleString()} тенге`
                        : `${(
                            +this.props.userStatus.userStatus.mainAmount * 2
                          ).toLocaleString()} теңгені өтеу`}
                    </button>
                  )
                ) : this.state.btnLoading === true ? (
                  <Spinner
                    className="loading"
                    size={200}
                    spinnerColor={"#ef2221"}
                    spinnerWidth={2}
                    visible={true}
                  />
                ) : (
                  <button
                    onClick={() => this.handleSubmit()}
                    className=" oplataform--button"
                    type="submit"
                  >
                    {i18n.language === "ru"
                      ? `Погасить ${(+this.props.userStatus.userStatus
                          .todayAmount).toLocaleString()} тенге`
                      : `${(+this.props.userStatus.userStatus
                          .todayAmount).toLocaleString()} теңгені өтеу`}
                  </button>
                )}
              </div>
              {this.props.userStatus.userStatus.doctype === 1 ? (
                <div className="documents">
                  {i18n.language === "ru" ? (
                    <h4>
                      Документы по договору{" "}
                      <span>
                        №{this.props.userStatus.userStatus.contractNumber} от{" "}
                        {this.props.userStatus.userStatus.givenDate}
                      </span>
                    </h4>
                  ) : (
                    <h4>
                      <span>
                        №{this.props.userStatus.userStatus.contractNumber}{" "}
                        {this.props.userStatus.userStatus.givenDate}
                      </span>{" "}
                      келісім-шарт бойынша құжаттар
                    </h4>
                  )}
                  <ul className="documentsContainer">
                    <li>
                      <InsuranceApplicationDocument
                        fio={this.props.userStatus.userStatus.fio}
                        dateOfBirth={this.props.userReducer.user.UF_10}
                        address={this.props.userStatus.userStatus.address}
                        phone={this.props.userStatus.userStatus.phone}
                        email={this.props.userStatus.userStatus.email}
                        placeOfWork={this.props.userReducer.user.UF_31}
                        position={this.props.userReducer.user.UF_33}
                        iin={this.props.userStatus.userStatus.iin}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        startCard={this.props.userStatus.userStatus.startCard}
                        endCard={this.props.userStatus.userStatus.endCard}
                        placeOfBirth={this.props.userReducer.user.UF_46}
                        insuranceAmount={
                          this.props.userStatus.userStatus.insuranceAmount
                        }
                        givenDate={this.props.userStatus.userStatus.givenDate}
                        code={this.props.userStatus.userStatus.code}
                        period={this.props.userStatus.userStatus.period}
                      />
                    </li>
                    <li>
                      <MicrocreditInsuranceDocument
                        fio={this.props.userStatus.userStatus.fio}
                        dateOfBirth={this.props.userReducer.user.UF_10}
                        address={this.props.userStatus.userStatus.address}
                        iin={this.props.userStatus.userStatus.iin}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        contractNumber={
                          this.props.userStatus.userStatus.contractNumber
                        }
                        insuranceAmount={
                          this.props.userStatus.userStatus.insuranceAmount
                        }
                        code={this.props.userStatus.userStatus.code}
                        period={this.props.userStatus.userStatus.period}
                        reward={this.props.userStatus.userStatus.reward}
                      />
                    </li>
                    <li>
                      <InsuranceContractDocument
                        contractNumber={
                          this.props.userStatus.userStatus.contractNumber
                        }
                        givenDate={this.props.userStatus.userStatus.givenDate}
                        endDate={this.props.userStatus.userStatus.endDate}
                        fio={this.props.userStatus.userStatus.fio}
                        address={this.props.userStatus.userStatus.address}
                        phone={this.props.userStatus.userStatus.phone}
                        iin={this.props.userStatus.userStatus.iin}
                        insuranceAmount={
                          this.props.userStatus.userStatus.insuranceAmount
                        }
                        reward={this.props.userStatus.userStatus.reward}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        cardGiven={this.props.userStatus.userStatus.cardGiven}
                        startCard={this.props.userStatus.userStatus.startCard}
                        email={this.props.userStatus.userStatus.email}
                        period={this.props.userStatus.userStatus.period}
                      />
                    </li>
                    <li>
                      <MicrocreditAgreementDocument
                        main={this.props.userStatus.userStatus.main}
                        reward={this.props.userStatus.userStatus.reward}
                        fio={this.props.userStatus.userStatus.fio}
                        iin={this.props.userStatus.userStatus.iin}
                        address={this.props.userStatus.userStatus.address}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        cardGiven={this.props.userStatus.userStatus.cardGiven}
                        startCard={this.props.userStatus.userStatus.startCard}
                        endCard={this.props.userStatus.userStatus.endCard}
                        dateOfBirth={this.props.userReducer.user.UF_10}
                        phone={this.props.userStatus.userStatus.phone}
                        iban={this.props.userStatus.userStatus.iban}
                        email={this.props.userStatus.userStatus.email}
                        contractNumber={
                          this.props.userStatus.userStatus.contractNumber
                        }
                        givenDate={this.props.userStatus.userStatus.givenDate}
                        endDate={this.props.userStatus.userStatus.endDate}
                        total={this.props.userStatus.userStatus.total}
                        period={this.props.userStatus.userStatus.period}
                      />
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="documents">
                  {i18n.language === "ru" ? (
                    <h4>
                      Документы по договору{" "}
                      <span>
                        №{this.props.userStatus.userStatus.contractNumber} от{" "}
                        {this.props.userStatus.userStatus.givenDate}
                      </span>
                    </h4>
                  ) : (
                    <h4>
                      <span>
                        №{this.props.userStatus.userStatus.contractNumber}{" "}
                        {this.props.userStatus.userStatus.givenDate}
                      </span>{" "}
                      келісім-шарт бойынша құжаттар
                    </h4>
                  )}
                  <ul className="documentsContainer">
                    <li>
                      <InsuranceApplicationDocument
                        fio={this.props.userStatus.userStatus.fio}
                        dateOfBirth={this.props.userReducer.user.UF_10}
                        address={this.props.userStatus.userStatus.address}
                        phone={this.props.userStatus.userStatus.phone}
                        email={this.props.userStatus.userStatus.email}
                        placeOfWork={this.props.userReducer.user.UF_31}
                        position={this.props.userReducer.user.UF_33}
                        iin={this.props.userStatus.userStatus.iin}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        startCard={this.props.userStatus.userStatus.startCard}
                        endCard={this.props.userStatus.userStatus.endCard}
                        placeOfBirth={this.props.userReducer.user.UF_46}
                        insuranceAmount={
                          this.props.userStatus.userStatus.insuranceAmount
                        }
                        givenDate={this.props.userStatus.userStatus.givenDate}
                        code={this.props.userStatus.userStatus.code}
                        period={this.props.userStatus.userStatus.period}
                      />
                    </li>
                    <li>
                      <MicrocreditInsuranceDocument
                        fio={this.props.userStatus.userStatus.fio}
                        dateOfBirth={this.props.userReducer.user.UF_10}
                        address={this.props.userStatus.userStatus.address}
                        iin={this.props.userStatus.userStatus.iin}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        contractNumber={
                          this.props.userStatus.userStatus.contractNumber
                        }
                        insuranceAmount={
                          this.props.userStatus.userStatus.insuranceAmount
                        }
                        code={this.props.userStatus.userStatus.code}
                        period={this.props.userStatus.userStatus.period}
                        reward={this.props.userStatus.userStatus.reward}
                      />
                    </li>
                    <li>
                      <InsuranceContractDocument
                        contractNumber={
                          this.props.userStatus.userStatus.contractNumber
                        }
                        givenDate={this.props.userStatus.userStatus.givenDate}
                        endDate={this.props.userStatus.userStatus.endDate}
                        fio={this.props.userStatus.userStatus.fio}
                        address={this.props.userStatus.userStatus.address}
                        phone={this.props.userStatus.userStatus.phone}
                        iin={this.props.userStatus.userStatus.iin}
                        insuranceAmount={
                          this.props.userStatus.userStatus.insuranceAmount
                        }
                        reward={this.props.userStatus.userStatus.reward}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        cardGiven={this.props.userStatus.userStatus.cardGiven}
                        startCard={this.props.userStatus.userStatus.startCard}
                        email={this.props.userStatus.userStatus.email}
                        period={this.props.userStatus.userStatus.period}
                      />
                    </li>
                    <li>
                      <ApplicationRestructuringDocument
                        fio={this.props.userStatus.userStatus.fio}
                        iin={this.props.userStatus.userStatus.iin}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        phone={this.props.userStatus.userStatus.phone}
                        period={this.props.userStatus.userStatus.period}
                        moneyForRestructuring={
                          +this.props.userStatus.userStatus.reward * 2
                        }
                        reward={this.props.userStatus.userStatus.reward}
                        penalty={
                          this.props.userStatus.userStatus.penalty
                            ? this.props.userStatus.userStatus.penalty
                            : 0
                        }
                      />
                    </li>
                    <li>
                      <RestructuringAgreementDocument
                        contractNumber={
                          this.props.userStatus.userStatus.contractNumber
                        }
                        iin={this.props.userStatus.userStatus.iin}
                        givenDate={this.props.userStatus.userStatus.givenDate}
                        fio={this.props.userStatus.userStatus.fio}
                        penalty={
                          this.props.userStatus.userStatus.penalty
                            ? this.props.userStatus.userStatus.penalty
                            : 0
                        }
                        moneyForRestructuring={
                          +this.props.userStatus.userStatus.reward * 2
                        }
                        period={this.props.userStatus.userStatus.period}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        startCard={this.props.userStatus.userStatus.startCard}
                        endCard={this.props.userStatus.userStatus.endCard}
                        cardGiven={this.props.userStatus.userStatus.cardGiven}
                        address={this.props.userStatus.userStatus.address}
                        phone={this.props.userStatus.userStatus.phone}
                        email={this.props.userStatus.userStatus.email}
                        main={this.props.userStatus.userStatus.main}
                        total={this.props.userStatus.userStatus.total}
                        reward={this.props.userStatus.userStatus.reward}
                        endDate={this.props.userStatus.userStatus.endDate}
                      />
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="mt-5">
            <div>
              <table className="vprosrochke">
                <thead>
                  <tr>
                    <th>{t("give-date")} 📅</th>

                    <th>{t("main-debt")} 💸</th>
                    <th>{t("penalty")}</th>
                    <th>{t("remuneration-sum")}</th>
                    <th>{t("debt-sum")}</th>
                    <th>{t("pay-date")} 📅</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.props.userStatus.userStatus.givenDate}</td>
                    <td>
                      {(+this.props.userStatus.userStatus
                        .mainAmount).toLocaleString()}{" "}
                      тг
                    </td>
                    <td>
                      {(+this.props.userStatus.userStatus
                        .penalty).toLocaleString()}{" "}
                      тг
                    </td>
                    {/* <td>{+this.props.userStatus.userStatus.todayAmount > +this.props.userStatus.userStatus.mainAmount * 2.001 ? ((+this.props.userStatus.userStatus.mainAmount * 2) - ((+this.props.userStatus.userStatus.todayAmount) - (+this.props.userStatus.userStatus.reward))).toLocaleString() : (+this.props.userStatus.userStatus.reward).toLocaleString()} тг</td>
                    {/* <td>{(+this.props.userStatus.userStatus.reward).toLocaleString()} тг</td> */}
                    <td>
                      {+this.props.userStatus.userStatus.todayAmount >
                      +this.props.userStatus.userStatus.mainAmount * 2.001
                        ? (
                            +this.props.userStatus.userStatus.mainAmount * 2 -
                            (+this.props.userStatus.userStatus.todayAmount -
                              +this.props.userStatus.userStatus.reward)
                          ).toLocaleString()
                        : (+this.props.userStatus.userStatus
                            .reward).toLocaleString()}{" "}
                      тг
                    </td>{" "}
                    {/* <td>{+this.props.userStatus.userStatus.todayAmount > +this.props.userStatus.userStatus.mainAmount * 2.001 ? ((+this.props.userStatus.userStatus.mainAmount * 2) - ((+this.props.userStatus.userStatus.todayAmount) - (+this.props.userStatus.userStatus.reward))).toLocaleString() : (+this.props.userStatus.userStatus.reward).toLocaleString()} тг</td>
                    {/* <td>{(+this.props.userStatus.userStatus.todayAmount).toLocaleString()} тг</td> */}
                    <td>
                      {+this.props.userStatus.userStatus.todayAmount >
                      +this.props.userStatus.userStatus.mainAmount * 2.001
                        ? (
                            +this.props.userStatus.userStatus.mainAmount * 2
                          ).toLocaleString()
                        : (+this.props.userStatus.userStatus
                            .todayAmount).toLocaleString()}{" "}
                      тг
                    </td>{" "}
                    <td>{this.props.userStatus.userStatus.endDate}</td>
                  </tr>
                </tbody>
              </table>
              <div className="buttonForm">
                {+this.props.userStatus.userStatus.todayAmount >
                +this.props.userStatus.userStatus.mainAmount * 2.001 ? (
                  this.state.btnLoading === true ? (
                    <Spinner
                      className="loading"
                      size={200}
                      spinnerColor={"#ef2221"}
                      spinnerWidth={2}
                      visible={true}
                    />
                  ) : (
                    <button
                      onClick={() => this.handleSubmitProlongation()}
                      className=" oplataform--button"
                      type="submit"
                    >
                      {t("extend")}{" "}
                      {(
                        +this.props.userStatus.userStatus.mainAmount * 2 -
                        +this.props.userStatus.userStatus.amount
                      ).toLocaleString("ru-RU")}{" "}
                      тенге
                    </button>
                  )
                ) : this.state.btnLoading === true ? (
                  <Spinner
                    className="loading"
                    size={200}
                    spinnerColor={"#ef2221"}
                    spinnerWidth={2}
                    visible={true}
                  />
                ) : (
                  <button
                    onClick={() => this.handleSubmitProlongation()}
                    className=" oplataform--button"
                    type="submit"
                  >
                    {t("extend")}{" "}
                    {(+this.props.userStatus.userStatus
                      .prolongation).toLocaleString("ru-RU")}{" "}
                    тенге
                  </button>
                )}

                {+this.props.userStatus.userStatus.todayAmount >
                +this.props.userStatus.userStatus.mainAmount * 2.001 ? (
                  this.state.btnLoading === true ? (
                    <Spinner
                      className="loading"
                      size={200}
                      spinnerColor={"#ef2221"}
                      spinnerWidth={2}
                      visible={true}
                    />
                  ) : (
                    <button
                      onClick={() => this.handleSubmit()}
                      className=" oplataform--button"
                      type="submit"
                    >
                      {i18n.language === "ru"
                        ? `Погасить ${(
                            +this.props.userStatus.userStatus.mainAmount * 2
                          ).toLocaleString()} тенге`
                        : `${(
                            +this.props.userStatus.userStatus.mainAmount * 2
                          ).toLocaleString()} теңгені өтеу`}
                    </button>
                  )
                ) : this.state.btnLoading === true ? (
                  <Spinner
                    className="loading"
                    size={200}
                    spinnerColor={"#ef2221"}
                    spinnerWidth={2}
                    visible={true}
                  />
                ) : (
                  <button
                    onClick={() => this.handleSubmit()}
                    className=" oplataform--button"
                    type="submit"
                  >
                    {i18n.language === "ru"
                      ? `Погасить ${(+this.props.userStatus.userStatus
                          .todayAmount).toLocaleString()} тенге`
                      : `${(+this.props.userStatus.userStatus
                          .todayAmount).toLocaleString()} теңгені өтеу`}
                  </button>
                )}
              </div>
              {this.props.userStatus.userStatus.doctype === 1 ? (
                <div className="documents">
                  {i18n.language === "ru" ? (
                    <h4>
                      Документы по договору{" "}
                      <span>
                        №{this.props.userStatus.userStatus.contractNumber} от{" "}
                        {this.props.userStatus.userStatus.givenDate}
                      </span>
                    </h4>
                  ) : (
                    <h4>
                      <span>
                        №{this.props.userStatus.userStatus.contractNumber}{" "}
                        {this.props.userStatus.userStatus.givenDate}
                      </span>{" "}
                      келісім-шарт бойынша құжаттар
                    </h4>
                  )}
                  <ul className="documentsContainer">
                    <li>
                      <InsuranceApplicationDocument
                        fio={this.props.userStatus.userStatus.fio}
                        dateOfBirth={this.props.userReducer.user.UF_10}
                        address={this.props.userStatus.userStatus.address}
                        phone={this.props.userStatus.userStatus.phone}
                        email={this.props.userStatus.userStatus.email}
                        placeOfWork={this.props.userReducer.user.UF_31}
                        position={this.props.userReducer.user.UF_33}
                        iin={this.props.userStatus.userStatus.iin}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        startCard={this.props.userStatus.userStatus.startCard}
                        endCard={this.props.userStatus.userStatus.endCard}
                        placeOfBirth={this.props.userReducer.user.UF_46}
                        insuranceAmount={
                          this.props.userStatus.userStatus.insuranceAmount
                        }
                        givenDate={this.props.userStatus.userStatus.givenDate}
                        code={this.props.userStatus.userStatus.code}
                        period={this.props.userStatus.userStatus.period}
                      />
                    </li>
                    <li>
                      <MicrocreditInsuranceDocument
                        fio={this.props.userStatus.userStatus.fio}
                        dateOfBirth={this.props.userReducer.user.UF_10}
                        address={this.props.userStatus.userStatus.address}
                        iin={this.props.userStatus.userStatus.iin}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        contractNumber={
                          this.props.userStatus.userStatus.contractNumber
                        }
                        insuranceAmount={
                          this.props.userStatus.userStatus.insuranceAmount
                        }
                        code={this.props.userStatus.userStatus.code}
                        period={this.props.userStatus.userStatus.period}
                        reward={this.props.userStatus.userStatus.reward}
                      />
                    </li>
                    <li>
                      <InsuranceContractDocument
                        contractNumber={
                          this.props.userStatus.userStatus.contractNumber
                        }
                        givenDate={this.props.userStatus.userStatus.givenDate}
                        endDate={this.props.userStatus.userStatus.endDate}
                        fio={this.props.userStatus.userStatus.fio}
                        address={this.props.userStatus.userStatus.address}
                        phone={this.props.userStatus.userStatus.phone}
                        iin={this.props.userStatus.userStatus.iin}
                        insuranceAmount={
                          this.props.userStatus.userStatus.insuranceAmount
                        }
                        reward={this.props.userStatus.userStatus.reward}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        cardGiven={this.props.userStatus.userStatus.cardGiven}
                        startCard={this.props.userStatus.userStatus.startCard}
                        email={this.props.userStatus.userStatus.email}
                        period={this.props.userStatus.userStatus.period}
                      />
                    </li>
                    <li>
                      <MicrocreditAgreementDocument
                        main={this.props.userStatus.userStatus.main}
                        reward={this.props.userStatus.userStatus.reward}
                        fio={this.props.userStatus.userStatus.fio}
                        iin={this.props.userStatus.userStatus.iin}
                        address={this.props.userStatus.userStatus.address}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        cardGiven={this.props.userStatus.userStatus.cardGiven}
                        startCard={this.props.userStatus.userStatus.startCard}
                        endCard={this.props.userStatus.userStatus.endCard}
                        dateOfBirth={this.props.userReducer.user.UF_10}
                        phone={this.props.userStatus.userStatus.phone}
                        iban={this.props.userStatus.userStatus.iban}
                        email={this.props.userStatus.userStatus.email}
                        contractNumber={
                          this.props.userStatus.userStatus.contractNumber
                        }
                        givenDate={this.props.userStatus.userStatus.givenDate}
                        endDate={this.props.userStatus.userStatus.endDate}
                        total={this.props.userStatus.userStatus.total}
                        period={this.props.userStatus.userStatus.period}
                      />
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="documents">
                  {i18n.language === "ru" ? (
                    <h4>
                      Документы по договору{" "}
                      <span>
                        №{this.props.userStatus.userStatus.contractNumber} от{" "}
                        {this.props.userStatus.userStatus.givenDate}
                      </span>
                    </h4>
                  ) : (
                    <h4>
                      <span>
                        №{this.props.userStatus.userStatus.contractNumber}{" "}
                        {this.props.userStatus.userStatus.givenDate}
                      </span>{" "}
                      келісім-шарт бойынша құжаттар
                    </h4>
                  )}
                  <ul className="documentsContainer">
                    <li>
                      <InsuranceApplicationDocument
                        fio={this.props.userStatus.userStatus.fio}
                        dateOfBirth={this.props.userReducer.user.UF_10}
                        address={this.props.userStatus.userStatus.address}
                        phone={this.props.userStatus.userStatus.phone}
                        email={this.props.userStatus.userStatus.email}
                        placeOfWork={this.props.userReducer.user.UF_31}
                        position={this.props.userReducer.user.UF_33}
                        iin={this.props.userStatus.userStatus.iin}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        startCard={this.props.userStatus.userStatus.startCard}
                        endCard={this.props.userStatus.userStatus.endCard}
                        placeOfBirth={this.props.userReducer.user.UF_46}
                        insuranceAmount={
                          this.props.userStatus.userStatus.insuranceAmount
                        }
                        givenDate={this.props.userStatus.userStatus.givenDate}
                        code={this.props.userStatus.userStatus.code}
                        period={this.props.userStatus.userStatus.period}
                      />
                    </li>
                    <li>
                      <MicrocreditInsuranceDocument
                        fio={this.props.userStatus.userStatus.fio}
                        dateOfBirth={this.props.userReducer.user.UF_10}
                        address={this.props.userStatus.userStatus.address}
                        iin={this.props.userStatus.userStatus.iin}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        contractNumber={
                          this.props.userStatus.userStatus.contractNumber
                        }
                        insuranceAmount={
                          this.props.userStatus.userStatus.insuranceAmount
                        }
                        code={this.props.userStatus.userStatus.code}
                        period={this.props.userStatus.userStatus.period}
                        reward={this.props.userStatus.userStatus.reward}
                      />
                    </li>
                    <li>
                      <InsuranceContractDocument
                        contractNumber={
                          this.props.userStatus.userStatus.contractNumber
                        }
                        givenDate={this.props.userStatus.userStatus.givenDate}
                        endDate={this.props.userStatus.userStatus.endDate}
                        fio={this.props.userStatus.userStatus.fio}
                        address={this.props.userStatus.userStatus.address}
                        phone={this.props.userStatus.userStatus.phone}
                        iin={this.props.userStatus.userStatus.iin}
                        insuranceAmount={
                          this.props.userStatus.userStatus.insuranceAmount
                        }
                        reward={this.props.userStatus.userStatus.reward}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        cardGiven={this.props.userStatus.userStatus.cardGiven}
                        startCard={this.props.userStatus.userStatus.startCard}
                        email={this.props.userStatus.userStatus.email}
                        period={this.props.userStatus.userStatus.period}
                      />
                    </li>
                    <li>
                      <ApplicationRestructuringDocument
                        fio={this.props.userStatus.userStatus.fio}
                        iin={this.props.userStatus.userStatus.iin}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        phone={this.props.userStatus.userStatus.phone}
                        period={this.props.userStatus.userStatus.period}
                        moneyForRestructuring={
                          +this.props.userStatus.userStatus.reward * 2
                        }
                        reward={this.props.userStatus.userStatus.reward}
                        penalty={
                          this.props.userStatus.userStatus.penalty
                            ? this.props.userStatus.userStatus.penalty
                            : 0
                        }
                      />
                    </li>
                    <li>
                      <RestructuringAgreementDocument
                        contractNumber={
                          this.props.userStatus.userStatus.contractNumber
                        }
                        iin={this.props.userStatus.userStatus.iin}
                        givenDate={this.props.userStatus.userStatus.givenDate}
                        fio={this.props.userStatus.userStatus.fio}
                        penalty={
                          this.props.userStatus.userStatus.penalty
                            ? this.props.userStatus.userStatus.penalty
                            : 0
                        }
                        moneyForRestructuring={
                          +this.props.userStatus.userStatus.reward * 2
                        }
                        period={this.props.userStatus.userStatus.period}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        startCard={this.props.userStatus.userStatus.startCard}
                        endCard={this.props.userStatus.userStatus.endCard}
                        cardGiven={this.props.userStatus.userStatus.cardGiven}
                        address={this.props.userStatus.userStatus.address}
                        phone={this.props.userStatus.userStatus.phone}
                        email={this.props.userStatus.userStatus.email}
                        main={this.props.userStatus.userStatus.main}
                        total={this.props.userStatus.userStatus.total}
                        reward={this.props.userStatus.userStatus.reward}
                        endDate={this.props.userStatus.userStatus.endDate}
                      />
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="container">
            <div className="alert alert-primary">
              <h4 className="alert-heading">
                Статус вашего текущего микрокредита
              </h4>
              <hr />
              <p className="mb-0">
                <b>Вы в просрочке.</b> Уточните сумма долга по номеру{" "}
                <a
                  className="whatsapp"
                  href="https://api.whatsapp.com/send?phone=+77015382439"
                  target="_blank"
                >
                  <i className="fa fa-whatsapp" aria-hidden="true"></i> +7 701
                  538 2439 (WhatsApp)
                </a>
              </p>
            </div>
            {i18n.language === "ru" ? (
              <div className="cabinetmessage text-center">
                У вас микрокредит в статусе
                <b>"Просрочен"</b>
              </div>
            ) : (
              <div className="cabinetmessage text-center">
                Сізде
                <b>"Просрочен"</b>
                мәртебесінде шағын несие бар
              </div>
            )}
          </div>
        );
      case 5:
        return (
          <div className="container">
            <div className="alert alert-primary">
              <h4 className="alert-heading">{t("status-last-micro-credit")}</h4>
              <hr />
              <p className="mb-0">{this.props.userStatus.userStatus.message}</p>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="container">
            <div className="alert alert-primary">
              <h4 className="alert-heading">{t("status-last")}</h4>
              <hr />
              <p className="mb-0">{this.props.userStatus.userStatus.message}</p>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="container">
            <div className="alert alert-primary">
              <h4 className="alert-heading">{t("status-last")}</h4>
              <hr />
              <p className="mb-0">{t("please-complete")}</p>
            </div>
            <div className="cabinet-btn">
              <img
                alt="loading"
                src={require("../../img/svg/loadingCircle.svg")}
              />
              <button onClick={() => this.myFunc()}>{t("complete")}</button>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="mt-5">
            <h5 className="text-center">{t("current-application")}</h5>
            <div className="cabinetmessage text-center">
              У вас заим в статусе
              <b>"Стандартный заим"</b>
            </div>
            <div>
              <table className="vdolge">
                <thead>
                  <tr>
                    <th>{t("give-date")} 📅</th>
                    <th>{t("main-debt")} 💸</th>
                    <th>{t("debt-sum")}</th>
                    <th>{t("pay-date")} 📅</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.props.userStatus.userStatus.givenDate}</td>
                    {/* <td>{this.props.userStatus.userStatus.amount}</td> */}
                    <td>
                      {(+this.props.userStatus.userStatus
                        .mainAmount).toLocaleString()}{" "}
                      тг
                    </td>
                    <td>
                      {(+this.props.userStatus.userStatus
                        .todayAmount).toLocaleString()}{" "}
                      тг
                    </td>
                    <td>{this.props.userStatus.userStatus.endDate}</td>
                  </tr>
                </tbody>
              </table>
              <div className="buttonForm">
                {this.state.btnLoading === true ? (
                  <Spinner
                    className="loading"
                    size={200}
                    spinnerColor={"#ef2221"}
                    spinnerWidth={2}
                    visible={true}
                  />
                ) : (
                  <button
                    onClick={() => this.handleSubmitProlongation()}
                    className=" oplataform--button"
                    type="submit"
                  >
                    {t("extend")}{" "}
                    {(+this.props.userStatus.userStatus
                      .prolongation).toLocaleString("ru-RU")}{" "}
                    тенге
                  </button>
                )}
                {this.state.btnLoading === true ? (
                  <Spinner
                    className="loading"
                    size={200}
                    spinnerColor={"#ef2221"}
                    spinnerWidth={2}
                    visible={true}
                  />
                ) : (
                  <button
                    onClick={() => this.handleSubmit()}
                    className=" oplataform--button"
                    type="submit"
                  >
                    {i18n.language === "ru"
                      ? `Погасить ${(+this.props.userStatus.userStatus
                          .todayAmount).toLocaleString("ru-RU")} тенге`
                      : `${(+this.props.userStatus.userStatus
                          .todayAmount).toLocaleString("ru-RU")} теңгені өтеу`}
                  </button>
                )}
              </div>

              {this.props.userStatus.userStatus.doctype === 1 ? (
                <div className="documents">
                  {i18n.language === "ru" ? (
                    <h4>
                      Документы по договору{" "}
                      <span>
                        №{this.props.userStatus.userStatus.contractNumber} от{" "}
                        {this.props.userStatus.userStatus.givenDate}
                      </span>
                    </h4>
                  ) : (
                    <h4>
                      <span>
                        №{this.props.userStatus.userStatus.contractNumber}{" "}
                        {this.props.userStatus.userStatus.givenDate}
                      </span>{" "}
                      келісім-шарт бойынша құжаттар
                    </h4>
                  )}
                  <ul className="documentsContainer">
                    <li>
                      <InsuranceApplicationDocument
                        fio={this.props.userStatus.userStatus.fio}
                        dateOfBirth={this.props.userReducer.user.UF_10}
                        address={this.props.userStatus.userStatus.address}
                        phone={this.props.userStatus.userStatus.phone}
                        email={this.props.userStatus.userStatus.email}
                        placeOfWork={this.props.userReducer.user.UF_31}
                        position={this.props.userReducer.user.UF_33}
                        iin={this.props.userStatus.userStatus.iin}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        startCard={this.props.userStatus.userStatus.startCard}
                        endCard={this.props.userStatus.userStatus.endCard}
                        placeOfBirth={this.props.userReducer.user.UF_46}
                        insuranceAmount={
                          this.props.userStatus.userStatus.insuranceAmount
                        }
                        givenDate={this.props.userStatus.userStatus.givenDate}
                        code={this.props.userStatus.userStatus.code}
                        period={this.props.userStatus.userStatus.period}
                      />
                    </li>
                    <li>
                      <MicrocreditInsuranceDocument
                        fio={this.props.userStatus.userStatus.fio}
                        dateOfBirth={this.props.userReducer.user.UF_10}
                        address={this.props.userStatus.userStatus.address}
                        iin={this.props.userStatus.userStatus.iin}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        contractNumber={
                          this.props.userStatus.userStatus.contractNumber
                        }
                        insuranceAmount={
                          this.props.userStatus.userStatus.insuranceAmount
                        }
                        code={this.props.userStatus.userStatus.code}
                        period={this.props.userStatus.userStatus.period}
                        reward={this.props.userStatus.userStatus.reward}
                      />
                    </li>
                    <li>
                      <InsuranceContractDocument
                        contractNumber={
                          this.props.userStatus.userStatus.contractNumber
                        }
                        givenDate={this.props.userStatus.userStatus.givenDate}
                        endDate={this.props.userStatus.userStatus.endDate}
                        fio={this.props.userStatus.userStatus.fio}
                        address={this.props.userStatus.userStatus.address}
                        phone={this.props.userStatus.userStatus.phone}
                        iin={this.props.userStatus.userStatus.iin}
                        insuranceAmount={
                          this.props.userStatus.userStatus.insuranceAmount
                        }
                        reward={this.props.userStatus.userStatus.reward}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        cardGiven={this.props.userStatus.userStatus.cardGiven}
                        startCard={this.props.userStatus.userStatus.startCard}
                        email={this.props.userStatus.userStatus.email}
                        period={this.props.userStatus.userStatus.period}
                      />
                    </li>
                    <li>
                      <MicrocreditAgreementDocument
                        main={this.props.userStatus.userStatus.main}
                        reward={this.props.userStatus.userStatus.reward}
                        fio={this.props.userStatus.userStatus.fio}
                        iin={this.props.userStatus.userStatus.iin}
                        address={this.props.userStatus.userStatus.address}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        cardGiven={this.props.userStatus.userStatus.cardGiven}
                        startCard={this.props.userStatus.userStatus.startCard}
                        endCard={this.props.userStatus.userStatus.endCard}
                        dateOfBirth={this.props.userReducer.user.UF_10}
                        phone={this.props.userStatus.userStatus.phone}
                        iban={this.props.userStatus.userStatus.iban}
                        email={this.props.userStatus.userStatus.email}
                        contractNumber={
                          this.props.userStatus.userStatus.contractNumber
                        }
                        givenDate={this.props.userStatus.userStatus.givenDate}
                        endDate={this.props.userStatus.userStatus.endDate}
                        total={this.props.userStatus.userStatus.total}
                        period={this.props.userStatus.userStatus.period}
                      />
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="documents">
                  {i18n.language === "ru" ? (
                    <h4>
                      Документы по договору{" "}
                      <span>
                        №{this.props.userStatus.userStatus.contractNumber} от{" "}
                        {this.props.userStatus.userStatus.givenDate}
                      </span>
                    </h4>
                  ) : (
                    <h4>
                      <span>
                        №{this.props.userStatus.userStatus.contractNumber}{" "}
                        {this.props.userStatus.userStatus.givenDate}
                      </span>{" "}
                      келісім-шарт бойынша құжаттар
                    </h4>
                  )}
                  <ul className="documentsContainer">
                    <li>
                      <InsuranceApplicationDocument
                        fio={this.props.userStatus.userStatus.fio}
                        dateOfBirth={this.props.userReducer.user.UF_10}
                        address={this.props.userStatus.userStatus.address}
                        phone={this.props.userStatus.userStatus.phone}
                        email={this.props.userStatus.userStatus.email}
                        placeOfWork={this.props.userReducer.user.UF_31}
                        position={this.props.userReducer.user.UF_33}
                        iin={this.props.userStatus.userStatus.iin}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        startCard={this.props.userStatus.userStatus.startCard}
                        endCard={this.props.userStatus.userStatus.endCard}
                        placeOfBirth={this.props.userReducer.user.UF_46}
                        insuranceAmount={
                          this.props.userStatus.userStatus.insuranceAmount
                        }
                        givenDate={this.props.userStatus.userStatus.givenDate}
                        code={this.props.userStatus.userStatus.code}
                        period={this.props.userStatus.userStatus.period}
                      />
                    </li>
                    <li>
                      <MicrocreditInsuranceDocument
                        fio={this.props.userStatus.userStatus.fio}
                        dateOfBirth={this.props.userReducer.user.UF_10}
                        address={this.props.userStatus.userStatus.address}
                        iin={this.props.userStatus.userStatus.iin}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        contractNumber={
                          this.props.userStatus.userStatus.contractNumber
                        }
                        insuranceAmount={
                          this.props.userStatus.userStatus.insuranceAmount
                        }
                        code={this.props.userStatus.userStatus.code}
                        period={this.props.userStatus.userStatus.period}
                        reward={this.props.userStatus.userStatus.reward}
                      />
                    </li>
                    <li>
                      <InsuranceContractDocument
                        contractNumber={
                          this.props.userStatus.userStatus.contractNumber
                        }
                        givenDate={this.props.userStatus.userStatus.givenDate}
                        endDate={this.props.userStatus.userStatus.endDate}
                        fio={this.props.userStatus.userStatus.fio}
                        address={this.props.userStatus.userStatus.address}
                        phone={this.props.userStatus.userStatus.phone}
                        iin={this.props.userStatus.userStatus.iin}
                        insuranceAmount={
                          this.props.userStatus.userStatus.insuranceAmount
                        }
                        reward={this.props.userStatus.userStatus.reward}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        cardGiven={this.props.userStatus.userStatus.cardGiven}
                        startCard={this.props.userStatus.userStatus.startCard}
                        email={this.props.userStatus.userStatus.email}
                        period={this.props.userStatus.userStatus.period}
                      />
                    </li>
                    <li>
                      <ApplicationRestructuringDocument
                        fio={this.props.userStatus.userStatus.fio}
                        iin={this.props.userStatus.userStatus.iin}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        phone={this.props.userStatus.userStatus.phone}
                        period={this.props.userStatus.userStatus.period}
                        moneyForRestructuring={
                          +this.props.userStatus.userStatus.reward * 2
                        }
                        reward={this.props.userStatus.userStatus.reward}
                        penalty={
                          this.props.userStatus.userStatus.penalty
                            ? this.props.userStatus.userStatus.penalty
                            : 0
                        }
                      />
                    </li>
                    <li>
                      <RestructuringAgreementDocument
                        contractNumber={
                          this.props.userStatus.userStatus.contractNumber
                        }
                        iin={this.props.userStatus.userStatus.iin}
                        givenDate={this.props.userStatus.userStatus.givenDate}
                        fio={this.props.userStatus.userStatus.fio}
                        penalty={
                          this.props.userStatus.userStatus.penalty
                            ? this.props.userStatus.userStatus.penalty
                            : 0
                        }
                        moneyForRestructuring={
                          +this.props.userStatus.userStatus.reward * 2
                        }
                        period={this.props.userStatus.userStatus.period}
                        cardNumber={this.props.userStatus.userStatus.cardNumber}
                        startCard={this.props.userStatus.userStatus.startCard}
                        endCard={this.props.userStatus.userStatus.endCard}
                        cardGiven={this.props.userStatus.userStatus.cardGiven}
                        address={this.props.userStatus.userStatus.address}
                        phone={this.props.userStatus.userStatus.phone}
                        email={this.props.userStatus.userStatus.email}
                        main={this.props.userStatus.userStatus.main}
                        total={this.props.userStatus.userStatus.total}
                        reward={this.props.userStatus.userStatus.reward}
                        endDate={this.props.userStatus.userStatus.endDate}
                      />
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        );
      case 9:
        return (
          <div className="container">
            <div
              className="alert alert-primary"
              style={{
                borderRadius: "40px",
              }}
            >
              <h3
                className="alert-heading"
                style={{
                  textAlign: "center",
                }}
              >
                {t("sorry")}
              </h3>
              {i18n.language === "ru" ? (
                <p
                  className="mb-0"
                  style={{
                    textAlign: "center",
                  }}
                >
                  Вы не сможете подавать повторную заявку до{" "}
                  {this.props.userStatus.userStatus.expiration}.
                </p>
              ) : (
                <p
                  className="mb-0"
                  style={{
                    textAlign: "center",
                  }}
                >
                  Сіз {this.props.userStatus.userStatus.expiration} дейін қайта
                  өтініш бере алмайсыз.
                </p>
              )}
              <hr />
              <h3
                style={{
                  textAlign: "center",
                  margin: "20px 0",
                }}
              >
                {t("agreed-partners")}
              </h3>
              <div
                className="cabinet-btn"
                style={{
                  padding: "0",
                }}
              >
                <a href="https://top-credit.su/" target="_blank">
                  <button
                    style={{
                      position: "unset",
                      opacity: "1",
                      borderRadius: "20px",
                    }}
                  >
                    {t("get-offer")}
                  </button>
                </a>
              </div>
            </div>
          </div>
        );
      case 10:
        return (
          <div className="container">
            <div className="alert alert-info" role="alert">
              <h4 className="alert-heading">Ваш контракт продан</h4>
              <p>
                Ваш контракт ПРОДАН в{" "}
                <b>ТОО “Коллекторское агентство “АйДи Коллект”</b>
              </p>
              <p className="m-b-0">
                контактный номер{" "}
                <b>
                  <a href="tel:+77000037733">телефона</a>/
                  <a
                    href="https://api.whatsapp.com/send?phone=+77000037733"
                    target="_blank"
                  >
                    Whatsapp
                  </a>
                  : +7 700 003 77 33
                </b>
                <br></br>Email:{" "}
                <a href="mailto:info@idcollect.kz">
                  <b>info@idcollect.kz</b>
                </a>
              </p>
            </div>
          </div>
        );
      case 11:
        return (
          <div className="container">
            <div className="alert alert-primary">
              <h4 className="alert-heading">Статус вашей последней заявки</h4>
              <hr />
              <p className="mb-0">
                Ваша заявка одобрена! Для подписания документов нажмите на
                кнопку ниже.
              </p>
            </div>
            <div className="cabinet-btn" style={{ padding: 0 }}>
              <img
                alt="loading"
                src={require("../../img/svg/loadingCircle.svg")}
              />
              <a
                href={
                  "/newAggrements?leadID=" +
                  this.props.userStatus.userStatus.leadID
                }
              >
                <button style={{ position: "unset" }}>
                  Перейти на страницу подписи
                </button>
              </a>
            </div>
          </div>
        );
      case 12:
        return (
          <div className="container">
            <div
              className="alert alert-primary"
              style={{
                borderRadius: "40px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {this.state.timeChSI ? (
                <>
                  <h3
                    className="alert-heading"
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Акция специально для Вас!
                  </h3>
                  <p
                    className="mb-0"
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Действует только до 30.06.2022г!
                  </p>
                  <hr />
                  <h3
                    style={{
                      textAlign: "center",
                      margin: "20px 0",
                    }}
                  >
                    Оплатите только сумму основного долга!
                  </h3>
                  <h4 style={{ alignSelf: "center" }}>После этого мы:</h4>
                  <p style={{ alignSelf: "center", fontWeight: "bold" }}>
                    1) Улучшим Вашу кредитную историю;
                    <br />
                    2) Снимем аресты с Ваших счетов;
                    <br />
                    3) Уберем ограничение на выезд зарубеж.
                  </p>
                  <div className="buttonForm">
                    {this.state.btnLoading === true ? (
                      <Spinner
                        className="loading"
                        size={200}
                        spinnerColor={"#ef2221"}
                        spinnerWidth={2}
                        visible={true}
                      />
                    ) : (
                      <button
                        style={{ margin: 0 }}
                        onClick={() => this.handleSubmitChSI()}
                        className=" oplataform--button"
                        type="submit"
                      >
                        Погасить{" "}
                        {(+this.props.userStatus.userStatus
                          .mainAmount).toLocaleString("ru-RU")}{" "}
                        тенге
                      </button>
                    )}
                  </div>
                  <div className="promotion__timer">
                    <div className="title">Акция закончится через:</div>
                    <div className="timer">
                      <div className="timer__block">
                        <span id="days">12</span>
                        дней
                      </div>
                      <div className="timer__block">
                        <span id="hours">20</span>
                        часов
                      </div>
                      <div className="timer__block">
                        <span id="minutes">56</span>
                        минут
                      </div>
                      <div className="timer__block">
                        <span id="seconds">20</span>
                        секунд
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <h3
                  className="alert-heading"
                  style={{
                    textAlign: "center",
                  }}
                >
                  Акция закончилась:(
                </h3>
              )}
            </div>
          </div>
        );
      case 13:
        return (
          <div className="buttonForm">
            {this.state.btnLoading === true ? (
              <Spinner
                className="loading"
                size={200}
                spinnerColor={"#ef2221"}
                spinnerWidth={2}
                visible={true}
              />
            ) : (
              <button
                onClick={() => this.handleVerify()}
                type="submit"
                className=" oplataform--button"
              >
                Подписать документы
              </button>
            )}
          </div>
        );
      default:
        return <div></div>;
    }
  }
}

export default connect(mapStateToProps)(withUseTranslation(Status));
