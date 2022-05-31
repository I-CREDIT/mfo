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
        var _this$props$userReduc,
            _this$props$userReduc2,
            _this6 = this;

        var formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                formData = new FormData(); // Для теста, данные Мукана
                // formData.append('iin', '970908350192')
                // formData.append('leadID', '277135')

                formData.append('iin', (_this$props$userReduc = this.props.userReducer.user) === null || _this$props$userReduc === void 0 ? void 0 : _this$props$userReduc.UF_4);
                formData.append('leadID', (_this$props$userReduc2 = this.props.userReducer.user) === null || _this$props$userReduc2 === void 0 ? void 0 : _this$props$userReduc2.UF_1);
                formData.append('photo', file);
                formData.append('fileName', 'image.png');
                formData.append('extension', 'png');
                this.setState({
                  loading: true
                }); // Попытка отправления фото по эндпоинту

                _context5.next = 9;
                return axios__WEBPACK_IMPORTED_MODULE_11___default.a.post("http://178.170.221.75/biometria/public/api/comparePhotos", formData).then(function (response) {
                  if (response.data.similarity > 82) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_12___default()("Верификация пройдена", "Можете подписать документы", "success").then(function () {
                      _this6.setState({
                        isModalOpen: false
                      });
                    });
                  } else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_12___default()("Верификация не пройдена", "Фото не прошло проверку, попробуйте еще раз", "error").then(function () {
                      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/');
                    });
                  }
                })["catch"](function (error) {
                  console.log(error);
                  sweetalert__WEBPACK_IMPORTED_MODULE_12___default()("Ошибка при попытке верификации", "Попробуйте еще раз", "error").then(function () {
                    next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/');
                  });
                })["finally"](function () {
                  _this6.setState({
                    loading: false
                  });
                });

              case 9:
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
      var _this7 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: "container otherPages",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "modelLoader ".concat(this.state.isCameraLoading ? '' : 'd-none')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_22__["Modal"], {
          isOpen: this.state.isModalOpen,
          "class": "modal modal-calculator",
          size: "lg",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_22__["ModalHeader"], {
            children: "\u0412\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_22__["ModalBody"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_CameraFeed_CameraFeed__WEBPACK_IMPORTED_MODULE_21__["CameraFeed"], {
              sendFile: this.uploadImage
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_13___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("title", {
            children: "\u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 296,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 11
        }, this), this.state.loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "modelLoader"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 34
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "modelLoader loaded",
          children: " "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 297,
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
                lineNumber: 301,
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
                      lineNumber: 305,
                      columnNumber: 70
                    }, _this7), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                      href: doc.link,
                      target: "_blank",
                      children: doc.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 305,
                      columnNumber: 141
                    }, _this7)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 305,
                    columnNumber: 23
                  }, _this7);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 303,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "repeatBtn form-group",
                children: this.state.rest === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
                  onClick: function onClick() {
                    return _this7.sendAgreementStatusWithRest();
                  },
                  className: "mt-5",
                  children: "\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 313,
                  columnNumber: 49
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
                  onClick: function onClick() {
                    return _this7.sendAgreementStatus();
                  },
                  className: "mt-5",
                  children: "\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 314,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 312,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 300,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 299,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 280,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWdyZWVtZW50cy5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwicGRmTWFrZSIsInZmcyIsInBkZkZvbnRzIiwiZm9udHMiLCJUaW1lc05ld1JvbWFuIiwibm9ybWFsIiwiYm9sZCIsIml0YWxpY3MiLCJib2xkaXRhbGljcyIsImVtcHR5Q2hlY2tib3giLCJnZXRVcmxQYXJhbWV0ZXIiLCJuYW1lIiwicmVwbGFjZSIsInJlZ2V4IiwiUmVnRXhwIiwicmVzdWx0cyIsImV4ZWMiLCJsb2NhdGlvbiIsInNlYXJjaCIsImRlY29kZVVSSUNvbXBvbmVudCIsInVzZXJUb2tlbiIsImxlbmd0aCIsIkFncmVlbWVudCIsInByb3BzIiwidG9rZW4iLCJsb2FkaW5nIiwiZG9jcyIsImlkIiwiaWRfcmVxIiwic2lnbiIsImlzQ29kZVNlbnQiLCJjb2RlX2NvbmYiLCJlcnJvckluQ29kZSIsInBob25lIiwicmVzdCIsImlzTW9kYWxPcGVuIiwidG9nZ2xlTW9kYWwiLCJiaW5kIiwidXBsb2FkSW1hZ2UiLCJzZXRTdGF0ZSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInN1Y2Nlc3MiLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3IiLCJoZWFkZXJzIiwiY29uc29sZSIsImxvZyIsInBhcmFtcyIsImNvZGUiLCJzd2FsIiwibWVzc2FnZSIsInJlcyIsImZpbGUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidXNlciIsIlVGXzQiLCJVRl8xIiwicG9zdCIsInNpbWlsYXJpdHkiLCJpc0NhbWVyYUxvYWRpbmciLCJtYXAiLCJkb2MiLCJsaW5rIiwicmVxdWlyZSIsInNlbmRBZ3JlZW1lbnRTdGF0dXNXaXRoUmVzdCIsInNlbmRBZ3JlZW1lbnRTdGF0dXMiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpdGhBdXRoIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6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O0FBQUEsNEJBRG9CO0FBQUEsaUJBQXZCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFIRixlQVlFO0FBQUsseUJBQVMsRUFBQyxzQkFBZjtBQUFBLDBCQUNHLEtBQUtiLEtBQUwsQ0FBV29DLElBQVgsS0FBb0IsSUFBcEIsZ0JBQTZCO0FBQVEseUJBQU8sRUFBRTtBQUFBLDJCQUFNLE1BQUksQ0FBQ3FDLDJCQUFMLEVBQU47QUFBQSxtQkFBakI7QUFBMkQsMkJBQVMsRUFBQyxNQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBN0IsZ0JBQ0c7QUFBUSx5QkFBTyxFQUFFO0FBQUEsMkJBQU0sTUFBSSxDQUFDQyxtQkFBTCxFQUFOO0FBQUEsbUJBQWpCO0FBQW1ELDJCQUFTLEVBQUMsTUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQTRDRDs7OztFQTlRcUJDLDRDQUFLLENBQUNDLFM7O0FBaVJmQyx5SUFBUSxDQUFDQyw0REFBTyxDQUFDL0UsZUFBRCxDQUFQLENBQXlCeUIsU0FBekIsQ0FBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZ3JlZW1lbnRzLmNiZjExZTFiNmQwYTU5NjVhZTE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgcGRmTWFrZSBmcm9tIFwicGRmbWFrZS9idWlsZC9wZGZtYWtlXCI7XHJcbmltcG9ydCBwZGZGb250cyBmcm9tIFwicGRmbWFrZS9idWlsZC92ZnNfZm9udHNcIjtcclxuaW1wb3J0IGluc3VyYW5jZUFwcGxpY2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvZG9jdW1lbnRfMS9pbnN1cmFuY2VBcHBsaWNhdGlvbidcclxuaW1wb3J0IG1pY3JvY3JlZGl0SW5zdXJhbmNlIGZyb20gJy4uL2NvbXBvbmVudHMvZG9jdW1lbnRfMS9taWNyb2NyZWRpdEluc3VyYW5jZSdcclxuaW1wb3J0IGluc3VyYW5jZUNvbnRyYWN0IGZyb20gJy4uL2NvbXBvbmVudHMvZG9jdW1lbnRfMS9pbnN1cmFuY2VDb250cmFjdCdcclxuaW1wb3J0IG1pY3JvY3JlZGl0QWdyZWVtZW50IGZyb20gJy4uL2NvbXBvbmVudHMvZG9jdW1lbnRfMS9taWNyb2NyZWRpdEFncmVlbWVudCdcclxuaW1wb3J0IHVzZXJzUmVkdWNlciBmcm9tIFwiLi4vc3RvcmUvcmVkdWNlcnMvdXNlclJlZHVjZXJcIjtcclxuXHJcbi8vIGNhbWVyYSAoY2F0Y2ggcGhvdG8pXHJcbmltcG9ydCB7IENhbWVyYUZlZWQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DYW1lcmFGZWVkL0NhbWVyYUZlZWRcIjtcclxuaW1wb3J0IHtNb2RhbCwgTW9kYWxCb2R5LCBNb2RhbEhlYWRlcn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gXCIuLi9jb21wb25lbnRzL2hvY3Mvd2l0aEF1dGhcIjtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcclxuICByZXR1cm4ge3VzZXJSZWR1Y2VyOiBzdGF0ZS51c2VyUmVkdWNlcn1cclxufVxyXG5cclxucGRmTWFrZS52ZnMgPSBwZGZGb250cy5wZGZNYWtlLnZmcztcclxucGRmTWFrZS5mb250cyA9IHtcclxuICBUaW1lc05ld1JvbWFuOiB7XHJcbiAgICBub3JtYWw6ICdUaW1lc05ld1JvbWFuLnR0ZicsXHJcbiAgICBib2xkOiAnVGltZXNOZXdSb21hbkJvbGQudHRmJyxcclxuICAgIGl0YWxpY3M6ICdUaW1lc05ld1JvbWFuSXRhbGljcy50dGYnLFxyXG4gICAgYm9sZGl0YWxpY3M6ICdUaW1lc05ld1JvbWFuQm9sZEl0YWxpY3MudHRmJ1xyXG4gIH0sXHJcbiAgZW1wdHlDaGVja2JveDoge1xyXG4gICAgbm9ybWFsOiAnZW1wdHlDaGVja2JveC50dGYnXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRVcmxQYXJhbWV0ZXIobmFtZSkge1xyXG4gIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtdLywgJ1xcXFxbJykucmVwbGFjZSgvW1xcXV0vLCAnXFxcXF0nKTtcclxuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdbXFxcXD8mXScgKyBuYW1lICsgJz0oW14mI10qKScpO1xyXG4gIHZhciByZXN1bHRzID0gcmVnZXguZXhlYyhsb2NhdGlvbi5zZWFyY2gpO1xyXG4gIHJldHVybiByZXN1bHRzID09PSBudWxsID8gJycgOiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1sxXS5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XHJcbn1cclxuXHJcbmNvbnN0IHVzZXJUb2tlbiA9ICgpID0+IHtcclxuICBpZihnZXRVcmxQYXJhbWV0ZXIoJ3Rva2VuJykubGVuZ3RoICE9PSAwKSB7XHJcbiAgICByZXR1cm4gZ2V0VXJsUGFyYW1ldGVyKCd0b2tlbicpXHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEFncmVlbWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHRva2VuOiBudWxsLFxyXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgZG9jczogW10sXHJcbiAgICAgIGlkOiBudWxsLFxyXG4gICAgICBpZF9yZXE6IG51bGwsXHJcbiAgICAgIHNpZ246ICcnLFxyXG4gICAgICBpc0NvZGVTZW50OiBmYWxzZSxcclxuICAgICAgY29kZV9jb25mOiBudWxsLFxyXG4gICAgICBlcnJvckluQ29kZTogbnVsbCxcclxuICAgICAgcGhvbmU6IG51bGwsXHJcbiAgICAgIHJlc3Q6IG51bGwsXHJcbiAgICAgIGlzTW9kYWxPcGVuOiB0cnVlLFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudG9nZ2xlTW9kYWwgPSB0aGlzLnRvZ2dsZU1vZGFsLmJpbmQodGhpcylcclxuICAgIHRoaXMudXBsb2FkSW1hZ2UgPSB0aGlzLnVwbG9hZEltYWdlLmJpbmQodGhpcylcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldFVzZXJEb2N1bWVudCh0b2tlbikge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL2dldERhdGE/dG9rZW49JHt0b2tlbn1gKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIGRvY3M6IHJlc3BvbnNlLmRhdGEuZG9jcyxcclxuICAgICAgICAgICAgICBpZDogcmVzcG9uc2UuZGF0YS5pZCxcclxuICAgICAgICAgICAgICBpZF9yZXE6IHJlc3BvbnNlLmRhdGEuaWRfcmVxLFxyXG4gICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHJlc3Q6IHJlc3BvbnNlLmRhdGEucmVzdCxcclxuICAgICAgICAgICAgICBwaG9uZTogcmVzcG9uc2UuZGF0YS5waG9uZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldENvZGUoKSB7XHJcbiAgICBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvc2VuZFNtcz9waG9uZT0ke3RoaXMuc3RhdGUucGhvbmV9YCx7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgaWYocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICBpc0NvZGVTZW50OiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3I9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgc2VuZEFncmVlbWVudFN0YXR1c0ZvclJlc3QoKSB7XHJcbiAgICBpZih0aGlzLnN0YXRlLmNvZGVfY29uZiAhPT0gbnVsbCkge1xyXG4gICAgICBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvc2VuZFNtc2Ase1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgaWQ6dGhpcy5zdGF0ZS5pZCxcclxuICAgICAgICAgIHBob25lOnRoaXMuc3RhdGUucGhvbmUsXHJcbiAgICAgICAgICB0b2tlbjp0aGlzLnN0YXRlLnRva2VuLFxyXG4gICAgICAgICAgaWRfcmVxOiB0aGlzLnN0YXRlLmlkX3JlcSxcclxuICAgICAgICAgIGNvZGU6dGhpcy5zdGF0ZS5jb2RlX2NvbmYsXHJcbiAgICAgICAgICBzaWduOiAneSdcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbihyZXNwb25zZT0+IHtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgIHN3YWwoXCLQo9GB0L/QtdGI0L3QviFcIiwgYCR7cmVzcG9uc2UubWVzc2FnZX1gLCBcInN1Y2Nlc3NcIikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbmRBZ3JlZW1lbnRTdGF0dXNXaXRoUmVzdCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsb2FkaW5nOnRydWVcclxuICAgIH0pXHJcbiAgICBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvcHJvbG9uZ2F0aW9uQWdyZWVtZW50P3NpZ249eSZyZXF1ZXN0X2lkPSR7dGhpcy5zdGF0ZS5pZH1gKVxyXG4gICAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGlmKHJlcy5kYXRhLnN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgICBzd2FsKFwi0KPRgdC/0LXRiNC90L4hXCIsIFwic3VjY2Vzc1wiKS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgc2VuZEFncmVlbWVudFN0YXR1cygpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvYWdyZWVtZW50Jyx7IHBhcmFtczp7XHJcbiAgICAgICAgICBpZDp0aGlzLnN0YXRlLmlkLFxyXG4gICAgICAgICAgcGhvbmU6dGhpcy5zdGF0ZS5waG9uZSxcclxuICAgICAgICAgIHRva2VuOnRoaXMuc3RhdGUudG9rZW4sXHJcbiAgICAgICAgICBpZF9yZXE6IHRoaXMuc3RhdGUuaWRfcmVxLFxyXG4gICAgICAgICAgc2lnbjogJ3knXHJcbiAgICAgICAgfX0pXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+e1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5zdWNjZXNzKXtcclxuICAgICAgICAgICAgICBzd2FsKFwi0KPRgdC/0LXRiNC90L4hXCIsIFwi0J3QsNGI0Lgg0YHQv9C10YbQuNCw0LvQuNGB0YLRiyDRgdCy0Y/QttGD0YLRgdGPINGBINCS0LDQvNC4INCyINGC0LXRh9C10L3QuNC4IDE1INC80LjQvdGD0YJcIikudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjYXRjaChlcnJvcil7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICBSb3V0ZXIucHVzaCgnLycpXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlTW9kYWwoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaXNNb2RhbE9wZW46ICF0aGlzLnN0YXRlLmlzTW9kYWxPcGVuXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8g0J7RgtC/0YDQsNCy0LrQsCDRhNC+0YLQviDQvdCwINCx0Y3QulxyXG4gIGFzeW5jIHVwbG9hZEltYWdlKGZpbGUpIHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcclxuXHJcbiAgICAvLyDQlNC70Y8g0YLQtdGB0YLQsCwg0LTQsNC90L3Ri9C1INCc0YPQutCw0L3QsFxyXG4gICAgLy8gZm9ybURhdGEuYXBwZW5kKCdpaW4nLCAnOTcwOTA4MzUwMTkyJylcclxuICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnbGVhZElEJywgJzI3NzEzNScpXHJcblxyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdpaW4nLCB0aGlzLnByb3BzLnVzZXJSZWR1Y2VyLnVzZXI/LlVGXzQpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2xlYWRJRCcsIHRoaXMucHJvcHMudXNlclJlZHVjZXIudXNlcj8uVUZfMSlcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgncGhvdG8nLCBmaWxlKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlTmFtZScsICdpbWFnZS5wbmcnKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdleHRlbnNpb24nLCAncG5nJylcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlICh7XHJcbiAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgLy8g0J/QvtC/0YvRgtC60LAg0L7RgtC/0YDQsNCy0LvQtdC90LjRjyDRhNC+0YLQviDQv9C+INGN0L3QtNC/0L7QuNC90YLRg1xyXG4gICAgYXdhaXQgYXhpb3MucG9zdChgaHR0cDovLzE3OC4xNzAuMjIxLjc1L2Jpb21ldHJpYS9wdWJsaWMvYXBpL2NvbXBhcmVQaG90b3NgLCBmb3JtRGF0YSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zaW1pbGFyaXR5ID4gODIpIHtcclxuICAgICAgICAgICAgc3dhbChcItCS0LXRgNC40YTQuNC60LDRhtC40Y8g0L/RgNC+0LnQtNC10L3QsFwiLCBcItCc0L7QttC10YLQtSDQv9C+0LTQv9C40YHQsNGC0Ywg0LTQvtC60YPQvNC10L3RgtGLXCIsIFwic3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlICh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNNb2RhbE9wZW46IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3dhbChcItCS0LXRgNC40YTQuNC60LDRhtC40Y8g0L3QtSDQv9GA0L7QudC00LXQvdCwXCIsIFwi0KTQvtGC0L4g0L3QtSDQv9GA0L7RiNC70L4g0L/RgNC+0LLQtdGA0LrRgywg0L/QvtC/0YDQvtCx0YPQudGC0LUg0LXRidC1INGA0LDQt1wiLCBcImVycm9yXCIpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICBzd2FsKFwi0J7RiNC40LHQutCwINC/0YDQuCDQv9C+0L/Ri9GC0LrQtSDQstC10YDQuNGE0LjQutCw0YbQuNC4XCIsIFwi0J/QvtC/0YDQvtCx0YPQudGC0LUg0LXRidC1INGA0LDQt1wiLCBcImVycm9yXCIpXHJcbiAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlICh7XHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgLy8gaWYoZ2V0VXJsUGFyYW1ldGVyKCd0b2tlbicpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgLy8gICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICB0aGlzLnNldFN0YXRlICh7XHJcbiAgICAvLyAgICAgdG9rZW46IGdldFVybFBhcmFtZXRlcigndG9rZW4nKVxyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gfVxyXG4gICAgLy8gdGhpcy5nZXRVc2VyRG9jdW1lbnQodXNlclRva2VuKCkpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG90aGVyUGFnZXNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbW9kZWxMb2FkZXIgJHt0aGlzLnN0YXRlLmlzQ2FtZXJhTG9hZGluZyA/ICcnIDogJ2Qtbm9uZSd9YH0vPlxyXG5cclxuICAgICAgICAgIHsgLyog0JzQvtC00LDQu9C60LAg0YEg0L/QvtC70YPRh9C10L3QuNC10Lwg0YTQvtGC0LrQuCAqLyB9XHJcbiAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICBpc09wZW49eyB0aGlzLnN0YXRlLmlzTW9kYWxPcGVuIH1cclxuICAgICAgICAgICAgICBjbGFzcz1cIm1vZGFsIG1vZGFsLWNhbGN1bGF0b3JcIlxyXG4gICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsvKjxNb2RhbEhlYWRlciB0b2dnbGU9e3RoaXMudG9nZ2xlTW9kYWx9PtCS0LXRgNC40YTQuNC60LDRhtC40Y88L01vZGFsSGVhZGVyPiovfVxyXG4gICAgICAgICAgICA8TW9kYWxIZWFkZXI+0JLQtdGA0LjRhNC40LrQsNGG0LjRjzwvTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgICAgIDxNb2RhbEJvZHk+XHJcbiAgICAgICAgICAgICAgPENhbWVyYUZlZWQgc2VuZEZpbGU9e3RoaXMudXBsb2FkSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgICAgICA8SGVhZD48dGl0bGU+0KHQvtCz0LvQsNGI0LXQvdC40LU8L3RpdGxlPjwvSGVhZD5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyAoPGRpdiBjbGFzc05hbWU9J21vZGVsTG9hZGVyJz48L2Rpdj4pIDogKDxkaXYgY2xhc3NOYW1lPSdtb2RlbExvYWRlciBsb2FkZWQnPiA8L2Rpdj4pfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyZWVtZW50cy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPGg0IGFsaWduPVwiY2VudGVyXCI+0KHQvtCz0LvQsNGI0LXQvdC40LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPPC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdjb21wbGV0ZSc+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRvY3MubWFwKGRvYz0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2RvYy5saW5rPT09bnVsbD8gJ2Qtbm9uZScgOiAnJ30+PGltZyBjbGFzc05hbWU9J2NoZWNrZWRDb21wbGV0ZScgc3JjPXtyZXF1aXJlKFwiLi4vaW1nL2NoZWNrZWQucG5nXCIpfSAvPjxhIGhyZWY9e2RvYy5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj57ZG9jLm5hbWV9PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICB7LyogPGxpPjxpbWcgY2xhc3NOYW1lPSdjaGVja2VkQ29tcGxldGUnIHNyYz17cmVxdWlyZShcIi4uL2ltZy9jaGVja2VkLnBuZ1wiKX0gLz48YSBvbkNsaWNrPXsoKSA9PiBwZGZNYWtlLmNyZWF0ZVBkZihpbnN1cmFuY2VBcHBsaWNhdGlvbikub3BlbigpfT7Ql9Cw0Y/QstC70LXQvdC40LUg0L3QsCDRgdGC0YDQsNGF0L7QstCw0L3QuNC1PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGNsYXNzTmFtZT0nY2hlY2tlZENvbXBsZXRlJyBzcmM9e3JlcXVpcmUoXCIuLi9pbWcvY2hlY2tlZC5wbmdcIil9IC8+PGEgb25DbGljaz17KCkgPT4gcGRmTWFrZS5jcmVhdGVQZGYobWljcm9jcmVkaXRJbnN1cmFuY2UpLm9wZW4oKX0+0KHQvtCz0LvQsNGB0LjQtSDQvdCwINGB0YLRgNCw0YXQvtCy0LDQvdC40LUg0LzQuNC60YDQvtC60YDQtdC00LjRgtCwPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGNsYXNzTmFtZT0nY2hlY2tlZENvbXBsZXRlJyBzcmM9e3JlcXVpcmUoXCIuLi9pbWcvY2hlY2tlZC5wbmdcIil9IC8+PGEgb25DbGljaz17KCkgPT4gcGRmTWFrZS5jcmVhdGVQZGYoaW5zdXJhbmNlQ29udHJhY3QpLm9wZW4oKX0+0JTQvtCz0L7QstC+0YAg0LTQvtCx0YDQvtCy0L7Qu9GM0L3QvtCz0L4g0YHRgNC+0YfQvdC+0LPQviDRgdGC0YDQsNGF0L7QstCw0L3QuNGPINC20LjQt9C90Lg8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgY2xhc3NOYW1lPSdjaGVja2VkQ29tcGxldGUnIHNyYz17cmVxdWlyZShcIi4uL2ltZy9jaGVja2VkLnBuZ1wiKX0gLz48YSBvbkNsaWNrPXsoKSA9PiBwZGZNYWtlLmNyZWF0ZVBkZihtaWNyb2NyZWRpdEFncmVlbWVudCkub3BlbigpfT7QlNC+0LPQvtCy0L7RgCDQviDQv9GA0LXQtNC+0YHRgtCw0LLQu9C10L3QuNC4INC80LjQutGA0L7QutGA0LXQtNC40YLQsDwvYT48L2xpPiAqL31cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcGVhdEJ0biBmb3JtLWdyb3VwXCIgPlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yZXN0ID09PSB0cnVlID8gICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2VuZEFncmVlbWVudFN0YXR1c1dpdGhSZXN0KCl9IGNsYXNzTmFtZT0nbXQtNScgPtCh0L7Qs9C70LDRiNCw0Y7RgdGMPC9idXR0b24+IDpcclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZW5kQWdyZWVtZW50U3RhdHVzKCl9IGNsYXNzTmFtZT0nbXQtNScgPtCh0L7Qs9C70LDRiNCw0Y7RgdGMPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShBZ3JlZW1lbnQpKSJdLCJzb3VyY2VSb290IjoiIn0=