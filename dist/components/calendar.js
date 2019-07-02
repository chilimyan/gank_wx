'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* eslint-disable no-return-assign */

/***********************************************
 * @功能：wepy日历组件
 * @维护：VimMingshe@gmail.com
 **********************************************/


var dateUtils = {
  // 日、月去掉前缀0
  rmDatePrefix: function rmDatePrefix(d) {
    return parseInt(d);
  },
  // 给日、月添加前缀0
  addDatePrefix: function addDatePrefix(d) {
    return ('0' + d).slice(-2);
  },
  /**
   * 当前日期面板中包含几天是上个月的; 例如结果是3，则当前日期面板中，有3天是上个月的
   */
  getPreMonthBlendDay: function getPreMonthBlendDay(year, month) {
    return new Date(year, month - 1, 1).getDay();
  },
  /**
   * 获取某年某月总天数
   */
  getMonthDays: function getMonthDays(year, month) {
    return new Date(year, month, 0).getDate();
  },
  /**
   * 获取完整的年月日 YYYY-MM-DD
   */
  getFullDate: function getFullDate(year, month, day) {
    var addDatePrefix = dateUtils.addDatePrefix;
    month = addDatePrefix(month);
    day = addDatePrefix(day);
    return year + '-' + month + '-' + day;
  },
  /**
   * 格式化日期
   * @param {string|number|date} d
   * @returns {string} YYYY-MM-YY
   */
  formatDate: function formatDate(d) {
    var addDatePrefix = dateUtils.addDatePrefix;
    var date = new Date(d);
    var year = date.getFullYear();
    var month = addDatePrefix(date.getMonth() + 1);
    var day = addDatePrefix(date.getDate());
    return year + '-' + month + '-' + day;
  }
};

var calendar = function (_wepy$component) {
  _inherits(calendar, _wepy$component);

  function calendar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, calendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = calendar.__proto__ || Object.getPrototypeOf(calendar)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      refreshCalendar: {
        type: Boolean,
        default: true
      },
      // 高亮的日期，类型 YYYY-MM-DD
      date: {
        type: String,
        default: dateUtils.formatDate(new Date())
      },
      scheduleNumOfDay: {
        type: Array,
        default: []
      }
    }, _this.data = {
      weeks: ['日', '一', '二', '三', '四', '五', '六'],
      currYear: '',
      currMonth: '',
      // 此数组长度为35或42
      panelDaysList: [],
      panelDaysMatrix: [],
      translateX: 0,
      translateIndex: 0,
      start: {
        x: 0,
        y: 0
      },
      end: {
        x: 0,
        y: 0
      },
      isMove: false,
      countExe: 0,
      selectedDay: '',
      today: {},
      addTransition: false,
      direction: 0 // 0 没有方向 1左滑 2右滑
    }, _this.methods = {
      catchtouchmove: function catchtouchmove() {},
      goBackToday: function goBackToday() {
        this.resetItemKey('select', false);
        this.today.select = true;
        this.$apply();
        this.goBackToday();
      },

      /**********************
       * 监听滑动事件 @touchS @touchM
       **********************/
      touchS: function touchS(e) {
        this.start = {
          x: e.changedTouches[0].clientX,
          y: e.changedTouches[0].clientY
        };
        this.isMove = true;
        this.$apply();
      },
      touchM: function touchM(e) {
        // 距离40时触发
        var DEBOUNCE = 25;
        this.end = {
          x: e.changedTouches[0].clientX,
          y: e.changedTouches[0].clientY
        };
        if (this.isMove) {
          var distance = this.end.x - this.start.x;
          if (DEBOUNCE < Math.abs(distance)) {
            this.isMove = false;
            if (distance < 0 && Math.abs(this.translateIndex) < this.panelDaysMatrix.length - 1) {
              --this.translateIndex;
            } else if (distance > 0 && this.translateIndex < 0) {
              ++this.translateIndex;
            } else {
              // 已经到到底了不能滑动了
              this.addTransition = false;
              if (distance < 0) {
                // 左滑
                var d = new Date(this.currYear, this.currMonth);
                this.direction = 1;
                this.resetPanelDays(d.getFullYear(), d.getMonth() + 1);
              } else {
                // 右滑
                var _d = new Date(this.currYear, this.currMonth - 2);
                this.direction = 2;
                this.resetPanelDays(_d.getFullYear(), _d.getMonth() + 1);
              }
            }
            this.translateX = 100 * this.translateIndex + '%';
          }
        }
        this.$apply();
      },
      tapDayItem: function tapDayItem(item, i, j) {
        this.resetItemKey('select', false);
        this.panelDaysMatrix[i][j].select = true;
        this.$emit('selectDay', item);
        this.selectedDay = item;
        this.$apply();
      },

      /**
       * 改变日期选择器value后的回调，event.detail = {value: value}
       * @param {number} modify 用于对month进行微调
       */
      changePicker: function changePicker(e) {
        var value = e.detail.value;
        if (!value) {
          return;
        }

        var _value$split = value.split('-'),
            _value$split2 = _slicedToArray(_value$split, 2),
            year = _value$split2[0],
            month = _value$split2[1];

        this.resetPanelDays(year, month);
        this.$emit('selectMonth', year + '-' + month);
      },
      slotTap: function slotTap() {
        this.$emit('userDefineTap');
      }
    }, _this.watch = {
      scheduleNumOfDay: function scheduleNumOfDay(n) {
        this.setScheduleNum(n);
      },
      refreshCalendar: function refreshCalendar() {
        this.$emit('selectDay', this.selectedDay);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(calendar, [{
    key: 'onLoad',
    value: function onLoad() {
      this.goBackToday();
      this.$apply();
    }
  }, {
    key: 'resetItemKey',
    value: function resetItemKey(key, value) {
      this.panelDaysMatrix.map(function (item) {
        return item.map(function (_item) {
          return _item[key] = value;
        });
      });
    }
  }, {
    key: 'goBackToday',
    value: function goBackToday() {
      var _date$split = this.date.split('-'),
          _date$split2 = _slicedToArray(_date$split, 2),
          year = _date$split2[0],
          month = _date$split2[1];

      this.resetPanelDays(year, month);
      this.$apply();
    }
  }, {
    key: 'getPreMonthBlendDays',


    /*******************
     * 获取上个月的日期数据
     *******************/
    value: function getPreMonthBlendDays(year, monthNum) {
      var resultList = [];
      var preMonthBlendDay = dateUtils.getPreMonthBlendDay(year, monthNum);
      var thisMonthNum = monthNum - 1;
      var thisYear = year;
      if (monthNum === 1) {
        thisYear = year - 1;
        thisMonthNum = 12;
      }
      var preMonthFullDays = dateUtils.getMonthDays(thisYear, thisMonthNum);
      for (var i = 0; i < preMonthBlendDay; i++) {
        var dayItem = this.setDayItem(thisYear, thisMonthNum, preMonthFullDays--, 'pre');
        resultList.unshift(dayItem);
      }
      return resultList;
    }

    /*******************
     * 获取这个月的日期数据
     *******************/

  }, {
    key: 'getThisMonthBlendDays',
    value: function getThisMonthBlendDays(year, monthNum) {
      var resultList = [];
      var thisMonthFullDays = dateUtils.getMonthDays(year, monthNum);
      for (var i = 1; i <= thisMonthFullDays; i++) {
        var dayItem = this.setDayItem(year, monthNum, i, 'curr');
        resultList.push(dayItem);
      }
      return resultList;
    }

    /*********************
     *下个月需要展示的数据
     ********************/

  }, {
    key: 'getNextMonthBlendDays',
    value: function getNextMonthBlendDays(year, monthNum, monthBlendDays) {
      if (monthNum + 1 > 12) {
        ++year;
        monthNum = monthNum % 12;
      }
      var resultList = [];
      for (var i = 1; i <= monthBlendDays; i++) {
        var dayItem = this.setDayItem(year, monthNum + 1, i, 'next');
        resultList.push(dayItem);
      }
      return resultList;
    }

    /**
     * 根据传进来的date，计算年、月、当前月面板内的所有日（包含上月和下月的连接日）
     * @param {string} year YYYY
     * @param {string} month MM
     */

  }, {
    key: 'resetPanelDays',
    value: function resetPanelDays(year, month) {
      if (this.currYear === year && this.currMonth === month) {
        return;
      }
      this.translateIndex = 0;
      this.translateX = 0;
      var monthNum = dateUtils.rmDatePrefix(month);
      var panelDaysList = [];

      // 将上个月需要展示的数据添加进panelDaysList数组
      var preMonthBlendDays = this.getPreMonthBlendDays(year, monthNum);
      this.preMonthBlendDays = preMonthBlendDays.length;
      panelDaysList.push.apply(panelDaysList, _toConsumableArray(preMonthBlendDays));

      // 将本月月需要展示的数据添加进panelDaysList数组
      var thisMonthDays = this.getThisMonthBlendDays(year, monthNum);
      panelDaysList.push.apply(panelDaysList, _toConsumableArray(thisMonthDays));
      /*******************************
       * 将下个月需要展示的数据添加进panelDaysList数组,
       * 如果当前月和上个月需展示天数超过35，则一共需要展示42天,
       * 未超过35天时，则一共展示35天；
       **********************************/
      var existDays = preMonthBlendDays.length + thisMonthDays.length;
      var nextMonthBlendDay = (existDays > 35 ? 42 : 35) - existDays;
      var nextMonthBlendDays = this.getNextMonthBlendDays(year, monthNum, nextMonthBlendDay);
      panelDaysList.push.apply(panelDaysList, _toConsumableArray(nextMonthBlendDays));
      this.currYear = year;
      this.currMonth = month;
      this.panelDaysList = panelDaysList;
      this.moveTo();
      this.setAddTransition(true);
      this.setScheduleNum();
      this.$apply();
    }
  }, {
    key: 'moveTo',
    value: function moveTo() {
      var _this2 = this;

      this.panelDaysMatrix = [];
      this.panelDaysList.map(function (item, index) {
        var _ref2 = [Math.floor(index / 7), index % 7],
            r = _ref2[0],
            c = _ref2[1];

        _this2.panelDaysMatrix[r] = _this2.panelDaysMatrix[r] || [];
        _this2.panelDaysMatrix[r][c] = item;
        if (item.active === true) {
          _this2.translateIndex = -r;
          _this2.translateX = 100 * _this2.translateIndex + '%';
        }
      });
      if (this.direction === 1) {
        // 左滑
        this.translateIndex = 0;
        this.translateX = 100 * this.translateIndex + '%';
      } else if (this.direction === 2) {
        // 右滑
        this.translateIndex = -Math.floor((this.panelDaysList.length - 1) / 7);
        console.log(this.translateIndex);
        this.translateX = 100 * this.translateIndex + '%';
      }
      this.direction = 0;
      this.$apply();
    }
  }, {
    key: 'setAddTransition',
    value: function setAddTransition() {
      var _this3 = this;

      var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (status) {
        setTimeout(function () {
          _this3.addTransition = true;
          _this3.$apply();
        }, 1000 / 60);
      } else {
        this.addTransition = false;
        this.$apply();
      }
    }

    /******************
     * 设置日期对象
     *****************/

  }, {
    key: 'setDayItem',
    value: function setDayItem(year, month, day) {
      var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'curr';

      day = dateUtils.addDatePrefix(day);
      var fullDate = dateUtils.getFullDate(year, month, day);
      var dayItem = {
        type: type,
        day: day,
        fullDate: fullDate,
        scheduleNum: 0
      };
      this.setActiveItemProp(dayItem);
      return dayItem;
    }
  }, {
    key: 'setActiveItemProp',
    value: function setActiveItemProp(dayItem) {
      if (dayItem.fullDate === this.date) {
        dayItem.active = true;
        dayItem.select = true;
        this.today = dayItem;
        this.selectedDay = dayItem;
        this.$apply();
      }
    }
  }, {
    key: 'setScheduleNum',
    value: function setScheduleNum() {
      var _this4 = this;

      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.scheduleNumOfDay;

      if (this.panelDaysMatrix.length === 0) {
        return;
      }
      n.map(function (item) {
        var _item$day$split$map = item.day.split('-').map(function (i) {
          return parseInt(i);
        }),
            _item$day$split$map2 = _slicedToArray(_item$day$split$map, 3),
            year = _item$day$split$map2[0],
            month = _item$day$split$map2[1],
            days = _item$day$split$map2[2];
        //        console.log(year, month, days, this.currYear, this.currMonth)


        days = days + _this4.preMonthBlendDays - 1;
        if (year === +_this4.currYear && month === +_this4.currMonth) {
          var _ref3 = [Math.floor(days / 7), days % 7],
              r = _ref3[0],
              c = _ref3[1];

          _this4.panelDaysMatrix[r][c].scheduleNum = item.num;
        }
      });
      this.$apply();
    }
  }]);

  return calendar;
}(_wepy2.default.component);

exports.default = calendar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbImRhdGVVdGlscyIsInJtRGF0ZVByZWZpeCIsInBhcnNlSW50IiwiZCIsImFkZERhdGVQcmVmaXgiLCJzbGljZSIsImdldFByZU1vbnRoQmxlbmREYXkiLCJ5ZWFyIiwibW9udGgiLCJEYXRlIiwiZ2V0RGF5IiwiZ2V0TW9udGhEYXlzIiwiZ2V0RGF0ZSIsImdldEZ1bGxEYXRlIiwiZGF5IiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiY2FsZW5kYXIiLCJwcm9wcyIsInJlZnJlc2hDYWxlbmRhciIsInR5cGUiLCJCb29sZWFuIiwiZGVmYXVsdCIsIlN0cmluZyIsInNjaGVkdWxlTnVtT2ZEYXkiLCJBcnJheSIsImRhdGEiLCJ3ZWVrcyIsImN1cnJZZWFyIiwiY3Vyck1vbnRoIiwicGFuZWxEYXlzTGlzdCIsInBhbmVsRGF5c01hdHJpeCIsInRyYW5zbGF0ZVgiLCJ0cmFuc2xhdGVJbmRleCIsInN0YXJ0IiwieCIsInkiLCJlbmQiLCJpc01vdmUiLCJjb3VudEV4ZSIsInNlbGVjdGVkRGF5IiwidG9kYXkiLCJhZGRUcmFuc2l0aW9uIiwiZGlyZWN0aW9uIiwibWV0aG9kcyIsImNhdGNodG91Y2htb3ZlIiwiZ29CYWNrVG9kYXkiLCJyZXNldEl0ZW1LZXkiLCJzZWxlY3QiLCIkYXBwbHkiLCJ0b3VjaFMiLCJlIiwiY2hhbmdlZFRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsInRvdWNoTSIsIkRFQk9VTkNFIiwiZGlzdGFuY2UiLCJNYXRoIiwiYWJzIiwibGVuZ3RoIiwicmVzZXRQYW5lbERheXMiLCJ0YXBEYXlJdGVtIiwiaXRlbSIsImkiLCJqIiwiJGVtaXQiLCJjaGFuZ2VQaWNrZXIiLCJ2YWx1ZSIsImRldGFpbCIsInNwbGl0Iiwic2xvdFRhcCIsIndhdGNoIiwibiIsInNldFNjaGVkdWxlTnVtIiwia2V5IiwibWFwIiwiX2l0ZW0iLCJtb250aE51bSIsInJlc3VsdExpc3QiLCJwcmVNb250aEJsZW5kRGF5IiwidGhpc01vbnRoTnVtIiwidGhpc1llYXIiLCJwcmVNb250aEZ1bGxEYXlzIiwiZGF5SXRlbSIsInNldERheUl0ZW0iLCJ1bnNoaWZ0IiwidGhpc01vbnRoRnVsbERheXMiLCJwdXNoIiwibW9udGhCbGVuZERheXMiLCJwcmVNb250aEJsZW5kRGF5cyIsImdldFByZU1vbnRoQmxlbmREYXlzIiwidGhpc01vbnRoRGF5cyIsImdldFRoaXNNb250aEJsZW5kRGF5cyIsImV4aXN0RGF5cyIsIm5leHRNb250aEJsZW5kRGF5IiwibmV4dE1vbnRoQmxlbmREYXlzIiwiZ2V0TmV4dE1vbnRoQmxlbmREYXlzIiwibW92ZVRvIiwic2V0QWRkVHJhbnNpdGlvbiIsImluZGV4IiwiZmxvb3IiLCJyIiwiYyIsImFjdGl2ZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJzZXRUaW1lb3V0IiwiZnVsbERhdGUiLCJzY2hlZHVsZU51bSIsInNldEFjdGl2ZUl0ZW1Qcm9wIiwiZGF5cyIsIm51bSIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBT0U7Ozs7Ozs7Ozs7Ozs7QUFOQTs7QUFFQTs7Ozs7O0FBTUEsSUFBTUEsWUFBWTtBQUNoQjtBQUNBQyxnQkFBYztBQUFBLFdBQUtDLFNBQVNDLENBQVQsQ0FBTDtBQUFBLEdBRkU7QUFHaEI7QUFDQUMsaUJBQWU7QUFBQSxXQUFLLE9BQUlELENBQUosRUFBUUUsS0FBUixDQUFjLENBQUMsQ0FBZixDQUFMO0FBQUEsR0FKQztBQUtoQjs7O0FBR0FDLHVCQUFxQiw2QkFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ3BDLFdBQU8sSUFBSUMsSUFBSixDQUFTRixJQUFULEVBQWVDLFFBQVEsQ0FBdkIsRUFBMEIsQ0FBMUIsRUFBNkJFLE1BQTdCLEVBQVA7QUFDRCxHQVZlO0FBV2hCOzs7QUFHQUMsZ0JBQWMsc0JBQUNKLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUM3QixXQUFPLElBQUlDLElBQUos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Q1FBLGVBQU9BLE9BQU8sT0FBS3RCLGlCQUFaLEdBQWdDLENBQXZDO0FBQ0EsWUFBSXJGLFNBQVMsQ0FBQyxPQUFLdUIsUUFBZixJQUEyQnRCLFVBQVUsQ0FBQyxPQUFLdUIsU0FBL0MsRUFBMEQ7QUFBQSxzQkFDM0MsQ0FBQzZCLEtBQUsyQyxLQUFMLENBQVdXLE9BQU8sQ0FBbEIsQ0FBRCxFQUF1QkEsT0FBTyxDQUE5QixDQUQyQztBQUFBLGNBQ25EVixDQURtRDtBQUFBLGNBQ2hEQyxDQURnRDs7QUFFeEQsaUJBQUt4RSxlQUFMLENBQXFCdUUsQ0FBckIsRUFBd0JDLENBQXhCLEVBQTJCTyxXQUEzQixHQUF5Qy9DLEtBQUtrRCxHQUE5QztBQUNEO0FBQ0YsT0FSRDtBQVNBLFdBQUtoRSxNQUFMO0FBQ0Q7Ozs7RUF2VG1DaUUsZUFBS0MsUzs7a0JBQXRCbEcsUSIsImZpbGUiOiJjYWxlbmRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXR1cm4tYXNzaWduICovXG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIEDlip/og73vvJp3ZXB55pel5Y6G57uE5Lu2XG4gICAqIEDnu7TmiqTvvJpWaW1NaW5nc2hlQGdtYWlsLmNvbVxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBjb25zdCBkYXRlVXRpbHMgPSB7XG4gICAgLy8g5pel44CB5pyI5Y675o6J5YmN57yAMFxuICAgIHJtRGF0ZVByZWZpeDogZCA9PiBwYXJzZUludChkKSxcbiAgICAvLyDnu5nml6XjgIHmnIjmt7vliqDliY3nvIAwXG4gICAgYWRkRGF0ZVByZWZpeDogZCA9PiBgMCR7ZH1gLnNsaWNlKC0yKSxcbiAgICAvKipcbiAgICAgKiDlvZPliY3ml6XmnJ/pnaLmnb/kuK3ljIXlkKvlh6DlpKnmmK/kuIrkuKrmnIjnmoQ7IOS+i+Wmgue7k+aenOaYrzPvvIzliJnlvZPliY3ml6XmnJ/pnaLmnb/kuK3vvIzmnIkz5aSp5piv5LiK5Liq5pyI55qEXG4gICAgICovXG4gICAgZ2V0UHJlTW9udGhCbGVuZERheTogKHllYXIsIG1vbnRoKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCAxKS5nZXREYXkoKVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog6I635Y+W5p+Q5bm05p+Q5pyI5oC75aSp5pWwXG4gICAgICovXG4gICAgZ2V0TW9udGhEYXlzOiAoeWVhciwgbW9udGgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDojrflj5blrozmlbTnmoTlubTmnIjml6UgWVlZWS1NTS1ERFxuICAgICAqL1xuICAgIGdldEZ1bGxEYXRlOiAoeWVhciwgbW9udGgsIGRheSkgPT4ge1xuICAgICAgY29uc3QgYWRkRGF0ZVByZWZpeCA9IGRhdGVVdGlscy5hZGREYXRlUHJlZml4XG4gICAgICBtb250aCA9IGFkZERhdGVQcmVmaXgobW9udGgpXG4gICAgICBkYXkgPSBhZGREYXRlUHJlZml4KGRheSlcbiAgICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmoLzlvI/ljJbml6XmnJ9cbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ8ZGF0ZX0gZFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFlZWVktTU0tWVlcbiAgICAgKi9cbiAgICBmb3JtYXREYXRlOiBkID0+IHtcbiAgICAgIGNvbnN0IGFkZERhdGVQcmVmaXggPSBkYXRlVXRpbHMuYWRkRGF0ZVByZWZpeFxuICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShkKVxuICAgICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgICAgIGxldCBtb250aCA9IGFkZERhdGVQcmVmaXgoZGF0ZS5nZXRNb250aCgpICsgMSlcbiAgICAgIGxldCBkYXkgPSBhZGREYXRlUHJlZml4KGRhdGUuZ2V0RGF0ZSgpKVxuICAgICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWBcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBjYWxlbmRhciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIHJlZnJlc2hDYWxlbmRhcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICB9LFxuICAgICAgLy8g6auY5Lqu55qE5pel5pyf77yM57G75Z6LIFlZWVktTU0tRERcbiAgICAgIGRhdGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiBkYXRlVXRpbHMuZm9ybWF0RGF0ZShuZXcgRGF0ZSgpKVxuICAgICAgfSxcbiAgICAgIHNjaGVkdWxlTnVtT2ZEYXk6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGRlZmF1bHQ6IFtdXG4gICAgICB9XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICB3ZWVrczogWyfml6UnLCAn5LiAJywgJ+S6jCcsICfkuIknLCAn5ZubJywgJ+S6lCcsICflha0nXSxcbiAgICAgIGN1cnJZZWFyOiAnJyxcbiAgICAgIGN1cnJNb250aDogJycsXG4gICAgICAvLyDmraTmlbDnu4Tplb/luqbkuLozNeaIljQyXG4gICAgICBwYW5lbERheXNMaXN0OiBbXSxcbiAgICAgIHBhbmVsRGF5c01hdHJpeDogW10sXG4gICAgICB0cmFuc2xhdGVYOiAwLFxuICAgICAgdHJhbnNsYXRlSW5kZXg6IDAsXG4gICAgICBzdGFydDoge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwXG4gICAgICB9LFxuICAgICAgZW5kOiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDBcbiAgICAgIH0sXG4gICAgICBpc01vdmU6IGZhbHNlLFxuICAgICAgY291bnRFeGU6IDAsXG4gICAgICBzZWxlY3RlZERheTogJycsXG4gICAgICB0b2RheToge30sXG4gICAgICBhZGRUcmFuc2l0aW9uOiBmYWxzZSxcbiAgICAgIGRpcmVjdGlvbjogMCAvLyAwIOayoeacieaWueWQkSAx5bem5ruRIDLlj7Pmu5FcbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgdGhpcy5nb0JhY2tUb2RheSgpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgcmVzZXRJdGVtS2V5IChrZXksIHZhbHVlKSB7XG4gICAgICB0aGlzLnBhbmVsRGF5c01hdHJpeC5tYXAoaXRlbSA9PiBpdGVtLm1hcChfaXRlbSA9PiBfaXRlbVtrZXldID0gdmFsdWUpXG4gICAgICApXG4gICAgfVxuXG4gICAgZ29CYWNrVG9kYXkgKCkge1xuICAgICAgY29uc3QgW3llYXIsIG1vbnRoXSA9IHRoaXMuZGF0ZS5zcGxpdCgnLScpXG4gICAgICB0aGlzLnJlc2V0UGFuZWxEYXlzKHllYXIsIG1vbnRoKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBjYXRjaHRvdWNobW92ZSgpe30sXG4gICAgICBnb0JhY2tUb2RheSAoKSB7XG4gICAgICAgIHRoaXMucmVzZXRJdGVtS2V5KCdzZWxlY3QnLCBmYWxzZSlcbiAgICAgICAgdGhpcy50b2RheS5zZWxlY3QgPSB0cnVlXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgdGhpcy5nb0JhY2tUb2RheSgpXG4gICAgICB9LFxuICAgICAgLyoqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAqIOebkeWQrOa7keWKqOS6i+S7tiBAdG91Y2hTIEB0b3VjaE1cbiAgICAgICAqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICAgdG91Y2hTIChlKSB7XG4gICAgICAgIHRoaXMuc3RhcnQgPSB7XG4gICAgICAgICAgeDogZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICAgIHk6IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNNb3ZlID0gdHJ1ZVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LFxuICAgICAgdG91Y2hNIChlKSB7XG4gICAgICAgIC8vIOi3neemuzQw5pe26Kem5Y+RXG4gICAgICAgIGNvbnN0IERFQk9VTkNFID0gMjVcbiAgICAgICAgdGhpcy5lbmQgPSB7XG4gICAgICAgICAgeDogZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICAgIHk6IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzTW92ZSkge1xuICAgICAgICAgIGxldCBkaXN0YW5jZSA9IHRoaXMuZW5kLnggLSB0aGlzLnN0YXJ0LnhcbiAgICAgICAgICBpZiAoREVCT1VOQ0UgPCBNYXRoLmFicyhkaXN0YW5jZSkpIHtcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZlID0gZmFsc2VcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDAgJiYgTWF0aC5hYnModGhpcy50cmFuc2xhdGVJbmRleCkgPCB0aGlzLnBhbmVsRGF5c01hdHJpeC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgIC0tdGhpcy50cmFuc2xhdGVJbmRleFxuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA+IDAgJiYgdGhpcy50cmFuc2xhdGVJbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgKyt0aGlzLnRyYW5zbGF0ZUluZGV4XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyDlt7Lnu4/liLDliLDlupXkuobkuI3og73mu5HliqjkuoZcbiAgICAgICAgICAgICAgdGhpcy5hZGRUcmFuc2l0aW9uID0gZmFsc2VcbiAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCkge1xuICAgICAgICAgICAgICAgIC8vIOW3pua7kVxuICAgICAgICAgICAgICAgIGxldCBkID0gbmV3IERhdGUodGhpcy5jdXJyWWVhciwgdGhpcy5jdXJyTW9udGgpXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAxXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBhbmVsRGF5cyhkLmdldEZ1bGxZZWFyKCksIGQuZ2V0TW9udGgoKSArIDEpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5Y+z5ruRXG4gICAgICAgICAgICAgICAgbGV0IGQgPSBuZXcgRGF0ZSh0aGlzLmN1cnJZZWFyLCB0aGlzLmN1cnJNb250aCAtIDIpXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBhbmVsRGF5cyhkLmdldEZ1bGxZZWFyKCksIGQuZ2V0TW9udGgoKSArIDEpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlWCA9ICgxMDAgKiB0aGlzLnRyYW5zbGF0ZUluZGV4KSArICclJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LFxuICAgICAgdGFwRGF5SXRlbSAoaXRlbSwgaSwgaikge1xuICAgICAgICB0aGlzLnJlc2V0SXRlbUtleSgnc2VsZWN0JywgZmFsc2UpXG4gICAgICAgIHRoaXMucGFuZWxEYXlzTWF0cml4W2ldW2pdLnNlbGVjdCA9IHRydWVcbiAgICAgICAgdGhpcy4kZW1pdCgnc2VsZWN0RGF5JywgaXRlbSlcbiAgICAgICAgdGhpcy5zZWxlY3RlZERheSA9IGl0ZW1cbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICog5pS55Y+Y5pel5pyf6YCJ5oup5ZmodmFsdWXlkI7nmoTlm57osIPvvIxldmVudC5kZXRhaWwgPSB7dmFsdWU6IHZhbHVlfVxuICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG1vZGlmeSDnlKjkuo7lr7ltb250aOi/m+ihjOW+ruiwg1xuICAgICAgICovXG4gICAgICBjaGFuZ2VQaWNrZXIgKGUpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgW3llYXIsIG1vbnRoXSA9IHZhbHVlLnNwbGl0KCctJylcbiAgICAgICAgdGhpcy5yZXNldFBhbmVsRGF5cyh5ZWFyLCBtb250aClcbiAgICAgICAgdGhpcy4kZW1pdCgnc2VsZWN0TW9udGgnLCBgJHt5ZWFyfS0ke21vbnRofWApXG4gICAgICB9LFxuICAgICAgc2xvdFRhcCAoKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ3VzZXJEZWZpbmVUYXAnKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKioqKioqKioqKioqKioqKioqXG4gICAgICog6I635Y+W5LiK5Liq5pyI55qE5pel5pyf5pWw5o2uXG4gICAgICoqKioqKioqKioqKioqKioqKiovXG4gICAgZ2V0UHJlTW9udGhCbGVuZERheXMgKHllYXIsIG1vbnRoTnVtKSB7XG4gICAgICBjb25zdCByZXN1bHRMaXN0ID0gW11cbiAgICAgIGNvbnN0IHByZU1vbnRoQmxlbmREYXkgPSBkYXRlVXRpbHMuZ2V0UHJlTW9udGhCbGVuZERheSh5ZWFyLCBtb250aE51bSlcbiAgICAgIGxldCB0aGlzTW9udGhOdW0gPSBtb250aE51bSAtIDFcbiAgICAgIGxldCB0aGlzWWVhciA9IHllYXJcbiAgICAgIGlmIChtb250aE51bSA9PT0gMSkge1xuICAgICAgICB0aGlzWWVhciA9IHllYXIgLSAxXG4gICAgICAgIHRoaXNNb250aE51bSA9IDEyXG4gICAgICB9XG4gICAgICBsZXQgcHJlTW9udGhGdWxsRGF5cyA9IGRhdGVVdGlscy5nZXRNb250aERheXModGhpc1llYXIsIHRoaXNNb250aE51bSlcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlTW9udGhCbGVuZERheTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRheUl0ZW0gPSB0aGlzLnNldERheUl0ZW0oXG4gICAgICAgICAgdGhpc1llYXIsXG4gICAgICAgICAgdGhpc01vbnRoTnVtLFxuICAgICAgICAgIHByZU1vbnRoRnVsbERheXMtLSxcbiAgICAgICAgICAncHJlJ1xuICAgICAgICApXG4gICAgICAgIHJlc3VsdExpc3QudW5zaGlmdChkYXlJdGVtKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdExpc3RcbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKlxuICAgICAqIOiOt+WPlui/meS4quaciOeahOaXpeacn+aVsOaNrlxuICAgICAqKioqKioqKioqKioqKioqKioqL1xuICAgIGdldFRoaXNNb250aEJsZW5kRGF5cyAoeWVhciwgbW9udGhOdW0pIHtcbiAgICAgIGNvbnN0IHJlc3VsdExpc3QgPSBbXVxuICAgICAgY29uc3QgdGhpc01vbnRoRnVsbERheXMgPSBkYXRlVXRpbHMuZ2V0TW9udGhEYXlzKHllYXIsIG1vbnRoTnVtKVxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpc01vbnRoRnVsbERheXM7IGkrKykge1xuICAgICAgICBjb25zdCBkYXlJdGVtID0gdGhpcy5zZXREYXlJdGVtKHllYXIsIG1vbnRoTnVtLCBpLCAnY3VycicpXG4gICAgICAgIHJlc3VsdExpc3QucHVzaChkYXlJdGVtKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdExpc3RcbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqXG4gICAgICrkuIvkuKrmnIjpnIDopoHlsZXnpLrnmoTmlbDmja5cbiAgICAgKioqKioqKioqKioqKioqKioqKiovXG4gICAgZ2V0TmV4dE1vbnRoQmxlbmREYXlzICh5ZWFyLCBtb250aE51bSwgbW9udGhCbGVuZERheXMpIHtcbiAgICAgIGlmIChtb250aE51bSArIDEgPiAxMikge1xuICAgICAgICArK3llYXJcbiAgICAgICAgbW9udGhOdW0gPSBtb250aE51bSAlIDEyXG4gICAgICB9XG4gICAgICBjb25zdCByZXN1bHRMaXN0ID0gW11cbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG1vbnRoQmxlbmREYXlzOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGF5SXRlbSA9IHRoaXMuc2V0RGF5SXRlbSh5ZWFyLCBtb250aE51bSArIDEsIGksICduZXh0JylcbiAgICAgICAgcmVzdWx0TGlzdC5wdXNoKGRheUl0ZW0pXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0TGlzdFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOagueaNruS8oOi/m+adpeeahGRhdGXvvIzorqHnrpflubTjgIHmnIjjgIHlvZPliY3mnIjpnaLmnb/lhoXnmoTmiYDmnInml6XvvIjljIXlkKvkuIrmnIjlkozkuIvmnIjnmoTov57mjqXml6XvvIlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30geWVhciBZWVlZXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vbnRoIE1NXG4gICAgICovXG4gICAgcmVzZXRQYW5lbERheXMgKHllYXIsIG1vbnRoKSB7XG4gICAgICBpZiAodGhpcy5jdXJyWWVhciA9PT0geWVhciAmJiB0aGlzLmN1cnJNb250aCA9PT0gbW9udGgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzLnRyYW5zbGF0ZUluZGV4ID0gMFxuICAgICAgdGhpcy50cmFuc2xhdGVYID0gMFxuICAgICAgY29uc3QgbW9udGhOdW0gPSBkYXRlVXRpbHMucm1EYXRlUHJlZml4KG1vbnRoKVxuICAgICAgbGV0IHBhbmVsRGF5c0xpc3QgPSBbXVxuXG4gICAgICAvLyDlsIbkuIrkuKrmnIjpnIDopoHlsZXnpLrnmoTmlbDmja7mt7vliqDov5twYW5lbERheXNMaXN05pWw57uEXG4gICAgICBjb25zdCBwcmVNb250aEJsZW5kRGF5cyA9IHRoaXMuZ2V0UHJlTW9udGhCbGVuZERheXMoeWVhciwgbW9udGhOdW0pXG4gICAgICB0aGlzLnByZU1vbnRoQmxlbmREYXlzID0gcHJlTW9udGhCbGVuZERheXMubGVuZ3RoXG4gICAgICBwYW5lbERheXNMaXN0LnB1c2goLi4ucHJlTW9udGhCbGVuZERheXMpXG5cbiAgICAgIC8vIOWwhuacrOaciOaciOmcgOimgeWxleekuueahOaVsOaNrua3u+WKoOi/m3BhbmVsRGF5c0xpc3TmlbDnu4RcbiAgICAgIGNvbnN0IHRoaXNNb250aERheXMgPSB0aGlzLmdldFRoaXNNb250aEJsZW5kRGF5cyh5ZWFyLCBtb250aE51bSlcbiAgICAgIHBhbmVsRGF5c0xpc3QucHVzaCguLi50aGlzTW9udGhEYXlzKVxuICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAqIOWwhuS4i+S4quaciOmcgOimgeWxleekuueahOaVsOaNrua3u+WKoOi/m3BhbmVsRGF5c0xpc3TmlbDnu4QsXG4gICAgICAgKiDlpoLmnpzlvZPliY3mnIjlkozkuIrkuKrmnIjpnIDlsZXnpLrlpKnmlbDotoXov4czNe+8jOWImeS4gOWFsemcgOimgeWxleekujQy5aSpLFxuICAgICAgICog5pyq6LaF6L+HMzXlpKnml7bvvIzliJnkuIDlhbHlsZXnpLozNeWkqe+8m1xuICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgICBjb25zdCBleGlzdERheXMgPSBwcmVNb250aEJsZW5kRGF5cy5sZW5ndGggKyB0aGlzTW9udGhEYXlzLmxlbmd0aFxuICAgICAgY29uc3QgbmV4dE1vbnRoQmxlbmREYXkgPSAoZXhpc3REYXlzID4gMzUgPyA0MiA6IDM1KSAtIGV4aXN0RGF5c1xuICAgICAgY29uc3QgbmV4dE1vbnRoQmxlbmREYXlzID0gdGhpcy5nZXROZXh0TW9udGhCbGVuZERheXMoXG4gICAgICAgIHllYXIsXG4gICAgICAgIG1vbnRoTnVtLFxuICAgICAgICBuZXh0TW9udGhCbGVuZERheVxuICAgICAgKVxuICAgICAgcGFuZWxEYXlzTGlzdC5wdXNoKC4uLm5leHRNb250aEJsZW5kRGF5cylcbiAgICAgIHRoaXMuY3VyclllYXIgPSB5ZWFyXG4gICAgICB0aGlzLmN1cnJNb250aCA9IG1vbnRoXG4gICAgICB0aGlzLnBhbmVsRGF5c0xpc3QgPSBwYW5lbERheXNMaXN0XG4gICAgICB0aGlzLm1vdmVUbygpXG4gICAgICB0aGlzLnNldEFkZFRyYW5zaXRpb24odHJ1ZSlcbiAgICAgIHRoaXMuc2V0U2NoZWR1bGVOdW0oKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIG1vdmVUbyAoKSB7XG4gICAgICB0aGlzLnBhbmVsRGF5c01hdHJpeCA9IFtdXG4gICAgICB0aGlzLnBhbmVsRGF5c0xpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgW3IsIGNdID0gW01hdGguZmxvb3IoaW5kZXggLyA3KSwgaW5kZXggJSA3XVxuICAgICAgICB0aGlzLnBhbmVsRGF5c01hdHJpeFtyXSA9IHRoaXMucGFuZWxEYXlzTWF0cml4W3JdIHx8IFtdXG4gICAgICAgIHRoaXMucGFuZWxEYXlzTWF0cml4W3JdW2NdID0gaXRlbVxuICAgICAgICBpZiAoaXRlbS5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZUluZGV4ID0gLXJcbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVggPSAoMTAwICogdGhpcy50cmFuc2xhdGVJbmRleCkgKyAnJSdcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgICAvLyDlt6bmu5FcbiAgICAgICAgdGhpcy50cmFuc2xhdGVJbmRleCA9IDBcbiAgICAgICAgdGhpcy50cmFuc2xhdGVYID0gKDEwMCAqIHRoaXMudHJhbnNsYXRlSW5kZXgpICsgJyUnXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAyKSB7XG4gICAgICAgIC8vIOWPs+a7kVxuICAgICAgICB0aGlzLnRyYW5zbGF0ZUluZGV4ID0gLU1hdGguZmxvb3IoKHRoaXMucGFuZWxEYXlzTGlzdC5sZW5ndGggLSAxKSAvIDcpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudHJhbnNsYXRlSW5kZXgpXG4gICAgICAgIHRoaXMudHJhbnNsYXRlWCA9ICgxMDAgKiB0aGlzLnRyYW5zbGF0ZUluZGV4KSArICclJ1xuICAgICAgfVxuICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgc2V0QWRkVHJhbnNpdGlvbiAoc3RhdHVzID0gZmFsc2UpIHtcbiAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5hZGRUcmFuc2l0aW9uID0gdHJ1ZVxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfSwgMTAwMCAvIDYwKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRUcmFuc2l0aW9uID0gZmFsc2VcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKioqKioqKioqKioqKioqKipcbiAgICAgKiDorr7nva7ml6XmnJ/lr7nosaFcbiAgICAgKioqKioqKioqKioqKioqKiovXG4gICAgc2V0RGF5SXRlbSAoeWVhciwgbW9udGgsIGRheSwgdHlwZSA9ICdjdXJyJykge1xuICAgICAgZGF5ID0gZGF0ZVV0aWxzLmFkZERhdGVQcmVmaXgoZGF5KVxuICAgICAgY29uc3QgZnVsbERhdGUgPSBkYXRlVXRpbHMuZ2V0RnVsbERhdGUoeWVhciwgbW9udGgsIGRheSlcbiAgICAgIGxldCBkYXlJdGVtID0ge1xuICAgICAgICB0eXBlLFxuICAgICAgICBkYXksXG4gICAgICAgIGZ1bGxEYXRlLFxuICAgICAgICBzY2hlZHVsZU51bTogMFxuICAgICAgfVxuICAgICAgdGhpcy5zZXRBY3RpdmVJdGVtUHJvcChkYXlJdGVtKVxuICAgICAgcmV0dXJuIGRheUl0ZW1cbiAgICB9XG5cbiAgICBzZXRBY3RpdmVJdGVtUHJvcCAoZGF5SXRlbSkge1xuICAgICAgaWYgKGRheUl0ZW0uZnVsbERhdGUgPT09IHRoaXMuZGF0ZSkge1xuICAgICAgICBkYXlJdGVtLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgZGF5SXRlbS5zZWxlY3QgPSB0cnVlXG4gICAgICAgIHRoaXMudG9kYXkgPSBkYXlJdGVtXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXkgPSBkYXlJdGVtXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRTY2hlZHVsZU51bSAobiA9IHRoaXMuc2NoZWR1bGVOdW1PZkRheSkge1xuICAgICAgaWYgKHRoaXMucGFuZWxEYXlzTWF0cml4Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIG4ubWFwKGl0ZW0gPT4ge1xuICAgICAgICBsZXQgW3llYXIsIG1vbnRoLCBkYXlzXSA9IGl0ZW0uZGF5LnNwbGl0KCctJykubWFwKGkgPT4gcGFyc2VJbnQoaSkpXG4vLyAgICAgICAgY29uc29sZS5sb2coeWVhciwgbW9udGgsIGRheXMsIHRoaXMuY3VyclllYXIsIHRoaXMuY3Vyck1vbnRoKVxuICAgICAgICBkYXlzID0gZGF5cyArIHRoaXMucHJlTW9udGhCbGVuZERheXMgLSAxXG4gICAgICAgIGlmICh5ZWFyID09PSArdGhpcy5jdXJyWWVhciAmJiBtb250aCA9PT0gK3RoaXMuY3Vyck1vbnRoKSB7XG4gICAgICAgICAgbGV0IFtyLCBjXSA9IFtNYXRoLmZsb29yKGRheXMgLyA3KSwgZGF5cyAlIDddXG4gICAgICAgICAgdGhpcy5wYW5lbERheXNNYXRyaXhbcl1bY10uc2NoZWR1bGVOdW0gPSBpdGVtLm51bVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIHdhdGNoID0ge1xuICAgICAgc2NoZWR1bGVOdW1PZkRheSAobikge1xuICAgICAgICB0aGlzLnNldFNjaGVkdWxlTnVtKG4pXG4gICAgICB9LFxuICAgICAgcmVmcmVzaENhbGVuZGFyICgpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnc2VsZWN0RGF5JywgdGhpcy5zZWxlY3RlZERheSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==