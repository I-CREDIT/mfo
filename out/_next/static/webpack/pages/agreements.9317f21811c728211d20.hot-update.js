webpackHotUpdate_N_E("pages/agreements",{

/***/ "./pages/agreements.js":
/*!*****************************!*\
  !*** ./pages/agreements.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_document_1_insuranceApplication__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/document_1/insuranceApplication */ "./components/document_1/insuranceApplication.js");
/* harmony import */ var _components_document_1_microcreditInsurance__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/document_1/microcreditInsurance */ "./components/document_1/microcreditInsurance.js");
/* harmony import */ var _components_document_1_insuranceContract__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/document_1/insuranceContract */ "./components/document_1/insuranceContract.js");
/* harmony import */ var _components_document_1_microcreditAgreement__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/document_1/microcreditAgreement */ "./components/document_1/microcreditAgreement.js");
/* harmony import */ var _store_reducers_userReducer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../store/reducers/userReducer */ "./store/reducers/userReducer.js");
/* harmony import */ var _components_CameraFeed_CameraFeed__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/CameraFeed/CameraFeed */ "./components/CameraFeed/CameraFeed.jsx");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_hocs_withAuth__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/hocs/withAuth */ "./components/hocs/withAuth.js");









var _jsxFileName = "C:\\Users\\admin\\Desktop\\projects\\MFO\\mfo\\pages\\agreements.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












 // camera (catch photo)






var mapStateToProps = function mapStateToProps(state) {
  return {
    userReducer: state.userReducer
  };
};

pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_14___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_15___default.a.pdfMake.vfs;
pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_14___default.a.fonts = {
  TimesNewRoman: {
    normal: 'TimesNewRoman.ttf',
    bold: 'TimesNewRomanBold.ttf',
    italics: 'TimesNewRomanItalics.ttf',
    bolditalics: 'TimesNewRomanBoldItalics.ttf'
  },
  emptyCheckbox: {
    normal: 'emptyCheckbox.ttf'
  }
};

function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

var userToken = function userToken() {
  if (getUrlParameter('token').length !== 0) {
    return getUrlParameter('token');
  } else {
    return null;
  }
};

var Agreement = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Agreement, _React$Component);

  var _super = _createSuper(Agreement);

  function Agreement(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Agreement);

    _this = _super.call(this, props);
    _this.state = {
      token: null,
      loading: false,
      docs: [],
      id: null,
      id_req: null,
      sign: '',
      isCodeSent: false,
      code_conf: null,
      errorInCode: null,
      phone: null,
      rest: null,
      isModalOpen: true
    };
    _this.toggleModal = _this.toggleModal.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.uploadImage = _this.uploadImage.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Agreement, [{
    key: "getUserDocument",
    value: function () {
      var _getUserDocument = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(token) {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  loading: true
                });
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_11___default.a.get("https://api.money-men.kz/api/getData?token=".concat(token)).then(function (response) {
                  if (response.data.success) {
                    _this2.setState({
                      docs: response.data.docs,
                      id: response.data.id,
                      id_req: response.data.id_req,
                      loading: false,
                      rest: response.data.rest,
                      phone: response.data.phone
                    });
                  } else {
                    next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/');
                  }
                })["catch"](function (error) {
                  _this2.setState({
                    loading: false
                  });

                  next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/');
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getUserDocument(_x) {
        return _getUserDocument.apply(this, arguments);
      }

      return getUserDocument;
    }()
  }, {
    key: "getCode",
    value: function () {
      var _getCode = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this3 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_11___default.a.get("https://api.money-men.kz/api/sendSms?phone=".concat(this.state.phone), {
                  headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                  }
                }).then(function (response) {
                  if (response.success) {
                    _this3.setState({
                      isCodeSent: true
                    });
                  }
                })["catch"](function (error) {
                  console.log(error);
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getCode() {
        return _getCode.apply(this, arguments);
      }

      return getCode;
    }()
  }, {
    key: "sendAgreementStatusForRest",
    value: function () {
      var _sendAgreementStatusForRest = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(this.state.code_conf !== null)) {
                  _context3.next = 3;
                  break;
                }

                _context3.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_11___default.a.get("https://api.money-men.kz/api/sendSms", {
                  params: {
                    id: this.state.id,
                    phone: this.state.phone,
                    token: this.state.token,
                    id_req: this.state.id_req,
                    code: this.state.code_conf,
                    sign: 'y'
                  }
                }, {
                  headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                  }
                }).then(function (response) {
                  if (response.success) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_12___default()("Успешно!", "".concat(response.message), "success").then(function () {
                      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/');
                    });
                  }
                })["catch"](function (error) {
                  console.log(error);
                });

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function sendAgreementStatusForRest() {
        return _sendAgreementStatusForRest.apply(this, arguments);
      }

      return sendAgreementStatusForRest;
    }()
  }, {
    key: "sendAgreementStatusWithRest",
    value: function sendAgreementStatusWithRest() {
      var _this4 = this;

      this.setState({
        loading: true
      });
      axios__WEBPACK_IMPORTED_MODULE_11___default.a.get("https://api.money-men.kz/api/prolongationAgreement?sign=y&request_id=".concat(this.state.id)).then(function (res) {
        _this4.setState({
          loading: false
        });

        if (res.data.success) {
          sweetalert__WEBPACK_IMPORTED_MODULE_12___default()("Успешно!", "success").then(function () {
            next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/');
          });
        }
      })["catch"](function (error) {
        _this4.setState({
          loading: false
        });

        console.log(error);
        next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/');
      });
    }
  }, {
    key: "sendAgreementStatus",
    value: function () {
      var _sendAgreementStatus = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _this5 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.setState({
                  loading: true
                });

                try {
                  axios__WEBPACK_IMPORTED_MODULE_11___default.a.get('https://api.money-men.kz/api/agreement', {
                    params: {
                      id: this.state.id,
                      phone: this.state.phone,
                      token: this.state.token,
                      id_req: this.state.id_req,
                      sign: 'y'
                    }
                  }).then(function (response) {
                    _this5.setState({
                      loading: false
                    });

                    if (response.data.success) {
                      sweetalert__WEBPACK_IMPORTED_MODULE_12___default()("Успешно!", "Наши специалисты свяжутся с Вами в течении 15 минут").then(function () {
                        next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/');
                      });
                    }
                  });
                } catch (error) {
                  this.setState({
                    loading: false
                  });
                  console.log(error);
                  next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/');
                }

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function sendAgreementStatus() {
        return _sendAgreementStatus.apply(this, arguments);
      }

      return sendAgreementStatus;
    }()
  }, {
    key: "toggleModal",
    value: function toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    } // Отправка фото на бэк

  }, {
    key: "uploadImage",
    value: function () {
      var _uploadImage = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(file) {
        var _this$props$userReduc, _this$props$userReduc2;

        var formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                formData = new FormData(); // Для теста, данные Мукана:
                // formData.append('iin', '970908350192')
                // formData.append('leadID', '277135')

                formData.append('iin', (_this$props$userReduc = this.props.userReducer.user) === null || _this$props$userReduc === void 0 ? void 0 : _this$props$userReduc.UF_4);
                formData.append('leadID', (_this$props$userReduc2 = this.props.userReducer.user) === null || _this$props$userReduc2 === void 0 ? void 0 : _this$props$userReduc2.UF_1);
                formData.append('photo', file);
                formData.append('fileName', 'image.png');
                formData.append('extension', 'png'); // Попытка отправления фото по эндпоинту

                _context5.next = 8;
                return axios__WEBPACK_IMPORTED_MODULE_11___default.a.post("http://178.170.221.75/biometria/public/api/comparePhotos", formData).then(function () {
                  next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/");
                })["catch"](function (error) {
                  console.log(error);
                });

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function uploadImage(_x2) {
        return _uploadImage.apply(this, arguments);
      }

      return uploadImage;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {// if(getUrlParameter('token').length === 0) {
      //   Router.push('/')
      // } else {
      //   this.setState ({
      //     token: getUrlParameter('token')
      //   })
      // }
      // this.getUserDocument(userToken())
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: "container otherPages",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_22__["Modal"], {
          isOpen: this.state.isModalOpen,
          "class": "modal modal-calculator",
          size: "lg",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_22__["ModalHeader"], {
            toggle: this.toggleModal,
            children: "\u0412\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_22__["ModalBody"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_CameraFeed_CameraFeed__WEBPACK_IMPORTED_MODULE_21__["CameraFeed"], {
              sendFile: this.uploadImage
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 264,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_13___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("title", {
            children: "\u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 268,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 11
        }, this), this.state.loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "modelLoader"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 34
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "modelLoader loaded",
          children: " "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 74
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "row justify-content-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "col-md-12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "agreements-block",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h4", {
                align: "center",
                children: "\u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 273,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("ul", {
                className: "complete",
                children: this.state.docs.map(function (doc) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("li", {
                    className: doc.link === null ? 'd-none' : '',
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("img", {
                      className: "checkedComplete",
                      src: __webpack_require__(/*! ../img/checked.png */ "./img/checked.png")
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 277,
                      columnNumber: 70
                    }, _this6), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                      href: doc.link,
                      target: "_blank",
                      children: doc.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 277,
                      columnNumber: 141
                    }, _this6)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 277,
                    columnNumber: 23
                  }, _this6);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 275,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "repeatBtn form-group",
                children: this.state.rest === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
                  onClick: function onClick() {
                    return _this6.sendAgreementStatusWithRest();
                  },
                  className: "mt-5",
                  children: "\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 285,
                  columnNumber: 49
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
                  onClick: function onClick() {
                    return _this6.sendAgreementStatus();
                  },
                  className: "mt-5",
                  children: "\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 286,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 284,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 272,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 9
      }, this);
    }
  }]);

  return Agreement;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_hocs_withAuth__WEBPACK_IMPORTED_MODULE_24__["default"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_23__["connect"])(mapStateToProps)(Agreement)));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWdyZWVtZW50cy5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwicGRmTWFrZSIsInZmcyIsInBkZkZvbnRzIiwiZm9udHMiLCJUaW1lc05ld1JvbWFuIiwibm9ybWFsIiwiYm9sZCIsIml0YWxpY3MiLCJib2xkaXRhbGljcyIsImVtcHR5Q2hlY2tib3giLCJnZXRVcmxQYXJhbWV0ZXIiLCJuYW1lIiwicmVwbGFjZSIsInJlZ2V4IiwiUmVnRXhwIiwicmVzdWx0cyIsImV4ZWMiLCJsb2NhdGlvbiIsInNlYXJjaCIsImRlY29kZVVSSUNvbXBvbmVudCIsInVzZXJUb2tlbiIsImxlbmd0aCIsIkFncmVlbWVudCIsInByb3BzIiwidG9rZW4iLCJsb2FkaW5nIiwiZG9jcyIsImlkIiwiaWRfcmVxIiwic2lnbiIsImlzQ29kZVNlbnQiLCJjb2RlX2NvbmYiLCJlcnJvckluQ29kZSIsInBob25lIiwicmVzdCIsImlzTW9kYWxPcGVuIiwidG9nZ2xlTW9kYWwiLCJiaW5kIiwidXBsb2FkSW1hZ2UiLCJzZXRTdGF0ZSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInN1Y2Nlc3MiLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3IiLCJoZWFkZXJzIiwiY29uc29sZSIsImxvZyIsInBhcmFtcyIsImNvZGUiLCJzd2FsIiwibWVzc2FnZSIsInJlcyIsImZpbGUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidXNlciIsIlVGXzQiLCJVRl8xIiwicG9zdCIsIm1hcCIsImRvYyIsImxpbmsiLCJyZXF1aXJlIiwic2VuZEFncmVlbWVudFN0YXR1c1dpdGhSZXN0Iiwic2VuZEFncmVlbWVudFN0YXR1cyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2l0aEF1dGgiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHBkZk1ha2UgZnJvbSBcInBkZm1ha2UvYnVpbGQvcGRmbWFrZVwiO1xyXG5pbXBvcnQgcGRmRm9udHMgZnJvbSBcInBkZm1ha2UvYnVpbGQvdmZzX2ZvbnRzXCI7XHJcbmltcG9ydCBpbnN1cmFuY2VBcHBsaWNhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2RvY3VtZW50XzEvaW5zdXJhbmNlQXBwbGljYXRpb24nXHJcbmltcG9ydCBtaWNyb2NyZWRpdEluc3VyYW5jZSBmcm9tICcuLi9jb21wb25lbnRzL2RvY3VtZW50XzEvbWljcm9jcmVkaXRJbnN1cmFuY2UnXHJcbmltcG9ydCBpbnN1cmFuY2VDb250cmFjdCBmcm9tICcuLi9jb21wb25lbnRzL2RvY3VtZW50XzEvaW5zdXJhbmNlQ29udHJhY3QnXHJcbmltcG9ydCBtaWNyb2NyZWRpdEFncmVlbWVudCBmcm9tICcuLi9jb21wb25lbnRzL2RvY3VtZW50XzEvbWljcm9jcmVkaXRBZ3JlZW1lbnQnXHJcbmltcG9ydCB1c2Vyc1JlZHVjZXIgZnJvbSBcIi4uL3N0b3JlL3JlZHVjZXJzL3VzZXJSZWR1Y2VyXCI7XHJcblxyXG4vLyBjYW1lcmEgKGNhdGNoIHBob3RvKVxyXG5pbXBvcnQgeyBDYW1lcmFGZWVkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FtZXJhRmVlZC9DYW1lcmFGZWVkXCI7XHJcbmltcG9ydCB7TW9kYWwsIE1vZGFsQm9keSwgTW9kYWxIZWFkZXJ9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tIFwiLi4vY29tcG9uZW50cy9ob2NzL3dpdGhBdXRoXCI7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgcmV0dXJuIHt1c2VyUmVkdWNlcjogc3RhdGUudXNlclJlZHVjZXJ9XHJcbn1cclxuXHJcbnBkZk1ha2UudmZzID0gcGRmRm9udHMucGRmTWFrZS52ZnM7XHJcbnBkZk1ha2UuZm9udHMgPSB7XHJcbiAgVGltZXNOZXdSb21hbjoge1xyXG4gICAgbm9ybWFsOiAnVGltZXNOZXdSb21hbi50dGYnLFxyXG4gICAgYm9sZDogJ1RpbWVzTmV3Um9tYW5Cb2xkLnR0ZicsXHJcbiAgICBpdGFsaWNzOiAnVGltZXNOZXdSb21hbkl0YWxpY3MudHRmJyxcclxuICAgIGJvbGRpdGFsaWNzOiAnVGltZXNOZXdSb21hbkJvbGRJdGFsaWNzLnR0ZidcclxuICB9LFxyXG4gIGVtcHR5Q2hlY2tib3g6IHtcclxuICAgIG5vcm1hbDogJ2VtcHR5Q2hlY2tib3gudHRmJ1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VXJsUGFyYW1ldGVyKG5hbWUpIHtcclxuICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXS8sICdcXFxcWycpLnJlcGxhY2UoL1tcXF1dLywgJ1xcXFxdJyk7XHJcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnW1xcXFw/Jl0nICsgbmFtZSArICc9KFteJiNdKiknKTtcclxuICB2YXIgcmVzdWx0cyA9IHJlZ2V4LmV4ZWMobG9jYXRpb24uc2VhcmNoKTtcclxuICByZXR1cm4gcmVzdWx0cyA9PT0gbnVsbCA/ICcnIDogZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMV0ucmVwbGFjZSgvXFwrL2csICcgJykpO1xyXG59XHJcblxyXG5jb25zdCB1c2VyVG9rZW4gPSAoKSA9PiB7XHJcbiAgaWYoZ2V0VXJsUGFyYW1ldGVyKCd0b2tlbicpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgcmV0dXJuIGdldFVybFBhcmFtZXRlcigndG9rZW4nKVxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBBZ3JlZW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB0b2tlbjogbnVsbCxcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGRvY3M6IFtdLFxyXG4gICAgICBpZDogbnVsbCxcclxuICAgICAgaWRfcmVxOiBudWxsLFxyXG4gICAgICBzaWduOiAnJyxcclxuICAgICAgaXNDb2RlU2VudDogZmFsc2UsXHJcbiAgICAgIGNvZGVfY29uZjogbnVsbCxcclxuICAgICAgZXJyb3JJbkNvZGU6IG51bGwsXHJcbiAgICAgIHBob25lOiBudWxsLFxyXG4gICAgICByZXN0OiBudWxsLFxyXG4gICAgICBpc01vZGFsT3BlbjogdHJ1ZSxcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRvZ2dsZU1vZGFsID0gdGhpcy50b2dnbGVNb2RhbC5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLnVwbG9hZEltYWdlID0gdGhpcy51cGxvYWRJbWFnZS5iaW5kKHRoaXMpXHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRVc2VyRG9jdW1lbnQodG9rZW4pIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICB9KVxyXG5cclxuICAgIGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9nZXREYXRhP3Rva2VuPSR7dG9rZW59YClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICBkb2NzOiByZXNwb25zZS5kYXRhLmRvY3MsXHJcbiAgICAgICAgICAgICAgaWQ6IHJlc3BvbnNlLmRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgaWRfcmVxOiByZXNwb25zZS5kYXRhLmlkX3JlcSxcclxuICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICByZXN0OiByZXNwb25zZS5kYXRhLnJlc3QsXHJcbiAgICAgICAgICAgICAgcGhvbmU6IHJlc3BvbnNlLmRhdGEucGhvbmVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRDb2RlKCkge1xyXG4gICAgYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL3NlbmRTbXM/cGhvbmU9JHt0aGlzLnN0YXRlLnBob25lfWAse1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgIGlmKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgaXNDb2RlU2VudDogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIHNlbmRBZ3JlZW1lbnRTdGF0dXNGb3JSZXN0KCkge1xyXG4gICAgaWYodGhpcy5zdGF0ZS5jb2RlX2NvbmYgIT09IG51bGwpIHtcclxuICAgICAgYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL3NlbmRTbXNgLHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIGlkOnRoaXMuc3RhdGUuaWQsXHJcbiAgICAgICAgICBwaG9uZTp0aGlzLnN0YXRlLnBob25lLFxyXG4gICAgICAgICAgdG9rZW46dGhpcy5zdGF0ZS50b2tlbixcclxuICAgICAgICAgIGlkX3JlcTogdGhpcy5zdGF0ZS5pZF9yZXEsXHJcbiAgICAgICAgICBjb2RlOnRoaXMuc3RhdGUuY29kZV9jb25mLFxyXG4gICAgICAgICAgc2lnbjogJ3knXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICBzd2FsKFwi0KPRgdC/0LXRiNC90L4hXCIsIGAke3Jlc3BvbnNlLm1lc3NhZ2V9YCwgXCJzdWNjZXNzXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZW5kQWdyZWVtZW50U3RhdHVzV2l0aFJlc3QoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbG9hZGluZzp0cnVlXHJcbiAgICB9KVxyXG4gICAgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL3Byb2xvbmdhdGlvbkFncmVlbWVudD9zaWduPXkmcmVxdWVzdF9pZD0ke3RoaXMuc3RhdGUuaWR9YClcclxuICAgICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBpZihyZXMuZGF0YS5zdWNjZXNzKXtcclxuICAgICAgICAgICAgc3dhbChcItCj0YHQv9C10YjQvdC+IVwiLCBcInN1Y2Nlc3NcIikudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIHNlbmRBZ3JlZW1lbnRTdGF0dXMoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICB9KVxyXG5cclxuICAgIHRyeXtcclxuICAgICAgYXhpb3MuZ2V0KCdodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL2FncmVlbWVudCcseyBwYXJhbXM6e1xyXG4gICAgICAgICAgaWQ6dGhpcy5zdGF0ZS5pZCxcclxuICAgICAgICAgIHBob25lOnRoaXMuc3RhdGUucGhvbmUsXHJcbiAgICAgICAgICB0b2tlbjp0aGlzLnN0YXRlLnRva2VuLFxyXG4gICAgICAgICAgaWRfcmVxOiB0aGlzLnN0YXRlLmlkX3JlcSxcclxuICAgICAgICAgIHNpZ246ICd5J1xyXG4gICAgICAgIH19KVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PntcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcyl7XHJcbiAgICAgICAgICAgICAgc3dhbChcItCj0YHQv9C10YjQvdC+IVwiLCBcItCd0LDRiNC4INGB0L/QtdGG0LjQsNC70LjRgdGC0Ysg0YHQstGP0LbRg9GC0YHRjyDRgSDQktCw0LzQuCDQsiDRgtC10YfQtdC90LjQuCAxNSDQvNC40L3Rg9GCXCIpLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZXJyb3Ipe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZU1vZGFsKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlzTW9kYWxPcGVuOiAhdGhpcy5zdGF0ZS5pc01vZGFsT3BlblxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vINCe0YLQv9GA0LDQstC60LAg0YTQvtGC0L4g0L3QsCDQsdGN0LpcclxuICBhc3luYyB1cGxvYWRJbWFnZShmaWxlKSB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcblxyXG4gICAgLy8g0JTQu9GPINGC0LXRgdGC0LAsINC00LDQvdC90YvQtSDQnNGD0LrQsNC90LA6XHJcbiAgICAvLyBmb3JtRGF0YS5hcHBlbmQoJ2lpbicsICc5NzA5MDgzNTAxOTInKVxyXG4gICAgLy8gZm9ybURhdGEuYXBwZW5kKCdsZWFkSUQnLCAnMjc3MTM1JylcclxuXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2lpbicsIHRoaXMucHJvcHMudXNlclJlZHVjZXIudXNlcj8uVUZfNClcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnbGVhZElEJywgdGhpcy5wcm9wcy51c2VyUmVkdWNlci51c2VyPy5VRl8xKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdwaG90bycsIGZpbGUpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGVOYW1lJywgJ2ltYWdlLnBuZycpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2V4dGVuc2lvbicsICdwbmcnKVxyXG5cclxuICAgIC8vINCf0L7Qv9GL0YLQutCwINC+0YLQv9GA0LDQstC70LXQvdC40Y8g0YTQvtGC0L4g0L/QviDRjdC90LTQv9C+0LjQvdGC0YNcclxuICAgIGF3YWl0IGF4aW9zLnBvc3QoYGh0dHA6Ly8xNzguMTcwLjIyMS43NS9iaW9tZXRyaWEvcHVibGljL2FwaS9jb21wYXJlUGhvdG9zYCwgZm9ybURhdGEpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAvLyBpZihnZXRVcmxQYXJhbWV0ZXIoJ3Rva2VuJykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAvLyAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAvLyAgIHRoaXMuc2V0U3RhdGUgKHtcclxuICAgIC8vICAgICB0b2tlbjogZ2V0VXJsUGFyYW1ldGVyKCd0b2tlbicpXHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyB9XHJcbiAgICAvLyB0aGlzLmdldFVzZXJEb2N1bWVudCh1c2VyVG9rZW4oKSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgb3RoZXJQYWdlc1wiPlxyXG4gICAgICAgICAgeyAvKiDQnNC+0LTQsNC70LrQsCDRgSDQv9C+0LvRg9GH0LXQvdC40LXQvCDRhNC+0YLQutC4ICovIH1cclxuICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgIGlzT3Blbj17IHRoaXMuc3RhdGUuaXNNb2RhbE9wZW4gfVxyXG4gICAgICAgICAgICAgIGNsYXNzPVwibW9kYWwgbW9kYWwtY2FsY3VsYXRvclwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE1vZGFsSGVhZGVyIHRvZ2dsZT17dGhpcy50b2dnbGVNb2RhbH0+0JLQtdGA0LjRhNC40LrQsNGG0LjRjzwvTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgICAgIDxNb2RhbEJvZHk+XHJcbiAgICAgICAgICAgICAgPENhbWVyYUZlZWQgc2VuZEZpbGU9e3RoaXMudXBsb2FkSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgICAgICA8SGVhZD48dGl0bGU+0KHQvtCz0LvQsNGI0LXQvdC40LU8L3RpdGxlPjwvSGVhZD5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyAoPGRpdiBjbGFzc05hbWU9J21vZGVsTG9hZGVyJz48L2Rpdj4pIDogKDxkaXYgY2xhc3NOYW1lPSdtb2RlbExvYWRlciBsb2FkZWQnPiA8L2Rpdj4pfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyZWVtZW50cy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPGg0IGFsaWduPVwiY2VudGVyXCI+0KHQvtCz0LvQsNGI0LXQvdC40LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPPC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdjb21wbGV0ZSc+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRvY3MubWFwKGRvYz0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2RvYy5saW5rPT09bnVsbD8gJ2Qtbm9uZScgOiAnJ30+PGltZyBjbGFzc05hbWU9J2NoZWNrZWRDb21wbGV0ZScgc3JjPXtyZXF1aXJlKFwiLi4vaW1nL2NoZWNrZWQucG5nXCIpfSAvPjxhIGhyZWY9e2RvYy5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj57ZG9jLm5hbWV9PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICB7LyogPGxpPjxpbWcgY2xhc3NOYW1lPSdjaGVja2VkQ29tcGxldGUnIHNyYz17cmVxdWlyZShcIi4uL2ltZy9jaGVja2VkLnBuZ1wiKX0gLz48YSBvbkNsaWNrPXsoKSA9PiBwZGZNYWtlLmNyZWF0ZVBkZihpbnN1cmFuY2VBcHBsaWNhdGlvbikub3BlbigpfT7Ql9Cw0Y/QstC70LXQvdC40LUg0L3QsCDRgdGC0YDQsNGF0L7QstCw0L3QuNC1PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGNsYXNzTmFtZT0nY2hlY2tlZENvbXBsZXRlJyBzcmM9e3JlcXVpcmUoXCIuLi9pbWcvY2hlY2tlZC5wbmdcIil9IC8+PGEgb25DbGljaz17KCkgPT4gcGRmTWFrZS5jcmVhdGVQZGYobWljcm9jcmVkaXRJbnN1cmFuY2UpLm9wZW4oKX0+0KHQvtCz0LvQsNGB0LjQtSDQvdCwINGB0YLRgNCw0YXQvtCy0LDQvdC40LUg0LzQuNC60YDQvtC60YDQtdC00LjRgtCwPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGNsYXNzTmFtZT0nY2hlY2tlZENvbXBsZXRlJyBzcmM9e3JlcXVpcmUoXCIuLi9pbWcvY2hlY2tlZC5wbmdcIil9IC8+PGEgb25DbGljaz17KCkgPT4gcGRmTWFrZS5jcmVhdGVQZGYoaW5zdXJhbmNlQ29udHJhY3QpLm9wZW4oKX0+0JTQvtCz0L7QstC+0YAg0LTQvtCx0YDQvtCy0L7Qu9GM0L3QvtCz0L4g0YHRgNC+0YfQvdC+0LPQviDRgdGC0YDQsNGF0L7QstCw0L3QuNGPINC20LjQt9C90Lg8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgY2xhc3NOYW1lPSdjaGVja2VkQ29tcGxldGUnIHNyYz17cmVxdWlyZShcIi4uL2ltZy9jaGVja2VkLnBuZ1wiKX0gLz48YSBvbkNsaWNrPXsoKSA9PiBwZGZNYWtlLmNyZWF0ZVBkZihtaWNyb2NyZWRpdEFncmVlbWVudCkub3BlbigpfT7QlNC+0LPQvtCy0L7RgCDQviDQv9GA0LXQtNC+0YHRgtCw0LLQu9C10L3QuNC4INC80LjQutGA0L7QutGA0LXQtNC40YLQsDwvYT48L2xpPiAqL31cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcGVhdEJ0biBmb3JtLWdyb3VwXCIgPlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yZXN0ID09PSB0cnVlID8gICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2VuZEFncmVlbWVudFN0YXR1c1dpdGhSZXN0KCl9IGNsYXNzTmFtZT0nbXQtNScgPtCh0L7Qs9C70LDRiNCw0Y7RgdGMPC9idXR0b24+IDpcclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZW5kQWdyZWVtZW50U3RhdHVzKCl9IGNsYXNzTmFtZT0nbXQtNScgPtCh0L7Qs9C70LDRiNCw0Y7RgdGMPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShBZ3JlZW1lbnQpKSJdLCJzb3VyY2VSb290IjoiIn0=