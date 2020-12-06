// Promise 방법
function fetchUser(){
    return new Promise((resolve,reject)=>{
        //프로미스 안에선 무조건 resolve,reject 중 하나의 사용해줘야한다
        // 그래야 팬딩 상태가 안된다
        resolve('value')
    })
}

const user = fetchUser();
user.then(console.log('난 그이후에 실행될 아이'))

// async
async function fetchUser2(){
    // 앞에 async만 붙여주면 자동적으로 프로미스로 변경해준다
    return 'value'
}

// awaite
