'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
    function Utils() {
        _classCallCheck(this, Utils);
    }

    _createClass(Utils, null, [{
        key: 'isEmpty',

        /**
         * @Description: 判断字符串是否为空
         */
        value: function isEmpty(str) {
            return str == '' || str == null || str == 'null';
        }
        /**
         * @Description: 判断字符串是否不为空
         */

    }, {
        key: 'isNotEmpty',
        value: function isNotEmpty(str) {
            return !this.isEmpty(str);
        }
        /**
         * @Description: 浮点数求和
         */

    }, {
        key: 'sum',
        value: function sum(numbers) {
            var toFixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

            var sum = 0;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = numbers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var str = _step.value;

                    if (!this.isNumber(str)) {
                        return NaN;
                    }
                    var num = parseFloat(str);
                    if (isNaN(num)) {
                        return NaN;
                    }
                    sum += num;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return sum.toFixed(toFixed);
        }
        /**
         * @Description: 数字判断
         */

    }, {
        key: 'isNumber',
        value: function isNumber(value) {
            var patrn = /^[-+]?\d+(\.\d+)?$/;
            return patrn.test(value);
        }
        /**
         * @Description: 数组判断
         */

    }, {
        key: 'isArray',
        value: function isArray(o) {
            return Object.prototype.toString.call(o) === '[object Array]';
        }
        /**
         * @Description: 格式化日期
         */

    }, {
        key: 'dateFormate',
        value: function dateFormate(date, fmt) {
            var o = {
                'M+': date.getMonth() + 1,
                'd+': date.getDate(),
                'h+': date.getHours(),
                'm+': date.getMinutes(),
                's+': date.getSeconds(),
                'q+': Math.floor((date.getMonth() + 3) / 3),
                'S': date.getMilliseconds()
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
            for (var k in o) {
                if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
            }
            return fmt;
        }
    }]);

    return Utils;
}();

exports.default = Utils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbIlV0aWxzIiwic3RyIiwiaXNFbXB0eSIsIm51bWJlcnMiLCJ0b0ZpeGVkIiwic3VtIiwiaXNOdW1iZXIiLCJOYU4iLCJudW0iLCJwYXJzZUZsb2F0IiwiaXNOYU4iLCJ2YWx1ZSIsInBhdHJuIiwidGVzdCIsIm8iLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJkYXRlIiwiZm10IiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsImdldE1pbGxpc2Vjb25kcyIsInJlcGxhY2UiLCJSZWdFeHAiLCIkMSIsImdldEZ1bGxZZWFyIiwic3Vic3RyIiwibGVuZ3RoIiwiayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQkEsSzs7Ozs7Ozs7QUFDakI7OztnQ0FHZUMsRyxFQUFLO0FBQ2hCLG1CQUFPQSxPQUFPLEVBQVAsSUFBYUEsT0FBTyxJQUFwQixJQUE0QkEsT0FBTyxNQUExQztBQUNIO0FBQ0Q7Ozs7OzttQ0FHa0JBLEcsRUFBSztBQUNuQixtQkFBTyxDQUFDLEtBQUtDLE9BQUwsQ0FBYUQsR0FBYixDQUFSO0FBQ0g7QUFDRDs7Ozs7OzRCQUdXRSxPLEVBQXNCO0FBQUEsZ0JBQWJDLE9BQWEsdUVBQUgsQ0FBRzs7QUFDN0IsZ0JBQUlDLE1BQU0sQ0FBVjtBQUQ2QjtBQUFBO0FBQUE7O0FBQUE7QUFFN0IscUNBQWtCRixPQUFsQiw4SEFBMkI7QUFBQSx3QkFBaEJGLEdBQWdCOztBQUMzQix3QkFBSSxDQUFDLEtBQUtLLFFBQUwsQ0FBY0wsR0FBZCxDQUFMLEVBQXlCO0FBQ3JCLCtCQUFPTSxHQUFQO0FBQ0g7QUFDRCx3QkFBTUMsTUFBTUMsV0FBV1IsR0FBWCxDQUFaO0FBQ0Esd0JBQUlTLE1BQU1GLEdBQU4sQ0FBSixFQUFnQjtBQUNaLCtCQUFPRCxHQUFQO0FBQ0g7QUFDREYsMkJBQU9HLEdBQVA7QUFDQztBQVg0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVk3QixtQkFBT0gsSUFBSUQsT0FBSixDQUFZQSxPQUFaLENBQVA7QUFDSDtBQUNEOzs7Ozs7aUNBR2dCTyxLLEVBQU87QUFDbkIsZ0JBQU1DLFFBQVEsb0JBQWQ7QUFDQSxtQkFBT0EsTUFBTUMsSUFBTixDQUFXRixLQUFYLENBQVA7QUFDSDtBQUNEOzs7Ozs7Z0NBR2VHLEMsRUFBRztBQUNkLG1CQUFPQyxPQUFPQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JKLENBQS9CLE1BQXNDLGdCQUE3QztBQUNIO0FBQ0Q7Ozs7OztvQ0FHb0JLLEksRUFBTUMsRyxFQUFLO0FBQzNCLGdCQUFNTixJQUFJO0FBQ1Isc0JBQU1LLEtBQUtFLFFBQUwsS0FBa0IsQ0FEaEI7QUFFUixzQkFBTUYsS0FBS0csT0FBTCxFQUZFO0FBR1Isc0JBQU1ILEtBQUtJLFFBQUwsRUFIRTtBQUlSLHNCQUFNSixLQUFLSyxVQUFMLEVBSkU7QUFLUixzQkFBTUwsS0FBS00sVUFBTCxFQUxFO0FBTVIsc0JBQU1DLEtBQUtDLEtBQUwsQ0FBVyxDQUFDUixLQUFLRSxRQUFMLEtBQWtCLENBQW5CLElBQXdCLENBQW5DLENBTkU7QUFPUixxQkFBS0YsS0FBS1MsZUFBTDtBQVBHLGFBQVY7QUFTQSxnQkFBSSxPQUFPZixJQUFQLENBQVlPLEdBQVosQ0FBSixFQUFzQkEsTUFBTUEsSUFBSVMsT0FBSixDQUFZQyxPQUFPQyxFQUFuQixFQUF1QixDQUFDWixLQUFLYSxXQUFMLEtBQXFCLEVBQXRCLEVBQTBCQyxNQUExQixDQUFpQyxJQUFJSCxPQUFPQyxFQUFQLENBQVVHLE1BQS9DLENBQXZCLENBQU47QUFDdEIsaUJBQUssSUFBSUMsQ0FBVCxJQUFjckIsQ0FBZCxFQUFpQjtBQUNmLG9CQUFJLElBQUlnQixNQUFKLENBQVcsTUFBTUssQ0FBTixHQUFVLEdBQXJCLEVBQTBCdEIsSUFBMUIsQ0FBK0JPLEdBQS9CLENBQUosRUFBeUNBLE1BQU1BLElBQUlTLE9BQUosQ0FBWUMsT0FBT0MsRUFBbkIsRUFBd0JELE9BQU9DLEVBQVAsQ0FBVUcsTUFBVixJQUFvQixDQUFyQixHQUEyQnBCLEVBQUVxQixDQUFGLENBQTNCLEdBQW9DLENBQUMsT0FBT3JCLEVBQUVxQixDQUFGLENBQVIsRUFBY0YsTUFBZCxDQUFxQixDQUFDLEtBQUtuQixFQUFFcUIsQ0FBRixDQUFOLEVBQVlELE1BQWpDLENBQTNELENBQU47QUFDMUM7QUFDRCxtQkFBT2QsR0FBUDtBQUNIOzs7Ozs7a0JBN0RnQnBCLEsiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlscyB7XG4gICAgLyoqXG4gICAgICogQERlc2NyaXB0aW9uOiDliKTmlq3lrZfnrKbkuLLmmK/lkKbkuLrnqbpcbiAgICAgKi9cbiAgICBzdGF0aWMgaXNFbXB0eShzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ciA9PSAnJyB8fCBzdHIgPT0gbnVsbCB8fCBzdHIgPT0gJ251bGwnO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBARGVzY3JpcHRpb246IOWIpOaWreWtl+espuS4suaYr+WQpuS4jeS4uuepulxuICAgICAqL1xuICAgIHN0YXRpYyBpc05vdEVtcHR5KHN0cikge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNFbXB0eShzdHIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBARGVzY3JpcHRpb246IOa1rueCueaVsOaxguWSjFxuICAgICAqL1xuICAgIHN0YXRpYyBzdW0obnVtYmVycywgdG9GaXhlZCA9IDIpIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGZvciAoY29uc3Qgc3RyIG9mIG51bWJlcnMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzTnVtYmVyKHN0cikpIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdChzdHIpO1xuICAgICAgICBpZiAoaXNOYU4obnVtKSkge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgICAgICBzdW0gKz0gbnVtO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdW0udG9GaXhlZCh0b0ZpeGVkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQERlc2NyaXB0aW9uOiDmlbDlrZfliKTmlq1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNOdW1iZXIodmFsdWUpIHtcbiAgICAgICAgY29uc3QgcGF0cm4gPSAvXlstK10/XFxkKyhcXC5cXGQrKT8kLztcbiAgICAgICAgcmV0dXJuIHBhdHJuLnRlc3QodmFsdWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBARGVzY3JpcHRpb246IOaVsOe7hOWIpOaWrVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0FycmF5KG8pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQERlc2NyaXB0aW9uOiDmoLzlvI/ljJbml6XmnJ9cbiAgICAgKi9cbiAgICBzdGF0aWMgZGF0ZUZvcm1hdGUgKGRhdGUsIGZtdCkge1xuICAgICAgICBjb25zdCBvID0ge1xuICAgICAgICAgICdNKyc6IGRhdGUuZ2V0TW9udGgoKSArIDEsXG4gICAgICAgICAgJ2QrJzogZGF0ZS5nZXREYXRlKCksXG4gICAgICAgICAgJ2grJzogZGF0ZS5nZXRIb3VycygpLFxuICAgICAgICAgICdtKyc6IGRhdGUuZ2V0TWludXRlcygpLFxuICAgICAgICAgICdzKyc6IGRhdGUuZ2V0U2Vjb25kcygpLFxuICAgICAgICAgICdxKyc6IE1hdGguZmxvb3IoKGRhdGUuZ2V0TW9udGgoKSArIDMpIC8gMyksXG4gICAgICAgICAgJ1MnOiBkYXRlLmdldE1pbGxpc2Vjb25kcygpXG4gICAgICAgIH07XG4gICAgICAgIGlmICgvKHkrKS8udGVzdChmbXQpKSBmbXQgPSBmbXQucmVwbGFjZShSZWdFeHAuJDEsIChkYXRlLmdldEZ1bGxZZWFyKCkgKyAnJykuc3Vic3RyKDQgLSBSZWdFeHAuJDEubGVuZ3RoKSk7XG4gICAgICAgIGZvciAobGV0IGsgaW4gbykge1xuICAgICAgICAgIGlmIChuZXcgUmVnRXhwKCcoJyArIGsgKyAnKScpLnRlc3QoZm10KSkgZm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCAoUmVnRXhwLiQxLmxlbmd0aCA9PSAxKSA/IChvW2tdKSA6ICgoJzAwJyArIG9ba10pLnN1YnN0cigoJycgKyBvW2tdKS5sZW5ndGgpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZtdDtcbiAgICB9XG59Il19