import React from "react";
import { connect } from "react-redux";
import {
  confirmSMS,
  postRegistration,
  emptyMessage,
  takeDocumentsBiometry,
  getSMSFromBMG,
  getSMS,
} from "../../store/actions/ActionCreators";
import InputMask from "react-input-mask";
import { Row } from "reactstrap";
import { Control, actions, Errors, Form } from "react-redux-form";
import Spinner from "react-spinner-material";
import disableScroll from "disable-scroll";

const codeConfirmation = (val) => {
  var res = String(val).replace(/_/g, "");
  return res.length === 6;
};

const mapStateToProps = (state) => {
  return {
    registrationValues: state.registrationValues,
    somemessage: state.message,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getSMSFromBMG: (registration) => dispatch(getSMSFromBMG(registration)),
  confirmSMS: (registration) => dispatch(confirmSMS(registration)),
  takeDocumentsBiometry: (registration) =>
    dispatch(takeDocumentsBiometry(registration)),
  postRegistration: (registration) => dispatch(postRegistration(registration)),
  emptyMessage: () => {
    dispatch(emptyMessage);
  },
  resetCode: () => {
    dispatch(actions.reset("codeConfirm"));
  },
});
const CodeMask = (props) => (
  <InputMask
    mask="999999"
    maskPlaceholder={null}
    className="my-input"
    {...props}
  />
);

class CodeConfirmBMG extends React.Component {
  componentDidMount() {
    this.props.emptyMessage();
    const progress = document.querySelector(".progress-done");
    progress.style.width = progress.getAttribute("data-done") + "%";
    progress.append(progress.getAttribute("data-done") + "%");
    progress.style.opacity = 1;
  }

  sendCode = () => {
    this.props.getSMSFromBMG(this.props.registrationValues);
  };

  handleSubmit = (vals) => {
    let object = {};
    object.code = vals.code;
    const finalobjects = Object.assign(this.props.registrationValues, object);

    this.props.takeDocumentsBiometry(finalobjects);
    this.props.resetCode();
  };

  render() {
    window.scrollTo(0, 0);
    const phone = this.props.registrationValues.phone || null;
    return (
      <div>
        <div className="progressBar">
          <div
            className="progress-done"
            id="progress-done"
            data-done="55"
          ></div>
          <p className="counter">Вероятность одобрения</p>
        </div>

        {this.props.loading === true ? (
          <div className="modelLoader">{disableScroll.on()}</div>
        ) : (
          <div className="modelLoader loaded">{disableScroll.off()}</div>
        )}
        <Form
          model="codeConfirm"
          className="container formsStep"
          onSubmit={(values) => this.handleSubmit(values)}
        >
          {this.props.somemessage.error !== null ? (
            <div className="alert alert-danger" role="alert">
              <strong>{this.props.somemessage.error}</strong>
            </div>
          ) : null}
          <div className="alert alert-success mx-auto" role="alert">
            Код подтверждения отправлен на ваш номер. Номер телефона:{" "}
            <strong>{phone}</strong>
          </div>
          <h2 className="text-center">Введите код подтверждения</h2>
          <Row className="form-group col-12 mx-auto">
            <label htmlFor="code" className="text-center mt-3">
              Код:
            </label>
            <Control
              className="form-control"
              placeholder="______"
              model=".code"
              type="tel"
              component={CodeMask}
              validators={{ codeConfirmation }}
            />
            <Errors
              className="text-danger"
              model=".code"
              show="touched"
              messages={{
                codeConfirmation: "Заполните поля код",
              }}
            />
          </Row>
          <div className="button form-group  codeConfirm">
            {this.props.loading === true ? (
              <Spinner
                className="loading"
                size={200}
                spinnerColor={"#ef2221"}
                spinnerWidth={2}
                visible={true}
              />
            ) : (
              <button type="submit">Подтвердить</button>
            )}
          </div>
        </Form>
        {/*<div className="button form-group  codeConfirm mb-5">*/}
        {/*  <button className="newCode" onClick={this.sendCode}>*/}
        {/*    Получить новый код*/}
        {/*  </button>*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeConfirmBMG);
