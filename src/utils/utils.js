export default class Utils {
    /**
     * @Description: 判断字符串是否为空
     */
    static isEmpty(str) {
        return str == '' || str == null || str == 'null';
    }
    /**
     * @Description: 判断字符串是否不为空
     */
    static isNotEmpty(str) {
        return !this.isEmpty(str);
    }
    /**
     * @Description: 浮点数求和
     */
    static sum(numbers, toFixed = 2) {
        let sum = 0;
        for (const str of numbers) {
        if (!this.isNumber(str)) {
            return NaN;
        }
        const num = parseFloat(str);
        if (isNaN(num)) {
            return NaN;
        }
        sum += num;
        }
        return sum.toFixed(toFixed);
    }
    /**
     * @Description: 数字判断
     */
    static isNumber(value) {
        const patrn = /^[-+]?\d+(\.\d+)?$/;
        return patrn.test(value);
    }
    /**
     * @Description: 数组判断
     */
    static isArray(o) {
        return Object.prototype.toString.call(o) === '[object Array]';
    }
    /**
     * @Description: 格式化日期
     */
    static dateFormate (date, fmt) {
        const o = {
          'M+': date.getMonth() + 1,
          'd+': date.getDate(),
          'h+': date.getHours(),
          'm+': date.getMinutes(),
          's+': date.getSeconds(),
          'q+': Math.floor((date.getMonth() + 3) / 3),
          'S': date.getMilliseconds()
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        for (let k in o) {
          if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
        }
        return fmt;
    }

    /**
     * @Description: 判断日期是否今天：isToday('2019-07-04')
     */
    static isToday(str){
        var d = new Date(str.replace(/-/g,"/"));
        var todaysDate = new Date();
        if(d.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)){
            return true;
        } else {
            return false;
        }
    }
}