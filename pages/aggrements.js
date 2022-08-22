import React from 'react'
import Router from 'next/router'
import axios from 'axios'
import swal from 'sweetalert'
import Head from 'next/head'
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import InsuranceApplicationDocument from '../components/document_1/insuranceApplication'
import MicrocreditInsuranceDocument from '../components/document_1/microcreditInsurance'
import InsuranceContractDocument from '../components/document_1/insuranceContract2'
import ApplicationRestructuringDocument from '../components/document_1/applicationRestructuring'
import RestructuringAgreementDocument from '../components/document_1/restructuringAgreement'

pdfMake.vfs = pdfFonts.pdfMake.vfs;
pdfMake.fonts = {
  TimesNewRoman: {
    normal: 'TimesNewRoman.ttf',
    bold: 'TimesNewRomanBold.ttf',
    italics: 'TimesNewRomanItalics.ttf',
    bolditalics: 'TimesNewRomanBoldItalics.ttf'
  },
  emptyCheckbox: {
    normal: 'emptyCheckbox.ttf'
  }
}

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
      endCard:null,
      placeOfBirth: null,
      insuranceAmount: null,
      givenDate: null,
      code: null,
      period: null,
      contractNumber: null,
      reward: null,
      endDate: null,
      amount: null,
      penalty: null,
      cardGiven: null
    }
  }
  async getUserDocument(token) {
    this.setState({
      loading: true
    })

    await axios.get(`https://api.i-credit.kz/api/getProlongationData?token=${token}`)
    .then((response) => {
      if(response.data.success) {
        this.setState({
          docs: response.data.data.docs,
          id: response.data.data.id,
          id_req: response.data.data.id_req,
          loading: false,
          rest: response.data.data.rest,
          phone: response.data.data.phone ? response.data.data.phone : '',
          address: response.data.data.address ? response.data.data.address : '',
          amount: response.data.data.amount ? response.data.data.amount : '',
          placeOfBirth: response.data.data.birthPlace ? response.data.data.birthPlace : '',
          code: response.data.data.code ? response.data.data.code : '',
          contractNumber: response.data.data.contractNumber ? response.data.data.contractNumber : '',
          cardNumber: response.data.data.docNumber ? response.data.data.docNumber : '',
          email: response.data.data.email ? response.data.data.email : '',
          endCard: response.data.data.endGiven ? response.data.data.endGiven : '',
          fio: response.data.data.fio ? response.data.data.fio : '',
          iin: response.data.data.iin ? response.data.data.iin : '',
          insuranceAmount: response.data.data.insurance ? response.data.data.insurance : '',
          penalty: response.data.data.penalty ? response.data.data.penalty : 0,
          period: response.data.data.period ? response.data.data.period : '',
          position: response.data.data.position ? response.data.data.position : '',
          givenDate: response.data.data.created_at ? response.data.data.created_at.slice(0, 10).split('-').reverse().join('.') : '',
          reward: response.data.data.reward ? response.data.data.reward : '',
          startCard: response.data.data.startGiven ? response.data.data.startGiven : '',
          placeOfWork: response.data.data.wordPlace ? response.data.data.wordPlace : '',
          dateOfBirth: response.data.data.birthDay ? response.data.data.birthDay : '',
          endDate: response.data.data.prolongationDate ? response.data.data.prolongationDate : '',
          cardGiven: response.data.data.docIssue ? response.data.data.docIssue : '' 
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
    axios.get(`https://api.i-credit.kz/api/prolongationAgreement?sign=y&request_id=${this.state.id}`)
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
       axios.get('https://api.i-credit.kz/api/agreement',{ params:{
        id:this.state.id,
        phone:this.state.phone,
        token:this.state.token,
        id_req: this.state.id_req,
        sign: 'y'
      }})
      .then((response) =>{
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
    const {
      phone, 
      address, 
      amount, 
      placeOfBirth, 
      code, 
      contractNumber, 
      cardNumber, 
      email, 
      endCard, 
      fio, 
      iin, 
      insuranceAmount, 
      penalty, 
      period,
      position,
      givenDate,
      reward,
      startCard,
      placeOfWork,
      dateOfBirth,
      endDate,
      cardGiven
    } = this.state
    console.log(phone, 
      address, 
      amount, 
      placeOfBirth, 
      code, 
      contractNumber, 
      cardNumber, 
      email, 
      endCard, 
      fio, 
      iin, 
      insuranceAmount, 
      penalty, 
      period,
      position,
      givenDate,
      reward,
      startCard,
      placeOfWork,
      dateOfBirth,
      endDate,
      cardGiven
    )

    return (
      <div className="container otherPages">
        <Head>
          <title>Соглашение</title>
        </Head>
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
                      phone={phone}
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
                      phone={phone}
                      iin={iin}
                      insuranceAmount={insuranceAmount}
                      reward={reward}
                      cardNumber={cardNumber}
                      cardGiven={cardGiven}
                      startCard={startCard}
                      email={email}
                      period={period}
                      amount={amount}
                    />
                  </li>
                  <li>
                    <img className='checkedComplete' src={require("../img/checked.png")} />
                    <ApplicationRestructuringDocument
                      fio={fio}
                      iin={iin}
                      cardNumber={cardNumber}
                      phone={phone}
                      period={period}
                      moneyForRestructuring={+reward * 2}
                      reward={reward}
                      penalty={penalty}
                    />
                  </li>
                  <li>
                    <img className='checkedComplete' src={require("../img/checked.png")} />
                    <RestructuringAgreementDocument
                      contractNumber={contractNumber}
                      iin={iin}
                      givenDate={givenDate}
                      fio={fio}
                      penalty={penalty}
                      moneyForRestructuring={+reward * 2}
                      period={period}
                      cardNumber={cardNumber}
                      startCard={startCard}
                      endCard={endCard}
                      cardGiven={cardGiven}
                      address={address}
                      phone={phone}
                      email={email}
                      amoun={amount}
                      total={+amount + +reward * 2}
                      reward={reward}
                      endDate={endDate}
                      main={+reward + +amount}
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
