/**
 *  4.1 文字列の長さを返却するメソッドを実装してください
 *
 */

function length(str) {
  return str.length
}

console.log(length("aiueo"))

/**
 *  4.2 文字列のながさが偶数の場合にtrueを返却するメソッドを実装してください
 *
 */

 // answer

 function lengthIsEven(str) {
   return str.length % 2 === 0;
 }

// function lengthIsEven(str) {
//   isEven = str.length % 2;
//   if(isEven === 0) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(lengthIsEven("Daniel"))

/**
 *  4.3 文字列の先頭一文字目を返却するメソッドを実装してください
 *
 */

 // answer

 function firstChar(str) {
   return str.slice(0, 1);
 }

// function firstChar(str) {
//   return str.substr(0,1)
// }

// console.log(firstChar("Daniel Wellinton"))


/**
 *  4.4 文字列の末尾一文字目を返却するメソッドを実装してください
 *
 */

function lastChar(str) {
  return str.slice(-1)
}

console.log(lastChar('Hungry'))

/**
 *  4.5 文字列と二つの数字a, bを渡すとa文字目から, b文字目まで
 *  を返却するメソッドを実装してください
 *
 */

function substring(str, a, b) {
  return str.substring(a-1, b)
}

// console.log(substring("Shimokita", 2, 5))

/**
 *  4.6 引数に与えられた二つの引数のうち、一つ目の引数の文字列に二つ目の引数の文字列が
 *  含まれることを確認するメソッドを実装してください
 *
 *  example:
 *      "workplace", "work" => true
 *      "work", "workplace" => false
 *      "hogehoge", "" => true
 *      "hogegeho", "fugafuga" => false
 * */

// function isInclude(a, b) {
//   if(a.includes(b)) {
//     return true
//   } else {
//     return false
//   }
// }

function isInclude(a, b) {
  return a.includes(b);
}

// console.log(isInclude("workplace", "work"))
// console.log(isInclude("hogegeho", "fugafuga"))

/**
 *  4.7 引数で渡された文字列を一文字ずつ表示するメソッドを実装してください
 *
 *  example:
 *      work => false
 *      anna => true
 *      madam => true
 *      level => true
 *
 */

// function printByChar(str) {
//   for(let i = 0; i < str.length; i++) {
//     console.log(str.charAt(i))
//   }
// }

function printByChar(str) {
  for(let i = 0; i < str.length; i++) {
    console.log(str[i])
  }
}

console.log(printByChar("Harry Potter"))


module.exports = {
  length,
  lengthIsEven,
  firstChar,
  lastChar,
  substring,
  isInclude,
  printByChar
}
