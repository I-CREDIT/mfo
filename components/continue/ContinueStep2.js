import { useEffect, useState } from "react";
import { addition_contact_type, gorods, relative_type } from "../../defaults/defaultRelative";
import {phoneValidation, acceptCirrilic, getAge, requiredd,} from '../../defaults/validations';
import cookie from 'js-cookie'
import InputMask from "react-input-mask";
import { Formik, Form,  Field  } from 'formik';
import axios from "axios";
import Router from "next/router";

// Перевод для функционального компонента
import { useTranslation } from "react-i18next";

const PhoneMask = ({ field, form, ...props}) => <InputMask 
mask="+7(999)-999-9999"
  maskPlaceholder={null}
  className="my-input"
  {...field}
  {...props} />


const ContinueStep2 = ({next,setNext}) => {
  // Translation
  const { t } = useTranslation()

  const [regions, setRegions] = useState({})
  const [checked, setChecked] = useState(cookie.get('continueChecked') ? cookie.get('continueChecked') : false)
  const [city,setCity] = useState(cookie.get('continue2') ? JSON.parse(cookie.get('continue2')).UF_17  : '')
  let scrollToElement = require('scroll-to-element');

  const onSubmit = (values) => {
    window.scrollTo(0,0)
    values.UF_17 = city;
    checked ? values.UF_21 = '' : ''

    let secondStepValue = {
      regionOfCity_id: values.UF_18,
      street: values.UF_19,
      home: values.UF_20,
      apartment: values.UF_21 || 1,
      marital_status: values.UF_22,
      child_amount: values.UF_23,
      education: values.UF_24,
      relative_name: values.UF_25,
      relative_type_id: values.UF_26,
      additional_contact_name: values.UF_28,
      relative_phone_number: values.UF_27,
      additional_contact_type_id: values.UF_29,
      additional_contact_phone: values.UF_30,
      relative_last_name: values.UF_31,
      additional_contact_last_name: values.UF_32,
    }

    axios.post(`https://api.money-men.kz/api/registration_step_two`, secondStepValue, {
        headers: {
          'Access-Control-Allow-Origin':'*',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: `Bearer ${cookie.get('token')}`,
        },
        credentials: 'same-origin'
      })
        .then(response=> {
          if(response.data.success === true) {
              swal("Успешно!", `Заявка отправлена`, "success")
                  .then(() => {
                      Router.push('/cabinet/loans')
                  });
          }
          else {
            swal("Oops!", `${response.errors || 'У вас анкета заполнена не до конца. Напишите на WhatsApp или звоните на номер +7 727 250 15 00'}`, "error").then(() => {
            });
          }
        })
        .catch(error => {
          if(error.response) {
            console.log(error.response)
          }
          // swal('Oops', 'Что то пошло не так', 'error').then(() => {
          //   // Router.push('/cabinet/loans')
          // })
        })

    setNext(next+1)
    setTimeout(() => {
      scrollToElement('.inputs_continue', {
        offset: 0,
        align: 'middle',
        ease: 'outExpo',
        duration: 600
      });
    },100)
  }

  const fetchRegions = (e) => {
    setCity(e.target.value)
    axios.get(`https://api.money-men.kz/api/city/${e.target.value}`)
      .then(res=> {
        console.log(res)
        setRegions(res.data)
      })
  }

  useEffect(() => {
    if(cookie.get('continue2')) {
      let id = JSON.parse(cookie.get('continue2')).UF_17
      axios.get(`https://api.money-men.kz/api/city/${id}`)
      .then(res=> {
        console.log(res)
        setRegions(res.data)
      })
    }
  },[])

  return(
    <div>
      <Formik 
        initialValues={{
          UF_17: cookie.get('continue2') ? parseInt(JSON.parse(cookie.get('continue2')).UF_17) : '',
          UF_18: cookie.get('continue2') ? parseInt(JSON.parse(cookie.get('continue2')).UF_18) : '',
          UF_19: cookie.get('continue2') ? JSON.parse(cookie.get('continue2')).UF_19 : '',
          UF_20: cookie.get('continue2') ? JSON.parse(cookie.get('continue2')).UF_20 : '',
          UF_21: cookie.get('continue2') ? JSON.parse(cookie.get('continue2')).UF_21 : '',
          UF_22: cookie.get('continue2') ? JSON.parse(cookie.get('continue2')).UF_22 : '',
          UF_23: cookie.get('continue2') ?  JSON.parse(cookie.get('continue2')).UF_23 : '',
          UF_24: cookie.get('continue2') ? JSON.parse(cookie.get('continue2')).UF_24 : '',
          UF_25: cookie.get('continue2') ? JSON.parse(cookie.get('continue2')).UF_25 : '',
          UF_26: cookie.get('continue2') ? JSON.parse(cookie.get('continue2')).UF_26 : '',
          UF_27: cookie.get('continue2') ? JSON.parse(cookie.get('continue2')).UF_27 : '',
          UF_28: cookie.get('continue2') ? JSON.parse(cookie.get('continue2')).UF_28 : '',
          UF_29: cookie.get('continue2') ? JSON.parse(cookie.get('continue2')).UF_29 : '',
          UF_30: cookie.get('continue2') ? JSON.parse(cookie.get('continue2')).UF_30 : '',
          UF_31: cookie.get('continue2') ? JSON.parse(cookie.get('continue2')).UF_31 : '',
          UF_32: cookie.get('continue2') ? JSON.parse(cookie.get('continue2')).UF_32 : '',
        }}
        onSubmit={(values)=> {
          onSubmit(values)
        }}
      >
        {({ errors, touched}) =>  (
          <Form className='container mt-5'>
            <div className='row form-group'>
            <div className='col-md-6 mb-3'>
              <label htmlFor=''>
                  {t('marital-status')}
              </label>
              <Field as='select' name='UF_22' validate={requiredd} className='form-control'>
                <option value=""></option>
                <option value="Женат/Замужем">{t('marital-status-1')}</option>
                <option value="Холост/Не замужем">{t('marital-status-2')}</option>
              </Field>
              {errors.UF_22 && touched.UF_22 && <p className='text-danger'>{t(errors.UF_22)}</p>}
            </div>

            <div className='col-md-6 mb-3'>
              <label htmlFor=''>
                  {t('children-amount')}
              </label>
              <Field as='select' validate={requiredd} name='UF_23' className='form-control'>
                <option value=""></option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5+</option>
              </Field>
              {errors.UF_23 && touched.UF_23 && <p className='text-danger'>{t(errors.UF_23)}</p>}
            </div>

            <div className='col-md-6 mb-3'>
              <label htmlFor=''>
                  {t('education')}
              </label>
              <Field as='select' validate={requiredd} name='UF_24' className='form-control'>
                <option value=""></option>
                <option value="Без образования">{t('education-1')}</option>
                <option value="Среднее">{t('education-2')}</option>
                <option value="Высшее">{t('education-3')}</option>
              </Field>
              {errors.UF_24 && touched.UF_24 && <p className='text-danger'>{t(errors.UF_24)}</p>}
            </div>

            <div className='col-md-6 mb-3'>
              <label htmlFor=''>
                  {t('city')}
              </label>
              <Field  onChange={(e)=>fetchRegions(e)} value={city}  as='select' name='UF_17'   className='form-control'>
                <option value="" disabled></option>
                {gorods.map(gorod => (
                  <option key={gorod.id} value={gorod.id}>{gorod.name}</option>
                ))}
              </Field>
              {errors.UF_17 && touched.UF_17 && <p className='text-danger'>{t(errors.UF_17)}</p>}
            </div>
            <div className='col-md-6 mb-3'>
              <label>{t('districts')}</label>
              <div className='input-group'>
                <Field as='select' validate={requiredd} name='UF_18' className='form-control'>
                  <option value="" ></option>
                  {regions.length>0 && regions.map(gorod=> (
                    <option key={gorod.id} value={gorod.id}>{gorod.name}</option>
                  ))}
                </Field>
              </div>
              <div className="hint">{t('districts-1')}</div>
              
              {errors.UF_18 && touched.UF_18 && <p className='text-danger'>{t(errors.UF_18)}</p>}
            </div>
            <div className='col-md-6 mb-3'>
              <label>{t('street')}</label>
              <Field name='UF_19' validate={requiredd} autocomplete='off' className='form-control'></Field>
              {errors.UF_19 && touched.UF_19 && <p className='text-danger'>{t(errors.UF_19)}</p>}
            </div>

            <div className='col-md-6 mb-3'>
              <label>{t('house')}</label>
              <Field name='UF_20' validate={requiredd} autocomplete='off' className='form-control'/>
              {errors.UF_20 && touched.UF_20 && <p className='text-danger'>{t(errors.UF_20)}</p>}
            </div>
            <div className='col-md-6 mb-3'>
              <label>{t('apartment-number')}</label>
              <Field name='UF_21' validate={!checked ? requiredd : ''} type='number' className='form-control' disabled={checked}/>
              {errors.UF_21 && touched.UF_21 && <p className={checked ? 'd-none' : 'text-danger'} >{t(errors.UF_21)}</p>}
            </div>  
            <div className="col-md-6 mb-3">
              <input
                type="checkbox"
                onChange={() => setChecked(!checked)}
                defaultChecked={checked}/>
              <label className="form-check-label ml-3">{t('private-house')}</label>
            </div>
          </div>
          <h2 className="mt-5 mb-5">{t('relative')}</h2>
          <div className='row form-group'>
            <div className='col-md-6 mb-3'>
              <label>{t('relative-name')}</label>
              <div className='input-group'>
              <Field name='UF_25' validate={requiredd, acceptCirrilic} autocomplete='off' className='form-control'/>
           
              <div className="hint">{t('cyrillic-only')}</div>
              </div>
              {errors.UF_25 && touched.UF_25 && <p className='text-danger'>{t(errors.UF_25)}</p>}
            </div>

            <div className='col-md-6 mb-3'>
                <label>{t('relative-surname')}</label>
                <div className='input-group'>
                    <Field name='UF_31' validate={requiredd, acceptCirrilic} autocomplete='off' className='form-control'/>

                    <div className="hint">{t('cyrillic-only')}</div>
                </div>
                {errors.UF_31 && touched.UF_31 && <p className='text-danger'>{t(errors.UF_31)}</p>}
            </div>

            <div className='col-md-6 mb-3'>
                <label>{t('relative-phone')}</label>
                <Field
                    name='UF_27'
                    className='form-control'
                    type='tel'
                    validate={phoneValidation}
                    component = {PhoneMask}
                />
                { errors.UF_27 && touched.UF_27 && <p className='text-danger'>{t(errors.UF_27)}</p> }
            </div>

            <div className='col-md-6 mb-3'>
              <label>{t('relative-connection')}</label>
              <div className='input-group'>
                <Field as='select' name='UF_26' validate={requiredd} className='form-control'>
                  <option value="" disabled></option>
                  {relative_type.map(relative => (
                  <option key={relative.id} value={relative.id}>{t(relative.name)}</option>
                ))}
                </Field>
              </div>
              {errors.UF_26 && touched.UF_26 && <p className='text-danger'>{t(errors.UF_26)}</p>}
            </div>
          </div>

          <h2 className="mt-5 mb-5">{t('relative-additional')}</h2>
          <div className='row form-group'>
            <div className='col-md-6 mb-3'>
              <label>{t('relative-name')}</label>
              <div className='input-group'>
              <Field name='UF_28' validate={requiredd, acceptCirrilic} autocomplete='off' className='form-control' />

              <div className="hint">{t('cyrillic-only')}</div>
              </div>
              {errors.UF_28 && touched.UF_28 && <p className='text-danger'>{t(errors.UF_28)}</p>}
            </div>

            <div className='col-md-6 mb-3'>
                <label>{t('relative-surname')}</label>
                <div className='input-group'>
                    <Field name='UF_32' validate={requiredd, acceptCirrilic} autocomplete='off' className='form-control' />

                    <div className="hint">{t('cyrillic-only')}</div>
                </div>
                {errors.UF_32 && touched.UF_32 && <p className='text-danger'>{t(errors.UF_32)}</p>}
            </div>
 
            <div className='col-md-6 mb-3'>
            <label>{t('relative-phone')}</label>
            <Field 
              name='UF_30'
              className='form-control'
              type='tel'
              validate={phoneValidation}
              component = {PhoneMask}
            ></Field>
           
           {errors.UF_30 && touched.UF_30 && <p className='text-danger'>{t(errors.UF_30)}</p>}
            </div>
            <div className='col-md-6 mb-3'>
              <label>{t('relative-connection')}</label>
              <div className='input-group'>
                <Field as='select' validate={requiredd} name='UF_29' className='form-control'>
                  <option value="" disabled></option>
                  {addition_contact_type.map(relative => (
                  <option key={relative.id} value={relative.id}>{t(relative.name)}</option>
                ))}
                </Field>
              </div>
              
              {errors.UF_29 && touched.UF_29 && <p className='text-danger'>{t(errors.UF_29)}</p>}
            </div>
                    
          </div>
          <div className="button form-group mb-5">
         
              <button
                type="submit "
                className="agreement-btn"
              >Дальше</button>
          </div>
          </Form>
    )}
      </Formik> 
   
    </div>
  )
}

export default ContinueStep2;