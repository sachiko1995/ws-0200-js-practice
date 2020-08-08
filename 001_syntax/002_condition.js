/**
 *  2.1 引数から与えられた値が20以上であれば
 *    "成年です。"
 *    それ以外は "未成年です。”
 *    と出力するメソッドを実装してください
 *
 */
function printMessageByAge(age) {

  if(age >= 20){
    return '成年です。'
  } else {
    return '未成年です。'
  }
}

console.log(printMessageByAge(30))
console.log(printMessageByAge(18))

/**
 *  2.2 引数から与えられた時間が
 *    4時から12時より前であれば、 Good Morning
 *    12時から17時より前であれば、 Hello
 *    17時以降であれば、 Good Night
 *    と出力するメソッドを実装してください
 *
 */
function greeding(hour) {
  if(hour > 4 && hour < 12){
    return 'Good Morning'
  } else if(hour > 12 && hour < 17){
    return 'Hello'
  } else {
    return 'Good Night'
  }
}

console.log(greeding(5))
console.log(greeding(14))
console.log(greeding(18))

/**
 *  2.3 引数から与えられた数字に対応する曜日を返却するメソッドを実装してください
 *    0 ・・・Sunday
 *    1 ・・・Monday
 *    2 ・・・Tuesday
 *    3 ・・・Wednesday
 *    4 ・・・Thursday
 *    5 ・・・Friday
 *    6 ・・・Saturday
 *    と出力するメソッドを実装してください
 *
 */

function getDay(day) {
  switch (day) {
    case 0:
      console.log('Sunday')
      break;

    case 1:
      console.log('Monday')
      break;

    case 2:
      console.log('Tuesday')
      break;

    case 3:
      console.log('Wednesday')
      break;

    case 4:
      console.log('Thursday')
      break;
    
    case 5:
      console.log('Friday')
      break;
    
    case 6:
      console.log('Saturday')
      break;
  }
}

getDay(4)

module.exports = {
  printMessageByAge,
  greeding,
  getDay
}
