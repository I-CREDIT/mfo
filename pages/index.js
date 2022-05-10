import React from 'react';
import banner from '../img/banner.png'
import ProgressBar from '../components/shared/ProgressBar';
import bottomBanner from '../img/bottomBanner.png'
import { Modal, ModalBody } from 'reactstrap';
import { withRouter } from "next/router";
import Head from 'next/head'
import {controlUtm} from '../defaults/utmSource'
import Link from 'next/link'

// Перевод для классового компонента
import withUseTranslation from "../public/js/hocs/useTranslation";

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

  componentDidMount() {
    controlUtm()
  }

  render() {
  // Достаем функцию-переводчик
  const { t, i18n } = this.props.useTranslationValue

  return (
        <div>
          <Head>
            <title>
              Деньги в кредит онлайн микрокредиты на карту по Казахстану
            </title>
          </Head>
            <div className="view">
            <div className="container">
              <ul className="mainphone-numbers phone-numbers">
                <li className='phonenotworking'><span>Call center:</span><h1><i className="fa fa-phone" /><a href="tel:+77007501500">+7 700 <b className="black">750 15 00</b></a></h1><b className='phoneInfo'></b></li>
                <li><span>{t('collection-department')}</span><i className="fa fa-phone" /><h1><a href="tel:+77788701029">+7 778 <b className="black">870 10 29</b></a></h1></li>
              </ul>
                <div className="mainbanner" styles={{ backgroundImage:`url(${banner})` }}>
        <div className="header-text row">
          {i18n.language === 'ru' ?
              <h1 className="secondary-header col-md-4 col-12">
                {t('header-text-1')}
                <span className="d-block">{t('header-text-2')}</span>
                <span className="d-block">
                  {t('header-text-3')} <span className="red">{t('header-text-red')}</span>
                </span>
              </h1> :
              <h1 className="secondary-header col-md-4 col-12">
                <span>
                  {t('header-text-3')} <span className="red">{t('header-text-red')}</span>
                </span>
                <span className="d-block">{t('header-text-1')}</span>
                <span className="d-block">
                  {t('header-text-2')}
                </span>
              </h1>
          }
          <div className="header-imgs col-md-8 col-12 align-items-center">
            <div className="d-flex flex-xl-row flex-md-column">
              <h1 className="red" style={{fontSize: '50px', marginRight: '10px', textAlign:'center',}}>
                {t('GESV')}*
              </h1>
              <img className="bigzerotext" src={require("../img/0.svg")} alt="" />
            </div>
            <div className="header-imgs--right">
              <img className="percentageZero" src={require("../img/percent.svg")} alt="" />
              <h1 className="col-md-4 col-12 secondary-header--right">
                {t('always-first-1')}
                <span className="d-block">{t('always-first-2')}</span>
                <span className="d-block red">{t('always-first-red')}</span>
              </h1>
            </div>
          </div>
        </div>
        <p className="GESV" style={{marginTop: '10px', fontSize: '11px', textAlign: 'end'}}>
          {t('GESV')}
        </p>
        <section className="calculator container">
          <div className="texts">
            <p>{t('calculator')}</p>
            <p>{t('period')}</p>
          </div>
          <ProgressBar />
        </section>
      </div>
      </div>
      </div>
        <main className="container">
          <section className="finance">
            <h2 className=" primary text-center">
              {t('online-service-easy-receipt')}<br/>
              {t('micro-credit-shortest-time')}
            </h2>
            <div className="advantages text-center">
              <div className="advantages--box">
                <div>
                  <h1><span className="red d-block">1</span>{t('fast')}</h1>
                  <p>{t('fast-content')}</p>
                </div>
              </div>
              <div className="advantages--box">
                <div>
                  <h1><span className="red d-block">2</span>{t('conveniently')}</h1>
                  <p>{t('conveniently-content')}</p>
                </div>
              </div>
              <div className="advantages--box">
                <div>
                  <h1><span className="red d-block">3</span>{t('available')}</h1>
                  <p>{t('available-content')}</p>
                </div>
              </div>
            </div>
            <div className="presents">
              <div className="row presentblock">
              <div className="col-md-6 present">
                  <div className="content">
                    <h2 className="red">100</h2>
                    <p>
                      {t('forgive-credit-1')}
                      <span className="d-block">{t('forgive-credit-2')}</span>
                      <span className="d-block">{t('forgive-credit-3')}</span>
                    </p>
                  </div>
                  <AppLink href="/get_money">
                  <div className="content-bottom red">
                    {t('get-money')}
                  </div>
                  </AppLink>
                  <img src={require("../img/Bitmap.png")} alt="" />
                </div>
              </div>
            </div>
          </section>
          <section className="stepmoney">
            <h2 className="primary text-center">
              {t('step-money-title-1')}<br/>
              {t('step-money-title-2')}
            </h2>
            <div className="steps mt-5">
              <div className="row">
                <div className="step mb-5 col-md-6">
                  <img src={require("../img/svg/icon 1.svg")}  className="mb-5" />
                  <h4>{t('step-money-step-1')}</h4>
                </div>
                <div className="step mb-5 col-md-6">
                  <img src={require("../img/svg/icon 2.svg")}  className="mb-5" />
                  <h4>{t('step-money-step-2')}</h4>
                </div>
              </div>
            </div>
            <p className="little-header">
              {t('step-money-result-1')}<br/>
              {t('step-money-result-2')}
            </p>
            <div className="button rounded">
              <AppLink href="/get_money">
                <button className="takebtn">
                  {t('get-money')}
                 </button>
              </AppLink>

            </div>
            <h2 className="whyus">
              {t('why-title')}
              <span className="whyus--little d-block">
                {t('why-content')}
              </span>
            </h2>
            <div className="advantages">
              <div className="row">
                <div className="advantage col-lg-4">
                  <img src={require("../img/ptichka.png")} alt="" />
                  <h3 className="advantage--text">{t('why-1')}</h3>
                </div>
                <div className="advantage col-lg-4">
                  <img src={require("../img/ptichka.png")} alt="" />
                  <h3 className="advantage--text">{t('why-2')}</h3>
                </div>
                <div className="advantage col-lg-4">
                  <img src={require("../img/ptichka.png")} alt="" />
                  <h3 className="advantage--text">{t('why-3')}</h3>
                </div>
                <div className="advantage col-lg-4">
                  <img src={require("../img/ptichka.png")} alt="" />
                  <h3 className="advantage--text">{t('why-4')}</h3>
                </div>
                <div className="advantage col-lg-4">
                  <img src={require("../img/ptichka.png")} alt="" />
                  <h3 className="advantage--text">{t('why-5')}</h3>
                </div>
                <div className="advantage col-lg-4">
                  <img src={require("../img/ptichka.png")} alt="" />
                  <h3 className="advantage--text">{t('why-6')}</h3>
                </div>
              </div>
            </div>
            <div className="whyus-footer">
              {i18n.language === 'ru' ?
                  <h2 className="whyus mt-5">
                    {t('why-footer-title')}
                    <span className="red">10 <span>минут</span></span>
                  </h2> :
                  <h2 className="whyus mt-5">
                    <span className="red">10 <span>минут</span></span>
                    {t('why-footer-title')}
                  </h2>
              }
              <span className="whyus--little d-block">
                      {t('why-footer-content')}
              </span>
            </div>
            <div className="button">
            <AppLink href="/get_money">
              <button className="takebtn">
                {t('get-money')}
              </button>
            </AppLink>
            </div>
          </section>
        </main>

        <section className="bottom-banner" styles={{ backgroundImage:`url(${bottomBanner})` }}>
          <div className="container">
            <div className="bContent mb-5">
              <div className="topText">
                <h1 className="red">100</h1>
                <h4>
                  {t('topText-1')}
                  <br/>
                  {t('topText-2')}
                  <br/>
                  {t('topText-3')}
                </h4>
              </div>
              <p className="bContent--text">
                {t('bContent--text')}
              </p>
              <div className="bContent--links">
                <button className="takebtn">{t('want-credit-btn')}</button>
                <button>{t('more-info')}</button>
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
        <div className="bottom-banner--text">
          <p className="container">
            {t('bottom-banner-1')}
            <br/>
            <br/>
            {t('bottom-banner-2')}
            <br/>
            <br/>
            {t('bottom-banner-3')}
            <br/>
            <br/>
            {t('bottom-banner-4')}
            <br/>
            <br/>
            {t('bottom-banner-5')}
            <br/>
            {t('bottom-banner-6')}
            <br/>
            {t('bottom-banner-7')}
            <br/>
            <br/>
            {t('bottom-banner-8')}
            <br/>
            <br/>
            {t('bottom-banner-9')}
            <br/>
            {t('bottom-banner-10')}
            <br/>
            {t('bottom-banner-11')}
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

export default withRouter(withUseTranslation(Home));

