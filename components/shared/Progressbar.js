import React, {Component} from 'react';
import { connect } from 'react-redux';
import Link from 'next/link'
import {changingMoney, changingDay} from '../../store/actions/ActionCreators';
import cookie from 'js-cookie';
import axios from 'axios'
import Router from 'next/router'
axios.defaults.headers.common = {'Authorization': `bearer ${cookie.get('token')}`}
import swal from "sweetalert";

// Перевод для классового компонента
import withUseTranslation from "../../public/js/hocs/useTranslation";

const AppLink = ({children, className, href}) =>
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
const mapStateToProps = state => {
    return {
      moneyVal: state.moneyVal,
      dayVal: state.dayVal,
      userReducer: state.userReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    changingMoney: money => { dispatch(changingMoney(money)); },
    changingDay: day => { dispatch(changingDay(day)); }
})
class ProgressBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
          money: this.props.moneyVal,
          day: this.props.dayVal,
          dayMoreThirty: false,
          showMessage: false,
          repeatedLoading: false,
        };

        this.handleChangeMoney = this.handleChangeMoney.bind(this);
        this.handleChangeDay = this.handleChangeDay.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.handleRepeatedZaim = this.handleRepeatedZaim.bind(this)
      }

      close() {
        this.setState({ showMessage: false });
      };

      handleFocus() {

      }
      async handleRepeatedZaim(values) {
        values.UF_2 = this.props.moneyVal;
        values.UF_3 = this.props.dayVal;

        this.setState ({
          repeatedLoading: true
        })
        await
        // axios.setHeader('Accept', 'application/json')
        axios.post(`https://api.i-credit.kz/api/repeatRequest`, {
          token: cookie.get("token"),
          period:values.UF_3 ,
          amount:values.UF_2 ,
        }, {
          headers: {
            'Content-Type': 'application/json',
            // "Authorization": `Bearer ${cookie.get('token')}`,
            'Accept': 'application/json',
        }
        })

          .then((response) => {
            console.log(response)
            this.setState ({
              repeatedLoading: false
            })
            if(response.data.success === true) {
              swal("Успешно!", `Заявка отправлено`, "success").then(() =>{
                Router.push('/cabinet/loans')
            });
            }
            else {
              swal("Oops!", `${response.errors || 'У вас анкета заполнена не до конца. Напишите на WhatsApp или звоните на номер +7 727 250 15 00'}`, "error").then(() => {
                Router.push('/cabinet/loans')
              });
            }
          })
          .catch(error => {
            console.log(error.message)
          })
      }
      open() {
        this.setState({ showModal: true });
      };
      handleChangeMoney(event) {
        this.setState({
          money: event.target.value,
      });
        this.props.changingMoney(event.target.value);
      }
      handleChangeDay(event) {
        this.setState({
          day: event.target.value
       });
        if(event.target.value>30) {
          this.props.changingDay(30)
        }else {
        this.props.changingDay(event.target.value);}

      // this.props.changingDay(event.target.value);
      }


    render()  {
        const spaceNum = (val) => {
            var splitIndex = (val.length + 2) % 3 + 1;
            val = val.valubstr(0, splitIndex) + val.substr(splitIndex).replace(/\d\d\d/g, ' $&');
        }
        // Достаем функцию-переводчик
        const { t } = this.props.useTranslationValue

        const vozvrat = Math.round(Math.floor(this.props.moneyVal*(1+(this.props.dayVal/100)*2)/100)*100);
        const osnovnoiDolg = parseInt(this.props.moneyVal,10)+parseInt(this.props.moneyVal*this.props.dayVal/100,10)/100*100;
        // const osnovnoiDolg = Math.round(Math.floor((this.props.moneyVal*1.15)/100)*100);
        const strahovanie = osnovnoiDolg- this.props.moneyVal;
        const voznograzhdenie = osnovnoiDolg - this.props.moneyVal;
        return (
            <div className="calculator-band row " onClick={this.handleFocus}>
                <div className="progress-bars col-md-4">
                <div id="money" className="money">
                <input
                    id="money-input"
                    className="range"
                    type="range"
                    min="10000"
                    max="145000"
                    step="1000"
                    value = {this.state.money}
                    onChange={this.handleChangeMoney}

                />
                <div className="text mt-3 d-flex justify-content-between">
                    <p>10 000</p>
                    <p>145 000</p>
                </div>
            </div>
            <div id="day" className="day">
              <input type="range" min={15} max={30} step={1} id="day-input" className="range" value={this.state.day} onChange={this.handleChangeDay} />
              <div className="text mt-3 d-flex justify-content-between">
                <p>15 {t('days')}</p>
                <p>30 {t('days')}</p>
              </div>
            </div>
            {this.state.repeatedLoading ? <div className="modelLoader"></div> : <div className="modelLoader loaded"></div>}
            <button className="calculator-take repeatedBtn" onClick={() => this.handleRepeatedZaim(this.props.userReducer.user)}>Получить деньги</button>
            <h5 className="text-center mt-3 mb-3 availableDay" style={{display: this.props.dayVal ===30 ? 'block': 'none' }}>В данный момент Вам доступен срок между 15 и 30 днями</h5>
           {this.props.pathname ==='/cabinet/continue' ?
               <h4 className='mt-4'>Выберите сумму и срок</h4> :
               <AppLink href="/get_money">
                   <button className="takebtn calculator-take" onClick={this.open}>
                       {t('get-money')}
                   </button>
               </AppLink>
           }
          </div>

          <div className="calculator-info col-md-8">
            <div className="main-info">
        <p className="text-center">{t('amount-hand')} <b id="summa">{this.props.moneyVal}</b></p>
              <p className="text-center ">{t('term')} <b id="dnei">{this.props.dayVal}</b></p>
        <p className="text-center ">{t('to-return')} <b className="vozvrat">{vozvrat}</b></p>
            </div>
            <div className="secondary-info">
              <p className="text-center head-p">{t('return-including')}</p>
              <div className="secondary-info--texts">
                <div className="box">
                  <p className="text-center">{t('main-debt')}</p>
                  <p className="d-inline-block red center-line">{vozvrat} </p><b id="osnovnoi-dolg"> &nbsp;
                    &nbsp; {osnovnoiDolg} тг</b>
                </div>
                <div className="box">
                  <p className="text-center">{t('insurance')} </p>
        <p className="d-inline-block red center-line">{strahovanie*2} </p><b id="str">&nbsp; &nbsp; {strahovanie } тг</b>
                </div>
                <div className="box">
                  <p className="text-center">{t('remuneration')}</p>
                  <p className="d-inline-block red center-line">{voznograzhdenie*2} </p><b id="vozn">&nbsp; &nbsp; {voznograzhdenie} тг</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    }
}
// export default ProgressBar;
export default (connect(mapStateToProps,mapDispatchToProps)(withUseTranslation(ProgressBar)));
