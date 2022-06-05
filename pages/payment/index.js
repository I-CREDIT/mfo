import React from 'react';
import {iinValidation, requiredd} from '../../defaults/validations';
import InputMask from "react-input-mask";
import Spinner from 'react-spinner-material';
import swal from "sweetalert";
import MaskedInput from 'react-text-mask';
import axios from 'axios'
import { Formik, Form,  Field  } from 'formik';
const maskIin = [/\d/,/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,/\d/,/\d/,/\d/,];
import Head from 'next/head';

// Перевод для классового компонента
import withUseTranslation from "../../public/js/hocs/useTranslation";

const mapStateToProps = state => {
  return {
    oplata: state.oplata,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => ({
  oplata: dannie => { dispatch(oplata(dannie)); },
  resetOplata: () => { dispatch(actions.reset('oplata'))},
})

const IinMask = (props) => <InputMask mask="999999999999" maskPlaceholder={null} className="my-input" {...props} />;

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnLoading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    swal("Проверьте ваши данные", {
      text: `Проверьте ваши данные

      Ваш ИИН: ${values.iin}    Сумма оплаты: ${values.amount}`,
      buttons: {
        catch: {
          text: "Подтвердить",
          value: "catch",
        },
        cancel: "Отмена"
      }
    }).then(value=>{
      switch (value) {
        case "catch":
          this.setState({
            btnLoading: true,
          });
           axios.post(`https://api.i-credit.kz/api/make_payment123`, values)
            .then((response) => {
              this.setState({
                btnLoading: false
              })
              location.replace(response.data[0] + "?" + response.data[1])
            })
            .catch((error) => {
              console.log(error)
              this.setState({
                btnLoading: false
              })
            });
        case "cancel":
          break
      }
    })
  }

  render() {
    // Достаем функцию-переводчик
    const { t } = this.props.useTranslationValue

    return (
        <div>
          <Head>
            <title>Оплата</title>
          </Head>
             <section className="otherPages">
        <div className="container">
          <section className="oplata row">
            <div className="col-lg-6 oplata--text mb-5">
              <h2>{t('oplata--text-1')}</h2>
              <p>{t('oplata--text-2')}</p>
            </div>
            <div className="col-lg-6 oplate--form">
            <Formik
              initialValues={{
                iin: '',
                amount: '',
              }}
              onSubmit={values => {
                // same shape as initial values
                this.handleSubmit(values)
              }}
            >
                 {({ errors, touched, isValidating, isSubmitting }) => (
              <Form className="oplataform">
                <div className='input-group'>
                  <label htmlFor='iin'>
                    <h2>{t('oplata--form-1')}</h2>
                  </label>
                  <Field
                    name="iin"
                    validate={iinValidation}
                    render={({ field }) => (
                      <MaskedInput
                        {...field}
                        mask={maskIin}
                        id="iin"
                        placeholder={t('enter-here')}
                        type="text"
                      />
                    )}
                  />
                  {errors.iin && touched.iin && <div className='text-danger'>{errors.iin}</div>}

                </div>
                <div className='input-group'>
                  <label htmlFor='iin'>
                    <h2>{t('oplata--form-2')}</h2>
                  </label>
                  <Field name='amount' validate={requiredd} type='number' placeholder={t('enter-here')}/>
                  {errors.amount && touched.amount && <div className='text-danger'>{errors.amount}</div>}
                </div>

                <div className="buttonForm">
                {this.state.btnLoading === true ?
								 <Spinner className="loading" size={200} spinnerColor={"#ef2221"} spinnerWidth={2} visible={true} /> :
                 <button className=" oplataform--button" type="submit">{t('enter-cost')}</button>}
                </div>
                </Form>
                  )}
            </Formik>
            </div>
          </section>
        </div>
      </section>
        </div>
    );}
}

export default withUseTranslation(Payment);
