import React from 'react'
import Router from 'next/router'
import axios from 'axios'
import swal from 'sweetalert'
import Head from 'next/head'
import InsuranceApplicationDocument from '../components/document_1/insuranceApplication'
import MicrocreditInsuranceDocument from '../components/document_1/microcreditInsurance'
import InsuranceContractDocument from '../components/document_1/insuranceContract'
import MicrocreditAgreementDocument from '../components/document_1/microcreditAgreement'

function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

const userToken = () => {
  if(getUrlParameter('token').length !== 0) {
    return getUrlParameter('token')
  }
  else {
    return null
  }
}

class Aggrement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      leadID: null,
      loading: false,
      docs:[],
      id:null,
      id_req:null,
      sign:'',
      isCodeSent:false,
      code_conf:null,
      errorInCode:null,
      phone:null,
      rest:null,
      fio: null,
      dateOfBirth: null,
      address: null,
      email: null,
      placeOfWork: null,
      position: null,
      iin: null,
      cardNumber: null,
      startCard: null,
      endCard: null,
      placeOfBirth: null,
      insuranceAmount: null,
      givenDate: null,
      code: null,
      period: null,
      contractNumber: null,
      reward: null,
      main: null,
      total: null,
      cardGiven: null,
      iban: null,
      phone2: null,
      endDate: null,
    }
  }
  async getUserDocument(token) {
    this.setState({
      loading: true
    })

    await axios.get(`https://api.money-men.kz/api/newGetData?token=${token}`)
    .then((response) => {
      console.log(response)
      if(response.data.success) {
        this.setState({
          // docs: response.data.docs,
          // id: response.data.id,
          // id_req: response.data.id_req,
          loading: false,
          // rest: response.data.rest,
          leadID: response.data.leadID,
          phone2: response.data.phone,
          fio: response.data.fio,
          dateOfBirth: response.data.birthday,
          address: response.data.address,
          email: response.data.email,
          placeOfWork: response.data.work,
          position: response.data.position,
          iin: response.data.iin,
          cardNumber: response.data.cardNumber,
          startCard: response.data.cardDate,
          endCard: response.data.cardExpiration,
          placeOfBirth: response.data.placeOfBirth,
          insuranceAmount: response.data.insuranceAmount,
          givenDate: response.data.givenDate,
          code: response.data.code,
          period: response.data.period,
          contractNumber: response.data.contractNumber,
          reward: response.data.reward,
          main: response.data.main,
          total: response.data.main + response.data.reward,
          cardGiven: response.data.cardGiven,
          iban: response.data.iban,
          endDate: response.data.datePayment
        })
      }else {
        Router.push('/')
      }

    })
    .catch(error => {
      this.setState({
        loading: false
      })
      Router.push('/')
    })
  }

  async getCode() {
    await axios.get(`https://api.money-men.kz/api/sendSms?phone=${this.state.phone}`,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    .then(response => {
        if(response.success) {
          this.setState({
            isCodeSent: true
          })
        }
    })
    .catch(error=> {
        console.log(error)
    })
  }

  async sendAgreementStatusForRest() {
    if(this.state.code_conf !== null) {
      await axios.get(`https://api.money-men.kz/api/sendSms`,{
        params: {
          id:this.state.id,
          phone:this.state.phone,
          token:this.state.token,
          id_req: this.state.id_req,
          code:this.state.code_conf,
          sign: 'y'
        }
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      .then(response=> {
        if(response.success) {
          swal("Успешно!", `${response.message}`, "success").then(() => {
            Router.push('/')
          })
        }
      })
      .catch(error => {
        console.log(error)
      })
    }
  }

  sendAgreementStatusWithRest() {
    this.setState({
      loading:true
    })
    axios.get(`https://api.money-men.kz/api/prolongationAgreement?sign=y&request_id=${this.state.id}`)
      .then(res=> {
        this.setState({
          loading: false
        })
        if(res.data.success){
          swal("Успешно!", "success").then(()=>{
            Router.push('/')
          })
        }
      })
      .catch(error=>{
        this.setState({
          loading: false
        })
        console.log(error)
        Router.push('/')
      })
  }

  async sendAgreementStatus(){
    this.setState({
      loading: true
    })
    try{
       axios.get('https://api.money-men.kz/api/agreementNew',{ params:{
        leadID: this.state.leadID,
        sign: 'y'
      }})
      .then((response) =>{
        console.log(response)
        this.setState({
          loading: false
        })

        if(response.data.success){
          swal("Успешно!", "Наши специалисты свяжутся с Вами в течении 15 минут").then(()=>{
            Router.push('/')
          })
        }
      })
    }catch(error){
      this.setState({
        loading: false
      })
      console.log(error)
      Router.push('/')

    }
}

  componentDidMount(){
    if(getUrlParameter('token').length === 0) {
      Router.push('/')
    }else {
      this.setState ({
        token: getUrlParameter('token')
      })
    }
    this.getUserDocument(userToken())
  }

  render() {
    const {fio, dateOfBirth, address, email, placeOfWork, position, iin, cardNumber, startCard, endCard, placeOfBirth, insuranceAmount, givenDate, code, period, contractNumber, reward, main, total, cardGiven, iban, phone2, endDate} = this.state
    return (
      <div className="container otherPages">
        <Head><title>Соглашение</title></Head>
        {this.state.loading ? (<div className='modelLoader'></div>) : (<div className='modelLoader loaded'> </div>)}
    <div className="row justify-content-center">
        <div className="col-md-12">
            <div className="agreements-block">
                <h4 align="center">Соглашение пользователя</h4>

                <ul className='complete'>
                {/* {this.state.docs.map(doc=> (
                    <li className={doc.link===null? 'd-none' : ''}><img className='checkedComplete' src={require("../img/checked.png")} /><a href={doc.link} target="_blank">{doc.name}</a></li>
                ))} */}
                  <li>
                    <img className='checkedComplete' src={require("../img/checked.png")} />
                    <InsuranceApplicationDocument 
                      fio={fio}
                      dateOfBirth={dateOfBirth}
                      address={address}
                      phone={phone2}
                      email={email}
                      placeOfWork={placeOfWork}
                      position={position}
                      iin={iin}
                      cardNumber={cardNumber}
                      startCard={startCard}
                      endCard={endCard}
                      placeOfBirth={placeOfBirth}
                      insuranceAmount={insuranceAmount}
                      givenDate={givenDate}
                      code={code}
                      period={period}
                    />
                  </li>
                  <li>
                    <img className='checkedComplete' src={require("../img/checked.png")} />
                    <MicrocreditInsuranceDocument
                      fio={fio}
                      dateOfBirth={dateOfBirth}
                      address={address}
                      iin={iin}
                      cardNumber={cardNumber}
                      contractNumber={contractNumber}
                      insuranceAmount={insuranceAmount}
                      code={code}
                      period={period}
                      reward={reward}
                    />
                  </li>
                  <li>
                    <img className='checkedComplete' src={require("../img/checked.png")} />
                    <InsuranceContractDocument
                      contractNumber={contractNumber}
                      givenDate={givenDate}
                      endDate={endDate}
                      fio={fio}
                      address={address}
                      phone={phone2}
                      iin={iin}
                      insuranceAmount={insuranceAmount}
                      reward={reward}
                      cardNumber={cardNumber}
                      cardGiven={cardGiven}
                      startCard={startCard}
                      email={email}
                      period={period}
                    />
                  </li>
                  <li>
                    <img className='checkedComplete' src={require("../img/checked.png")} />
                    <MicrocreditAgreementDocument
                      main={main}
                      reward={reward}
                      fio={fio}
                      iin={iin}
                      address={address}
                      cardNumber={cardNumber}
                      cardGiven={cardGiven}
                      startCard={startCard}
                      endCard={endCard}
                      dateOfBirth={dateOfBirth}
                      phone={phone2}
                      iban={iban}
                      email={email}
                      contractNumber={contractNumber}
                      givenDate={givenDate}
                      endDate={endDate}
                      total={total}
                      period={period}
                    />
                  </li>
                </ul>
          <div className="repeatBtn form-group" >
            {this.state.rest === true ?   <button onClick={() => this.sendAgreementStatusWithRest()} className='mt-5' >Соглашаюсь</button> :
              <button onClick={() => this.sendAgreementStatus()} className='mt-5' >Соглашаюсь</button>
            }

          </div>
            </div>
        </div>
    </div>
</div>
    )
  }
}

export default Aggrement
