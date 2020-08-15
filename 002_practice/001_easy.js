
/**
 *  文字列の長さ
 *
 *  lengthをも使わずに引数で渡された文字列の長さを求める関数を定義してください
 *
 *  example:
 *    'banana' => output: 5
 *    'cucumber' => output: 8
 *    '' => output: 0
 *
 */

// function length(str) {
//   for(let i=0; i < str.length; i++) {
//     if(str === undefined || str === "") {
//       return 0
//     }
//   }
// }

// console.log(length(""))

/**
 *  文字列の反転
 *
 *  文字列を反転させる関数を実装してください
 *
 *  example:
 *    'library' => 'yrarbil'
 *    'krow' => 'work'
 *    'fizzbuzz' => 'zzubzzif'
 *
 */
function reverse(str) {
  const array = [];
  for (let i=0; i < str.length; i++) {
    array.push(str[i])
  }
  let arr2 = array.reverse()
  return arr2.join("")
}

console.log(reverse("okihcas"))

/**
 *  指定された文字列の位置を返却
 *
 *  指定された文字列の位置を返却する関数を定義してください
 *
 *  example:
 *    'library', a => output: 4
 *    'work', w => output: 0
 *    'bicycle', a => output: -1
 *
 */

function findIndex(str, char) {
  let finding = [];
  for(let i=0; i < str.length; i++) {
    let character = str.charAt(i)
    finding.push(character)
  }

  const answer = finding.indexOf(char)
  return answer
}

console.log(findIndex("library", "a"))
console.log(findIndex("bicycle", "a"))



/**
 *  指定された文字列を指定された文字で分割
 *
 *  指定された文字列aを指令された一文字bで分割して配列を返却する関数を定義してください
 *
 *  example:
 *    'library', a => output: ['libr', 'ry']
 *    'apple,banana,pineapple', w => output: ['apple', 'banana', 'pineapple']
 *    'bicycle', a => output: ['bicycle']
 *
 */

// function split(a, b) {
//   const answer = a.split('', b)
//   return answer;
// }

// console.log('library', a)

/**
 *  配列の合計
 *
 *  渡された配列の合計を返す関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => output: 20
 *    [2, 5, 3] => output: 10
 *    [1] => output: 1
 *
 */

function sum(array) {
  const arr = [];
  for (let i=0; i < array.length; i++) {
    arr.push(array[i])
    // console.log(arr)
  }

  let sumsum = 0;
  for(let i=0; i < arr.length; i++) {
    sumsum += arr[i]
  }
  return sumsum
}

console.log(sum([2,3]))

/**
 *  配列の平均
 *
 *  渡された配列の合計を整数(小数切り捨て)で返す関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => output: 5
 *    [2, 5, 3] => output: 3
 *    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => output: 5
 *    [1] => output: 1
 *    [] => output: 1
 *
 */

// function average(array) {
//   const arr = [];
//   for (let i=0; i < array.length; i++) {
//     arr.push(i)
//     console.log(arr)
//   }

// }

/**
 *  配列の結合
 *
 *  渡された二つの配列を連結する関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9], [3, 4] => output: [1, 3, 7, 9, 3, 4]
 *    ['h', 'o', 'm', 'e'], ['w', 'o', 'r', 'k'] => output: ['h', 'o', 'm', 'e', 'w', 'o', 'r', 'k']
 *    [], [] => output: []
 *
 */

function concat(a, b) {
  const arr1 = a.concat(b)
  return arr1
}

console.log(concat([1,3,7,9], [3,4]))
console.log(concat([],[]))

/**
 *  2.1.2 配列の個数
 *
 *  渡された配列の要素数を返す関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => output: 4
 *    [2, 5, 3] => output: 3
 *    [1] => output: 1
 *
 */

function size(array) {
  const arr1 = [];
  for(let i=0; i < array.length; i++) {
    arr1.push(array[i])
  }
  return arr1.length
}

console.log(size([1,3,5,6,7]))

/**
 *  2.1.3 配列の最大値と最小値
 *
 *  配列の最大値と最小値を出力する関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => max: 20, min: 1
 *    [2, 5, 3, 6, 10, -1] => max: 10, min: -1
 *    [1] => max: 1, min: 1
 *    [] => 表示しない
 *
 */

function minMax(array) {
  if(array == []){
    return ""
  } else {
    return "max: " + Math.max(...array) + ", " + "min: " + Math.min(...array)
  }
}

console.log(minMax([1, 3, 7, 9]))
console.log(minMax([1]))
console.log(minMax([]))

/**
 *  連番
 *
 *  指定された数字のまでの連番の配列を生成する関数を定義してください
 *
 *  example:
 *    5 => [0, 1, 2, 3, 4]
 *    0 => []
 *
 */

function seq(num) {
}

/**
 *  奇数の連番
 *
 *  指定された数字までの奇数の連番の配列を生成する関数を定義してください
 *
 *  example:
 *    5 => [1, 3, 5]
 *    10 => [1, 3, 5, 7, 9]
 *    0 => []
 *
 */

function omitSeq(num) {
}

/**
 *  指定された数値以下の配列
 *
 *  指定された数字以下を抜き出した配列を返す関数を定義してください
 *
 *  example:
 *    [1, 7, 5, 4], 3 => [1]
 *    [1, 7, 5, 4], 7 => [1, 7, 5, 4]
 *    [], 7 => []
 *
 */

function filter(array, num) {



}



/**
 *  Fizz Buzz
 *
 *  1から100の数字までをカウントして、数字が3の倍数の場合にFizz
 *  5の倍数の場合にBuzz、3と5の倍数の時にFizzBuzzと表示する関数を実装してください。
 *
 *  example:
 *    1
 *    2
 *    3 Fizz
 *    4
 *    5 Buzz
 *    6
 *    7
 *    ..
 *    15 FizzBuzz
 *    ..
 *    18 Fizz
 *    ...
 *    30 FizzBuzz
 *    ...
 */

function fizzBuzz () {
  for(let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0){
      console.log(i + ' FizzBuzz')
    } else if (i % 3 === 0) {
      console.log(i + ' Fizz')
    } else if (i % 5 === 0){
      console.log(i + ' Buzz')
    } else {
      console.log(i + "")
    }
  }
}

fizzBuzz()

module.exports = {
  length,
  reverse,
  findIndex,
  split,
  sum,
  size,
  average,
  minMax,
  concat,
  seq,
  filter,
  omitSeq,
  fizzBuzz
}
