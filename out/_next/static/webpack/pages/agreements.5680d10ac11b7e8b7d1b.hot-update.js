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
            children: "\u0412\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_22__["ModalBody"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_CameraFeed_CameraFeed__WEBPACK_IMPORTED_MODULE_21__["CameraFeed"], {
              sendFile: this.uploadImage
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 264,
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
            lineNumber: 269,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 11
        }, this), this.state.loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "modelLoader"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 34
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "modelLoader loaded",
          children: " "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 270,
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
                lineNumber: 274,
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
                      lineNumber: 278,
                      columnNumber: 70
                    }, _this6), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
                      href: doc.link,
                      target: "_blank",
                      children: doc.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 278,
                      columnNumber: 141
                    }, _this6)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 278,
                    columnNumber: 23
                  }, _this6);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 276,
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
                  lineNumber: 286,
                  columnNumber: 49
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
                  onClick: function onClick() {
                    return _this6.sendAgreementStatus();
                  },
                  className: "mt-5",
                  children: "\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 287,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 285,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 273,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 272,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 271,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWdyZWVtZW50cy5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwicGRmTWFrZSIsInZmcyIsInBkZkZvbnRzIiwiZm9udHMiLCJUaW1lc05ld1JvbWFuIiwibm9ybWFsIiwiYm9sZCIsIml0YWxpY3MiLCJib2xkaXRhbGljcyIsImVtcHR5Q2hlY2tib3giLCJnZXRVcmxQYXJhbWV0ZXIiLCJuYW1lIiwicmVwbGFjZSIsInJlZ2V4IiwiUmVnRXhwIiwicmVzdWx0cyIsImV4ZWMiLCJsb2NhdGlvbiIsInNlYXJjaCIsImRlY29kZVVSSUNvbXBvbmVudCIsInVzZXJUb2tlbiIsImxlbmd0aCIsIkFncmVlbWVudCIsInByb3BzIiwidG9rZW4iLCJsb2FkaW5nIiwiZG9jcyIsImlkIiwiaWRfcmVxIiwic2lnbiIsImlzQ29kZVNlbnQiLCJjb2RlX2NvbmYiLCJlcnJvckluQ29kZSIsInBob25lIiwicmVzdCIsImlzTW9kYWxPcGVuIiwidG9nZ2xlTW9kYWwiLCJiaW5kIiwidXBsb2FkSW1hZ2UiLCJzZXRTdGF0ZSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInN1Y2Nlc3MiLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3IiLCJoZWFkZXJzIiwiY29uc29sZSIsImxvZyIsInBhcmFtcyIsImNvZGUiLCJzd2FsIiwibWVzc2FnZSIsInJlcyIsImZpbGUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidXNlciIsIlVGXzQiLCJVRl8xIiwicG9zdCIsIm1hcCIsImRvYyIsImxpbmsiLCJyZXF1aXJlIiwic2VuZEFncmVlbWVudFN0YXR1c1dpdGhSZXN0Iiwic2VuZEFncmVlbWVudFN0YXR1cyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2l0aEF1dGgiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFFQyxtQkFBTyxDQUFDLDZDQUFEO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQS9DLGVBQXNIO0FBQUcsMEJBQUksRUFBRUYsR0FBRyxDQUFDQyxJQUFiO0FBQW1CLDRCQUFNLEVBQUMsUUFBMUI7QUFBQSxnQ0FBb0NELEdBQUcsQ0FBQ3ZEO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQXRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFEb0I7QUFBQSxpQkFBdkI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhGLGVBWUU7QUFBSyx5QkFBUyxFQUFDLHNCQUFmO0FBQUEsMEJBQ0csS0FBS2IsS0FBTCxDQUFXb0MsSUFBWCxLQUFvQixJQUFwQixnQkFBNkI7QUFBUSx5QkFBTyxFQUFFO0FBQUEsMkJBQU0sTUFBSSxDQUFDbUMsMkJBQUwsRUFBTjtBQUFBLG1CQUFqQjtBQUEyRCwyQkFBUyxFQUFDLE1BQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUE3QixnQkFDRztBQUFRLHlCQUFPLEVBQUU7QUFBQSwyQkFBTSxNQUFJLENBQUNDLG1CQUFMLEVBQU47QUFBQSxtQkFBakI7QUFBbUQsMkJBQVMsRUFBQyxNQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBMENEOzs7O0VBblBxQkMsNENBQUssQ0FBQ0MsUzs7QUFzUGZDLHlJQUFRLENBQUNDLDREQUFPLENBQUM3RSxlQUFELENBQVAsQ0FBeUJ5QixTQUF6QixDQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FncmVlbWVudHMuNTY4MGQxMGFjMTFiN2U4YjdkMWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBwZGZNYWtlIGZyb20gXCJwZGZtYWtlL2J1aWxkL3BkZm1ha2VcIjtcclxuaW1wb3J0IHBkZkZvbnRzIGZyb20gXCJwZGZtYWtlL2J1aWxkL3Zmc19mb250c1wiO1xyXG5pbXBvcnQgaW5zdXJhbmNlQXBwbGljYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9kb2N1bWVudF8xL2luc3VyYW5jZUFwcGxpY2F0aW9uJ1xyXG5pbXBvcnQgbWljcm9jcmVkaXRJbnN1cmFuY2UgZnJvbSAnLi4vY29tcG9uZW50cy9kb2N1bWVudF8xL21pY3JvY3JlZGl0SW5zdXJhbmNlJ1xyXG5pbXBvcnQgaW5zdXJhbmNlQ29udHJhY3QgZnJvbSAnLi4vY29tcG9uZW50cy9kb2N1bWVudF8xL2luc3VyYW5jZUNvbnRyYWN0J1xyXG5pbXBvcnQgbWljcm9jcmVkaXRBZ3JlZW1lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9kb2N1bWVudF8xL21pY3JvY3JlZGl0QWdyZWVtZW50J1xyXG5pbXBvcnQgdXNlcnNSZWR1Y2VyIGZyb20gXCIuLi9zdG9yZS9yZWR1Y2Vycy91c2VyUmVkdWNlclwiO1xyXG5cclxuLy8gY2FtZXJhIChjYXRjaCBwaG90bylcclxuaW1wb3J0IHsgQ2FtZXJhRmVlZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NhbWVyYUZlZWQvQ2FtZXJhRmVlZFwiO1xyXG5pbXBvcnQge01vZGFsLCBNb2RhbEJvZHksIE1vZGFsSGVhZGVyfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9jcy93aXRoQXV0aFwiO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xyXG4gIHJldHVybiB7dXNlclJlZHVjZXI6IHN0YXRlLnVzZXJSZWR1Y2VyfVxyXG59XHJcblxyXG5wZGZNYWtlLnZmcyA9IHBkZkZvbnRzLnBkZk1ha2UudmZzO1xyXG5wZGZNYWtlLmZvbnRzID0ge1xyXG4gIFRpbWVzTmV3Um9tYW46IHtcclxuICAgIG5vcm1hbDogJ1RpbWVzTmV3Um9tYW4udHRmJyxcclxuICAgIGJvbGQ6ICdUaW1lc05ld1JvbWFuQm9sZC50dGYnLFxyXG4gICAgaXRhbGljczogJ1RpbWVzTmV3Um9tYW5JdGFsaWNzLnR0ZicsXHJcbiAgICBib2xkaXRhbGljczogJ1RpbWVzTmV3Um9tYW5Cb2xkSXRhbGljcy50dGYnXHJcbiAgfSxcclxuICBlbXB0eUNoZWNrYm94OiB7XHJcbiAgICBub3JtYWw6ICdlbXB0eUNoZWNrYm94LnR0ZidcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVybFBhcmFtZXRlcihuYW1lKSB7XHJcbiAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW10vLCAnXFxcXFsnKS5yZXBsYWNlKC9bXFxdXS8sICdcXFxcXScpO1xyXG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ1tcXFxcPyZdJyArIG5hbWUgKyAnPShbXiYjXSopJyk7XHJcbiAgdmFyIHJlc3VsdHMgPSByZWdleC5leGVjKGxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgcmV0dXJuIHJlc3VsdHMgPT09IG51bGwgPyAnJyA6IGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzFdLnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcclxufVxyXG5cclxuY29uc3QgdXNlclRva2VuID0gKCkgPT4ge1xyXG4gIGlmKGdldFVybFBhcmFtZXRlcigndG9rZW4nKS5sZW5ndGggIT09IDApIHtcclxuICAgIHJldHVybiBnZXRVcmxQYXJhbWV0ZXIoJ3Rva2VuJylcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgQWdyZWVtZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdG9rZW46IG51bGwsXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBkb2NzOiBbXSxcclxuICAgICAgaWQ6IG51bGwsXHJcbiAgICAgIGlkX3JlcTogbnVsbCxcclxuICAgICAgc2lnbjogJycsXHJcbiAgICAgIGlzQ29kZVNlbnQ6IGZhbHNlLFxyXG4gICAgICBjb2RlX2NvbmY6IG51bGwsXHJcbiAgICAgIGVycm9ySW5Db2RlOiBudWxsLFxyXG4gICAgICBwaG9uZTogbnVsbCxcclxuICAgICAgcmVzdDogbnVsbCxcclxuICAgICAgaXNNb2RhbE9wZW46IHRydWUsXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50b2dnbGVNb2RhbCA9IHRoaXMudG9nZ2xlTW9kYWwuYmluZCh0aGlzKVxyXG4gICAgdGhpcy51cGxvYWRJbWFnZSA9IHRoaXMudXBsb2FkSW1hZ2UuYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0VXNlckRvY3VtZW50KHRva2VuKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgfSlcclxuXHJcbiAgICBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvZ2V0RGF0YT90b2tlbj0ke3Rva2VufWApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgZG9jczogcmVzcG9uc2UuZGF0YS5kb2NzLFxyXG4gICAgICAgICAgICAgIGlkOiByZXNwb25zZS5kYXRhLmlkLFxyXG4gICAgICAgICAgICAgIGlkX3JlcTogcmVzcG9uc2UuZGF0YS5pZF9yZXEsXHJcbiAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgcmVzdDogcmVzcG9uc2UuZGF0YS5yZXN0LFxyXG4gICAgICAgICAgICAgIHBob25lOiByZXNwb25zZS5kYXRhLnBob25lXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0Q29kZSgpIHtcclxuICAgIGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9zZW5kU21zP3Bob25lPSR7dGhpcy5zdGF0ZS5waG9uZX1gLHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBpZihyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIGlzQ29kZVNlbnQ6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvcj0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyBzZW5kQWdyZWVtZW50U3RhdHVzRm9yUmVzdCgpIHtcclxuICAgIGlmKHRoaXMuc3RhdGUuY29kZV9jb25mICE9PSBudWxsKSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9zZW5kU21zYCx7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBpZDp0aGlzLnN0YXRlLmlkLFxyXG4gICAgICAgICAgcGhvbmU6dGhpcy5zdGF0ZS5waG9uZSxcclxuICAgICAgICAgIHRva2VuOnRoaXMuc3RhdGUudG9rZW4sXHJcbiAgICAgICAgICBpZF9yZXE6IHRoaXMuc3RhdGUuaWRfcmVxLFxyXG4gICAgICAgICAgY29kZTp0aGlzLnN0YXRlLmNvZGVfY29uZixcclxuICAgICAgICAgIHNpZ246ICd5J1xyXG4gICAgICAgIH1cclxuICAgICAgfSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlPT4ge1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgc3dhbChcItCj0YHQv9C10YjQvdC+IVwiLCBgJHtyZXNwb25zZS5tZXNzYWdlfWAsIFwic3VjY2Vzc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VuZEFncmVlbWVudFN0YXR1c1dpdGhSZXN0KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGxvYWRpbmc6dHJ1ZVxyXG4gICAgfSlcclxuICAgIGF4aW9zLmdldChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9wcm9sb25nYXRpb25BZ3JlZW1lbnQ/c2lnbj15JnJlcXVlc3RfaWQ9JHt0aGlzLnN0YXRlLmlkfWApXHJcbiAgICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgaWYocmVzLmRhdGEuc3VjY2Vzcyl7XHJcbiAgICAgICAgICAgIHN3YWwoXCLQo9GB0L/QtdGI0L3QviFcIiwgXCJzdWNjZXNzXCIpLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyBzZW5kQWdyZWVtZW50U3RhdHVzKCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgfSlcclxuXHJcbiAgICB0cnl7XHJcbiAgICAgIGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9hZ3JlZW1lbnQnLHsgcGFyYW1zOntcclxuICAgICAgICAgIGlkOnRoaXMuc3RhdGUuaWQsXHJcbiAgICAgICAgICBwaG9uZTp0aGlzLnN0YXRlLnBob25lLFxyXG4gICAgICAgICAgdG9rZW46dGhpcy5zdGF0ZS50b2tlbixcclxuICAgICAgICAgIGlkX3JlcTogdGhpcy5zdGF0ZS5pZF9yZXEsXHJcbiAgICAgICAgICBzaWduOiAneSdcclxuICAgICAgICB9fSlcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLnN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgICAgIHN3YWwoXCLQo9GB0L/QtdGI0L3QviFcIiwgXCLQndCw0YjQuCDRgdC/0LXRhtC40LDQu9C40YHRgtGLINGB0LLRj9C20YPRgtGB0Y8g0YEg0JLQsNC80Lgg0LIg0YLQtdGH0LXQvdC40LggMTUg0LzQuNC90YPRglwiKS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNhdGNoKGVycm9yKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgfSlcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVNb2RhbCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpc01vZGFsT3BlbjogIXRoaXMuc3RhdGUuaXNNb2RhbE9wZW5cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyDQntGC0L/RgNCw0LLQutCwINGE0L7RgtC+INC90LAg0LHRjdC6XHJcbiAgYXN5bmMgdXBsb2FkSW1hZ2UoZmlsZSkge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG5cclxuICAgIC8vINCU0LvRjyDRgtC10YHRgtCwLCDQtNCw0L3QvdGL0LUg0JzRg9C60LDQvdCwOlxyXG4gICAgLy8gZm9ybURhdGEuYXBwZW5kKCdpaW4nLCAnOTcwOTA4MzUwMTkyJylcclxuICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnbGVhZElEJywgJzI3NzEzNScpXHJcblxyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdpaW4nLCB0aGlzLnByb3BzLnVzZXJSZWR1Y2VyLnVzZXI/LlVGXzQpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2xlYWRJRCcsIHRoaXMucHJvcHMudXNlclJlZHVjZXIudXNlcj8uVUZfMSlcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgncGhvdG8nLCBmaWxlKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlTmFtZScsICdpbWFnZS5wbmcnKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdleHRlbnNpb24nLCAncG5nJylcclxuXHJcbiAgICAvLyDQn9C+0L/Ri9GC0LrQsCDQvtGC0L/RgNCw0LLQu9C10L3QuNGPINGE0L7RgtC+INC/0L4g0Y3QvdC00L/QvtC40L3RgtGDXHJcbiAgICBhd2FpdCBheGlvcy5wb3N0KGBodHRwOi8vMTc4LjE3MC4yMjEuNzUvYmlvbWV0cmlhL3B1YmxpYy9hcGkvY29tcGFyZVBob3Rvc2AsIGZvcm1EYXRhKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgLy8gaWYoZ2V0VXJsUGFyYW1ldGVyKCd0b2tlbicpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgLy8gICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICB0aGlzLnNldFN0YXRlICh7XHJcbiAgICAvLyAgICAgdG9rZW46IGdldFVybFBhcmFtZXRlcigndG9rZW4nKVxyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gfVxyXG4gICAgLy8gdGhpcy5nZXRVc2VyRG9jdW1lbnQodXNlclRva2VuKCkpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG90aGVyUGFnZXNcIj5cclxuICAgICAgICAgIHsgLyog0JzQvtC00LDQu9C60LAg0YEg0L/QvtC70YPRh9C10L3QuNC10Lwg0YTQvtGC0LrQuCAqLyB9XHJcbiAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICBpc09wZW49eyB0aGlzLnN0YXRlLmlzTW9kYWxPcGVuIH1cclxuICAgICAgICAgICAgICBjbGFzcz1cIm1vZGFsIG1vZGFsLWNhbGN1bGF0b3JcIlxyXG4gICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsvKjxNb2RhbEhlYWRlciB0b2dnbGU9e3RoaXMudG9nZ2xlTW9kYWx9PtCS0LXRgNC40YTQuNC60LDRhtC40Y88L01vZGFsSGVhZGVyPiovfVxyXG4gICAgICAgICAgICA8TW9kYWxIZWFkZXI+0JLQtdGA0LjRhNC40LrQsNGG0LjRjzwvTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgICAgIDxNb2RhbEJvZHk+XHJcbiAgICAgICAgICAgICAgPENhbWVyYUZlZWQgc2VuZEZpbGU9e3RoaXMudXBsb2FkSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgICAgICA8SGVhZD48dGl0bGU+0KHQvtCz0LvQsNGI0LXQvdC40LU8L3RpdGxlPjwvSGVhZD5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyAoPGRpdiBjbGFzc05hbWU9J21vZGVsTG9hZGVyJz48L2Rpdj4pIDogKDxkaXYgY2xhc3NOYW1lPSdtb2RlbExvYWRlciBsb2FkZWQnPiA8L2Rpdj4pfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyZWVtZW50cy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPGg0IGFsaWduPVwiY2VudGVyXCI+0KHQvtCz0LvQsNGI0LXQvdC40LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPPC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdjb21wbGV0ZSc+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRvY3MubWFwKGRvYz0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2RvYy5saW5rPT09bnVsbD8gJ2Qtbm9uZScgOiAnJ30+PGltZyBjbGFzc05hbWU9J2NoZWNrZWRDb21wbGV0ZScgc3JjPXtyZXF1aXJlKFwiLi4vaW1nL2NoZWNrZWQucG5nXCIpfSAvPjxhIGhyZWY9e2RvYy5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj57ZG9jLm5hbWV9PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICB7LyogPGxpPjxpbWcgY2xhc3NOYW1lPSdjaGVja2VkQ29tcGxldGUnIHNyYz17cmVxdWlyZShcIi4uL2ltZy9jaGVja2VkLnBuZ1wiKX0gLz48YSBvbkNsaWNrPXsoKSA9PiBwZGZNYWtlLmNyZWF0ZVBkZihpbnN1cmFuY2VBcHBsaWNhdGlvbikub3BlbigpfT7Ql9Cw0Y/QstC70LXQvdC40LUg0L3QsCDRgdGC0YDQsNGF0L7QstCw0L3QuNC1PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGNsYXNzTmFtZT0nY2hlY2tlZENvbXBsZXRlJyBzcmM9e3JlcXVpcmUoXCIuLi9pbWcvY2hlY2tlZC5wbmdcIil9IC8+PGEgb25DbGljaz17KCkgPT4gcGRmTWFrZS5jcmVhdGVQZGYobWljcm9jcmVkaXRJbnN1cmFuY2UpLm9wZW4oKX0+0KHQvtCz0LvQsNGB0LjQtSDQvdCwINGB0YLRgNCw0YXQvtCy0LDQvdC40LUg0LzQuNC60YDQvtC60YDQtdC00LjRgtCwPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGNsYXNzTmFtZT0nY2hlY2tlZENvbXBsZXRlJyBzcmM9e3JlcXVpcmUoXCIuLi9pbWcvY2hlY2tlZC5wbmdcIil9IC8+PGEgb25DbGljaz17KCkgPT4gcGRmTWFrZS5jcmVhdGVQZGYoaW5zdXJhbmNlQ29udHJhY3QpLm9wZW4oKX0+0JTQvtCz0L7QstC+0YAg0LTQvtCx0YDQvtCy0L7Qu9GM0L3QvtCz0L4g0YHRgNC+0YfQvdC+0LPQviDRgdGC0YDQsNGF0L7QstCw0L3QuNGPINC20LjQt9C90Lg8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgY2xhc3NOYW1lPSdjaGVja2VkQ29tcGxldGUnIHNyYz17cmVxdWlyZShcIi4uL2ltZy9jaGVja2VkLnBuZ1wiKX0gLz48YSBvbkNsaWNrPXsoKSA9PiBwZGZNYWtlLmNyZWF0ZVBkZihtaWNyb2NyZWRpdEFncmVlbWVudCkub3BlbigpfT7QlNC+0LPQvtCy0L7RgCDQviDQv9GA0LXQtNC+0YHRgtCw0LLQu9C10L3QuNC4INC80LjQutGA0L7QutGA0LXQtNC40YLQsDwvYT48L2xpPiAqL31cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcGVhdEJ0biBmb3JtLWdyb3VwXCIgPlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yZXN0ID09PSB0cnVlID8gICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2VuZEFncmVlbWVudFN0YXR1c1dpdGhSZXN0KCl9IGNsYXNzTmFtZT0nbXQtNScgPtCh0L7Qs9C70LDRiNCw0Y7RgdGMPC9idXR0b24+IDpcclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZW5kQWdyZWVtZW50U3RhdHVzKCl9IGNsYXNzTmFtZT0nbXQtNScgPtCh0L7Qs9C70LDRiNCw0Y7RgdGMPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShBZ3JlZW1lbnQpKSJdLCJzb3VyY2VSb290IjoiIn0=