import React from "react";
import Router from "next/router";
import axios from "axios";
import swal from "sweetalert";
import Head from "next/head";
import InsuranceApplicationDocument from "../components/document_1/insuranceApplication";
import MicrocreditInsuranceDocument from "../components/document_1/microcreditInsurance";
import InsuranceContractDocument from "../components/document_1/insuranceContract";
import MicrocreditAgreementDocument from "../components/document_1/microcreditAgreement";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { CameraFeed } from "../components/CameraFeed/CameraFeed";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { userReducer: state.userReducer };
};

function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  const results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

const userToken = () => {
  if (getUrlParameter("token").length !== 0) {
    return getUrlParameter("token");
  } else if (getUrlParameter("leadID").length !== 0) {
    return getUrlParameter("leadID");
  } else {
    return null;
  }
};

class Aggrement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      isBMG: false,
      isVerified: false,
      leadID: null,
      loading: false,
      docs: [],
      id: null,
      id_req: null,
      sign: "",
      isCodeSent: false,
      code_conf: null,
      errorInCode: null,
      phone: null,
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
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.uploadImageManually = this.uploadImageManually.bind(this);
    this.signDocuments = this.signDocuments.bind(this);
  }

  async getUserDocument(token) {
    this.setState({
      loading: true,
    });

    await axios
      .get(`https://api.i-credit.kz/api/getDocumentData?token=${token}`)
      .then(async (response) => {
        if (response.data) {
          this.setState({
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
            total: response.data.main + Number(response.data.reward),
            cardGiven: response.data.cardGiven,
            iban: response.data.iban,
          });
        } else {
          swal("Oops", "Что-то пошло не так", "error").then(() => {
            Router.push("/");
          });
        }
      })
      .catch((error) => {
        console.log(error);
        swal("Oops", "Что-то пошло не так", "error").then(() => {
          Router.push("/");
        });
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  async sendAgreementStatus() {
    this.toggleModal();
    this.setState({
      isModalOpen: true,
    });

    // Проверяем разрешение на камеру
    navigator.permissions
      .query({ name: "camera" })
      .then((permissionObj) => {
        if (permissionObj.state !== "granted")
          swal("Oops", "Нужно дать доступ к камере!", "error");
      })
      .catch((error) => {
        console.log("Got error :", error);
        swal("Oops", "Камера не обнаружена!", "error");
      });
  }

  // Отправка УДВ + селфи на бэк
  async uploadImageManually(doc, selfie) {
    const formData = new FormData();

    formData.append("iin", this.state.iin);
    formData.append("leadID", this.state.leadID);

    formData.append("photo", doc);
    formData.append("fileName", "image.png");
    formData.append("extension", "png");

    formData.append("photo2", selfie);
    formData.append("fileName", "image.png");
    formData.append("extension", "png");

    this.setState({
      loading: true,
    });

    // Попытка отправления фото по эндпоинту
    await axios
      .post(
        `https://24money.kz/biometria/public/api/comparePhotoManual`,
        formData
      )
      .then((response) => {
        if (response.data?.similarity > 82) {
          swal(
            "Верификация пройдена",
            "Можете подписать документы",
            "success"
          ).then(() => {
            this.setState({
              isVerified: true,
            });
          });
        } else {
          swal(
            "Верификация не пройдена",
            "Фото не прошло проверку, попробуйте еще раз",
            "error"
          ).then(() => {
            Router.push("/");
          });
        }
      })
      .catch((error) => {
        console.log(error);
        swal(
          "Ошибка при попытке верификации",
          "Попробуйте еще раз",
          "error"
        ).then(() => {
          Router.push("/");
        });
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  }

  signDocuments() {
    try {
      axios
        .get("https://api.i-credit.kz/api/agreementNew", {
          params: {
            leadID: this.state.leadID,
            sign: "y",
          },
        })
        .then((response) => {
          console.log(response);
          this.setState({
            loading: false,
          });

          if (response.data.success) {
            swal("Успешно!", "Ожидайте поступления денег в течении дня.").then(
              () => {
                Router.push("/");
              }
            );
          } else {
            swal(
              "Ошибка подписания документов",
              "Вы будете перенаправлены на главную страницу",
              "error"
            ).then(() => {
              Router.push("/");
            });
          }
        });
    } catch (error) {
      this.setState({
        loading: false,
      });
      console.log(error);
      Router.push("/");
    }
  }

  // Отправка селфи на бэк
  async uploadImage(file) {
    const formData = new FormData();

    formData.append("iin", this.state.iin);
    formData.append("leadID", this.state.leadID);
    formData.append("photo", file);
    formData.append("fileName", "image.png");
    formData.append("extension", "png");

    this.setState({
      loading: true,
    });

    // Попытка отправления фото по эндпоинту
    await axios
      .post(`https://24money.kz/biometria/public/api/comparePhotos`, formData)
      .then((response) => {
        if (response.data.similarity > 82) {
          swal(
            "Верификация пройдена",
            "Можете подписать документы",
            "success"
          ).then(() => {
            this.setState({
              isModalOpen: false,
            });
          });
        } else {
          swal(
            "Верификация не пройдена",
            "Фото не прошло проверку, попробуйте еще раз",
            "error"
          ).then(() => {
            Router.push("/");
          });
        }
      })
      .catch((error) => {
        console.log(error);
        swal(
          "Ошибка при попытке верификации",
          "Попробуйте еще раз",
          "error"
        ).then(() => {
          Router.push("/");
        });
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  }

  componentDidMount() {
    const token = getUrlParameter("token");

    if (!token) {
      swal("Oops", "Нет токена", "error").then(() => {
        Router.push("/");
      });
    } else {
      this.setState({
        token: getUrlParameter("token"),
        isBMG: getUrlParameter("bmg"),
      });

      this.getUserDocument(token);
    }
  }

  render() {
    const {
      fio,
      dateOfBirth,
      address,
      email,
      placeOfWork,
      position,
      iin,
      cardNumber,
      startCard,
      endCard,
      placeOfBirth,
      insuranceAmount,
      givenDate,
      code,
      period,
      contractNumber,
      reward,
      main,
      total,
      cardGiven,
      iban,
      phone2,
      endDate,
    } = this.state;

    return (
      <div className="container otherPages">
        {/* Модалка с получением фотки */}
        <Modal
          isOpen={this.state.isModalOpen}
          class="modal modal-calculator"
          size="lg"
        >
          {/*<ModalHeader toggle={this.toggleModal}>Верификация</ModalHeader>*/}
          <ModalHeader>Верификация</ModalHeader>
          <ModalBody>
            {this.state.isVerified ? (
              <div className="verification-success">
                <p>Вы прошли верификацию. Можете подписать документы.</p>
                <button onClick={this.signDocuments}>
                  Подписать документы
                </button>
              </div>
            ) : (
              <CameraFeed
                sendFile={this.uploadImage}
                sendFileManually={this.uploadImageManually}
                isBMG={this.state.isBMG}
              />
            )}
          </ModalBody>
        </Modal>

        <Head>
          <title>Соглашение</title>
        </Head>

        {this.state.loading ? (
          <div className="modelLoader"></div>
        ) : (
          <div className="modelLoader loaded"> </div>
        )}

        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="agreements-block">
              <h4 align="center">Соглашение пользователя</h4>

              {/*Список документов*/}
              <ul className="complete">
                <li>
                  <img
                    className="checkedComplete"
                    src={require("../img/checked.png")}
                  />
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
                  <img
                    className="checkedComplete"
                    src={require("../img/checked.png")}
                  />
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
                  <img
                    className="checkedComplete"
                    src={require("../img/checked.png")}
                  />
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
                  <img
                    className="checkedComplete"
                    src={require("../img/checked.png")}
                  />
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

              <div className="repeatBtn form-group">
                <button
                  onClick={() => this.sendAgreementStatus()}
                  className="mt-5"
                >
                  Подписать с помощью биометрии
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Aggrement);
