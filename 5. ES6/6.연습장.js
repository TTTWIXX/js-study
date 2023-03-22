const userList = [{
        account: 'abc1234',
        userName: '대길이',
        job: '추노',
        address: '서울',
        hobbys: ['수영', '축구', '테니스']
    },
    {
        account: 'banana',
        userName: '빠나나',
        job: '과일',
        address: '서울',
        hobbys: ['푸드파이팅', '테니스']
    },
    {
        account: 'park1234',
        userName: '주차왕',
        job: '발렛파킹',
        address: '경기',
        hobbys: ['족구', '축구', '테니스', '영화감상']
    },
    {
        account: 'fire',
        userName: '불꽃남자카리스마',
        job: '게이머',
        address: '서울',
        hobbys: ['독서', '테니스']
    },
];



// 취미가 딱 2개인 회원들만 
// 필터링해서 새로운 배열에 담아줘
const hobbyList = [];
const twoHobbys = function (callback) {
    for (const user of userList) {
        if (callback(user)) {
            hobbyList.push(user)
        }
    }
}

const callback=function(x){
    x.hobbys.lenght===2;
}


console.log(twoHobbys(callback));



// // 취미가 딱 2개인 회원들만 
// // 필터링해서 새로운 배열에 담아줘



// function filter2Hobby() {
//     // 새로운 배열 생성
//     const filteredArray = [];
//     for (const user of userList) {
//       if (user.hobbys.length === 2) {
//         filteredArray.push(user);
//       }
//     }
  
//     return filteredArray;
//   }
//   console.log(filter2Hobby());