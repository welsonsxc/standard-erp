(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      tableData: [],
      numberValidateForm: {
        age: ''
      },
      total: 0
    };
  },
  methods: {
    //表格操作
    count: function count() {
      var totalPrice = 0;
      this.tableData.forEach(function (val) {
        totalPrice += val.number * val.StandardPrice;
      });
      this.total = parseFloat(totalPrice).toFixed(2);
    },
    handleDelete: function handleDelete(index) {
      this.tableData.splice(index, 1);
      this.$message({
        type: 'success',
        message: '删除成功!'
      });
      this.count();
    },
    handleInput: function handleInput(value) {
      if (null == value.number || value.number === "") {
        value.number = 1;
      }

      value.goodTotal = (value.number * value.StandardPrice).toFixed(2); //保留两位小数

      this.count();
    },
    add: function add(value) {
      if (typeof value.number == 'string') {
        value.number = parseInt(value.number);
      }

      value.number += 1;
      value.goodTotal = (value.number * value.StandardPrice).toFixed(2);
      this.count();
    },
    del: function del(value) {
      if (typeof value.number == 'string') {
        value.number = parseInt(value.number);
      }

      if (value.number > 1) {
        value.number -= 1;
      }

      value.goodTotal = (value.number * value.StandardPrice).toFixed(2);
      this.count();
    },
    //表单
    submitForm: function submitForm(formName) {
      var _this = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          // eslint-disable-next-line no-undef
          axios.get('commodity/' + _this.numberValidateForm.age).then(function (res) {
            if (res.data.message === '') {
              var exam = new Array(res.data.data[0]);
              exam[0]['number'] = 1;
              exam[0]['goodTotal'] = res.data.data[0].StandardPrice;

              _this.tableData.push(exam[0]);

              _this.count();
            } else {
              _this.$message({
                type: 'error',
                message: '查找失败!'
              });
            }
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
    },
    settlement: function settlement() {
      var _this2 = this;

      axios.post('CommodityOut', {
        data: this.tableData
      }).then(function (res) {
        if (res.data.message === '商品库存不足') {
          _this2.$message({
            type: 'error',
            message: '商品库存不足!'
          });
        } else if (res.data.message === '商品不存在') {
          _this2.$message({
            type: 'error',
            message: '不存在商品！'
          });
        } else if (res.data.message === '') {
          alert('结算成功，订单编号：' + res.data.data);

          _this2.tableData.splice(0, _this2.tableData.length);

          _this2.count();

          _this2.numberValidateForm.age = '';

          _this2.age.focus();
        }
      })["catch"](function (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      });
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
                  prop: "age",
                  rules: [
                    { required: true, message: "商品id不能为空" },
                    { type: "number", message: "商品id必须为数字值" }
                  ]
                }
              },
              [
                _c("el-input", {
                  attrs: { type: "age", autocomplete: "off" },
                  model: {
                    value: _vm.numberValidateForm.age,
                    callback: function($$v) {
                      _vm.$set(_vm.numberValidateForm, "age", _vm._n($$v))
                    },
                    expression: "numberValidateForm.age"
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
        ),
        _vm._v(" "),
        _c(
          "div",
          { attrs: { align: "center" } },
          [
            _c("h2", [_vm._v("总共消费：" + _vm._s(_vm.total) + "元")]),
            _vm._v(" "),
            _c("el-button", { on: { click: _vm.settlement } }, [_vm._v("结算")])
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
    return _c("div", { attrs: { align: "center" } }, [
      _c("h1", [_vm._v("小型超市管理系统")])
    ])
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