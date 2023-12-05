import request from '@/utils/request'

//注册
export const userRegisterService = ({ username, password, repassword }) =>
  request.post('/api/reg', { username, password, repassword })

//登录
export const userLoginService = ({ username, password }) => {
  return request.post('api/login', { username, password })
}
//获取用户基本信息
export const userGetInfoService = () => {
  return request.get('/my/userinfo')
}
//个人资料：提交修改用户数据
export const userUpdateInfoService = ({ id, nickname, email }) => {
  return request.put('/my/userinfo', { id, nickname, email })
}
//上传头像
export const userUploadAvatarService = (avatar) => {
  return request.patch('/my/update/avatar', { avatar })
}

//修改用户密码
export const userUpdatePassService = ({ old_pwd, new_pwd, re_pwd }) => {
  return request.patch('/my/updatepwd', { old_pwd, new_pwd, re_pwd })
}
