import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Router from "next/router";

// components
import ContinueStep2 from "../../components/continue/ContinueStep2";
import ContinueStep3 from "../../components/continue/ContinueStep3";
import withAuth from "../../components/hocs/withAuth";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Progressbar from "../../components/shared/Progressbar";
import cookie from "js-cookie";

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
    userStatus: state.userStatus,
    userHistory: state.userHistory,
  };
};

const Continue = ({ userReducer }) => {
  const [stepResult, setStepResult] = useState(1);
  const [summa, setSumma] = useState(55000);
  const [srok, setSrok] = useState(20);
  const [step, setStep] = useState(stepResult);
  const [sendRepeat, setSendRepeat] = useState(true);

  // const canSendRepeat = () => {
  //   axios
  //     .post(`https://api.i-credit.kz/api/repeatUser`, {
  //       token: cookie.get("token"),
  //     })
  //     .then((response) => {
  //       if (response.data.success) {
  //         // Router.push('/cabinet/repeated')
  //         this.setState({ sendRepeat: true });
  //         // this.setState({btnLoading: false})
  //       } else {
  //         this.setState({ sendRepeat: false });
  //         this.setState({ repeatMessage: response.data.message });
  //       }
  //     });
  // };

  const getCurrentStep = () => {
    axios
      .post(
        `https://api.i-credit.kz/api/notFull`,
        {
          token: cookie.get("token"),
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        if (res.data.success) {
          if (res.data.step === 1) {
            Router.push("/cabinet/loans");
          } else {
            setStep(parseInt(res.data.step));
            setStepResult(parseInt(res.data.step));
          }
        }
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    // canSendRepeat();
    getCurrentStep();
  }, []);

  const StepReg = () => {
    return (
      <>
        {step === 2 ? (
          <ContinueStep2
            next={step}
            setNext={setStep}
            userDate={userReducer.user}
          />
        ) : (
          <ContinueStep3
            step={step}
            setStep={setStep}
            stepResult={stepResult}
            userDate={userReducer.user}
            summa={summa}
            srok={srok}
          />
        )}
      </>
    );
  };
  return (
    <div className="otherPages container">
      <div className="alert alert-info">
        <b>
          {userReducer.user.UF_5} {userReducer.user.UF_6}, вам необходимо
          дозаполнить анкету, чтобы получить микрокредит
        </b>
      </div>
      <h3 className="mt-5 mb-3 text-center">Продолжить анкету</h3>

      {stepResult === 2 ? (
        <StepReg />
      ) : (
        <ContinueStep3 userDate={userReducer.user} summa={summa} srok={srok} />
      )}
    </div>
  );
};

export default withAuth(connect(mapStateToProps, null)(Continue));
