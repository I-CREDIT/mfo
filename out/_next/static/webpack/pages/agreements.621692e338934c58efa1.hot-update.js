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
        var _this6 = this;

        var formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                formData = new FormData(); // Для теста, данные Мукана:

                formData.append('iin', '970908350192');
                formData.append('leadID', '277135'); // formData.append('iin', this.props.userReducer.user?.UF_4)
                // formData.append('leadID', this.props.userReducer.user?.UF_1)

                formData.append('photo', file);
                formData.append('fileName', 'image.png');
                formData.append('extension', 'png'); // add loading
                // Попытка отправления фото по эндпоинту

                _context5.next = 8;
                return axios__WEBPACK_IMPORTED_MODULE_11___default.a.post("http://178.170.221.75/biometria/public/api/comparePhotos", formData).then(function (response) {
                  console.log(response);

                  if (response.similarity < 82) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_12___default()("Верификация пройдена", "Можете подписать документы", "success").then(function () {
                      _this6.setState({
                        isModalOpen: false
                      });
                    });
                  } else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_12___default()("Верификация не пройдена", "Фото не прошло проверку, попробуйте еще раз", "error").then(function () {
                      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/agreements');
                    });
                  }
                })["catch"](function (error) {
                  console.log(error);
                  sweetalert__WEBPACK_IMPORTED_MODULE_12___default()("Ошибка при попытке верификации", "Попробуйте еще раз", "error").then(function () {
                    next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/agreements');
                  });
                });

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
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
            lineNumber: 282,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_22__["ModalBody"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_CameraFeed_CameraFeed__WEBPACK_IMPORTED_MODULE_21__["CameraFeed"], {
              sendFile: this.uploadImage
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 284,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_13___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("title", {
            children: "\u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 288,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 11
        }, this), this.state.loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "modelLoader"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 34
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "modelLoader loaded",
          children: " "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 289,
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
                lineNumber: 293,
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
                      lineNumber: 297,
                      columnNumber: 70
                    }, _this7), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                      href: doc.link,
                      target: "_blank",
                      children: doc.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 297,
                      columnNumber: 141
                    }, _this7)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 297,
                    columnNumber: 23
                  }, _this7);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 295,
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
                  lineNumber: 305,
                  columnNumber: 49
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
                  onClick: function onClick() {
                    return _this7.sendAgreementStatus();
                  },
                  className: "mt-5",
                  children: "\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 306,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 304,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 274,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWdyZWVtZW50cy5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwicGRmTWFrZSIsInZmcyIsInBkZkZvbnRzIiwiZm9udHMiLCJUaW1lc05ld1JvbWFuIiwibm9ybWFsIiwiYm9sZCIsIml0YWxpY3MiLCJib2xkaXRhbGljcyIsImVtcHR5Q2hlY2tib3giLCJnZXRVcmxQYXJhbWV0ZXIiLCJuYW1lIiwicmVwbGFjZSIsInJlZ2V4IiwiUmVnRXhwIiwicmVzdWx0cyIsImV4ZWMiLCJsb2NhdGlvbiIsInNlYXJjaCIsImRlY29kZVVSSUNvbXBvbmVudCIsInVzZXJUb2tlbiIsImxlbmd0aCIsIkFncmVlbWVudCIsInByb3BzIiwidG9rZW4iLCJsb2FkaW5nIiwiZG9jcyIsImlkIiwiaWRfcmVxIiwic2lnbiIsImlzQ29kZVNlbnQiLCJjb2RlX2NvbmYiLCJlcnJvckluQ29kZSIsInBob25lIiwicmVzdCIsImlzTW9kYWxPcGVuIiwidG9nZ2xlTW9kYWwiLCJiaW5kIiwidXBsb2FkSW1hZ2UiLCJzZXRTdGF0ZSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInN1Y2Nlc3MiLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3IiLCJoZWFkZXJzIiwiY29uc29sZSIsImxvZyIsInBhcmFtcyIsImNvZGUiLCJzd2FsIiwibWVzc2FnZSIsInJlcyIsImZpbGUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicG9zdCIsInNpbWlsYXJpdHkiLCJtYXAiLCJkb2MiLCJsaW5rIiwicmVxdWlyZSIsInNlbmRBZ3JlZW1lbnRTdGF0dXNXaXRoUmVzdCIsInNlbmRBZ3JlZW1lbnRTdGF0dXMiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpdGhBdXRoIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUEwQ0Q7Ozs7RUF0UXFCQyw0Q0FBSyxDQUFDQyxTOztBQXlRZkMseUlBQVEsQ0FBQ0MsNERBQU8sQ0FBQzNFLGVBQUQsQ0FBUCxDQUF5QnlCLFNBQXpCLENBQUQsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWdyZWVtZW50cy42MjE2OTJlMzM4OTM0YzU4ZWZhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHBkZk1ha2UgZnJvbSBcInBkZm1ha2UvYnVpbGQvcGRmbWFrZVwiO1xyXG5pbXBvcnQgcGRmRm9udHMgZnJvbSBcInBkZm1ha2UvYnVpbGQvdmZzX2ZvbnRzXCI7XHJcbmltcG9ydCBpbnN1cmFuY2VBcHBsaWNhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2RvY3VtZW50XzEvaW5zdXJhbmNlQXBwbGljYXRpb24nXHJcbmltcG9ydCBtaWNyb2NyZWRpdEluc3VyYW5jZSBmcm9tICcuLi9jb21wb25lbnRzL2RvY3VtZW50XzEvbWljcm9jcmVkaXRJbnN1cmFuY2UnXHJcbmltcG9ydCBpbnN1cmFuY2VDb250cmFjdCBmcm9tICcuLi9jb21wb25lbnRzL2RvY3VtZW50XzEvaW5zdXJhbmNlQ29udHJhY3QnXHJcbmltcG9ydCBtaWNyb2NyZWRpdEFncmVlbWVudCBmcm9tICcuLi9jb21wb25lbnRzL2RvY3VtZW50XzEvbWljcm9jcmVkaXRBZ3JlZW1lbnQnXHJcbmltcG9ydCB1c2Vyc1JlZHVjZXIgZnJvbSBcIi4uL3N0b3JlL3JlZHVjZXJzL3VzZXJSZWR1Y2VyXCI7XHJcblxyXG4vLyBjYW1lcmEgKGNhdGNoIHBob3RvKVxyXG5pbXBvcnQgeyBDYW1lcmFGZWVkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FtZXJhRmVlZC9DYW1lcmFGZWVkXCI7XHJcbmltcG9ydCB7TW9kYWwsIE1vZGFsQm9keSwgTW9kYWxIZWFkZXJ9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tIFwiLi4vY29tcG9uZW50cy9ob2NzL3dpdGhBdXRoXCI7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgcmV0dXJuIHt1c2VyUmVkdWNlcjogc3RhdGUudXNlclJlZHVjZXJ9XHJcbn1cclxuXHJcbnBkZk1ha2UudmZzID0gcGRmRm9udHMucGRmTWFrZS52ZnM7XHJcbnBkZk1ha2UuZm9udHMgPSB7XHJcbiAgVGltZXNOZXdSb21hbjoge1xyXG4gICAgbm9ybWFsOiAnVGltZXNOZXdSb21hbi50dGYnLFxyXG4gICAgYm9sZDogJ1RpbWVzTmV3Um9tYW5Cb2xkLnR0ZicsXHJcbiAgICBpdGFsaWNzOiAnVGltZXNOZXdSb21hbkl0YWxpY3MudHRmJyxcclxuICAgIGJvbGRpdGFsaWNzOiAnVGltZXNOZXdSb21hbkJvbGRJdGFsaWNzLnR0ZidcclxuICB9LFxyXG4gIGVtcHR5Q2hlY2tib3g6IHtcclxuICAgIG5vcm1hbDogJ2VtcHR5Q2hlY2tib3gudHRmJ1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VXJsUGFyYW1ldGVyKG5hbWUpIHtcclxuICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXS8sICdcXFxcWycpLnJlcGxhY2UoL1tcXF1dLywgJ1xcXFxdJyk7XHJcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnW1xcXFw/Jl0nICsgbmFtZSArICc9KFteJiNdKiknKTtcclxuICB2YXIgcmVzdWx0cyA9IHJlZ2V4LmV4ZWMobG9jYXRpb24uc2VhcmNoKTtcclxuICByZXR1cm4gcmVzdWx0cyA9PT0gbnVsbCA/ICcnIDogZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMV0ucmVwbGFjZSgvXFwrL2csICcgJykpO1xyXG59XHJcblxyXG5jb25zdCB1c2VyVG9rZW4gPSAoKSA9PiB7XHJcbiAgaWYoZ2V0VXJsUGFyYW1ldGVyKCd0b2tlbicpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgcmV0dXJuIGdldFVybFBhcmFtZXRlcigndG9rZW4nKVxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBBZ3JlZW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB0b2tlbjogbnVsbCxcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGRvY3M6IFtdLFxyXG4gICAgICBpZDogbnVsbCxcclxuICAgICAgaWRfcmVxOiBudWxsLFxyXG4gICAgICBzaWduOiAnJyxcclxuICAgICAgaXNDb2RlU2VudDogZmFsc2UsXHJcbiAgICAgIGNvZGVfY29uZjogbnVsbCxcclxuICAgICAgZXJyb3JJbkNvZGU6IG51bGwsXHJcbiAgICAgIHBob25lOiBudWxsLFxyXG4gICAgICByZXN0OiBudWxsLFxyXG4gICAgICBpc01vZGFsT3BlbjogdHJ1ZSxcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRvZ2dsZU1vZGFsID0gdGhpcy50b2dnbGVNb2RhbC5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLnVwbG9hZEltYWdlID0gdGhpcy51cGxvYWRJbWFnZS5iaW5kKHRoaXMpXHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRVc2VyRG9jdW1lbnQodG9rZW4pIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICB9KVxyXG5cclxuICAgIGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9nZXREYXRhP3Rva2VuPSR7dG9rZW59YClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICBkb2NzOiByZXNwb25zZS5kYXRhLmRvY3MsXHJcbiAgICAgICAgICAgICAgaWQ6IHJlc3BvbnNlLmRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgaWRfcmVxOiByZXNwb25zZS5kYXRhLmlkX3JlcSxcclxuICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICByZXN0OiByZXNwb25zZS5kYXRhLnJlc3QsXHJcbiAgICAgICAgICAgICAgcGhvbmU6IHJlc3BvbnNlLmRhdGEucGhvbmVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRDb2RlKCkge1xyXG4gICAgYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL3NlbmRTbXM/cGhvbmU9JHt0aGlzLnN0YXRlLnBob25lfWAse1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgIGlmKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgaXNDb2RlU2VudDogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIHNlbmRBZ3JlZW1lbnRTdGF0dXNGb3JSZXN0KCkge1xyXG4gICAgaWYodGhpcy5zdGF0ZS5jb2RlX2NvbmYgIT09IG51bGwpIHtcclxuICAgICAgYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL3NlbmRTbXNgLHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIGlkOnRoaXMuc3RhdGUuaWQsXHJcbiAgICAgICAgICBwaG9uZTp0aGlzLnN0YXRlLnBob25lLFxyXG4gICAgICAgICAgdG9rZW46dGhpcy5zdGF0ZS50b2tlbixcclxuICAgICAgICAgIGlkX3JlcTogdGhpcy5zdGF0ZS5pZF9yZXEsXHJcbiAgICAgICAgICBjb2RlOnRoaXMuc3RhdGUuY29kZV9jb25mLFxyXG4gICAgICAgICAgc2lnbjogJ3knXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICBzd2FsKFwi0KPRgdC/0LXRiNC90L4hXCIsIGAke3Jlc3BvbnNlLm1lc3NhZ2V9YCwgXCJzdWNjZXNzXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZW5kQWdyZWVtZW50U3RhdHVzV2l0aFJlc3QoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbG9hZGluZzp0cnVlXHJcbiAgICB9KVxyXG4gICAgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL3Byb2xvbmdhdGlvbkFncmVlbWVudD9zaWduPXkmcmVxdWVzdF9pZD0ke3RoaXMuc3RhdGUuaWR9YClcclxuICAgICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBpZihyZXMuZGF0YS5zdWNjZXNzKXtcclxuICAgICAgICAgICAgc3dhbChcItCj0YHQv9C10YjQvdC+IVwiLCBcInN1Y2Nlc3NcIikudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIHNlbmRBZ3JlZW1lbnRTdGF0dXMoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICB9KVxyXG5cclxuICAgIHRyeXtcclxuICAgICAgYXhpb3MuZ2V0KCdodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL2FncmVlbWVudCcseyBwYXJhbXM6e1xyXG4gICAgICAgICAgaWQ6dGhpcy5zdGF0ZS5pZCxcclxuICAgICAgICAgIHBob25lOnRoaXMuc3RhdGUucGhvbmUsXHJcbiAgICAgICAgICB0b2tlbjp0aGlzLnN0YXRlLnRva2VuLFxyXG4gICAgICAgICAgaWRfcmVxOiB0aGlzLnN0YXRlLmlkX3JlcSxcclxuICAgICAgICAgIHNpZ246ICd5J1xyXG4gICAgICAgIH19KVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PntcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcyl7XHJcbiAgICAgICAgICAgICAgc3dhbChcItCj0YHQv9C10YjQvdC+IVwiLCBcItCd0LDRiNC4INGB0L/QtdGG0LjQsNC70LjRgdGC0Ysg0YHQstGP0LbRg9GC0YHRjyDRgSDQktCw0LzQuCDQsiDRgtC10YfQtdC90LjQuCAxNSDQvNC40L3Rg9GCXCIpLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZXJyb3Ipe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZU1vZGFsKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlzTW9kYWxPcGVuOiAhdGhpcy5zdGF0ZS5pc01vZGFsT3BlblxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vINCe0YLQv9GA0LDQstC60LAg0YTQvtGC0L4g0L3QsCDQsdGN0LpcclxuICBhc3luYyB1cGxvYWRJbWFnZShmaWxlKSB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcblxyXG4gICAgLy8g0JTQu9GPINGC0LXRgdGC0LAsINC00LDQvdC90YvQtSDQnNGD0LrQsNC90LA6XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2lpbicsICc5NzA5MDgzNTAxOTInKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdsZWFkSUQnLCAnMjc3MTM1JylcclxuXHJcbiAgICAvLyBmb3JtRGF0YS5hcHBlbmQoJ2lpbicsIHRoaXMucHJvcHMudXNlclJlZHVjZXIudXNlcj8uVUZfNClcclxuICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnbGVhZElEJywgdGhpcy5wcm9wcy51c2VyUmVkdWNlci51c2VyPy5VRl8xKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdwaG90bycsIGZpbGUpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGVOYW1lJywgJ2ltYWdlLnBuZycpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2V4dGVuc2lvbicsICdwbmcnKVxyXG5cclxuICAgIC8vIGFkZCBsb2FkaW5nXHJcblxyXG4gICAgLy8g0J/QvtC/0YvRgtC60LAg0L7RgtC/0YDQsNCy0LvQtdC90LjRjyDRhNC+0YLQviDQv9C+INGN0L3QtNC/0L7QuNC90YLRg1xyXG4gICAgYXdhaXQgYXhpb3MucG9zdChgaHR0cDovLzE3OC4xNzAuMjIxLjc1L2Jpb21ldHJpYS9wdWJsaWMvYXBpL2NvbXBhcmVQaG90b3NgLCBmb3JtRGF0YSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5zaW1pbGFyaXR5IDwgODIpIHtcclxuICAgICAgICAgICAgc3dhbChcItCS0LXRgNC40YTQuNC60LDRhtC40Y8g0L/RgNC+0LnQtNC10L3QsFwiLCBcItCc0L7QttC10YLQtSDQv9C+0LTQv9C40YHQsNGC0Ywg0LTQvtC60YPQvNC10L3RgtGLXCIsIFwic3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlICh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNNb2RhbE9wZW46IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3dhbChcItCS0LXRgNC40YTQuNC60LDRhtC40Y8g0L3QtSDQv9GA0L7QudC00LXQvdCwXCIsIFwi0KTQvtGC0L4g0L3QtSDQv9GA0L7RiNC70L4g0L/RgNC+0LLQtdGA0LrRgywg0L/QvtC/0YDQvtCx0YPQudGC0LUg0LXRidC1INGA0LDQt1wiLCBcImVycm9yXCIpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWdyZWVtZW50cycpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgc3dhbChcItCe0YjQuNCx0LrQsCDQv9GA0Lgg0L/QvtC/0YvRgtC60LUg0LLQtdGA0LjRhNC40LrQsNGG0LjQuFwiLCBcItCf0L7Qv9GA0L7QsdGD0LnRgtC1INC10YnQtSDRgNCw0LdcIiwgXCJlcnJvclwiKVxyXG4gICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWdyZWVtZW50cycpXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgIC8vIGlmKGdldFVybFBhcmFtZXRlcigndG9rZW4nKS5sZW5ndGggPT09IDApIHtcclxuICAgIC8vICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgdGhpcy5zZXRTdGF0ZSAoe1xyXG4gICAgLy8gICAgIHRva2VuOiBnZXRVcmxQYXJhbWV0ZXIoJ3Rva2VuJylcclxuICAgIC8vICAgfSlcclxuICAgIC8vIH1cclxuICAgIC8vIHRoaXMuZ2V0VXNlckRvY3VtZW50KHVzZXJUb2tlbigpKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBvdGhlclBhZ2VzXCI+XHJcbiAgICAgICAgICB7IC8qINCc0L7QtNCw0LvQutCwINGBINC/0L7Qu9GD0YfQtdC90LjQtdC8INGE0L7RgtC60LggKi8gfVxyXG4gICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgaXNPcGVuPXsgdGhpcy5zdGF0ZS5pc01vZGFsT3BlbiB9XHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJtb2RhbCBtb2RhbC1jYWxjdWxhdG9yXCJcclxuICAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7Lyo8TW9kYWxIZWFkZXIgdG9nZ2xlPXt0aGlzLnRvZ2dsZU1vZGFsfT7QktC10YDQuNGE0LjQutCw0YbQuNGPPC9Nb2RhbEhlYWRlcj4qL31cclxuICAgICAgICAgICAgPE1vZGFsSGVhZGVyPtCS0LXRgNC40YTQuNC60LDRhtC40Y88L01vZGFsSGVhZGVyPlxyXG4gICAgICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAgICAgIDxDYW1lcmFGZWVkIHNlbmRGaWxlPXt0aGlzLnVwbG9hZEltYWdlfSAvPlxyXG4gICAgICAgICAgICA8L01vZGFsQm9keT5cclxuICAgICAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgICAgICAgPEhlYWQ+PHRpdGxlPtCh0L7Qs9C70LDRiNC10L3QuNC1PC90aXRsZT48L0hlYWQ+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gKDxkaXYgY2xhc3NOYW1lPSdtb2RlbExvYWRlcic+PC9kaXY+KSA6ICg8ZGl2IGNsYXNzTmFtZT0nbW9kZWxMb2FkZXIgbG9hZGVkJz4gPC9kaXY+KX1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmVlbWVudHMtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxoNCBhbGlnbj1cImNlbnRlclwiPtCh0L7Qs9C70LDRiNC10L3QuNC1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjzwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nY29tcGxldGUnPlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kb2NzLm1hcChkb2M9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtkb2MubGluaz09PW51bGw/ICdkLW5vbmUnIDogJyd9PjxpbWcgY2xhc3NOYW1lPSdjaGVja2VkQ29tcGxldGUnIHNyYz17cmVxdWlyZShcIi4uL2ltZy9jaGVja2VkLnBuZ1wiKX0gLz48YSBocmVmPXtkb2MubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+e2RvYy5uYW1lfTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgey8qIDxsaT48aW1nIGNsYXNzTmFtZT0nY2hlY2tlZENvbXBsZXRlJyBzcmM9e3JlcXVpcmUoXCIuLi9pbWcvY2hlY2tlZC5wbmdcIil9IC8+PGEgb25DbGljaz17KCkgPT4gcGRmTWFrZS5jcmVhdGVQZGYoaW5zdXJhbmNlQXBwbGljYXRpb24pLm9wZW4oKX0+0JfQsNGP0LLQu9C10L3QuNC1INC90LAg0YHRgtGA0LDRhdC+0LLQsNC90LjQtTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PGltZyBjbGFzc05hbWU9J2NoZWNrZWRDb21wbGV0ZScgc3JjPXtyZXF1aXJlKFwiLi4vaW1nL2NoZWNrZWQucG5nXCIpfSAvPjxhIG9uQ2xpY2s9eygpID0+IHBkZk1ha2UuY3JlYXRlUGRmKG1pY3JvY3JlZGl0SW5zdXJhbmNlKS5vcGVuKCl9PtCh0L7Qs9C70LDRgdC40LUg0L3QsCDRgdGC0YDQsNGF0L7QstCw0L3QuNC1INC80LjQutGA0L7QutGA0LXQtNC40YLQsDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PGltZyBjbGFzc05hbWU9J2NoZWNrZWRDb21wbGV0ZScgc3JjPXtyZXF1aXJlKFwiLi4vaW1nL2NoZWNrZWQucG5nXCIpfSAvPjxhIG9uQ2xpY2s9eygpID0+IHBkZk1ha2UuY3JlYXRlUGRmKGluc3VyYW5jZUNvbnRyYWN0KS5vcGVuKCl9PtCU0L7Qs9C+0LLQvtGAINC00L7QsdGA0L7QstC+0LvRjNC90L7Qs9C+INGB0YDQvtGH0L3QvtCz0L4g0YHRgtGA0LDRhdC+0LLQsNC90LjRjyDQttC40LfQvdC4PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGNsYXNzTmFtZT0nY2hlY2tlZENvbXBsZXRlJyBzcmM9e3JlcXVpcmUoXCIuLi9pbWcvY2hlY2tlZC5wbmdcIil9IC8+PGEgb25DbGljaz17KCkgPT4gcGRmTWFrZS5jcmVhdGVQZGYobWljcm9jcmVkaXRBZ3JlZW1lbnQpLm9wZW4oKX0+0JTQvtCz0L7QstC+0YAg0L4g0L/RgNC10LTQvtGB0YLQsNCy0LvQtdC90LjQuCDQvNC40LrRgNC+0LrRgNC10LTQuNGC0LA8L2E+PC9saT4gKi99XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXBlYXRCdG4gZm9ybS1ncm91cFwiID5cclxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucmVzdCA9PT0gdHJ1ZSA/ICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNlbmRBZ3JlZW1lbnRTdGF0dXNXaXRoUmVzdCgpfSBjbGFzc05hbWU9J210LTUnID7QodC+0LPQu9Cw0YjQsNGO0YHRjDwvYnV0dG9uPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2VuZEFncmVlbWVudFN0YXR1cygpfSBjbGFzc05hbWU9J210LTUnID7QodC+0LPQu9Cw0YjQsNGO0YHRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQWdyZWVtZW50KSkiXSwic291cmNlUm9vdCI6IiJ9