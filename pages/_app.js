import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import Navbar from "../components/shared/Nav";
import Footer from "../components/shared/Footer";
import { Provider } from "react-redux";
import React, { Fragment } from "react";
import { createWrapper } from "next-redux-wrapper";
import { connect } from "react-redux";
import store from "../store/store";
import App from "next/app";

const onStart = async () => {
  await import("../public/js/i18n");
  return false;
};

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    onStart().then((resp) => {
      setTimeout(() => {
        this.setState({
          isLoading: resp,
        });
      }, 1000);
    });

    const hours = 1.2;
    const now = new Date().getTime();
    const setupTime = localStorage.getItem("setupTime");

    if (setupTime == null) {
      localStorage.setItem("setupTime", now.toString());
    } else {
      if (now - setupTime > hours * 60 * 60 * 1000) {
        localStorage.clear();
        localStorage.setItem("setupTime", now.toString());
      }
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        {this.state.isLoading ? (
          <div className="modelLoader" />
        ) : (
          <div>
            <div className="chatBlock">
              <a href="https://t.me/icredit_kzbot" target="_blank">
                <img
                  className="imgwhatsapp mb-3"
                  src={require("../img/svg/telegram.svg")}
                ></img>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=+77752163255"
                target="_blank"
              >
                <img
                  className="imgwhatsapp"
                  src={require("../img/svg/whatsapp.svg")}
                  alt=""
                />
              </a>
            </div>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </div>
        )}

        {/*<div className="chatBlock">*/}
        {/*  <a href="https://t.me/icredit_kzbot" target="_blank">*/}
        {/*    <img*/}
        {/*      className="imgwhatsapp mb-3"*/}
        {/*      src={require("../img/svg/telegram.svg")}*/}
        {/*    ></img>*/}
        {/*  </a>*/}
        {/*  <a*/}
        {/*    href="https://api.whatsapp.com/send?phone=+77752163255"*/}
        {/*    target="_blank"*/}
        {/*  >*/}
        {/*    <img*/}
        {/*      className="imgwhatsapp"*/}
        {/*      src={require("../img/svg/whatsapp.svg")}*/}
        {/*      alt=""*/}
        {/*    />*/}
        {/*  </a>*/}
        {/*</div>*/}
        {/*<Navbar />*/}
        {/*<Component {...pageProps} />*/}
        {/*<Footer />*/}
      </Provider>
    );
  }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
const mapStateToProps = (state) => ({
  loggedIn: state.userReducer.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({});

MyApp = connect(mapStateToProps, mapDispatchToProps)(MyApp);

export default wrapper.withRedux(MyApp);
