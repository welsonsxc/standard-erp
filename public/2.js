(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShopCar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ShopCar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      tableData: [{
        id: 1,
        CommodityFull: "康师傅冰红茶",
        StandardPrice: 5.78,
        number: 1,
        goodTotal: 5.78
      }, {
        id: 2,
        CommodityFull: "农夫山泉矿泉水",
        StandardPrice: 2,
        number: 1,
        goodTotal: 2
      }, {
        id: 4,
        CommodityFull: "测试商品",
        StandardPrice: 1,
        number: 1,
        goodTotal: 1
      }],
      numberValidateForm: {
        id: ''
      }
    };
  },
  methods: {
    //表格操作
    handleDelete: function handleDelete(index) {
      this.tableData.splice(index, 1);
      this.$message({
        type: 'success',
        message: '删除成功!'
      });
    },
    handleInput: function handleInput(value) {
      if (null == value.number || value.number === "") {
        value.number = 1;
      }

      value.goodTotal = (value.number * value.StandardPrice).toFixed(2); //保留两位小数
    },
    add: function add(value) {
      if (typeof value.number == 'string') {
        value.number = parseInt(value.number);
      }

      value.number += 1;
      value.goodTotal = (value.number * value.StandardPrice).toFixed(2);
    },
    del: function del(value) {
      if (typeof value.number == 'string') {
        value.number = parseInt(value.number);
      }

      if (value.number > 1) {
        value.number -= 1;
      }

      value.goodTotal = (value.number * value.StandardPrice).toFixed(2);
    },
    //表单
    submitForm: function submitForm(formName) {
      var _this = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          // eslint-disable-next-line no-undef
          axios.post('commodity', {
            id: formName
          }, {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/x-www-form-urlencoded',
              'Access-Control-Allow-Headers': 'content-type'
            }
          }).then(function (res) {
            // eslint-disable-next-line no-console
            console.log(res.data);
          })["catch"](function (err) {
            // eslint-disable-next-line no-console
            console.log(err);
          });
        } else {
          _this.$message({
            type: 'error',
            message: '验证失败!'
          });

          return false;
        }
      });
    },
    resetForm: function resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShopCar.vue?vue&type=template&id=38753b63&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ShopCar.vue?vue&type=template&id=38753b63& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      [
        _c(
          "el-form",
          {
            ref: "numberValidateForm",
            staticClass: "demo-ruleForm",
            attrs: { model: _vm.numberValidateForm, "label-width": "100px" }
          },
          [
            _c(
              "el-form-item",
              {
                attrs: {
                  label: "商品id",
                  prop: "id",
                  rules: [
                    { required: true, message: "商品id不能为空" },
                    { type: "number", message: "商品id必须为数字值" }
                  ]
                }
              },
              [
                _c("el-input", {
                  attrs: { type: "id", autocomplete: "off" },
                  model: {
                    value: _vm.numberValidateForm.id,
                    callback: function($$v) {
                      _vm.$set(_vm.numberValidateForm, "id", _vm._n($$v))
                    },
                    expression: "numberValidateForm.id"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-form-item",
              [
                _c(
                  "el-button",
                  {
                    attrs: { type: "primary" },
                    on: {
                      click: function($event) {
                        return _vm.submitForm("numberValidateForm")
                      }
                    }
                  },
                  [_vm._v("提交")]
                ),
                _vm._v(" "),
                _c(
                  "el-button",
                  {
                    on: {
                      click: function($event) {
                        return _vm.resetForm("numberValidateForm")
                      }
                    }
                  },
                  [_vm._v("重置")]
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      [
        _c(
          "el-table",
          {
            staticStyle: { width: "100%" },
            attrs: { data: _vm.tableData, border: "" }
          },
          [
            _c("el-table-column", {
              attrs: { prop: "id", label: "id", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "CommodityFull", label: "商品名称", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "StandardPrice", label: "单价" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { label: "数量", width: "200" },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(scope) {
                    return [
                      _c(
                        "div",
                        [
                          _c(
                            "el-input",
                            {
                              on: {
                                change: function($event) {
                                  return _vm.handleInput(scope.row)
                                }
                              },
                              model: {
                                value: scope.row.number,
                                callback: function($$v) {
                                  _vm.$set(scope.row, "number", $$v)
                                },
                                expression: "scope.row.number"
                              }
                            },
                            [
                              _c(
                                "el-button",
                                {
                                  attrs: { slot: "prepend" },
                                  on: {
                                    click: function($event) {
                                      return _vm.del(scope.row)
                                    }
                                  },
                                  slot: "prepend"
                                },
                                [_c("i", { staticClass: "el-icon-minus" })]
                              ),
                              _vm._v(" "),
                              _c(
                                "el-button",
                                {
                                  attrs: { slot: "append" },
                                  on: {
                                    click: function($event) {
                                      return _vm.add(scope.row)
                                    }
                                  },
                                  slot: "append"
                                },
                                [_c("i", { staticClass: "el-icon-plus" })]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]
                  }
                }
              ])
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { label: "小计", width: "150", prop: "goodTotal" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { fixed: "right", label: "操作", width: "100" },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(scope) {
                    return [
                      _c(
                        "el-button",
                        {
                          attrs: { size: "mini", type: "danger" },
                          on: {
                            click: function($event) {
                              return _vm.handleDelete(scope.$index)
                            }
                          }
                        },
                        [_vm._v("删除\n                    ")]
                      )
                    ]
                  }
                }
              ])
            })
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("h1", [_vm._v("小型超市管理系统")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ShopCar.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/ShopCar.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShopCar_vue_vue_type_template_id_38753b63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShopCar.vue?vue&type=template&id=38753b63& */ "./resources/js/components/ShopCar.vue?vue&type=template&id=38753b63&");
/* harmony import */ var _ShopCar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShopCar.vue?vue&type=script&lang=js& */ "./resources/js/components/ShopCar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShopCar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShopCar_vue_vue_type_template_id_38753b63___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShopCar_vue_vue_type_template_id_38753b63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ShopCar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ShopCar.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/ShopCar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopCar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ShopCar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShopCar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopCar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ShopCar.vue?vue&type=template&id=38753b63&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/ShopCar.vue?vue&type=template&id=38753b63& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopCar_vue_vue_type_template_id_38753b63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ShopCar.vue?vue&type=template&id=38753b63& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShopCar.vue?vue&type=template&id=38753b63&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopCar_vue_vue_type_template_id_38753b63___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopCar_vue_vue_type_template_id_38753b63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);