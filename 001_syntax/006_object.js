/**
 *  6.1 下記データを持ったオブジェクトを返す関数を実装してください。
 *
 *  name: 'Bob'
 *  age: 32
 *  gender: 'male'
 *
 */

// function getPersonObject() {
//   const obj1 = {
//     name: 'Bob',
//     age: 32,
//     gender: 'male'
//   }
//   return obj1;
// }

// answer

function getPersonObject() {
  return {
    name: 'Bob',
    age: 32,
    gender: 'male'
  }
}

// console.log(getPersonObject())

/**
 *  6.2 下記データAが引数で与えられた場合にデータBに書き換える関数を実装してください。
 *
 *  Data A:
 *    name: 'Bob'
 *    age: 32
 *    gender: 'male'
 *  Data B:
 *    name: 'Mary'
 *    age: 37
 *    gender: 'female'
 *
 */

// function mutateObject(person) {
//   let obj2 = {
//     name: 'Mary',
//     age: 37,
//     gender: 'female'
//   }
//   const obj3 = Object.assign(person, obj2)
//   return obj3
// }

// console.log(mutateObject(getPersonObject()))

function mutateObject(person) {
  person.name = 'Mary';
  person.age = 37;
  person.gender = 'female';
  return person;
}


/**
 *  6.3 下記引数で渡される配列にランダムな1 ~10の数字を割り振り、オブジェクトとして返す
 *      関数を実装してください
 *
 *    [
 *      'Bob',
 *      'Mary',
 *      'Ann',
 *      'Mike'
 *    ]
 *
 *   output:
 *     {
 *       Bob: [Random Number],
 *       Mary: [Random Number],
 *       Ann: [Random Number],
 *       Mike: [Random Number]
 *     }
 *
 */

 //answer

 function assignNumber(persons) {
   let obj = {};
   for(let i=0; i < persons.length; i++) {
     const random = Math.floor((Math.random() * 10) + 1);
     obj[persons[i]] = random;
   }
   return obj;
 }

// function assignNumber(persons) {
//   for(let i = 0; i < persons.length; i++) {
//     let person = new Object();
//     person.name = persons[i]
//     person.num = "[" + Math.floor(((Math.random() * 10 )+ 1)) + "]"
//     return person
//   }
// }
console.log(assignNumber(['Bob', 'Mary', 'Ann', 'Mike']))

/**
 *  6.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *      但し、オブジェクトを使って実装すること
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

function isDuplicate(array) {
  numMap = {};
  for(let i=0; i < array.length; i++) {
    if(numMap[array[i]]) {
      return true;
    }
    numMap[array[i]] = true;
  }
  return false;
}

// console.log(isDuplicate([1,2,3]))

module.exports = {
  getPersonObject,
  mutateObject,
  assignNumber,
  isDuplicate
}
