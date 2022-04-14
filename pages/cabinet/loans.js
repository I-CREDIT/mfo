import React from 'react'
import {connect} from 'react-redux'
import withAuth from '../../components/hocs/withAuth'
import {helloUser} from '../../defaults/hello'
import {fetchUserStatus, fetchUserHistory} from '../../store/actions/userAction'
import Router from 'next/router'
import swal from "sweetalert";
import Head from 'next/head'
import axios from 'axios'
import Status from '../../components/shared/userStatus'
import History from '../../components/shared/userHistory'
import { ifSaled } from '../../defaults/saled'
const mapStateToProps = state => {
    console.log('FFF', state.userReducer.user.url, state.userReducer.UF_3, state.userReducer.UF_4)
  return {userReducer: state.userReducer, userStatus: state.userStatus, userHistory: state.userHistory}
}

const mapDispatchToProps = (dispatch) => ({
  fetchUserStatus: () => dispatch(fetchUserStatus()),
  fetchUserHistory: () => dispatch(fetchUserHistory())
})

class Cabinet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        btnLoading: false,
        sendRepeat: true,
        step: '',
        repeatMessage: '',
    }
  }


  canSendRepeat() {
    axios
        .get(`https://api.money-men.kz/api/repeatUser?iin=${this.props.userReducer.user.UF_4}`)
        .then((response) => {
          if (response.data.success == true) {
            // Router.push('/cabinet/repeated')
            this.setState({sendRepeat: true})
            // this.setState({btnLoading: false})
          }
          if (response.data.success == false) {
            this.setState({sendRepeat: false})
            this.setState({repeatMessage: response.data.message})
          } else {
            console.log(response)
          }
        })
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
      .catch(error => console.log(error))
  }
  
  componentDidMount() {
    this.getCurrentStep()
    this.canSendRepeat()
    window.scrollTo(0, 0);
    this.props.fetchUserStatus()
    this.props.fetchUserHistory()
  }

  async handleRepeated() {
    if (!this.state.sendRepeat) {
      await swal("Oops!", `${this.state.repeatMessage || "Вам пока отказано подавать повторный займ"} `, "error");
    }
    else if (this.state.step !== 3 && this.state.canSendRepeat) {
        await Router.push(`/cabinet/continue`)
    }
    else {
        this.setState({btnLoading: true})
        await axios
            .get(`https://api.money-men.kz/api/repeatUser?iin=${this.props.userReducer.user.UF_4}`)
            .then((response) => {
                if (response.data.success) {
                    Router.push('/cabinet/repeated')
                    this.setState({btnLoading: false})
                }
                else {
                    this.setState({btnLoading: false})
                    swal("Oops!", `${response.data.message || "Вам пока отказано подавать повторный займ"} `, "error");
                }
            })
    }
    // else {
    //   console.log('hello')
      // this.setState({btnLoading: true})
      // await axios
      //   .get(`https://api.money-men.kz/api/repeatUser?iin=${this.props.userReducer.user.UF_4}`)
      //   .then((response) => {
      //     if (response.data.success == true) {
      //       Router.push('/cabinet/repeated')
      //       this.setState({btnLoading: false})
      //     }
      //     if (response.data.success == false) {
      //       this.setState({btnLoading: false})
      //       swal("Oops!", `${response.data.message || "Вам пока отказано подавать повторный займ"} `, "error");
      //     } else {
      //       console.log(response)
      //     }
      //   })
    // }
  }

  render() {
    if(ifSaled(this.props.userReducer.user.UF_4)) {
      // проданные на ID collect
      return (
        <div className='container otherPages'>
          <p className='welcome text-center'>{helloUser()} {this.props.userReducer.user.UF_5}
          {" "+this.props.userReducer.user.UF_6}
          !</p>
          <div className="alert alert-info" role="alert">
            <h4 className="alert-heading">Ваш контракт продан</h4>
            <p>Ваш контракт ПРОДАН в <b>ТОО “Коллекторское агентство “АйДи Коллект”</b></p>
            <p className="m-b-0">
            контактный номер <b ><a href='tel:+77000037733'>телефона</a>/<a  href="https://api.whatsapp.com/send?phone=+77000037733" target="_blank">Whatsapp</a>: +7 700 003 77 33</b>
            <br/>Email: <a href='mailto:info@idcollect.kz'><b>info@idcollect.kz</b></a>
            </p>
          </div>
      </div>
      )
      
    }else {
    return (
      <div className='otherPages'>
        <Head>
          <title>Кабинет | I-credit.kz</title>
        </Head>
       
        {this.state.btnLoading
          ? (
            <div className="modelLoader"/>
          )
          : (
            <div className="modelLoader loaded"/>
          )}
        {this.props.userReducer.authenticatingUser === true
          ? (
            <div className="modelLoader"/>
          )
          : (
            <div className="modelLoader loaded"/>
          )}
           
        <p className='welcome text-center'>
            {helloUser()} {this.props.userReducer.user.UF_5} {" " + this.props.userReducer.user.UF_6}!
        </p>
        {!this.props.userStatus.userStatus.success && !this.props.userStatus.isLoading
            ?
            (
                <div>
                    <div className="repeatBtn form-group">
                        <button onClick={() => this.handleRepeated()}>
                            Новая заявка
                        </button>
                    </div>
                </div>
            )
            :
            (
                <div/>
            )
        }

      

        {this.props.userStatus.isLoading
          ? (
            <div className='mt-5'>
              <div className="placeholder">
                <div className="loader"/>
                <div className="loader"/>
                <div className="loader"/>
              </div>
            </div>
          )
          : <Status/>}
        {this.props.userHistory.isLoading
          ? (
            <div>
              <div className="placeholder mt-5">
                <div className="loader"/>
                <div className="loader"/>
                <div className="loader"/>
              </div>
            </div>
          )
          : <History/>}

      </div>
    )
          }
  }
}

// const mapStateToProps = ({ usersReducer: { user: { UF9} } }) => ({
// username: UF9 })

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(Cabinet));
