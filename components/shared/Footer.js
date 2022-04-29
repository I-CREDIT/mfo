import React, { Fragment } from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router'
// Перевод для функционального компонента
import { useTranslation } from "react-i18next";

const AppLink = ({children, className, href}) =>
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>

const Footer = () => {
  const router = useRouter();
  // Translation
  const { t } = useTranslation()

  return (
    <footer className={router.pathname.includes('admin') ? 'd-none footer mt-5 mb-5' :  'footer mt-5 mb-5'}>
      <hr></hr>
        <div className="container">
          <div className="row footerCols">
            <div className="col-md-4 footerCol">
              <AppLink href="/"><img className='icreditlogo mb-3' src={require("../../img/logo.png")} /> </AppLink>
              <p>
                {t('footerCol-1-1')}
                <span className="d-block" />{t('footerCol-1-2')}</p>
              <div className="socials">
                <p>{t('footerCol-1-3')}</p>
                <div className="socials--icons">
                <i className="fa fa-facebook" aria-hidden="true" />
                <a className="instagramIcon" href="https://www.instagram.com/zaymi_kz" target="_blank">
                  <i className="fa fa-instagram" aria-hidden="true"/></a>
                </div>
              </div>
            </div>
            <div className="col-md-4 footerCol">
              <div className="lists">
                <AppLink href="/conditions">{t('footerCol-2-1')}</AppLink>
                  <AppLink href="/feedback">{t('footerCol-2-2')}</AppLink>
                  <AppLink href="/complaint">{t('footerCol-2-3')}</AppLink>
                <AppLink href="/moneystep">{t('footerCol-2-4')}</AppLink>
                <AppLink href="/payment_methods">{t('footerCol-2-5')}</AppLink>
                <AppLink href="/guide">{t('footerCol-2-6')}</AppLink>
                <AppLink href="/contacts">{t('footerCol-2-7')}</AppLink>
              </div>
            </div>
            <div className="col-md-4 footerCol">
              <div className="lists">
                <p>ТОО «МФО «I-Credit.kz» </p>
                <p>г. Алматы, 050057</p>
                <p>ул. Толе би 101</p>
                <p>БЦ "Толе би", 3 этаж, блок D</p>
                <p>БИН: 070440003902</p>
                <p>ОКЭД: 64929</p>
                <p>Р/сч: KZ976017131000000372</p>
                <p>АО "Народный Банк Казахстана""</p>
                <p>БИК: HSBKKZKX</p>
              </div>
            </div>
            <div className="col-md-4 footerCol">
              <p className="mt-5">
                © 2020 www.i-credit.kz | ТОО «iCredit.kz»<br />
                № регистрации НБРК: 05.16.005
              </p>
            </div>
            <div className="col-md-4  footerCol">
              <div className="extra-info">
                <img src={require("../../img/svg/Оферта.svg")} />
                <a href="https://i-credit.kz/docs/rules.pdf" target="_blank">
                  <h5>
                    {t('extra-info-1-1')}
                    <br/>
                    {t('extra-info-1-2')}
                  </h5>
                </a>
              </div>
            </div>
            <div className="col-md-4 footerCol">
              <div className="extra-info">
                <img src={require("../../img/svg/Оферта.svg")} />
                <a href="https://i-credit.kz/docs/licence.pdf" target="_blank">
                  <h5>
                    {t('extra-info-2-1')}
                    <br/>
                    {t('extra-info-2-2')}
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
