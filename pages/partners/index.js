import Head from 'next/head'

const Partners = () => {
  return (
    <div className="partners">
      <Head>
        <title>
          Партнерская программа
        </title>
      </Head>
      <div className="container">
        <h1 className='title'>
          Партнерская программа для интернет партнеров
        </h1>
        <p className='text'>
          Партнерская программа от MoneyMan – стабильно высокий дополнительный заработок, не требующий особых усилий.
        </p>
        <div className='invite'>
          <p>
            Мы приглашаем к сотрудничеству:
          </p>
          <ul className='complete'>
            <li>
                <img className="checkedComplete" src={require("../../img/checked.png")}/>
                Веб-мастеров и владельцев казахстанских сайтов
            </li>
            <li>
                <img className="checkedComplete" src={require("../../img/checked.png")}/>
                Лидогенераторов и рекламные площадки
            </li>
            <li>
                <img className="checkedComplete" src={require("../../img/checked.png")}/>
                Интернет-магазины
            </li>
            <li>
                <img className="checkedComplete" src={require("../../img/checked.png")}/>
                Купонные сервисы
            </li>
            <li>
                <img className="checkedComplete" src={require("../../img/checked.png")}/>
                Городские интернет-порталы
            </li>
          </ul>
        </div>
        <p className='text'>
          Время регистрации – одна минута. После регистрации вы начнете получать выплаты за каждую одобренную заявку. Работа с системой не требует специальных навыков. Контроль доходов осуществляется через личный кабинет партнера в режиме реального времени.
        </p>
        <form className='form-group'>
          <input class="form-control form-control-lg" type="text" placeholder="Имя*"/>
          <div className='input-group1'>
            <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='E-mail*'/>
            <input type="number" class="form-control form-control-lg" placeholder='Телефон*'/>
          </div>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Сообщение*'></textarea>
          <div className='btn-container'>
            <button type="submit" class="btn btn-lg">Отправить</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Partners;