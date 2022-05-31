webpackHotUpdate_N_E("pages/agreements",{

/***/ "./components/CameraFeed/CameraFeed.jsx":
/*!**********************************************!*\
  !*** ./components/CameraFeed/CameraFeed.jsx ***!
  \**********************************************/
/*! exports provided: CameraFeed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraFeed", function() { return CameraFeed; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);










var _jsxFileName = "C:\\Users\\admin\\Desktop\\projects\\MFO\\mfo\\components\\CameraFeed\\CameraFeed.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var CameraFeed = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CameraFeed, _Component);

  var _super = _createSuper(CameraFeed);

  function CameraFeed(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CameraFeed);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "takePhoto", function () {
      _this.setState({
        isCameraVisible: false
      });

      var context = _this.canvas.getContext('2d');

      _this.canvas.width = _this.videoPlayer.videoWidth;
      _this.canvas.height = _this.videoPlayer.videoHeight;
      context.drawImage(_this.videoPlayer, 0, 0, _this.canvas.width, _this.canvas.height);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showCamera", function () {
      _this.setState({
        isCameraVisible: true,
        isPreload: false
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "sendPhoto", function () {
      var sendFile = _this.props.sendFile;

      _this.canvas.toBlob(sendFile);
    });

    _this.state = {
      isCameraVisible: false,
      isCameraLoading: true,
      isVerificationCompleted: false,
      isScanning: false,
      isVerificationSecond: false,
      isVerificationThird: false,
      isPreload: true
    };
    return _this;
  }
  /**
   * Processes available devices and identifies one by the label
   * @memberof CameraFeed
   * @instance
   */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(CameraFeed, [{
    key: "processDevices",
    value: function processDevices(devices) {
      var _this2 = this;

      devices.forEach(function (device) {
        _this2.setDevice(device);
      });
    }
    /**
     * Sets the active device and starts playing the feed
     * @memberof CameraFeed
     * @instance
     */

  }, {
    key: "setDevice",
    value: function () {
      var _setDevice = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(device) {
        var deviceId;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                deviceId = device.deviceId;
                _context.next = 3;
                return navigator.mediaDevices.getUserMedia({
                  audio: false,
                  video: {
                    deviceId: deviceId
                  }
                });

              case 3:
                this.videoPlayer.srcObject = _context.sent;
                _context.next = 6;
                return this.videoPlayer.play();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setDevice(_x) {
        return _setDevice.apply(this, arguments);
      }

      return setDevice;
    }()
    /**
     * On mount, grab the users connected devices and process them
     * @memberof CameraFeed
     * @instance
     * @override
     */

  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this3 = this;

        var cameras;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return navigator.mediaDevices.enumerateDevices();

              case 2:
                cameras = _context2.sent;
                this.processDevices(cameras);
                setTimeout(function () {
                  _this3.setState({
                    isCameraLoading: false
                  });

                  setTimeout(function () {
                    // 2 секунды - Поместить лицо в рамку, начать сканирование
                    _this3.setState({
                      isScanning: true
                    }); // 1 секунда - Конец сканирования, улыбнуться


                    setTimeout(function () {
                      _this3.setState({
                        isScanning: false,
                        isVerificationSecond: true
                      }); // 2 секунды - Улыбнуться, начать сканирование


                      setTimeout(function () {
                        _this3.setState({
                          isVerificationSecond: false,
                          isScanning: true
                        }); // 1 секунда - Конец сканирования, отдалиться


                        setTimeout(function () {
                          _this3.setState({
                            isScanning: false,
                            isVerificationThird: true
                          }); // 2 секунды - Отдалиться, закончить верификацию


                          setTimeout(function () {
                            _this3.setState({
                              isScanning: true
                            }); // 1 секунда - Конец сканирования, отдалиться


                            setTimeout(function () {
                              _this3.setState({
                                isScanning: false,
                                isVerificationThird: false,
                                isVerificationCompleted: true
                              });
                            }, 1000);
                          }, 2000);
                        }, 1000);
                      }, 2000);
                    }, 1000);
                  }, 2000);
                }, 1000);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
    /**
     * Handles taking a still image from the video feed on the camera
     * @memberof CameraFeed
     * @instance
     */

  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "c-camera-feed",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "modelLoader ".concat(this.state.isCameraLoading ? '' : 'd-none')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "c-camera-feed__preload ".concat(this.state.isPreload ? '' : 'd-none'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
            children: "\u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0440\u043E\u0439\u0442\u0438 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
            onClick: this.showCamera,
            children: "\u041D\u0430\u0447\u0430\u0442\u044C \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "c-camera-feed--holder ".concat(this.state.isCameraVisible ? '' : 'd-none'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "c-camera-feed__viewer",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("video", {
              ref: function ref(_ref) {
                return _this4.videoPlayer = _ref;
              },
              width: "100%",
              height: "100%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "face-id ".concat(this.state.isVerificationCompleted ? 'd-none' : ''),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                className: "face-id__frame ".concat(this.state.isVerificationThird ? 'scale-smaller' : ''),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "face-id__scanner ".concat(this.state.isScanning ? '' : 'd-none')
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
            className: "face-id__text ".concat(!this.state.isVerificationCompleted ? '' : 'd-none'),
            children: this.state.isVerificationSecond ? "Улыбнитесь" : this.state.isVerificationThird ? "Отдалитесь" : "Поместите лицо в рамку"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
            className: "".concat(this.state.isVerificationCompleted ? '' : 'd-none'),
            onClick: this.takePhoto,
            children: "\u0421\u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "c-camera-feed--holder ".concat(!this.state.isCameraVisible ? '' : 'd-none'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "c-camera-feed__stage",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("canvas", {
              className: "canvas",
              height: "100%",
              ref: function ref(_ref2) {
                return _this4.canvas = _ref2;
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "d-flex justify-content-between w-100",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
              onClick: this.showCamera,
              children: "\u041F\u0435\u0440\u0435\u0441\u043D\u044F\u0442\u044C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
              onClick: this.sendPhoto,
              children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 13
      }, this);
    }
  }]);

  return CameraFeed;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYW1lcmFGZWVkL0NhbWVyYUZlZWQuanN4Il0sIm5hbWVzIjpbIkNhbWVyYUZlZWQiLCJwcm9wcyIsInNldFN0YXRlIiwiaXNDYW1lcmFWaXNpYmxlIiwiY29udGV4dCIsImNhbnZhcyIsImdldENvbnRleHQiLCJ3aWR0aCIsInZpZGVvUGxheWVyIiwidmlkZW9XaWR0aCIsImhlaWdodCIsInZpZGVvSGVpZ2h0IiwiZHJhd0ltYWdlIiwiaXNQcmVsb2FkIiwic2VuZEZpbGUiLCJ0b0Jsb2IiLCJzdGF0ZSIsImlzQ2FtZXJhTG9hZGluZyIsImlzVmVyaWZpY2F0aW9uQ29tcGxldGVkIiwiaXNTY2FubmluZyIsImlzVmVyaWZpY2F0aW9uU2Vjb25kIiwiaXNWZXJpZmljYXRpb25UaGlyZCIsImRldmljZXMiLCJmb3JFYWNoIiwiZGV2aWNlIiwic2V0RGV2aWNlIiwiZGV2aWNlSWQiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJhdWRpbyIsInZpZGVvIiwic3JjT2JqZWN0IiwicGxheSIsImVudW1lcmF0ZURldmljZXMiLCJjYW1lcmFzIiwicHJvY2Vzc0RldmljZXMiLCJzZXRUaW1lb3V0Iiwic2hvd0NhbWVyYSIsInJlZiIsInRha2VQaG90byIsInNlbmRQaG90byIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxVQUFiO0FBQUE7O0FBQUE7O0FBQ0ksc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxvTkF3R1AsWUFBTTtBQUNkLFlBQUtDLFFBQUwsQ0FBYztBQUNWQyx1QkFBZSxFQUFFO0FBRFAsT0FBZDs7QUFJQSxVQUFNQyxPQUFPLEdBQUcsTUFBS0MsTUFBTCxDQUFZQyxVQUFaLENBQXVCLElBQXZCLENBQWhCOztBQUVB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OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FtZXJhRmVlZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzQ2FtZXJhVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzQ2FtZXJhTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgaXNWZXJpZmljYXRpb25Db21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1NjYW5uaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNWZXJpZmljYXRpb25TZWNvbmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1ZlcmlmaWNhdGlvblRoaXJkOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNQcmVsb2FkOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb2Nlc3NlcyBhdmFpbGFibGUgZGV2aWNlcyBhbmQgaWRlbnRpZmllcyBvbmUgYnkgdGhlIGxhYmVsXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FtZXJhRmVlZFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHByb2Nlc3NEZXZpY2VzKGRldmljZXMpIHtcclxuICAgICAgICBkZXZpY2VzLmZvckVhY2goZGV2aWNlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXREZXZpY2UoZGV2aWNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGFjdGl2ZSBkZXZpY2UgYW5kIHN0YXJ0cyBwbGF5aW5nIHRoZSBmZWVkXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FtZXJhRmVlZFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHNldERldmljZShkZXZpY2UpIHtcclxuICAgICAgICBjb25zdCB7IGRldmljZUlkIH0gPSBkZXZpY2U7XHJcbiAgICAgICAgdGhpcy52aWRlb1BsYXllci5zcmNPYmplY3QgPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7YXVkaW86IGZhbHNlLCB2aWRlbzoge2RldmljZUlkfX0pO1xyXG4gICAgICAgIGF3YWl0IHRoaXMudmlkZW9QbGF5ZXIucGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT24gbW91bnQsIGdyYWIgdGhlIHVzZXJzIGNvbm5lY3RlZCBkZXZpY2VzIGFuZCBwcm9jZXNzIHRoZW1cclxuICAgICAqIEBtZW1iZXJvZiBDYW1lcmFGZWVkXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCBjYW1lcmFzID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKCk7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzRGV2aWNlcyhjYW1lcmFzKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNDYW1lcmFMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gMiDRgdC10LrRg9C90LTRiyAtINCf0L7QvNC10YHRgtC40YLRjCDQu9C40YbQviDQsiDRgNCw0LzQutGDLCDQvdCw0YfQsNGC0Ywg0YHQutCw0L3QuNGA0L7QstCw0L3QuNC1XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpc1NjYW5uaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAxINGB0LXQutGD0L3QtNCwIC0g0JrQvtC90LXRhiDRgdC60LDQvdC40YDQvtCy0LDQvdC40Y8sINGD0LvRi9Cx0L3Rg9GC0YzRgdGPXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTY2FubmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmVyaWZpY2F0aW9uU2Vjb25kOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDIg0YHQtdC60YPQvdC00YsgLSDQo9C70YvQsdC90YPRgtGM0YHRjywg0L3QsNGH0LDRgtGMINGB0LrQsNC90LjRgNC+0LLQsNC90LjQtVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmVyaWZpY2F0aW9uU2Vjb25kOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2Nhbm5pbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAxINGB0LXQutGD0L3QtNCwIC0g0JrQvtC90LXRhiDRgdC60LDQvdC40YDQvtCy0LDQvdC40Y8sINC+0YLQtNCw0LvQuNGC0YzRgdGPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTY2FubmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJpZmljYXRpb25UaGlyZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMiDRgdC10LrRg9C90LTRiyAtINCe0YLQtNCw0LvQuNGC0YzRgdGPLCDQt9Cw0LrQvtC90YfQuNGC0Ywg0LLQtdGA0LjRhNC40LrQsNGG0LjRjlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2Nhbm5pbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMSDRgdC10LrRg9C90LTQsCAtINCa0L7QvdC10YYg0YHQutCw0L3QuNGA0L7QstCw0L3QuNGPLCDQvtGC0LTQsNC70LjRgtGM0YHRj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2Nhbm5pbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJpZmljYXRpb25UaGlyZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmaWNhdGlvbkNvbXBsZXRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKVxyXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICAgICAgfSwgMjAwMClcclxuICAgICAgICB9LCAxMDAwKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlcyB0YWtpbmcgYSBzdGlsbCBpbWFnZSBmcm9tIHRoZSB2aWRlbyBmZWVkIG9uIHRoZSBjYW1lcmFcclxuICAgICAqIEBtZW1iZXJvZiBDYW1lcmFGZWVkXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgdGFrZVBob3RvID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0NhbWVyYVZpc2libGU6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy52aWRlb1BsYXllci52aWRlb1dpZHRoXHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy52aWRlb1BsYXllci52aWRlb0hlaWdodFxyXG5cclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLnZpZGVvUGxheWVyLCAwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgIH07XHJcblxyXG4gICAgc2hvd0NhbWVyYSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNDYW1lcmFWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBpc1ByZWxvYWQ6IGZhbHNlLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2VuZFBob3RvID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgc2VuZEZpbGUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgdGhpcy5jYW52YXMudG9CbG9iKHNlbmRGaWxlKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImMtY2FtZXJhLWZlZWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbW9kZWxMb2FkZXIgJHt0aGlzLnN0YXRlLmlzQ2FtZXJhTG9hZGluZyA/ICcnIDogJ2Qtbm9uZSd9YH0vPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiDQn9C10YDQtdC0INC+0YLQutGA0YvRgtC40LXQvCDQsdC40L7QvNC10YLRgNC40LggKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGMtY2FtZXJhLWZlZWRfX3ByZWxvYWQgJHt0aGlzLnN0YXRlLmlzUHJlbG9hZCA/ICcnIDogJ2Qtbm9uZSd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+0JLQsNC8INC90LXQvtCx0YXQvtC00LjQvNC+INC/0YDQvtC50YLQuCDQstC10YDQuNGE0LjQutCw0YbQuNGOPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zaG93Q2FtZXJhfT7QndCw0YfQsNGC0Ywg0LLQtdGA0LjRhNC40LrQsNGG0LjRjjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qINCe0YHQvdC+0LLQvdC+0Lkg0LrQvtC80L/QvtC90LXQvdGCINC60LDQvNC10YDRiyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYy1jYW1lcmEtZmVlZC0taG9sZGVyICR7dGhpcy5zdGF0ZS5pc0NhbWVyYVZpc2libGUgPyAnJyA6ICdkLW5vbmUnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1jYW1lcmEtZmVlZF9fdmlld2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2aWRlbyByZWY9e3JlZiA9PiAodGhpcy52aWRlb1BsYXllciA9IHJlZil9IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZhY2UtaWQgJHt0aGlzLnN0YXRlLmlzVmVyaWZpY2F0aW9uQ29tcGxldGVkID8gJ2Qtbm9uZScgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmFjZS1pZF9fZnJhbWUgJHt0aGlzLnN0YXRlLmlzVmVyaWZpY2F0aW9uVGhpcmQgPyAnc2NhbGUtc21hbGxlcicgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZhY2UtaWRfX3NjYW5uZXIgJHt0aGlzLnN0YXRlLmlzU2Nhbm5pbmcgPyAnJyA6ICdkLW5vbmUnfWB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2BmYWNlLWlkX190ZXh0ICR7IXRoaXMuc3RhdGUuaXNWZXJpZmljYXRpb25Db21wbGV0ZWQgPyAnJyA6ICdkLW5vbmUnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzVmVyaWZpY2F0aW9uU2Vjb25kID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcItCj0LvRi9Cx0L3QuNGC0LXRgdGMXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNWZXJpZmljYXRpb25UaGlyZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi0J7RgtC00LDQu9C40YLQtdGB0YxcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi0J/QvtC80LXRgdGC0LjRgtC1INC70LjRhtC+INCyINGA0LDQvNC60YNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHt0aGlzLnN0YXRlLmlzVmVyaWZpY2F0aW9uQ29tcGxldGVkID8gJycgOiAnZC1ub25lJ31gfSBvbkNsaWNrPXt0aGlzLnRha2VQaG90b30+0KHRhNC+0YLQvtCz0YDQsNGE0LjRgNC+0LLQsNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiDQpNC+0YLQviDRgNC10LfRg9C70YzRgtCw0YIgKyDQstC+0LfQvNC+0LbQvdC+0YHRgtGMINC/0LXRgNC10YHQvdGP0YLRjCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYy1jYW1lcmEtZmVlZC0taG9sZGVyICR7IXRoaXMuc3RhdGUuaXNDYW1lcmFWaXNpYmxlID8gJycgOiAnZC1ub25lJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImMtY2FtZXJhLWZlZWRfX3N0YWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjYW52YXMgY2xhc3NOYW1lPVwiY2FudmFzXCIgaGVpZ2h0PVwiMTAwJVwiIHJlZj17cmVmID0+IHRoaXMuY2FudmFzID0gcmVmfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zaG93Q2FtZXJhfT7Qn9C10YDQtdGB0L3Rj9GC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNlbmRQaG90b30+0J7RgtC/0YDQsNCy0LjRgtGMINGE0L7RgtC+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9