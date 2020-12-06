/*
프로미스의 상태는 패딩 -> 성공 or 실패
producer vs consumer
*/

// 1. producer
// 프로미스의 생성은 바로 자동적으로 콜백함수가 실행된다 => 긴과하면 불필요한 네트위크 발생
// 새로운 프로미스가 만들어질때면 우리가 전달한 excecuter가(resolve,reject) 바로 자동적으로 실행
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
      resolve('ellie');
      // reject(new Error('no network'));
    }, 2000);
  });
  

//2. consumer 
promise //
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

//3. 
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  });
  
  fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
      });
    })
    .then(num => console.log(num));

    // 4. Error Handling
const getHen = () =>
new Promise((resolve, reject) => {
  setTimeout(() => resolve('🐓'), 1000);
});
const getEgg = hen =>
new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
});
const cook = egg =>
new Promise((resolve, reject) => {
  setTimeout(() => resolve(`${egg} => 🍳`), 1000);
});

getHen() //
.then(getEgg)
.then(cook)
.then(console.log)
.catch(console.log);