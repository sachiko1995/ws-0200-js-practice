/**
 *  1.1 Hello Worldという文字を出力するメソッドを定義してください
 *
 */
function helloWorld() {
  console.log('Hello World');
}

helloWorld();


/**
 *  1.2 const を使って"hoge"という文字列を定義した変数を定義し、それを出力する関数を定義してください
 *
 */
function displayConst() {
  const x = "hoge";
  return x;
}

console.log(displayConst());

/**
 *  1.3 let を使って"hoge"という文字列を定義した変数を定義し、それを出力する関数を定義してください
 *
 */
function displayLet() {
  let y = "hoge";
  return y
}

console.log(displayLet());

/**
 *  1.4 引数に渡した変数を表示するメソッドを実装してください
 *
 */
function displayArgument(arg) {
  console.log()
}



/**
 *  1.5 渡された二つの引数の合計を返却するメソッドを実装してください
 *
 */
function sumTwoArgs(a, b) {
  let sum = a + b;
  return sum
}

console.log(sumTwoArgs(2, 3));

/**
 *  1.6 渡された二つの引数の差を返却するメソッドを実装してください
 *
 */
function subtractTwoArgs(a, b) {
  let subtract = a - b;
  return subtract;
}

console.log(subtractTwoArgs(9, 3));

/**
 *  1.7 渡された二つの引数の商を返却するメソッドを実装してください。0での割り算はnullを返却してください。
 *
 */
function quotientTwoArgs(a, b) {
  let quotient = a / b;
  return quotient
}

console.log(quotientTwoArgs(7, 3));

/**
 *  1.8 渡された二つの引数の積を返却するメソッドを実装してください
 *
 */
function productTwoArgs(a, b) {
  let product = a * b;

  return product
}

console.log(productTwoArgs(3, 3));

/**
 *  1.9 渡された引数の2で割ったあまりを返却するメソッドを実装してください
 *
 */
function remainderTwoArgs(a) {
  let remainder = a % 2;
  return remainder
}
console.log(remainderTwoArgs(7))

/**
 *  1.10 渡された引数が2の倍数であることを確認するメソッドを実装してください
 *
 */
function isEven(a) {
  let evenNum = a % 2;

  if(evenNum === 0){
    return "This is Even" 
  } else {
    return "This is not Even"
  }

}

console.log(isEven(4));
console.log(isEven(19));

/**
 *  1.11 渡された二つの文字列を連結するメソッドを実装してください
 *
 */
function concatString(a, b) {
  let concatStr = a + b;
  return concatStr;
}

console.log(concatString("Sachiko", " Yoko"))

module.exports = {
  helloWorld,
  displayConst,
  displayLet,
  displayArgument,
  sumTwoArgs,
  subtractTwoArgs,
  quotientTwoArgs,
  productTwoArgs,
  remainderTwoArgs,
  isEven,
  concatString
}
