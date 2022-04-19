import React from 'react';
import banner from '../img/banner.png'
import ProgressBar from '../components/shared/ProgressBar';
import bottomBanner from '../img/bottomBanner.png'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useRouter, withRouter } from "next/router";
import Head from 'next/head'
import {controlUtm} from '../defaults/utmSource'
import cookie from 'js-cookie';
var scrollToElement = require('scroll-to-element');
import Link from 'next/link'

const AppLink = ({children, className, href}) =>
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>

class Home extends React.Component {
  state = {
    collapse: ""
  }

  toggleCollapse = id => () => {
    if (!this.state.collapse || id !== this.state.collapse) {
      this.setState({
        collapse: id
      });
    } else if (this.state.collapse === id) {
        this.setState({ collapse: false })
    }
  }

  testfunc = () => {
    if(cookie.get('utm_source')) {
      return true
    }else{
      return false
    }
  }
  handleFocus() {
    scrollToElement('.calculator-info', {
      offset: 0,
      align: 'middle',
      ease: 'outExpo',
      duration: 600
    });
  }
  componentDidMount() {
    controlUtm()
  }
  render() {
  return (
        <div className="">
          <Head>
            <title>
              Деньги в кредит онлайн микрозаймы на карту по Казахстану
            </title>
          </Head>
            <div className="view">
            <div className="container">
              <ul className="mainphone-numbers phone-numbers">
                <li className='phonenotworking'><span>Call center:</span><h1><i className="fa fa-phone" /><a href="tel:+77007501500">+7 700 <b className="black">750 15 00</b></a></h1><b className='phoneInfo'></b></li>
                <li><span>Отдел взыскания:</span><i className="fa fa-phone" /><h1><a href="tel:+77788701029">+7 778 <b className="black">870 10 29</b></a></h1></li>
              </ul>
                <div className="mainbanner" styles={{ backgroundImage:`url(${banner})` }}>
        <div className="header-text row">
          <h1 className="secondary-header col-md-4 col-12">Микрозайм <span className="d-block">онлайн на карту</span> <span className="d-block">до <span className="red">145
                000тг</span>
            </span>
          </h1>
          <div className="header-imgs col-md-8 col-12 align-items-center">
            <div className="d-flex flex-xl-row flex-md-column">
              <h1 className="red" style={{fontSize: '50px', marginRight: '10px', textAlign:'center',}}>
                ГЭСВ*
              </h1>
              <img className="bigzerotext" src={require("../img/0.svg")} alt="" />
            </div>
            <div className="header-imgs--right">
              <img className="percentageZero" src={require("../img/percent.svg")} alt="" />
              <img className="vsegdaPervidni" src={require("../img/Всегда первые 7 дней.svg")} alt="" />
            </div>
          </div>
        </div>
        <p className="GESV" style={{marginTop: '10px', fontSize: '11px', textAlign: 'end'}}>*льготный период - первые 7 дней МФО не начисляет вознаграждение</p>
        <section className="calculator container">
          <div className="texts">
            <p>Калькулятор микрокредитов</p>
            <p>Льготный период 7 дней</p>
          </div>
          <ProgressBar />
        </section>
      </div>
      </div>
      </div>
        <main className="container">
          <section className="finance">
            <h2 className=" primary text-center">Онлайн сервис для легкого получения <br></br>микрокредита в кратчайший срок!</h2>
            <div className="advantages text-center">
              <div className="advantages--box">
                <div>
                  <h1><span className="red d-block">1</span>Быстро</h1>
                  <p>Микрокредит за 10 минут без справок, поручителей и лишних вопросов</p>
                </div>
              </div>
              <div className="advantages--box">
                <div>
                  <h1><span className="red d-block">2</span>Удобно</h1>
                  <p>Вы узнаете об одобрении микрокредита и получите средства без посещения офиса</p>
                </div>
              </div>
              <div className="advantages--box">
                <div>
                  <h1><span className="red d-block">3</span>Доступно</h1>
                  <p>Ваша кредитная история не повлияет на одобрение микрокредита</p>
                </div>
              </div>
            </div>
            <div className="presents pt-5 mt-5 d-flex justify-content-center mx-auto">
              <div className="row presentblock">
              <div className="col-md-6 mb-5  present">
                  <div className="content">
                    <h2 className="red">100</h2>
                    <p>
                      ПРОЩАЕМ КРЕДИТ
                      <span className="d-block">КАЖДОМУ 100-МУ</span>
                      <span className="d-block">ЗАЕМЩИКУ</span>
                    </p>
                  </div>
                  <AppLink href="/get_money">
                  <div className="content-bottom red">
                          Получить деньги
                  </div>
                  </AppLink>
                  <img src={require("../img/Bitmap.png")} alt="" />


                </div>
                {/* <div className="mb-5 col-md-6 present">
                  <div className="content">
                    <h2 className="red">Онлайн  <span className="d-block">заим</span></h2>
                    <p>по всему <span className="d-block">Казахстану</span></p>
                  </div>
                  <AppLink href="/get_money">
                  <div className="content-bottom red">
                        Получить деньги
                  </div>
                  </AppLink>
                  <img src={require("../img/Bitmap1.png")} alt="" />
                </div> */}
                

              </div>
            </div>
          </section>
          <section className="stepmoney">
            <h2 className="primary text-center">
              Два простых шага <br/>
              и деньги у Вас!
            </h2>
            <div className="steps mt-5">
              <div className="row">
                <div className="step mb-5 col-md-6">
                  <img src={require("../img/svg/icon 1.svg")}  className="mb-5" />
                  <h4>Заполните анкету на <span> нашем сайте</span></h4>
                </div>
                <div className="step mb-5 col-md-6">
                  <img src={require("../img/svg/icon 2.svg")}  className="mb-5" />
                  <h4>Ожидайте наше решение в течение 10 минут!</h4>
                </div>
              </div>
            </div>
            <p className="little-header mb-5">
              В случае одобрения займа, наш
              <span className="d-block">кредитный менеджер свяжется с Вами.</span>
            </p>
            <div className="button rounded">
              <AppLink href="/get_money"><button className="takebtn">  Получить деньги
                 </button></AppLink>

            </div>
            <h2 className="mt-5 whyus">Почему именно мы? <span className="whyus--little d-block">Наши
                преимущества</span></h2>
            <div className="advantages">
              <div className="row">
                <div className="advantage col-lg-4">
                  <img src={require("../img/ptichka.png")} alt="" />
                  <h3 className="advantage--text">0% на первые 7 дней всегда</h3>
                </div>
                <div className="advantage col-lg-4">
                  <img src={require("../img/ptichka.png")} alt="" />
                  <h3 className="advantage--text">Без залога и поручителей</h3>
                </div>
                <div className="advantage col-lg-4">
                  <img src={require("../img/ptichka.png")} alt="" />
                  <h3 className="advantage--text">10 минут рассмотрение</h3>
                </div>
                <div className="advantage col-lg-4">
                  <img src={require("../img/ptichka.png")} alt="" />
                  <h3 className="advantage--text">Без подтверждения ваших доходов</h3>
                </div>
                <div className="advantage col-lg-4">
                  <img src={require("../img/ptichka.png")} alt="" />
                  <h3 className="advantage--text">Зачисление денег на счет любого банка</h3>
                </div>
                <div className="advantage col-lg-4">
                  <img src={require("../img/ptichka.png")} alt="" />
                  <h3 className="advantage--text">Личные данные под надежной защитой</h3>
                </div>
              </div>
            </div>
            <div className="whyus-footer">
              <h2 className="whyus mt-5">
                Одобряем займы на самых выгодных условиях в течение
                <span className="red"> 10 <span>минут</span></span>
                <span className="whyus--little d-block">
                  Получите деньги на карту уже сегодня
                </span>
              </h2>
            </div>
            <div className="button">
            <AppLink href="/get_money">
              <button className="takebtn">
                        Получить деньги
                    </button></AppLink>
            </div>
          </section>
        </main>

        <section className="bottom-banner" styles={{ backgroundImage:`url(${bottomBanner})` }}>
          <div className="container">
            <div className="bContent mb-5">
              <div className="topText">
                <h1 className="red">100</h1>
                <h4>
                  Каждому 100-му <br></br>заемщиком<br></br>
                  кредит в подарок
                </h4>
              </div>
              <p className="bContent--text">Займи и стань счастливым заемщиком, которому мы простим кредит. Каждому 100-му клиенту прощается как проценты вознаграждения, так и сам заём! Успей стать 100-тым!</p>
              <div className="bContent--links">
                <button className="takebtn">Хочу кредит в подарок</button>
                <button>Узнать подробнее</button>
              </div>
            </div>
            <div className= "videolist">
              <div className="inst"  onClick={this.toggleCollapse("video1")}>
                <div className="playblock">
                  <div className="playbtn" >
                  </div>
                </div>
              </div>
              <div className="inst" onClick={this.toggleCollapse("video2")}>
                <div className="playblock">
                  <div className="playbtn"></div>
                </div>
              </div>
              <div className="inst" onClick={this.toggleCollapse("video3")}>
                <div className="playblock" >
                  <div className="playbtn"></div>
                </div>
              </div>
              <div className="inst" onClick={this.toggleCollapse("video4")}>
                <div className="playblock" >
                  <div className="playbtn"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="bottom-banner--text ">
          <p className="container">
            Вы столкнулись с ситуацией, когда понадобились финансы, но одолжить не у кого? Оплачиваете кредиты и
            нуждаетесь в дополнительных денежных средствах для их погашения?
            <br/>
            <br/>
            Оказались в безвыходном положении, когда деньги нужны здесь и сейчас? Мы предоставляем Вам возможность
            получить нужную сумму уже сегодня, не выходя из дома!
            <br/>
            <br/>
            Микрокредиты от онлайн сервиса I-credit —
            это надежный способ решения материальной проблемы в кратчайший срок для каждого гражданина Казахстана. Мы
            гарантируем экономию Вашего времени и нервов, так как процесс одобрения происходит онлайн и занимает всего
            10 минут — необходимо лишь заполнить анкету на сайте.
            <br/>
            <br/>
            Вы с нами впервые? — мы готовы предоставить такие же выгодные условия, как для опытных партнеров-заемщиков.
            Первые 7 дней — без процентов!
            <br/>
            <br/>
            Условия кредитования:
            <br/>
            Максимальная ставка в день: 1%
            <br/>
            Срок кредитования: от 15 до 30 дней
            <br/>
            <br/>
            В случае нарушения установленного срока платежа по займу, заемщик будет обязан оплатить неустойку в размере
            0,5% от суммы основного долга за каждый день просрочки, но не более 10% от суммы основного долга в год.
            <br/>
            <br/>
            Кредитование доступно физическим лицам:
            <br/>
            мужского пола: от 21 до 67 лет
            <br/>
            женского пола: от 21 до 73 лет
          </p>
        </div>

        <Modal  isOpen={this.state.collapse === "video1"} toggle={this.toggleCollapse("video1")} id="video1"  size="md">
				 <ModalBody>
         <iframe  src="https://www.instagram.com/p/CGX1ryJIUY1/embed?autoplay=1" height="500px" width="100%" frameborder="0" scrolling="no" allow="autoplay" allowtransparency="true"></iframe>
					 </ModalBody>
				 </Modal>
         <Modal  isOpen={this.state.collapse === "video2"} toggle={this.toggleCollapse("video2")} id="video2"  size="md">
				 <ModalBody>
         <iframe  src="https://www.instagram.com/p/CF7tqQWp98a/embed?autoplay=1" height="500px" width="100%" frameborder="0" scrolling="no" allow="autoplay" allowtransparency="true"></iframe>
					 </ModalBody>
				 </Modal>
         <Modal  isOpen={this.state.collapse === "video3"} toggle={this.toggleCollapse("video3")} id="video3"  size="md">
				 <ModalBody>
         <iframe  src="https://www.instagram.com/p/CF7wKQap_3M/embed?autoplay=1" height="500px" width="100%" frameborder="0" scrolling="no" allow="autoplay" allowtransparency="true"></iframe>
					 </ModalBody>
				 </Modal>
         <Modal  isOpen={this.state.collapse === "video4"} toggle={this.toggleCollapse("video4")} id="video4"  size="md">
				 <ModalBody>
         <iframe  src="https://www.instagram.com/p/CH0v9xehpWX/embed/?autoplay=1" height="500px" width="100%" frameborder="0" scrolling="no" allow="autoplay" allowtransparency="true"></iframe>
					 </ModalBody>
				 </Modal>
        </div>
    );
  }
}

export default withRouter(Home);

