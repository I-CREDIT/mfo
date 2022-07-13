import React from "react";
import { connect } from "react-redux";
import withAuth from "../../components/hocs/withAuth";
import MaskedInput from "react-text-mask";
import {
  fetchUserStatus,
  fetchUserHistory,
} from "../../store/actions/userAction";
import { Formik, Form, Field } from 'formik';

// Перевод для классового компонента
import withUseTranslation from "../../public/js/hocs/useTranslation";

import cookie from "js-cookie";
const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
    userStatus: state.userStatus,
    userHistory: state.userHistory,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUserStatus: () => dispatch(fetchUserStatus()),
  fetchUserHistory: () => dispatch(fetchUserHistory()),
});

const maskIin = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

class AdminCabinet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnLoading: false,
      iin: '',
      name: '',
      id: '',
      phone: '',
      token: '',
      message: '',
      searched: false,
      deleated: false
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSubmitDeleate = this.handleSubmitDeleate.bind(this)
  }

  handleSubmit(values) {
    let newObj = {}
    let token = cookie.get("token")
    newObj = {...values, token}
    fetch("https://api.i-credit.kz/api/searchUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newObj),
    })
    .then((response) => {
      return (response.json())
    })
    .then((data) => {
      this.setState({
        iin: data.iin,
        name: data.fio,
        id: data.id,
        phone: data.phone,
        token: data.message,
        searched: data.success,
        message: '',
        deleated: false
      })
      if(!this.state.searched) {
        this.setState({
          message: data.message
        })
      }
    })
  }

  handleSubmitDeleate() {
    let newObj = {
      iin: this.state.iin,
      token: this.state.token,
      user_id: this.state.id
    }
    fetch("https://api.i-credit.kz/api/deleteUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newObj),
    })
    .then(this.setState({
      searched: false,
      deleated: true
    }))
  }

  render() {
      // проданные на ID collect
      return (
        <div style={{
          maxWidth: '300px',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignitems: 'center',
          padding: '50px 10px 0',
        }}>
          <Formik
            initialValues={{
              iin: '',
            }}
            onSubmit={(values) => {
              this.handleSubmit(values);
            }} >
              <Form style={{
                margin: '20px 0',
                padding: "10px",
                borderRadius: "10px",
                boxShadow: "0px 0px 20px #866b6b",
              }}>
                <p 
                  className="text-center"
                  style={{
                    fontWeight: 'bold',
                    fontSize: '20px'
                  }}
                >
                  Введите ИИН:
                </p>
                <Field
                  name="iin"
                  placeholder="ИИН"
                  render={({field}) => (
                    <MaskedInput
                      {...field}
                      mask={maskIin}
                      autoComplete="off"
                      id="username"
                      placeholder={'ИИН'}
                      type="text"
                      style={{
                        width: '100%',
                        height: '40px',
                        borderRadius: '5px',
                        border: '1px solid gray',
                        textAlign: 'center'
                      }}
                    />
                  )} />
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}>
                    <button 
                      type="submit" 
                      style={{
                          marginTop: '10px',
                          borderRadius: '5px',
                          backgroundColor: '#ef2221',
                          color: '#fff',
                          border: 'none',
                          width: '100%',
                          height: '40px',
                    }}>
                      Искать
                    </button>
                  </div>
              </Form>
          </Formik>
          {this.state.searched
          ?
          <div style={{
            margin: "20px 0",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0px 0px 20px #866b6b",
          }}>
            <p>ФИО: {this.state.name}</p>
            <p>Телефон: {this.state.phone}</p>
            <p>ИИН: {this.state.iin}</p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
            }}>
              <button 
                onClick={this.handleSubmitDeleate} 
                style={{
                    marginTop: '10px',
                    borderRadius: '5px',
                    backgroundColor: '#ef2221',
                    color: '#fff',
                    border: 'none',
                    width: '100%',
                    height: '40px',
              }}>
                Удалить
              </button>
            </div>
          </div>
          :
          this.state.message
          ? <p>{this.state.message}</p> : this.state.deleated ? <p>Клиент удален</p> : null }
        </div>
      );
  }
}

// const mapStateToProps = ({ usersReducer: { user: { UF9} } }) => ({
// username: UF9 })

export default withAuth(
  connect(mapStateToProps, mapDispatchToProps)(withUseTranslation(AdminCabinet))
);
