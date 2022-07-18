import React from 'react'
import {connect} from 'react-redux'
import withAuth from '../../components/hocs/withAuth'
import {helloUser} from '../../defaults/hello'
import Router from 'next/router'
import swal from "sweetalert";
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
  async handleRepeated() {
    this.setState({
      btnLoading: true,
    });
    await axios
      .post(`https://api.i-credit.kz/api/repeatUser`, {
        token: cookie.get("token"),
      })
      .then((response) => {
        if (response.data.success == true) {
          Router.push("/cabinet/repeated");
          this.setState({
            btnLoading: false,
          });
        } else {
          console.log(response);
          swal("Oops!", `${response.data.message}`, "error");
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
        {this.state.btnLoading ? (
          <div className="modelLoader"></div>
        ) : (
          <div className="modelLoader loaded"></div>
        )}

        {this.props.userReducer.authenticatingUser === true ? (
          <div className="modelLoader"></div>
        ) : (
          <div className="modelLoader loaded"></div>
        )}

        <h3 className="text-center">
          {t(helloUser())} {this.props.userReducer.user.UF_5}{" "}
          {this.props.userReducer.user.UF_6} !
        </h3>

        <div className="zayavkaBlock container col-md-8 col-8 mt-5">
          <h5>Мои заявки</h5>
          <h5 className="text-center">Ваша заявка еще в обработке</h5>
          <div className="repeatBtn form-group">
            <button className="mt-3" onClick={() => this.handleRepeated()}>
              Повторный микрокредит
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(connect(mapStateToProps)(withUseTranslation(Cabinet)));
