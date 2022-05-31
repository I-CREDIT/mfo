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
                formData.append('extension', 'png'); // add loading
                // Попытка отправления фото по эндпоинту

                _context5.next = 8;
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
      var _this7 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: "container otherPages",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_22__["Modal"], {
          isOpen: this.state.isModalOpen,
          "class": "modal modal-calculator",
          size: "lg",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_22__["ModalHeader"], {
            children: "\u0412\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_22__["ModalBody"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_CameraFeed_CameraFeed__WEBPACK_IMPORTED_MODULE_21__["CameraFeed"], {
              sendFile: this.uploadImage
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 283,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 282,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_13___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("title", {
            children: "\u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 11
        }, this), this.state.loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "modelLoader"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 34
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "modelLoader loaded",
          children: " "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 288,
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
                lineNumber: 292,
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
                      lineNumber: 296,
                      columnNumber: 70
                    }, _this7), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                      href: doc.link,
                      target: "_blank",
                      children: doc.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 296,
                      columnNumber: 141
                    }, _this7)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 296,
                    columnNumber: 23
                  }, _this7);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 294,
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
                  lineNumber: 304,
                  columnNumber: 49
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
                  onClick: function onClick() {
                    return _this7.sendAgreementStatus();
                  },
                  className: "mt-5",
                  children: "\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 305,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 303,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 273,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWdyZWVtZW50cy5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwicGRmTWFrZSIsInZmcyIsInBkZkZvbnRzIiwiZm9udHMiLCJUaW1lc05ld1JvbWFuIiwibm9ybWFsIiwiYm9sZCIsIml0YWxpY3MiLCJib2xkaXRhbGljcyIsImVtcHR5Q2hlY2tib3giLCJnZXRVcmxQYXJhbWV0ZXIiLCJuYW1lIiwicmVwbGFjZSIsInJlZ2V4IiwiUmVnRXhwIiwicmVzdWx0cyIsImV4ZWMiLCJsb2NhdGlvbiIsInNlYXJjaCIsImRlY29kZVVSSUNvbXBvbmVudCIsInVzZXJUb2tlbiIsImxlbmd0aCIsIkFncmVlbWVudCIsInByb3BzIiwidG9rZW4iLCJsb2FkaW5nIiwiZG9jcyIsImlkIiwiaWRfcmVxIiwic2lnbiIsImlzQ29kZVNlbnQiLCJjb2RlX2NvbmYiLCJlcnJvckluQ29kZSIsInBob25lIiwicmVzdCIsImlzTW9kYWxPcGVuIiwidG9nZ2xlTW9kYWwiLCJiaW5kIiwidXBsb2FkSW1hZ2UiLCJzZXRTdGF0ZSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInN1Y2Nlc3MiLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3IiLCJoZWFkZXJzIiwiY29uc29sZSIsImxvZyIsInBhcmFtcyIsImNvZGUiLCJzd2FsIiwibWVzc2FnZSIsInJlcyIsImZpbGUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidXNlciIsIlVGXzQiLCJVRl8xIiwicG9zdCIsInNpbWlsYXJpdHkiLCJtYXAiLCJkb2MiLCJsaW5rIiwicmVxdWlyZSIsInNlbmRBZ3JlZW1lbnRTdGF0dXNXaXRoUmVzdCIsInNlbmRBZ3JlZW1lbnRTdGF0dXMiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpdGhBdXRoIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFBLHdCQUE3QixnQkFDRztBQUFRLHlCQUFPLEVBQUU7QUFBQSwyQkFBTSxNQUFJLENBQUNDLG1CQUFMLEVBQU47QUFBQSxtQkFBakI7QUFBbUQsMkJBQVMsRUFBQyxNQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBMENEOzs7O0VBclFxQkMsNENBQUssQ0FBQ0MsUzs7QUF3UWZDLHlJQUFRLENBQUNDLDREQUFPLENBQUM5RSxlQUFELENBQVAsQ0FBeUJ5QixTQUF6QixDQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FncmVlbWVudHMuYjZhZTUyYWU3ZWMyZmQ1NjA4ZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBwZGZNYWtlIGZyb20gXCJwZGZtYWtlL2J1aWxkL3BkZm1ha2VcIjtcclxuaW1wb3J0IHBkZkZvbnRzIGZyb20gXCJwZGZtYWtlL2J1aWxkL3Zmc19mb250c1wiO1xyXG5pbXBvcnQgaW5zdXJhbmNlQXBwbGljYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9kb2N1bWVudF8xL2luc3VyYW5jZUFwcGxpY2F0aW9uJ1xyXG5pbXBvcnQgbWljcm9jcmVkaXRJbnN1cmFuY2UgZnJvbSAnLi4vY29tcG9uZW50cy9kb2N1bWVudF8xL21pY3JvY3JlZGl0SW5zdXJhbmNlJ1xyXG5pbXBvcnQgaW5zdXJhbmNlQ29udHJhY3QgZnJvbSAnLi4vY29tcG9uZW50cy9kb2N1bWVudF8xL2luc3VyYW5jZUNvbnRyYWN0J1xyXG5pbXBvcnQgbWljcm9jcmVkaXRBZ3JlZW1lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9kb2N1bWVudF8xL21pY3JvY3JlZGl0QWdyZWVtZW50J1xyXG5pbXBvcnQgdXNlcnNSZWR1Y2VyIGZyb20gXCIuLi9zdG9yZS9yZWR1Y2Vycy91c2VyUmVkdWNlclwiO1xyXG5cclxuLy8gY2FtZXJhIChjYXRjaCBwaG90bylcclxuaW1wb3J0IHsgQ2FtZXJhRmVlZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NhbWVyYUZlZWQvQ2FtZXJhRmVlZFwiO1xyXG5pbXBvcnQge01vZGFsLCBNb2RhbEJvZHksIE1vZGFsSGVhZGVyfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9jcy93aXRoQXV0aFwiO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xyXG4gIHJldHVybiB7dXNlclJlZHVjZXI6IHN0YXRlLnVzZXJSZWR1Y2VyfVxyXG59XHJcblxyXG5wZGZNYWtlLnZmcyA9IHBkZkZvbnRzLnBkZk1ha2UudmZzO1xyXG5wZGZNYWtlLmZvbnRzID0ge1xyXG4gIFRpbWVzTmV3Um9tYW46IHtcclxuICAgIG5vcm1hbDogJ1RpbWVzTmV3Um9tYW4udHRmJyxcclxuICAgIGJvbGQ6ICdUaW1lc05ld1JvbWFuQm9sZC50dGYnLFxyXG4gICAgaXRhbGljczogJ1RpbWVzTmV3Um9tYW5JdGFsaWNzLnR0ZicsXHJcbiAgICBib2xkaXRhbGljczogJ1RpbWVzTmV3Um9tYW5Cb2xkSXRhbGljcy50dGYnXHJcbiAgfSxcclxuICBlbXB0eUNoZWNrYm94OiB7XHJcbiAgICBub3JtYWw6ICdlbXB0eUNoZWNrYm94LnR0ZidcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVybFBhcmFtZXRlcihuYW1lKSB7XHJcbiAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW10vLCAnXFxcXFsnKS5yZXBsYWNlKC9bXFxdXS8sICdcXFxcXScpO1xyXG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ1tcXFxcPyZdJyArIG5hbWUgKyAnPShbXiYjXSopJyk7XHJcbiAgdmFyIHJlc3VsdHMgPSByZWdleC5leGVjKGxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgcmV0dXJuIHJlc3VsdHMgPT09IG51bGwgPyAnJyA6IGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzFdLnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcclxufVxyXG5cclxuY29uc3QgdXNlclRva2VuID0gKCkgPT4ge1xyXG4gIGlmKGdldFVybFBhcmFtZXRlcigndG9rZW4nKS5sZW5ndGggIT09IDApIHtcclxuICAgIHJldHVybiBnZXRVcmxQYXJhbWV0ZXIoJ3Rva2VuJylcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgQWdyZWVtZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdG9rZW46IG51bGwsXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBkb2NzOiBbXSxcclxuICAgICAgaWQ6IG51bGwsXHJcbiAgICAgIGlkX3JlcTogbnVsbCxcclxuICAgICAgc2lnbjogJycsXHJcbiAgICAgIGlzQ29kZVNlbnQ6IGZhbHNlLFxyXG4gICAgICBjb2RlX2NvbmY6IG51bGwsXHJcbiAgICAgIGVycm9ySW5Db2RlOiBudWxsLFxyXG4gICAgICBwaG9uZTogbnVsbCxcclxuICAgICAgcmVzdDogbnVsbCxcclxuICAgICAgaXNNb2RhbE9wZW46IHRydWUsXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50b2dnbGVNb2RhbCA9IHRoaXMudG9nZ2xlTW9kYWwuYmluZCh0aGlzKVxyXG4gICAgdGhpcy51cGxvYWRJbWFnZSA9IHRoaXMudXBsb2FkSW1hZ2UuYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0VXNlckRvY3VtZW50KHRva2VuKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgfSlcclxuXHJcbiAgICBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvZ2V0RGF0YT90b2tlbj0ke3Rva2VufWApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgZG9jczogcmVzcG9uc2UuZGF0YS5kb2NzLFxyXG4gICAgICAgICAgICAgIGlkOiByZXNwb25zZS5kYXRhLmlkLFxyXG4gICAgICAgICAgICAgIGlkX3JlcTogcmVzcG9uc2UuZGF0YS5pZF9yZXEsXHJcbiAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgcmVzdDogcmVzcG9uc2UuZGF0YS5yZXN0LFxyXG4gICAgICAgICAgICAgIHBob25lOiByZXNwb25zZS5kYXRhLnBob25lXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0Q29kZSgpIHtcclxuICAgIGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9zZW5kU21zP3Bob25lPSR7dGhpcy5zdGF0ZS5waG9uZX1gLHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBpZihyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIGlzQ29kZVNlbnQ6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvcj0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyBzZW5kQWdyZWVtZW50U3RhdHVzRm9yUmVzdCgpIHtcclxuICAgIGlmKHRoaXMuc3RhdGUuY29kZV9jb25mICE9PSBudWxsKSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9zZW5kU21zYCx7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBpZDp0aGlzLnN0YXRlLmlkLFxyXG4gICAgICAgICAgcGhvbmU6dGhpcy5zdGF0ZS5waG9uZSxcclxuICAgICAgICAgIHRva2VuOnRoaXMuc3RhdGUudG9rZW4sXHJcbiAgICAgICAgICBpZF9yZXE6IHRoaXMuc3RhdGUuaWRfcmVxLFxyXG4gICAgICAgICAgY29kZTp0aGlzLnN0YXRlLmNvZGVfY29uZixcclxuICAgICAgICAgIHNpZ246ICd5J1xyXG4gICAgICAgIH1cclxuICAgICAgfSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlPT4ge1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgc3dhbChcItCj0YHQv9C10YjQvdC+IVwiLCBgJHtyZXNwb25zZS5tZXNzYWdlfWAsIFwic3VjY2Vzc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VuZEFncmVlbWVudFN0YXR1c1dpdGhSZXN0KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGxvYWRpbmc6dHJ1ZVxyXG4gICAgfSlcclxuICAgIGF4aW9zLmdldChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9wcm9sb25nYXRpb25BZ3JlZW1lbnQ/c2lnbj15JnJlcXVlc3RfaWQ9JHt0aGlzLnN0YXRlLmlkfWApXHJcbiAgICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgaWYocmVzLmRhdGEuc3VjY2Vzcyl7XHJcbiAgICAgICAgICAgIHN3YWwoXCLQo9GB0L/QtdGI0L3QviFcIiwgXCJzdWNjZXNzXCIpLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyBzZW5kQWdyZWVtZW50U3RhdHVzKCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgfSlcclxuXHJcbiAgICB0cnl7XHJcbiAgICAgIGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9hZ3JlZW1lbnQnLHsgcGFyYW1zOntcclxuICAgICAgICAgIGlkOnRoaXMuc3RhdGUuaWQsXHJcbiAgICAgICAgICBwaG9uZTp0aGlzLnN0YXRlLnBob25lLFxyXG4gICAgICAgICAgdG9rZW46dGhpcy5zdGF0ZS50b2tlbixcclxuICAgICAgICAgIGlkX3JlcTogdGhpcy5zdGF0ZS5pZF9yZXEsXHJcbiAgICAgICAgICBzaWduOiAneSdcclxuICAgICAgICB9fSlcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLnN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgICAgIHN3YWwoXCLQo9GB0L/QtdGI0L3QviFcIiwgXCLQndCw0YjQuCDRgdC/0LXRhtC40LDQu9C40YHRgtGLINGB0LLRj9C20YPRgtGB0Y8g0YEg0JLQsNC80Lgg0LIg0YLQtdGH0LXQvdC40LggMTUg0LzQuNC90YPRglwiKS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNhdGNoKGVycm9yKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgfSlcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVNb2RhbCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpc01vZGFsT3BlbjogIXRoaXMuc3RhdGUuaXNNb2RhbE9wZW5cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyDQntGC0L/RgNCw0LLQutCwINGE0L7RgtC+INC90LAg0LHRjdC6XHJcbiAgYXN5bmMgdXBsb2FkSW1hZ2UoZmlsZSkge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG5cclxuICAgIC8vINCU0LvRjyDRgtC10YHRgtCwLCDQtNCw0L3QvdGL0LUg0JzRg9C60LDQvdCwXHJcbiAgICAvLyBmb3JtRGF0YS5hcHBlbmQoJ2lpbicsICc5NzA5MDgzNTAxOTInKVxyXG4gICAgLy8gZm9ybURhdGEuYXBwZW5kKCdsZWFkSUQnLCAnMjc3MTM1JylcclxuXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2lpbicsIHRoaXMucHJvcHMudXNlclJlZHVjZXIudXNlcj8uVUZfNClcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnbGVhZElEJywgdGhpcy5wcm9wcy51c2VyUmVkdWNlci51c2VyPy5VRl8xKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdwaG90bycsIGZpbGUpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGVOYW1lJywgJ2ltYWdlLnBuZycpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2V4dGVuc2lvbicsICdwbmcnKVxyXG5cclxuICAgIC8vIGFkZCBsb2FkaW5nXHJcblxyXG4gICAgLy8g0J/QvtC/0YvRgtC60LAg0L7RgtC/0YDQsNCy0LvQtdC90LjRjyDRhNC+0YLQviDQv9C+INGN0L3QtNC/0L7QuNC90YLRg1xyXG4gICAgYXdhaXQgYXhpb3MucG9zdChgaHR0cDovLzE3OC4xNzAuMjIxLjc1L2Jpb21ldHJpYS9wdWJsaWMvYXBpL2NvbXBhcmVQaG90b3NgLCBmb3JtRGF0YSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zaW1pbGFyaXR5ID4gODIpIHtcclxuICAgICAgICAgICAgc3dhbChcItCS0LXRgNC40YTQuNC60LDRhtC40Y8g0L/RgNC+0LnQtNC10L3QsFwiLCBcItCc0L7QttC10YLQtSDQv9C+0LTQv9C40YHQsNGC0Ywg0LTQvtC60YPQvNC10L3RgtGLXCIsIFwic3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlICh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNNb2RhbE9wZW46IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3dhbChcItCS0LXRgNC40YTQuNC60LDRhtC40Y8g0L3QtSDQv9GA0L7QudC00LXQvdCwXCIsIFwi0KTQvtGC0L4g0L3QtSDQv9GA0L7RiNC70L4g0L/RgNC+0LLQtdGA0LrRgywg0L/QvtC/0YDQvtCx0YPQudGC0LUg0LXRidC1INGA0LDQt1wiLCBcImVycm9yXCIpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICBzd2FsKFwi0J7RiNC40LHQutCwINC/0YDQuCDQv9C+0L/Ri9GC0LrQtSDQstC10YDQuNGE0LjQutCw0YbQuNC4XCIsIFwi0J/QvtC/0YDQvtCx0YPQudGC0LUg0LXRidC1INGA0LDQt1wiLCBcImVycm9yXCIpXHJcbiAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAvLyBpZihnZXRVcmxQYXJhbWV0ZXIoJ3Rva2VuJykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAvLyAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAvLyAgIHRoaXMuc2V0U3RhdGUgKHtcclxuICAgIC8vICAgICB0b2tlbjogZ2V0VXJsUGFyYW1ldGVyKCd0b2tlbicpXHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyB9XHJcbiAgICAvLyB0aGlzLmdldFVzZXJEb2N1bWVudCh1c2VyVG9rZW4oKSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgb3RoZXJQYWdlc1wiPlxyXG4gICAgICAgICAgeyAvKiDQnNC+0LTQsNC70LrQsCDRgSDQv9C+0LvRg9GH0LXQvdC40LXQvCDRhNC+0YLQutC4ICovIH1cclxuICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgIGlzT3Blbj17IHRoaXMuc3RhdGUuaXNNb2RhbE9wZW4gfVxyXG4gICAgICAgICAgICAgIGNsYXNzPVwibW9kYWwgbW9kYWwtY2FsY3VsYXRvclwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgey8qPE1vZGFsSGVhZGVyIHRvZ2dsZT17dGhpcy50b2dnbGVNb2RhbH0+0JLQtdGA0LjRhNC40LrQsNGG0LjRjzwvTW9kYWxIZWFkZXI+Ki99XHJcbiAgICAgICAgICAgIDxNb2RhbEhlYWRlcj7QktC10YDQuNGE0LjQutCw0YbQuNGPPC9Nb2RhbEhlYWRlcj5cclxuICAgICAgICAgICAgPE1vZGFsQm9keT5cclxuICAgICAgICAgICAgICA8Q2FtZXJhRmVlZCBzZW5kRmlsZT17dGhpcy51cGxvYWRJbWFnZX0gLz5cclxuICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XHJcbiAgICAgICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgICAgIDxIZWFkPjx0aXRsZT7QodC+0LPQu9Cw0YjQtdC90LjQtTwvdGl0bGU+PC9IZWFkPlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/ICg8ZGl2IGNsYXNzTmFtZT0nbW9kZWxMb2FkZXInPjwvZGl2PikgOiAoPGRpdiBjbGFzc05hbWU9J21vZGVsTG9hZGVyIGxvYWRlZCc+IDwvZGl2Pil9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JlZW1lbnRzLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQgYWxpZ249XCJjZW50ZXJcIj7QodC+0LPQu9Cw0YjQtdC90LjQtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y88L2g0PlxyXG5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2NvbXBsZXRlJz5cclxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZG9jcy5tYXAoZG9jPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17ZG9jLmxpbms9PT1udWxsPyAnZC1ub25lJyA6ICcnfT48aW1nIGNsYXNzTmFtZT0nY2hlY2tlZENvbXBsZXRlJyBzcmM9e3JlcXVpcmUoXCIuLi9pbWcvY2hlY2tlZC5wbmdcIil9IC8+PGEgaHJlZj17ZG9jLmxpbmt9IHRhcmdldD1cIl9ibGFua1wiPntkb2MubmFtZX08L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8bGk+PGltZyBjbGFzc05hbWU9J2NoZWNrZWRDb21wbGV0ZScgc3JjPXtyZXF1aXJlKFwiLi4vaW1nL2NoZWNrZWQucG5nXCIpfSAvPjxhIG9uQ2xpY2s9eygpID0+IHBkZk1ha2UuY3JlYXRlUGRmKGluc3VyYW5jZUFwcGxpY2F0aW9uKS5vcGVuKCl9PtCX0LDRj9Cy0LvQtdC90LjQtSDQvdCwINGB0YLRgNCw0YXQvtCy0LDQvdC40LU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgY2xhc3NOYW1lPSdjaGVja2VkQ29tcGxldGUnIHNyYz17cmVxdWlyZShcIi4uL2ltZy9jaGVja2VkLnBuZ1wiKX0gLz48YSBvbkNsaWNrPXsoKSA9PiBwZGZNYWtlLmNyZWF0ZVBkZihtaWNyb2NyZWRpdEluc3VyYW5jZSkub3BlbigpfT7QodC+0LPQu9Cw0YHQuNC1INC90LAg0YHRgtGA0LDRhdC+0LLQsNC90LjQtSDQvNC40LrRgNC+0LrRgNC10LTQuNGC0LA8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgY2xhc3NOYW1lPSdjaGVja2VkQ29tcGxldGUnIHNyYz17cmVxdWlyZShcIi4uL2ltZy9jaGVja2VkLnBuZ1wiKX0gLz48YSBvbkNsaWNrPXsoKSA9PiBwZGZNYWtlLmNyZWF0ZVBkZihpbnN1cmFuY2VDb250cmFjdCkub3BlbigpfT7QlNC+0LPQvtCy0L7RgCDQtNC+0LHRgNC+0LLQvtC70YzQvdC+0LPQviDRgdGA0L7Rh9C90L7Qs9C+INGB0YLRgNCw0YXQvtCy0LDQvdC40Y8g0LbQuNC30L3QuDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PGltZyBjbGFzc05hbWU9J2NoZWNrZWRDb21wbGV0ZScgc3JjPXtyZXF1aXJlKFwiLi4vaW1nL2NoZWNrZWQucG5nXCIpfSAvPjxhIG9uQ2xpY2s9eygpID0+IHBkZk1ha2UuY3JlYXRlUGRmKG1pY3JvY3JlZGl0QWdyZWVtZW50KS5vcGVuKCl9PtCU0L7Qs9C+0LLQvtGAINC+INC/0YDQtdC00L7RgdGC0LDQstC70LXQvdC40Lgg0LzQuNC60YDQvtC60YDQtdC00LjRgtCwPC9hPjwvbGk+ICovfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwZWF0QnRuIGZvcm0tZ3JvdXBcIiA+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJlc3QgPT09IHRydWUgPyAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZW5kQWdyZWVtZW50U3RhdHVzV2l0aFJlc3QoKX0gY2xhc3NOYW1lPSdtdC01JyA+0KHQvtCz0LvQsNGI0LDRjtGB0Yw8L2J1dHRvbj4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNlbmRBZ3JlZW1lbnRTdGF0dXMoKX0gY2xhc3NOYW1lPSdtdC01JyA+0KHQvtCz0LvQsNGI0LDRjtGB0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEFncmVlbWVudCkpIl0sInNvdXJjZVJvb3QiOiIifQ==