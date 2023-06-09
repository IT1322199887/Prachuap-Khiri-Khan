/* 
  毫秒转为正常格式时间过滤器 
  编写过滤器传入需要的时间格式，例如：yyyy-MM-dd hh:mm:ss或者yyyy年MM月dd日
  注意：月MM必须大写，目的为了区分月与分，其他都为小写
  时间格式定义：
    参数为0格式：yyyy-MM-dd hh:mm:ss 
    参数为1格式：yyyy-MM-dd 
    参数为2格式：hh:mm:ss 
    参数为3格式：yyyy年MM月dd日 hh时mm分ss秒
    参数为4格式：yyyy年MM月dd日 
    参数为5格式：hh时mm分ss秒
    参数为6格式：yyyy年MM月 
    参数为7格式：yyyy
    参数为8格式：yyyy/MM/dd 
*/
let formatDate = (date, fmt) => {
    var date = new Date(date);
    if (fmt == 0) {
        fmt = "yyyy-MM-dd hh:mm:ss"
    } else if (fmt == 1) {
        fmt = "yyyy-MM-dd"
    } else if (fmt == 2) {
        fmt = "hh:mm:ss"
    } else if (fmt == 3) {
        fmt = "yyyy年MM月dd日 hh时mm分ss秒"
    } else if (fmt == 4) {
        fmt = "yyyy年MM月dd日"
    } else if (fmt == 5) {
        fmt = "hh时mm分ss秒"
    } else if (fmt == 6) {
        fmt = "yyyy年MM月"
    } else if (fmt == 7) {
        fmt = "yyyy"
    } else if (fmt == 8) {
        fmt = "yyyy/MM/dd"
    }
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};

/* 一位数两位数转换 */
let padLeftZero = (str) => {
    return ('00' + str).substr(str.length);
};

/* 获取当前时间戳 */
const getUnix = (data) => {
    var date = new Date(data);
    return date.getTime();
}

/* 获取今天0点0分0秒的时间戳 */
const getTodayUnix = () => {
    var date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.getTime();
}

/* 获取今年1月1日0点0分0秒的时间戳 */
const getYearUnix = () => {
    var date = new Date();
    date.setMonth(0);
    date.setDate(1);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.getTime();
}

/* 获取标准年月日 */
const getLastDate = (time) => {
    var date = new Date(parseInt(time));
    var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return date.getFullYear() + '/' + month + "/" + day;
}

/* 
  获取发送消息时间过滤器
  还用过滤器就可以实现转换
*/

const getFormatTime = (timestamp) => {
    var now = getUnix(); //当前时间戳
    var today = getTodayUnix(); //今天0点时间戳
    var year = getYearUnix(); //今年0点时间戳
    var timer = (now - timestamp) / 1000; // 转换为秒级时间戳
    var tip = '';
    if (timer <= 0) {
        tip = '刚刚';
    } else if (Math.floor(timer / 60) <= 0) {
        tip = '刚刚';
    } else if (timer < 3600) {
        tip = Math.floor(timer / 60) + '分钟前';
    } else if (timer >= 3600 && (timestamp - today >= 0)) {
        tip = Math.floor(timer / 3600) + '小时前';
    } else if (timer / 86400 <= 31) {
        tip = Math.ceil(timer / 86400) + '天前';
    } else {
        tip = getLastDate(timestamp);
    }
    return tip;
}

/* 获取周（星期） */
const getWeek = (date) => {
    let datelist = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六',]
    let weekDay = datelist[new Date(date).getDay()];
    return weekDay;
}

//电话号校验
const checkoutPhoneNum = (phoneNum) => {
    if ((/^1[0-9]{7,11}$/.test(phoneNum))) {
        return true
    } else {
        return false
    }
}
// 校验用户名
const CheckUserName = (name) => {
    // 用户名称支持 英文，数字 中文， 最少6-20位
    if ((/^[a-zA-Z\u4e00-\u9fa5]{1}[a-zA-Z0-9\u4e00-\u9fa5_]{5,19}$/.test(name))) {
        return true
    } else {
        return false
    }
}
// 校验密码
const CheckSecretKey = (pass) => {
    // 由数字和字母组成，并且要同时含有数字和字母，且长度要在8-16位之间。
    if ((/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(pass))) {
        return true
    } else {
        return false
    }
}

//单位邮编校验
const checkoutZipCode = (zipCode) => {
    if ((/^[0-9]{6}$/.test(zipCode))) {
        return true
    } else {
        return false
    }
}

//单位传真校验
const checkoutFax = (fax) => {
    if ((/^[0-9]{7}$/.test(fax))) {
        return true
    } else {
        return false
    }
}

const compareObject = (obj1, obj2) => {
    //Object.getOwnPropertyNames():方法返回一个指定对象所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。
    //对象内置属性方法:Object.keys()；该方法返回一个数组，数组内包括对象内可枚举属性以及方法名称。数组中属性名的排列顺序和使用 for...in 遍历该对象时返回的顺序一致。
    var attrs1 = Object.keys(obj1);
    var attrs2 = Object.keys(obj2);
    if (attrs1.length != attrs2.length) {
        return false;
    }
    for (var j = 0; j < attrs1.length; j++) {
        var attrNames = attrs1[j];
        if (obj1[attrNames] != obj2[attrNames]) {
            return false;
        }
    }
    return true;
}
// 用于文件下载封装
const fileBlobDown = (fileNameType, res) => {
    let blob = new Blob([res], {
        type: "application/vnd.ms-excel"
    });
    let objecturl = URL.createObjectURL(blob);
    // 创建a标签
    let a = document.createElement("a");
    a.href = objecturl;
    // 从末尾\\开始截取
    a.download = fileNameType.substring(fileNameType.lastIndexOf("/") + 1);
    // 插入a标签
    document.body.appendChild(a);
    // a标签点击事件
    a.click();
    // 删除a标签
    document.body.removeChild(a);
}
// 数组对象排序
const sortNuber = (array, key) => {
    return array.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        return (x < y) ? -1 : ((x < y) ? 1 : 0)
    })
}

// 正则表达式验证-----------------------------------------
// 用户名表达式(6-20位)(字母，数字，特殊字符)
const userWhile = (value) => {
    if ((/^[a-zA-Z0-9!@#$%^&*?]{6,20}$/.test(value))) {
        return true
    } else {
        return false
    }
}
// 密码表达式(6-20位)包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
const pawWhile = (value) => {
    if ((/^.*(?=.{6,20})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?]).*$/.test(value))) {
        return true
    } else {
        return false
    }
}

export default {
    formatDate,
    getFormatTime,
    getWeek,
    checkoutPhoneNum,
    checkoutZipCode,
    checkoutFax,
    compareObject,
    getUnix,
    fileBlobDown,
    CheckUserName,
    CheckSecretKey,
    sortNuber,
    // --------------------
    userWhile,
    pawWhile
}