import React from "react";
import { connect } from "react-redux";
import withAuth from "../../components/hocs/withAuth";
import { helloUser } from "../../defaults/hello";
import ProgressBar from "../../components/shared/Progressbar";
import Router from "next/router";
import Head from "next/head";
import axios from "axios";

// Перевод для классового компонента
import withUseTranslation from "../../public/js/hocs/useTranslation";

import cookie from "js-cookie";
const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

class Cabinet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnLoading: false,
    };
  }

  componentDidMount() {
    axios
      .post(`https://api.i-credit.kz/api/repeatUser`, {
        token: cookie.get("token"),
      })
      .then((response) => {
        this.setState({
          btnLoading: true,
        });
        if (response.data.success === false) {
          Router.push("/cabinet/loans");
        } else {
          this.setState({
            btnLoading: false,
          });
        }
      });
  }
  render() {
    // Достаем функцию-переводчик
    const { t } = this.props.useTranslationValue;

    return (
      <div className="otherPages">
        <Head>
          <title>Повторный микрокредит</title>
        </Head>
        {this.state.btnLoading ? (
          <div className="modelLoader"></div>
        ) : (
          <div className="modelLoader loaded"></div>
        )}
        <h3 className=" text-center">
          {t(helloUser())} {this.props.userReducer.user.UF_5}{" "}
          {this.props.userReducer.user.UF_6} !
        </h3>
        <p className="container mt-3 repeatedinfo alert alert-info">
          Выберите срок и сумму. Затем нажмите на кнопку "Получить деньги" чтобы
          совершить повторный заим
        </p>
        <div className="repeatBtn form-group"></div>
        <div className="repeatedProgress">
          <ProgressBar />
        </div>
      </div>
    );
  }
}

export default withAuth(connect(mapStateToProps)(withUseTranslation(Cabinet)));
