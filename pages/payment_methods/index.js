import React from 'react';
import Link from 'next/link'
import {Collapse} from 'reactstrap';
import Head from 'next/head'

// Перевод для классового компонента
import withUseTranslation from "../../public/js/hocs/useTranslation";

var scrollToElement = require('scroll-to-element');
const AppLink = ({children, className, href}) =>
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>

class Instruction extends React.Component {
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


      setTimeout(() => scrollToElement(`.${id}`, {
        offset: 0,
        align: 'middle',
        ease: 'outExpo',
        duration: 600
      }), 350 )
    }

    render () {
    // Достаем функцию-переводчик
    const { t } = this.props.useTranslationValue

    return (
        <div>
           <Head>
            <title>Способ оплаты</title>
          </Head>
        <section className="otherPages">
          <div className="otherPages--top hidden">
            <div className="container">
              <h1>
                {t('otherPages-1')}<br/>
                {t('otherPages-2')}
              </h1>
              <AppLink href="/get_money">
              <button className="takebtn" data-toggle="modal" data-target="#modalmoney">
                {t('get-money')}
              </button>
              </AppLink>
            </div>
          </div>
          <div className="container hidden">
            <div className="voprosi pogashenie ">
              <div className="pogasit--logo">
                <img src={require("../../img/qrcode/logo.jpg")} className="pogasit--img qiwiterminal" alt="" onClick={this.toggleCollapse("qrcode")}/>
              </div>
                <div className="">
                  <div className="voprosi--top" onClick={this.toggleCollapse("qrcode")}>
                    <h2>{t('voprosi--top-1')}</h2>
                    <a className="more" type="button" />
                  </div>
                  <Collapse isOpen={this.state.collapse === 'qrcode'} id="qrcode">
                    <div className="pogasit--otvet">
                      <div className="instruction">
                        <img className='text-center mb-4 instruction--img' src={require("../../img/qrcode/qrcode.jpg")} />
                        <p>{t('instruction')}</p>
                        <p className="instTop">
                        1. {t('voprosi--top-1-1')}
                        </p>
                        {/* <div className="instruction--img mb-5">
                          <img src={require("../../img/qiwi/qw.png")} />
                        </div> */}
                        <p className="instTop">
                          2. {t('voprosi--top-1-2')}
                        </p>
                        {/* <div className="instruction--img mb-5">
                          <img src={require("../../img/qiwi/qw2.png")} />
                        </div> */}
                        <p className="instTop">
                          3. {t('voprosi--top-1-3')}
                        </p>
                        {/* <div className="instruction--img mb-5">
                          <img src={require("../../img/qiwi/qw3.png")} />
                        </div> */}
                        <p className="instTop">
                          4. {t('voprosi--top-1-4')}
                        </p>
                        {/* <div className="instruction--img mb-5">
                          <img src={require("../../img/qiwi/qw4.png")} />
                        </div> */}

                      </div>
                    </div>
                  </Collapse>
              </div>
            </div>

            <div className="voprosi pogashenie ">
              <div className="pogasit--logo">
                <img src={require("../../img/qiwi.png")} className="pogasit--img qiwiterminal" alt="" onClick={this.toggleCollapse("qiwiterminal")}/>
              </div>
                <div className="">
                  <div className="voprosi--top" onClick={this.toggleCollapse("qiwiterminal")}>
                    <h2>{t('voprosi--top-2')}</h2>
                    <a className="more" type="button" />
                  </div>
                  <Collapse isOpen={this.state.collapse === 'qiwiterminal'} id="qiwiterminal">
                    <div className="pogasit--otvet">
                      <div className="instruction">
                        <p>{t('instruction')}</p>
                        <p className="instTop">
                        1. {t('voprosi--top-2-1')}
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/qiwi/qw.png")} />
                        </div>
                        <p className="instTop">
                          2. {t('voprosi--top-2-2')}
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/qiwi/qw2.png")} />
                        </div>
                        <p className="instTop">
                          3. {t('voprosi--top-2-3')}
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/qiwi/qw3.png")} />
                        </div>
                        <p className="instTop">
                          4. {t('voprosi--top-2-4')}
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/qiwi/qw4.png")} />
                        </div>
                        <p className="instTop">
                          5. {t('voprosi--top-2-5')}
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/qiwi/qw5.png")} />
                        </div>
                        <p className="instTop">
                          6. {t('voprosi--top-2-6')}
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/qiwi/qw6.png")} />
                        </div>
                        <p className="instTop">
                          7. {t('voprosi--top-2-7')}
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/qiwi/qw7.png")} />
                        </div>
                        <p className="instTop">
                          8. {t('voprosi--top-2-8')}
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/qiwi/qw8.png")} />
                        </div>
                      </div>
                    </div>
                  </Collapse>
              </div>
            </div>
            <div className="voprosi pogashenie ">
              <div className="pogasit--logo ">
                <img src={require("../../img/kassa24/kassa24.png")} className="pogasit--img " alt="" onClick={this.toggleCollapse("terkassa24")}/>
              </div>
                <div className="">
                  <div className="voprosi--top " onClick={this.toggleCollapse("terkassa24")}>
                    <h2 className='terkassa24'>{t('voprosi--top-3')}</h2>
                    <a className="more" type="button" />
                  </div>
                  <Collapse isOpen={this.state.collapse === 'terkassa24'} id="terkassa24">
                    <div className="pogasit--otvet">

                    <p className="instruction font-weight-bold">
                      {t('instruction')}
                    </p>
                      <p className="instTop">
                          1. {t('voprosi--top-3-1')}
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/kassa24/1.png")} />
                        </div>
                        <p className="instTop">
                          2. {t('voprosi--top-3-2')}
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/kassa24/2.png")} />
                        </div>
                        <p className="instTop">
                          3.  {t('voprosi--top-3-3')}
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/kassa24/3.png")} />
                        </div>
                        <p className="instTop">
                          4. {t('voprosi--top-3-4')}
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/kassa24/4.png")} />
                        </div>
                        <p className="instTop">
                          5. {t('voprosi--top-3-5')}
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/kassa24/5.png")} />
                        </div>
                        <p className="instTop">
                          6. {t('voprosi--top-3-6')}
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/kassa24/6.png")} />
                        </div>
                    </div>
                  </Collapse>
              </div>
            </div>
            <div className="voprosi pogashenie">
              <div className="pogasit--logo">
                <img src={require("../../img/pogas2.png")} className="pogasit--img plus24 " alt="" onClick={this.toggleCollapse("pogasit2")}/>
              </div>
                <div className="">
                  <div className="voprosi--top" onClick={this.toggleCollapse("pogasit2")}>
                    <h2 className='pogasit2'>{t('voprosi--top-4')}</h2>
                    <a className="more" type="button" />
                  </div>
                  <Collapse isOpen={this.state.collapse === 'pogasit2'} id="pogasit2">
                    <div className="pogasit--otvet">
                    <p className="instruction font-weight-bold">
                      {t('instruction')}
                    </p>
                      <p className="instTop">
                          1. {t('voprosi--top-4-1')}
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/plus24App/inst.jpg")} />
                        </div>
                        <p className="instTop">
                          2. {t('voprosi--top-4-2')}
                        </p>

                        <p className="instTop">
                          3. {t('voprosi--top-4-3')}
                        </p>
                        <div className="instruction--img mb-5">
                          <img src={require("../../img/plus24App/searchplus.jpg")} />
                        </div>
                        <p className="instTop">
                          4. {t('voprosi--top-4-4')}
                        </p>
                    </div>
                  </Collapse>
              </div>
            </div>
            <div className="voprosi pogashenie ">
              <div className="pogasit--logo">
                <img src={require("../../img/pogas3.png")} className="pogasit--img pogasit3" alt="" onClick={this.toggleCollapse("pogasit3")}/>
              </div>
                <div className="">
                  <div className="voprosi--top" onClick={this.toggleCollapse("pogasit3")}>
                    <h2 className='pogasit3'>{t('voprosi--top-5')}</h2>
                    <a className="more " type="button" />
                  </div>
                  <Collapse isOpen={this.state.collapse === 'pogasit3'} id="pogasit3">
                    <div className="pogasit--otvet">

                    <p className="instruction font-weight-bold">
                      {t('instruction')}
                    </p>
                      <p className="instTop">
                        1. {t('voprosi--top-5-1')}
                      </p>
                      <div className="instruction--img mb-5">
                        <img src={require("../../img/homebank/halikstep1.jpg")} />
                      </div>
                      <p className="instTop">
                        2. {t('voprosi--top-5-2')}
                      </p>
                      <div className="instruction--img mb-5">
                        <img src={require("../../img/homebank/haliksearch.jpg")} />
                      </div>
                      <p className="instTop">
                        3. {t('voprosi--top-5-3')}
                      </p>
                      <p className="instTop">
                        4. {t('voprosi--top-5-4')}
                      </p>
                    </div>
                  </Collapse>

              </div>
            </div>
            <div className="voprosi pogashenie">
              <div className="pogasit--logo">
                <img src={require("../../img/pogas4.png")} className="pogasit--img" alt="" onClick={this.toggleCollapse("pogasit4")}/>
              </div>
                <div className="">
                  <div className="voprosi--top" onClick={this.toggleCollapse("pogasit4")}>
                    <h2 className='pogasit4'>{t('voprosi--top-6')}</h2>
                    <a className="more" type="button" />
                  </div>
                  <Collapse isOpen={this.state.collapse === 'pogasit4'} id="pogasit4">
                    <div className="pogasit--otvet">

                      <div className="instruction">
                      <p className="instruction font-weight-bold">
                        {t('instruction')}
                      </p>
                      <p className="instTop">
                        1. {t('voprosi--top-6-1')}
                      </p>
                        <div className="instruction--img">
                        </div>
                      </div>
                    </div>
                  </Collapse>
              </div>
            </div>
          </div></section>
        </div>
    )
    }
}

export default withUseTranslation(Instruction)
