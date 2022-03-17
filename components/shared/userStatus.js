import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import Router from 'next/router'
import usersReducer from '../../store/reducers/userReducer'

const mapStateToProps = state => {
  return {userReducer: state.userReducer, userStatus: state.userStatus, userHistory: state.userHistory}
}

class Status extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      btnLoading: false
    }
    this.state = {
      sendRepeat: true,
    }
    this.state = {
      step: ''
    }
    this.state = {
      repeatMessage: ''
    }
  }
  
  getCurrentStep() {
    axios.get(`https://api.money-men.kz/api/notFull?iin=${this.props.userReducer.user.UF_4}`, {headers: {
      "Access-Control-Allow-Origin": "*",
    }})
      .then(res => {
        console.log(res) // нужно отсюда взять step!
        if(res.data.success) {
          this.setState({
            step: res.data.step
          })
        }
      })
      .catch (
        console.log('log')
      )
  }

  componentDidMount() {
    this.getCurrentStep()
  }

  myFunc () {
    console.log(this.state.step)
    if(this.state.step === 1 || this.state.step === 2) {
      window.scrollTo(0,0)
      console.log(2)
      Router.push(`/cabinet/continue`)
    }
  }

  render() {
    switch (this.props.userStatus.userStatus.stage) {
      case 1:
        return (
          <div className='mt-5'>
            <h5 className='text-center'>Текущая завяка</h5>
            <div className='cabinetmessage text-center'>
              У вас заим в статусе
              <b>
                "Льготный период"</b>
            </div>
            <div>
              <table className='lperiod'>
                <thead>
                  <tr>
                    <th>
                      Дата выдачи 📅
                    </th>
                    {/* <th>
                      Сумма на руки 💰
                    </th> */}
                    <th>
                      Дата окончания льготного периода 📅
                    </th>
                    <th>Основной долг 💸</th>
                    <th>Cумма погашения льготный период 💸</th>
                    <th>Сумма задолженности на текущую дату</th>
                    <th>Дата погашения 📅</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.props.userStatus.userStatus.givenDate}</td>
                    {/* <td>{this.props.userStatus.userStatus.amount}</td> */}
                    <td>{this.props.userStatus.userStatus.lp}</td>
                    <td>{this.props.userStatus.userStatus.mainAmount}</td>
                    <td>{this.props.userStatus.userStatus.lpAmount}</td>
                    <td>{this.props.userStatus.userStatus.todayAmount}</td>
                    <td>{this.props.userStatus.userStatus.endDate}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
      case 2:
        return (
          <div className='mt-5'>
              <h5 className='text-center'>Текущая завяка</h5>
            <div className='cabinetmessage text-center'>
              У вас заим в статусе
              <b>
                "Стандартный заим"</b>
            </div>
            <div>
              <table className='vdolge'>
                <thead>
                  <tr>
                    <th>
                      Дата выдачи 📅
                    </th>
                    {/* <th>
                      Сумма на руки 💰
                    </th> */}

                    <th>Основной долг 💸</th>
                    <th>Сумма задолженности на текущую дату</th>
                    <th>Дата погашения 📅</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.props.userStatus.userStatus.givenDate}</td>
                    {/* <td>{this.props.userStatus.userStatus.amount}</td> */}
                    <td>{this.props.userStatus.userStatus.mainAmount}</td>
                    <td>{this.props.userStatus.userStatus.todayAmount}</td>
                    <td>{this.props.userStatus.userStatus.endDate}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
      case 3:
        return (
          <div className='mt-5'>
            <div className='container alert alert-primary'>
              <h4 className='alert-heading'>Статус вашего текущего заима</h4>
              <hr/>
              <p className='mb-0'><b>Вы в просрочке.</b> Отдел взыскания: <b><a href="tel:+77788701029">+7 778 870 10 29</a></b>. Уточните сумму долга по номеру <b><a href="tel:+77272501500">+7 727 250 1500</a></b>, <b><a href="tel:+77007501500">+7 700 750 1500</a></b> или напишите в
                <b><a classname="whatsapptext" href='https://api.whatsapp.com/send?phone=+77015382439' target="_blank"> WhatsApp <i class="fa fa-whatsapp" aria-hidden="true"></i></a></b> </p>
            </div>
            <div className='cabinetmessage text-center'>
              У вас заим в статусе
              <b>
                 "Просрочен"</b>
            </div>
            <div>
              {/* <table className='vdolge'>
                <thead>
                  <tr>
                    <th>
                      Дата выдачи 📅
                    </th>
                    <th>
                      Сумма на руки 💰
                    </th>

                    <th>Основной долг 💸</th>
                    <th>Сумма задолженности на текущую дату</th>
                    <th>Дата погашения 📅</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.props.userStatus.userStatus.givenDate}</td>
                    <td>{this.props.userStatus.userStatus.amount}</td>
                    <td>{this.props.userStatus.userStatus.mainAmount}</td>
                    <td>{this.props.userStatus.userStatus.todayAmount}</td>
                    <td>{this.props.userStatus.userStatus.endDate}</td>
                  </tr>
                </tbody>
              </table> */}
            </div>
          </div>
        )
      case 4:
        return (
          <div className='container'>
            <div className='alert alert-primary'>
              <h4 className='alert-heading'>Статус вашего текущего заима</h4>
              <hr/>
              <p className='mb-0'><b>Вы в просрочке.</b> Уточните сумма долга по номеру <a classname="whatsapp" href='https://api.whatsapp.com/send?phone=+77015382439' target="_blank"><i class="fa fa-whatsapp" aria-hidden="true"></i>  +7 701 538 2439 (WhatsApp)</a></p>
            </div>
            <div className='cabinetmessage text-center'>
              У вас заим в статусе
              <b>
                "Просрочен"</b>
            </div>
          </div>
        )
      case 5:
        return (
          <div className='container'>
            <div className='alert alert-primary'>
              <h4 className='alert-heading'>Статус вашего последного заима</h4>
              <hr/>
              <p className='mb-0'>{this.props.userStatus.userStatus.message}</p>
            </div>
          </div>
        )
      case 6:
        return (
          <div className='container'>
            <div className='alert alert-primary'>
              <h4 className='alert-heading'>Статус вашей последней заявки</h4>
              <hr/>
              <p className='mb-0'>{this.props.userStatus.userStatus.message}</p>
            </div>
          </div>
        )
        case 7:
        return (
          <div className='container'>
            <div className='alert alert-primary'>
              <h4 className='alert-heading'>Статус вашей последней заявки</h4>
              <hr/>
              <p className='mb-0'>Вы не донца заполнили анкетные данные. Пожалуйста дозаполните нажав кнопку ниже</p>
            </div>
            <div className="cabinet-btn">
            <img alt='loading' src={require("../../img/svg/loadingCircle.svg")}/>
              <button onClick={() => this.myFunc()}>Дозаполнить анкету</button>
            </div> 
          </div>
        )
      default:
        return (
          <div></div>
        )
    }

    // return (   <div>     <table>       <thead>         <tr>           <th> Дата
    // выдачи 📅           </th>           <th>             Сумма на руки 💰 </th>
    //       <th>             Основной долг 💸 </th> <th>Example</th>
    // <th>Example</th> <th>Example</th> <th>Example</th>         </tr> </thead>
    // <tbody>         <tr> <td>12.12.2020</td>           <td>10000</td>
    // <td>15000</td>  <td>1/2"</td>           <td>Kangal / Coil</td> </tr> </tbody>
    //    </table>   </div> )
  }
}

export default(connect(mapStateToProps)(Status));