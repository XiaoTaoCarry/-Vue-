import Mock from 'mockjs';
const LoginUsers = [{
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '张某某'
}];



// Random.extend({
//   constellation: function(date) {
//     var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
//     return this.pick(constellations)
//   }
// })
// Random.constellation()


// Random.extend({
//   filmname:function(date) {
//     var filmname = ['青春无敌', '杀破狼', '前任2', '少林寺', '神探狄仁杰', '头号玩家', '我不是药神', '赌侠1999', '碟中谍', '环太平洋', '后来的我们', '命运速递', '幕后玩家', '侏罗纪公园', '死神来了']
//     return this.pick(filmname)
//   },
// });

const Users = [];

for (let i = 0; i < 80; i++) {
  Users.push(Mock.mock({
    id: Mock.mock('@increment'),
    name: Mock.Random.cname(),

    addr: Mock.mock('@county(true)'),
    'age|1-512': 1,
    birth:Mock.Random.time() ,
    sex: Mock.Random.integer(0, 1)
  }));
}

export { LoginUsers, Users };
