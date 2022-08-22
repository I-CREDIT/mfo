import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
const AppLink = ({children, className, href}) =>
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>

function Conditions() {
    return (
        <div>
          <Head>
            <title>
              Условия предоставления микрокредитов
            </title>
          </Head>
              <section className="otherPages">
        <div className="otherPages--top">
          <div className="container">
            <h1>Условия предоставления микрокредитов</h1>
            <AppLink href="get_money">
            <button className="takebtn">Получить деньги</button>
            </AppLink>
          </div>
        </div>
        <div className="container">
          <section className="conditions">
            <div className="condition row">
              <div className="condition--head col-md-7">
                <img src={require("../../img/svg/icon 3.svg")} className="mb-5" />
                <p>Срок микрокредита и ставка <br />вознаграждения</p>
              </div>
              <div className="condition--info col-md-5">
                <p>Льготный период под 0% до 7 дней.</p>
                <p>Срок займа – до 45 дней.</p>
              </div>
            </div>
          </section>
          <section className="conditions">
            <div className="condition row">
              <div className="condition--head col-md-7">
                <img src={require("../../img/svg/icon 4.svg")} className="mb-5" />
                <p>Штрафные санкции</p>
              </div>
              <div className="condition--info col-md-5">
                <p>В случае нарушения установленного срока платежа по микрокредиту, заемщик будет обязан оплатить неустойку, 0,5% от суммы основного долга за каждый день просрочки.</p>
              </div>
            </div>
          </section>
        </div>
      </section>
        </div>
    );
}

export default Conditions;
