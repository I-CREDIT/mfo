import React from 'react';
import InputMask from "react-input-mask";
import Spinner from 'react-spinner-material';
// import {validEmail, requiredd, iinValidation} from '../../defaults/validations';
import axios from 'axios'
import {Formik, Form, ErrorMessage, FieldArray, Field} from 'formik';
import { connect } from 'react-redux';
import Link from 'next/link'
import  {validEmail,required, iin, phoneCheck} from '../defaults/validationredux'
import {successMessage, emptyMessage} from '../store/actions/ActionCreators'
import Router from 'next/router'

const PhoneMask = ({ field, form, ...props}) => <InputMask 
mask="+7(999)-999-9999"
  maskPlaceholder= {null}
  className="my-input"
  {...field}
  {...props} />

const IinMask = ({ field, form, ...props}) => <InputMask 
mask="999999999999"
  maskPlaceholder= {null}
  className="my-input"
  {...field}
  {...props} />

const AppLink = ({children, className, href}) =>
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>


const mapDispatchToProps = (dispatch) => ({
  successMessage: message => { dispatch(successMessage(message)); },
  emptyMessage: () => {dispatch(emptyMessage())}
})

function replaceDate(val) {
  return String(val).replace(/[^A-Z0-9]/g, '')
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnLoading: false,
      message: null,
      errorMessage: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 async handleSubmit(values) {
   if(values.iin === '' || values.phone === '') {
    this.setState({
      errorMessage:'Все поля обязательны'
    })
   }
   if(values.iin && !iin(values.iin)) {
    this.setState({
      errorMessage:'Неправильный ИИН'
    })
   }
   if(values.phone && !phoneCheck(values.phone)) {
    this.setState({
      errorMessage:'Нет соответствующего оператора'
    })
   }
   if(values.iin && values.phone 
    && phoneCheck(values.phone) && iin(values.iin)
    ) {
    this.setState({
      errorMessage: null
    })
    this.setState({
      btnLoading:true
    })
    axios.get(`https://api.i-credit.kz/api/checkPerson?phone=${replaceDate(values.phone)}&iin=${values.iin}`)

    .then((response) => {
      console.log(response)
      
      this.setState({
        btnLoading: false,
        // message: response.data.message
      })
      if(!response.data.success) {
        this.setState({
          errorMessage: response.data.message
        })
      }
      if(response.data.success) {
        this.setState({
          errorMessage: null,
          message: 'Вам было отправлено СМС со ссылкой. Пожалуйста, проверьте и перейдите по ссылке для восстановление пароля'
        })
      }
      // Router.push('/login')
    })
    .catch((error) => {
      this.setState({
        btnLoading: false,
        errorMessage: error.response.data.message
      })
    });
   }


  }
  render() {
    return (
      <div>
        <section className="otherPages">
          <div className="container">
            <section className="oplata feedback row">
              <div className=" oplate--form feedbackForm">
              <nav aria-label="container breadcrumb">
                <ol className="breadcrumb text-center">
                  <li className="breadcrumb-item "><AppLink className='br-item' href='/login'>Личный кабинет</AppLink></li>

                  <li className="breadcrumb-item active" aria-current="page">Сброс пароля</li>
                </ol>
              </nav>
                <Formik
                  initialValues={{
                    phone: "",
                    iin: '',
                  }}
                  onSubmit={values=> {
                    this.handleSubmit(values)
                  }}
                >
                {({ errors, touched, isValidating, isSubmitting }) =>(
                  <Form className="oplataform">

                <h2 className="text-center mb-5">Сброс пароля</h2>
                    {this.state.message !== null ?
                      <div className="alert alert-success" role="alert">
                        <strong> {this.state.message}</strong>
                      </div> : null
                    }
                    {this.state.errorMessage !== null ?
                      <div className="alert alert-danger" role="alert">
                        <strong> {this.state.errorMessage}</strong>
                      </div> : null
                    }

                   <div className='input-group'>
                    <label htmlFor="iin">
                      <h2>ИИН:</h2>
                    </label>
                      <Field name='iin' type='tel' placeholder="Введите ИИН" component={IinMask}/>
                   </div>
                   <div className='input-group'>
                    <label htmlFor="phone">
                      <h2>Телефон номер:</h2>
                    </label>
                      <Field name='phone' type='tel' placeholder="Введите телефон номер" component={PhoneMask}/>
                   </div>
                   <div className="buttonForm">
                      {this.state.btnLoading === true ?
                      <Spinner className="loading" size={200} spinnerColor={"#ef2221"} spinnerWidth={2} visible={true} /> :
                      <button className="loginbutton" type="submit">Сбросить</button>}
                    </div>
                  </Form>
                )}
                </Formik>
              </div>
            </section>
          </div>
        </section>
      </div>
      );
    }
  }

  export default (connect(null,mapDispatchToProps)(Login));
