import AV from 'leancloud-storage'
var APP_ID = '5oIHS8kmV9p9WIpV5ibIvHfI-gzGzoHsz';
var APP_KEY = 'RTtV0nLCJ7yJBxVQv8K9H0vr';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

export default AV;

export function signUp(username, password, successFn, errorFn){
   // 新建 AVUser 对象实例
  var user = new AV.User();
  // 设置用户名
  user.setUsername(username);
  // 设置密码
  user.setPassword(password);
  user.signUp().then(function (loginedUser) {
    let user = getUserFromAVUser(loginedUser)
    successFn.call(null, user)
  }, function (error) {
    errorFn.call(null, error)
  })
  return undefined
}


export function getCurrentUser(){
  let user = AV.User.current()
  if(user){
    return getUserFromAVUser(user)
  }else{
    return null
  }
}

function getUserFromAVUser(AVUser){
  return {
    id: AVUser.id,
    ...AVUser.attributes  /*依次把每个属性罗列*/
  }
}

export function signOut(){
  AV.User.logOut()
  return undefined
}

export function signIn(username, password, successFn, errorFn){
  AV.User.logIn(username, password).then(function (loginedUser) {
    let user = getUserFromAVUser(loginedUser)
    successFn.call(null, user)
  }, function (error) {
    errorFn.call(null, error)
  })
}
 