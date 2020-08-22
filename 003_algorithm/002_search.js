
/**
 *  2.3.1 リニアサーチ
 *
 *  リニアサーチを実装してください。(入力は数値のみ)
 *  二つ目の引数に合致した配列の添字を返却してください。
 *  合致のする数字のない場合は-1を返却してください。
 *
 *  example:
 *    [1, 3, 2, 4, 5], 3 => 1
 *    [5, 3, 2, 1], 6 => -1
 */

 //　リニアサーチ：配列を直線的に探す→　値をひとつひとつ調べていくため、データが大量になると時間がかかる

function linearSearch (array, target) {
  for(let i=0; i < array.length; i++) {
    if(array[i] === target) {
      return i;
    }
  }
  return -1
}

/**
 *  2.3.2 バイナリサーチ
 *
 *  バイナリサーチを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 2, 3, 4, 5], 2 => 2
 *    [1, 2, 3, 4] 5 => -1
 */

 //　バイナリーサーチ：調べる範囲を半分に絞りながら探す方法

function binarySearch (array, target) {
  
}

module.exports = {
  linearSearch,
  binarySearch
}
