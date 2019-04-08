import Axios from 'axios';
import store from '../store/index';

const URL = 'http://139.199.88.87:9001';

//用户登录
export function login(data) {
  return Axios.post(URL+'/login/in', data, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
export function getUmbrellaList (data) {
  return Axios.post(URL+'/api/umbrella/manager/page', data, {
    headers: {
      'Content-Type': 'application/json',
      'token': store.state.token
    },
  });
}
export function addUmbrella (data) {
  return Axios.post(URL+'/api/umbrella/manager/', data, {
    headers: {
      'Content-Type': 'application/json',
      'token': store.state.token
    },
  });
}
export function editUmbrella (data) {
  return Axios.patch(URL+'/api/umbrella/manager/?status='+data.status+'&umbrellaId='+data.umbrellaId, {
    headers: {
      'Content-Type': 'application/json',
      'token': store.state.token
    },
  });
}
// 获取分页条件查询的用户信息
export function getUserList (data) {
  return Axios.post(URL+'/api/user/manager/page', data, {
    headers: {
      'Content-Type': 'application/json',
      'token': store.state.token
    },
  });
}
// 清空志愿者
export function clearVolunteer () {
  return Axios.delete(URL+'/api/user/manager/clearVolunteer', {
    headers: {
      'Content-Type': 'application/json',
      'token': store.state.token
    },
  })
}
// 删除用户
export function deleteUser (id) {
  return Axios.delete(URL+'/api/user/manager/'+id, {
    headers: {
      'Content-Type': 'application/json',
      'token': store.state.token
    },
  })
}
// 获取学院列表
export function getAcademyList () {
  return Axios.get(URL+'/api/class/academy/all/', {
    headers: {
      'Content-Type': 'application/json',
      'token': store.state.token
    },
  })
}
// 获取班级列表
export function getClassList (academyId) {
  return Axios.get(URL+'/api/class/' + academyId, {
    headers: {
      'Content-Type': 'application/json',
      'token': store.state.token
    },
  })
}
// 修改用户信息
export function editUserInfos (user) {
  return Axios.patch(URL+'/api/user/manager/', user,{
    headers: {
      'Content-Type': 'application/json',
      'token': store.state.token
    },
  })
} 
// 重置密码
export function resetPassword (id) {
  return Axios.post(URL+'/api/user/manager/reset/'+id, {
    headers: {
      'Content-Type': 'application/json',
      'token': store.state.token
    },
  })
}
// 获取项目总金额
export function getfundAmount () {
  return Axios.get(URL+'/api/fundUseRecords/manager/all', {
    headers: {
      'Content-Type': 'application/json',
      'token': store.state.token
    },
  })
}
// 获取使用记录
export function findUseRecords () {
  return Axios.get(URL+'/api/fundUseRecords/manager/', {
    headers: {
      'Content-Type': 'application/json',
      'token': store.state.token
    },
  })
}
// 提交资金使用申请
export function addFundRecord (data) {
  return Axios.post(URL+'/api/fundUseRecords/manager/', data, {
    headers: {
      'Content-Type': 'application/json',
      'token': store.state.token
    },
  })
}
// 分页查询借还记录
export function getBorrowList (data) {
  return Axios.post(URL+'/api/borrow/manager/page', data, {
    headers: {
      'Content-Type': 'application/json',
      'token': store.state.token
    },
  })
}
// 分页查询值班信息数据
export function getSignList (data) {
  return Axios.post(URL+'/api/sign/manager/page', data, {
    headers: {
      'Content-Type': 'application/json',
      'token': store.state.token
    },
  })
}
// 修改值班信息
export function editSignInfo (data) {
  return Axios.patch(URL+'/api/sign/manager/', data, {
    headers: {
      'Content-Type': 'application/json',
      'token': store.state.token
    }
  })
}
// 获取超期未还伞数量
export function unsendCount () {
  return Axios.get(URL+'/api/borrow/manager/count', {
    headers: {
      'Content-Type': 'application/json',
      'token': store.state.token
    },
  })
}
// 分页查询超期未还伞记录
export function overdueList(data) {
  return Axios.post(URL+'/api/borrow/manager/overdue', data, {
    headers: {
      'Content-Type': 'application/json',
      'token': store.state.token
    },
  })
}
// 修改密码
export function changePassword(data) {
  return Axios.post(URL+'/api/user/manager/changePassword', data, {
    headers: {
      'Content-Type': 'application/json',
      'token': store.state.token
    },
  })
}