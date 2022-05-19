//数字格式化
function numbersFormat(num) {
  //将数字转换为字符串, 然后通过split方法用.分隔, 取到第0个
  let numStr = num.toString().split(".")[0];
  let point = 1;
  if (numStr.length < 5) {
    // 判断数字有多长,如果小于6,,表示10万以内的数字,让其直接显示
    return numStr;
  } else if (numStr.length >= 5 && numStr.length <= 8) {
    // 如果数字大于6位,小于8位,让其数字后面加单位万
    let decimal = numStr.substring(
      numStr.length - 4,
      numStr.length - 4 + point
    );
    // 由千位,百位组成的一个数字
    return parseFloat(parseInt(num / 10000) + "." + decimal) + "万";
  } else if (numStr.length > 8) {
    // 如果数字大于8位,让其数字后面加单位亿
    let decimal = numStr.substring(
      numStr.length - 8,
      numStr.length - 8 + point
    );
    return parseFloat(parseInt(num / 100000000) + "." + decimal) + "亿";
  }
}

//日期格式化
function dateFormat(date) {
  if (date < new Date("1970-12-31").getTime()) {
    date = date * 1000; //添加毫秒数
  }
  let month = new Date(date).getMonth() + 1;
  let day = new Date(date).getDate();
  return month + "-" + day;
}

//秒时间格式化
function secondsFormat(second) {
  second = parseInt(second);
  let min = 0; // 分钟
  let h = 0; // 小时
  if (second > 60) {
    min = parseInt(second / 60);
    second = parseInt(second % 60);
    if (min > 60) {
      h = parseInt(min / 60);
      min = parseInt(min % 60);
    }
  }
  let hour_str = h > 0 ? h.toString().padStart(2, "0") + ":" : "";
  let min_str = min.toString().padStart(2, "0") + ":";
  let second_str = second.toString().padStart(2, "0");
  let result = `${hour_str}${min_str}${second_str}`;
  return result;
}

export { numbersFormat, dateFormat, secondsFormat };
