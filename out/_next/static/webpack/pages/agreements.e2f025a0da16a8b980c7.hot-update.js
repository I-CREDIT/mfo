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
                    isCameraLoading: false,
                    isCameraVisible: true
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
          lineNumber: 137,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "c-camera-feed__preload ".concat(this.state.isPreload ? '' : 'd-none'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
            children: "\u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0440\u043E\u0439\u0442\u0438 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
            onClick: this.showCamera,
            children: "\u041D\u0430\u0447\u0430\u0442\u044C \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 140,
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
              lineNumber: 148,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "face-id ".concat(this.state.isVerificationCompleted ? 'd-none' : ''),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                className: "face-id__frame ".concat(this.state.isVerificationThird ? 'scale-smaller' : ''),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "face-id__scanner ".concat(this.state.isScanning ? '' : 'd-none')
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
            className: "face-id__text ".concat(!this.state.isVerificationCompleted ? '' : 'd-none'),
            children: this.state.isVerificationSecond ? "Улыбнитесь" : this.state.isVerificationThird ? "Отдалитесь" : "Поместите лицо в рамку"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
            className: "".concat(this.state.isVerificationCompleted ? '' : 'd-none'),
            onClick: this.takePhoto,
            children: "\u0421\u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 146,
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
              lineNumber: 170,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "d-flex justify-content-between w-100",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
              onClick: this.showCamera,
              children: "\u041F\u0435\u0440\u0435\u0441\u043D\u044F\u0442\u044C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
              onClick: this.sendPhoto,
              children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 136,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYW1lcmFGZWVkL0NhbWVyYUZlZWQuanN4Il0sIm5hbWVzIjpbIkNhbWVyYUZlZWQiLCJwcm9wcyIsInNldFN0YXRlIiwiaXNDYW1lcmFWaXNpYmxlIiwiY29udGV4dCIsImNhbnZhcyIsImdldENvbnRleHQiLCJ3aWR0aCIsInZpZGVvUGxheWVyIiwidmlkZW9XaWR0aCIsImhlaWdodCIsInZpZGVvSGVpZ2h0IiwiZHJhd0ltYWdlIiwiaXNQcmVsb2FkIiwic2VuZEZpbGUiLCJ0b0Jsb2IiLCJzdGF0ZSIsImlzQ2FtZXJhTG9hZGluZyIsImlzVmVyaWZpY2F0aW9uQ29tcGxldGVkIiwiaXNTY2FubmluZyIsImlzVmVyaWZpY2F0aW9uU2Vjb25kIiwiaXNWZXJpZmljYXRpb25UaGlyZCIsImRldmljZXMiLCJmb3JFYWNoIiwiZGV2aWNlIiwic2V0RGV2aWNlIiwiZGV2aWNlSWQiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJhdWRpbyIsInZpZGVvIiwic3JjT2JqZWN0IiwicGxheSIsImVudW1lcmF0ZURldmljZXMiLCJjYW1lcmFzIiwicHJvY2Vzc0RldmljZXMiLCJzZXRUaW1lb3V0Iiwic2hvd0NhbWVyYSIsInJlZiIsInRha2VQaG90byIsInNlbmRQaG90byIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxVQUFiO0FBQUE7O0FBQUE7O0FBQ0ksc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxvTkF5R1AsWUFBTTtBQUNkLFlBQUtDLFFBQUwsQ0FBYztBQUNWQyx1QkFBZSxFQUFFO0FBRFAsT0FBZDs7QUFJQSxVQUFNQyxPQUFPLEdBQUcsTUFBS0MsTUFBTCxDQUFZQyxVQUFaLENBQXVCLElBQXZCLENBQWhCOztBQUVB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dHMuZTJmMDI1YTBkYTE2YThiOTgwYzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbWVyYUZlZWQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc0NhbWVyYVZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc0NhbWVyYUxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGlzVmVyaWZpY2F0aW9uQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNTY2FubmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzVmVyaWZpY2F0aW9uU2Vjb25kOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNWZXJpZmljYXRpb25UaGlyZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzUHJlbG9hZDogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9jZXNzZXMgYXZhaWxhYmxlIGRldmljZXMgYW5kIGlkZW50aWZpZXMgb25lIGJ5IHRoZSBsYWJlbFxyXG4gICAgICogQG1lbWJlcm9mIENhbWVyYUZlZWRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBwcm9jZXNzRGV2aWNlcyhkZXZpY2VzKSB7XHJcbiAgICAgICAgZGV2aWNlcy5mb3JFYWNoKGRldmljZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGV2aWNlKGRldmljZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBhY3RpdmUgZGV2aWNlIGFuZCBzdGFydHMgcGxheWluZyB0aGUgZmVlZFxyXG4gICAgICogQG1lbWJlcm9mIENhbWVyYUZlZWRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBhc3luYyBzZXREZXZpY2UoZGV2aWNlKSB7XHJcbiAgICAgICAgY29uc3QgeyBkZXZpY2VJZCB9ID0gZGV2aWNlO1xyXG4gICAgICAgIHRoaXMudmlkZW9QbGF5ZXIuc3JjT2JqZWN0ID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe2F1ZGlvOiBmYWxzZSwgdmlkZW86IHtkZXZpY2VJZH19KTtcclxuICAgICAgICBhd2FpdCB0aGlzLnZpZGVvUGxheWVyLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uIG1vdW50LCBncmFiIHRoZSB1c2VycyBjb25uZWN0ZWQgZGV2aWNlcyBhbmQgcHJvY2VzcyB0aGVtXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FtZXJhRmVlZFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgY2FtZXJhcyA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcygpO1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc0RldmljZXMoY2FtZXJhcyk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzQ2FtZXJhTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc0NhbWVyYVZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIDIg0YHQtdC60YPQvdC00YsgLSDQn9C+0LzQtdGB0YLQuNGC0Ywg0LvQuNGG0L4g0LIg0YDQsNC80LrRgywg0L3QsNGH0LDRgtGMINGB0LrQsNC90LjRgNC+0LLQsNC90LjQtVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTY2FubmluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMSDRgdC10LrRg9C90LTQsCAtINCa0L7QvdC10YYg0YHQutCw0L3QuNGA0L7QstCw0L3QuNGPLCDRg9C70YvQsdC90YPRgtGM0YHRj1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU2Nhbm5pbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmaWNhdGlvblNlY29uZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAyINGB0LXQutGD0L3QtNGLIC0g0KPQu9GL0LHQvdGD0YLRjNGB0Y8sINC90LDRh9Cw0YLRjCDRgdC60LDQvdC40YDQvtCy0LDQvdC40LVcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmaWNhdGlvblNlY29uZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NjYW5uaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMSDRgdC10LrRg9C90LTQsCAtINCa0L7QvdC10YYg0YHQutCw0L3QuNGA0L7QstCw0L3QuNGPLCDQvtGC0LTQsNC70LjRgtGM0YHRj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2Nhbm5pbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmVyaWZpY2F0aW9uVGhpcmQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDIg0YHQtdC60YPQvdC00YsgLSDQntGC0LTQsNC70LjRgtGM0YHRjywg0LfQsNC60L7QvdGH0LjRgtGMINCy0LXRgNC40YTQuNC60LDRhtC40Y5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NjYW5uaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDEg0YHQtdC60YPQvdC00LAgLSDQmtC+0L3QtdGGINGB0LrQsNC90LjRgNC+0LLQsNC90LjRjywg0L7RgtC00LDQu9C40YLRjNGB0Y9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NjYW5uaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmVyaWZpY2F0aW9uVGhpcmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJpZmljYXRpb25Db21wbGV0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwMClcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgICAgIH0sIDIwMDApXHJcbiAgICAgICAgfSwgMTAwMClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgdGFraW5nIGEgc3RpbGwgaW1hZ2UgZnJvbSB0aGUgdmlkZW8gZmVlZCBvbiB0aGUgY2FtZXJhXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FtZXJhRmVlZFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHRha2VQaG90byA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNDYW1lcmFWaXNpYmxlOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMudmlkZW9QbGF5ZXIudmlkZW9XaWR0aFxyXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMudmlkZW9QbGF5ZXIudmlkZW9IZWlnaHRcclxuXHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy52aWRlb1BsYXllciwgMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNob3dDYW1lcmEgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzQ2FtZXJhVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgaXNQcmVsb2FkOiBmYWxzZSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNlbmRQaG90byA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHNlbmRGaWxlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLnRvQmxvYihzZW5kRmlsZSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjLWNhbWVyYS1mZWVkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1vZGVsTG9hZGVyICR7dGhpcy5zdGF0ZS5pc0NhbWVyYUxvYWRpbmcgPyAnJyA6ICdkLW5vbmUnfWB9Lz5cclxuXHJcbiAgICAgICAgICAgICAgICB7Lyog0J/QtdGA0LXQtCDQvtGC0LrRgNGL0YLQuNC10Lwg0LHQuNC+0LzQtdGC0YDQuNC4ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BjLWNhbWVyYS1mZWVkX19wcmVsb2FkICR7dGhpcy5zdGF0ZS5pc1ByZWxvYWQgPyAnJyA6ICdkLW5vbmUnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPtCS0LDQvCDQvdC10L7QsdGF0L7QtNC40LzQviDQv9GA0L7QudGC0Lgg0LLQtdGA0LjRhNC40LrQsNGG0LjRjjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2hvd0NhbWVyYX0+0J3QsNGH0LDRgtGMINCy0LXRgNC40YTQuNC60LDRhtC40Y48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiDQntGB0L3QvtCy0L3QvtC5INC60L7QvNC/0L7QvdC10L3RgiDQutCw0LzQtdGA0YsgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGMtY2FtZXJhLWZlZWQtLWhvbGRlciAke3RoaXMuc3RhdGUuaXNDYW1lcmFWaXNpYmxlID8gJycgOiAnZC1ub25lJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImMtY2FtZXJhLWZlZWRfX3ZpZXdlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dmlkZW8gcmVmPXtyZWYgPT4gKHRoaXMudmlkZW9QbGF5ZXIgPSByZWYpfSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmYWNlLWlkICR7dGhpcy5zdGF0ZS5pc1ZlcmlmaWNhdGlvbkNvbXBsZXRlZCA/ICdkLW5vbmUnIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZhY2UtaWRfX2ZyYW1lICR7dGhpcy5zdGF0ZS5pc1ZlcmlmaWNhdGlvblRoaXJkID8gJ3NjYWxlLXNtYWxsZXInIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmYWNlLWlkX19zY2FubmVyICR7dGhpcy5zdGF0ZS5pc1NjYW5uaW5nID8gJycgOiAnZC1ub25lJ31gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgZmFjZS1pZF9fdGV4dCAkeyF0aGlzLnN0YXRlLmlzVmVyaWZpY2F0aW9uQ29tcGxldGVkID8gJycgOiAnZC1ub25lJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc1ZlcmlmaWNhdGlvblNlY29uZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLQo9C70YvQsdC90LjRgtC10YHRjFwiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzVmVyaWZpY2F0aW9uVGhpcmQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcItCe0YLQtNCw0LvQuNGC0LXRgdGMXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcItCf0L7QvNC10YHRgtC40YLQtSDQu9C40YbQviDQsiDRgNCw0LzQutGDXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7dGhpcy5zdGF0ZS5pc1ZlcmlmaWNhdGlvbkNvbXBsZXRlZCA/ICcnIDogJ2Qtbm9uZSd9YH0gb25DbGljaz17dGhpcy50YWtlUGhvdG99PtCh0YTQvtGC0L7Qs9GA0LDRhNC40YDQvtCy0LDRgtGMPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7Lyog0KTQvtGC0L4g0YDQtdC30YPQu9GM0YLQsNGCICsg0LLQvtC30LzQvtC20L3QvtGB0YLRjCDQv9C10YDQtdGB0L3Rj9GC0YwgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGMtY2FtZXJhLWZlZWQtLWhvbGRlciAkeyF0aGlzLnN0YXRlLmlzQ2FtZXJhVmlzaWJsZSA/ICcnIDogJ2Qtbm9uZSd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjLWNhbWVyYS1mZWVkX19zdGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2FudmFzIGNsYXNzTmFtZT1cImNhbnZhc1wiIGhlaWdodD1cIjEwMCVcIiByZWY9e3JlZiA9PiB0aGlzLmNhbnZhcyA9IHJlZn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2hvd0NhbWVyYX0+0J/QtdGA0LXRgdC90Y/RgtGMPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zZW5kUGhvdG99PtCe0YLQv9GA0LDQstC40YLRjCDRhNC+0YLQvjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==