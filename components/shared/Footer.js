import React, { Fragment } from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router'
import RulesMicrocreditDocument from '../document_1/rulesMicrocredit';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const AppLink = ({children, className, href}) =>
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>

const Footer = () => {
  const router = useRouter();
  const classes = useStyles();
  return (
    <footer className={router.pathname.includes('admin') ? 'd-none footer mt-5 mb-5' :  'footer mt-5 mb-5'}>
      <hr></hr>
        <div className="container">
          <div className="row footerCols">
            <div className="col-md-4 footerCol">
              <AppLink href="/"><img className='icreditlogo mb-3' src={require("../../img/logo.png")} /> </AppLink>
              <p>Прием заявок круглосуточно и без выходных.
                <span className="d-block" />Рассмотрение и отправка денег Пн-Пт | 09:00-18:00</p>
              <div className="socials">
                <p>Мы в соц сетях</p>
                <div className="socials--icons">
                <i className="fa fa-facebook" aria-hidden="true" />
                <a className="instagramIcon" href="https://www.instagram.com/zaymi_kz" target="_blank">
                  <i className="fa fa-instagram" aria-hidden="true"/></a>
                </div>
              </div>
            </div>
            <div className="col-md-4 footerCol">
              <div className="lists">
                <AppLink href="/conditions">Условия
                  предоставления займов</AppLink>
                  <AppLink href="/feedback">Оставить отзыв</AppLink>
                  <AppLink href="/complaint">Оставить жалобу</AppLink>
                <AppLink href="/moneystep">Как получить деньги</AppLink>
                <AppLink href="/payment_methods">Как вернуть деньги</AppLink>
                <AppLink href="/guide">Вопрос -
                  ответ (помощь)</AppLink>
                <AppLink href="/contacts">Контакты</AppLink>
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
            <Accordion className='col-md-8' elevation={2} style={{borderRadius: '20px', marginTop: '10px'}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{marginTop: '16px'}}
              >
                <Typography style={{fontWeight:'bold', margin:'auto', fontSize: '18px', fontFamily: 'CTCSplachRounded'}}>Документы</Typography>
              </AccordionSummary>
              <AccordionDetails style={{flexDirection: 'column'}}>
                <RulesMicrocreditDocument/>
                <a href="https://ffin.life/uploads/documents/%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0%20%D0%B4%D0%BE%D0%B1%D1%80%D0%BE%D0%B2%D0%BE%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD%20%D1%81%D1%82%D1%80%D0%B0%D1%85%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%BE%D1%82%20%D0%BD%D0%B5%D1%81%D1%87%D0%B0%D1%81%D1%82%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%81%D0%BB%D1%83%D1%87%D0%B0%D1%8F,%20%D0%A1%D0%94%20%D0%BE%D1%82%2005.03.2021%20%D0%B3%20%D1%81%20%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F%D0%BC%D0%B8%20%D0%BD%D0%B0%2015112021.pdf" target="_blank" className="footerCol">
                  <div className="extra-info">
                    <img src={require("../../img/svg/Оферта.svg")} />
                    <a><h5>Правила добровольного онлайн страхования</h5></a>
                  </div>
                </a>
                {/* <a href="/License.pdf" target="_blank" className="footerCol">
                  <div className="extra-info">
                    <img src={require("../../img/svg/Оферта.svg")} />
                    <a><h5>Лицензия на осуществление микрофинансовой деятельности</h5></a>
                  </div>
                </a> */}
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
