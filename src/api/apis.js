import Axios from 'axios';

const URL = 'http://139.199.88.87:9001';

export function getUmbrellaList (data) {
  return Axios.post(URL+'/api/umbrella/manager/page', data, {
    headers: {
      'Content-Type': 'application/json',
      'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoie1wiY2xhc3NJZFwiOjEsXCJjb2RlXCI6XCIyMDE1MjEwNDA1MDQ5XCIsXCJjcmVhdGVUaW1lXCI6XCIyMDE5LTAyLTE3IDA3OjA0OjQ1XCIsXCJpZFwiOjEsXCJuYW1lXCI6XCLkvanlpYdcIixcInBhc3N3b3JkXCI6XCIxMjM0NTZcIixcInNvdXJjZVwiOjAsXCJ0ZWxcIjpcIjEzNTg4MjIxOTQ3XCIsXCJ1cGRhdGVUaW1lXCI6XCIyMDE5LTAyLTIyIDA4OjIwOjM1XCIsXCJ2b2x1bnRlZXJJZFwiOlwidm9sdW50ZWVyMVwifSIsInBob25lIjoiMTM1ODgyMjE5NDciLCJwYXNzd29yZCI6IjEyMzQ1NiIsImV4cCI6MTU1MTE3NzYxMCwibmJmIjoxNTUxMDkxMjEwfQ.9WHK8fBdKeFD044x1yHpO6nv9-oGZH-zW93W6vTihmo'
    },
  });
}
export function addUmbrella (data) {
  return Axios.post(URL+'/api/umbrella/manager/', data, {
    headers: {
      'Content-Type': 'application/json',
      'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoie1wiY2xhc3NJZFwiOjEsXCJjb2RlXCI6XCIyMDE1MjEwNDA1MDQ5XCIsXCJjcmVhdGVUaW1lXCI6XCIyMDE5LTAyLTE3IDA3OjA0OjQ1XCIsXCJpZFwiOjEsXCJuYW1lXCI6XCLkvanlpYdcIixcInBhc3N3b3JkXCI6XCIxMjM0NTZcIixcInNvdXJjZVwiOjAsXCJ0ZWxcIjpcIjEzNTg4MjIxOTQ3XCIsXCJ1cGRhdGVUaW1lXCI6XCIyMDE5LTAyLTIyIDA4OjIwOjM1XCIsXCJ2b2x1bnRlZXJJZFwiOlwidm9sdW50ZWVyMVwifSIsInBob25lIjoiMTM1ODgyMjE5NDciLCJwYXNzd29yZCI6IjEyMzQ1NiIsImV4cCI6MTU1MTE3NzYxMCwibmJmIjoxNTUxMDkxMjEwfQ.9WHK8fBdKeFD044x1yHpO6nv9-oGZH-zW93W6vTihmo'
    },
  });
}
export function editUmbrella (data) {
  return Axios.patch(URL+'/api/umbrella/manager/?status='+data.status+'&umbrellaId='+data.umbrellaId, {
    headers: {
      'Content-Type': 'application/json',
      'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoie1wiY2xhc3NJZFwiOjEsXCJjb2RlXCI6XCIyMDE1MjEwNDA1MDQ5XCIsXCJjcmVhdGVUaW1lXCI6XCIyMDE5LTAyLTE3IDA3OjA0OjQ1XCIsXCJpZFwiOjEsXCJuYW1lXCI6XCLkvanlpYdcIixcInBhc3N3b3JkXCI6XCIxMjM0NTZcIixcInNvdXJjZVwiOjAsXCJ0ZWxcIjpcIjEzNTg4MjIxOTQ3XCIsXCJ1cGRhdGVUaW1lXCI6XCIyMDE5LTAyLTIyIDA4OjIwOjM1XCIsXCJ2b2x1bnRlZXJJZFwiOlwidm9sdW50ZWVyMVwifSIsInBob25lIjoiMTM1ODgyMjE5NDciLCJwYXNzd29yZCI6IjEyMzQ1NiIsImV4cCI6MTU1MTE3NzYxMCwibmJmIjoxNTUxMDkxMjEwfQ.9WHK8fBdKeFD044x1yHpO6nv9-oGZH-zW93W6vTihmo'
    },
  });
}
// 获取分页条件查询的用户信息
export function getUserList (data) {
  return Axios.post(URL+'/api/user/manager/page', data, {
    headers: {
      'Content-Type': 'application/json',
      'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoie1wiY2xhc3NJZFwiOjEsXCJjb2RlXCI6XCIyMDE1MjEwNDA1MDQ5XCIsXCJjcmVhdGVUaW1lXCI6XCIyMDE5LTAyLTE3IDA3OjA0OjQ1XCIsXCJpZFwiOjEsXCJuYW1lXCI6XCLkvanlpYdcIixcInBhc3N3b3JkXCI6XCIxMjM0NTZcIixcInNvdXJjZVwiOjAsXCJ0ZWxcIjpcIjEzNTg4MjIxOTQ3XCIsXCJ1cGRhdGVUaW1lXCI6XCIyMDE5LTAyLTIyIDA4OjIwOjM1XCIsXCJ2b2x1bnRlZXJJZFwiOlwidm9sdW50ZWVyMVwifSIsInBob25lIjoiMTM1ODgyMjE5NDciLCJwYXNzd29yZCI6IjEyMzQ1NiIsImV4cCI6MTU1MTE3NzYxMCwibmJmIjoxNTUxMDkxMjEwfQ.9WHK8fBdKeFD044x1yHpO6nv9-oGZH-zW93W6vTihmo'
    },
  });
}
// 清空志愿者
export function clearVolunteer () {
  return Axios.delete(URL+'/api/user/manager/clearVolunteer', {
    headers: {
      'Content-Type': 'application/json',
      'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoie1wiY2xhc3NJZFwiOjEsXCJjb2RlXCI6XCIyMDE1MjEwNDA1MDQ5XCIsXCJjcmVhdGVUaW1lXCI6XCIyMDE5LTAyLTE3IDA3OjA0OjQ1XCIsXCJpZFwiOjEsXCJuYW1lXCI6XCLkvanlpYdcIixcInBhc3N3b3JkXCI6XCIxMjM0NTZcIixcInNvdXJjZVwiOjAsXCJ0ZWxcIjpcIjEzNTg4MjIxOTQ3XCIsXCJ1cGRhdGVUaW1lXCI6XCIyMDE5LTAyLTIyIDA4OjIwOjM1XCIsXCJ2b2x1bnRlZXJJZFwiOlwidm9sdW50ZWVyMVwifSIsInBob25lIjoiMTM1ODgyMjE5NDciLCJwYXNzd29yZCI6IjEyMzQ1NiIsImV4cCI6MTU1MTE3NzYxMCwibmJmIjoxNTUxMDkxMjEwfQ.9WHK8fBdKeFD044x1yHpO6nv9-oGZH-zW93W6vTihmo'
    },
  })
}
// 删除用户
export function deleteUser (id) {
  return Axios.delete(URL+'/api/user/manager/'+id, {
    headers: {
      'Content-Type': 'application/json',
      'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoie1wiY2xhc3NJZFwiOjEsXCJjb2RlXCI6XCIyMDE1MjEwNDA1MDQ5XCIsXCJjcmVhdGVUaW1lXCI6XCIyMDE5LTAyLTE3IDA3OjA0OjQ1XCIsXCJpZFwiOjEsXCJuYW1lXCI6XCLkvanlpYdcIixcInBhc3N3b3JkXCI6XCIxMjM0NTZcIixcInNvdXJjZVwiOjAsXCJ0ZWxcIjpcIjEzNTg4MjIxOTQ3XCIsXCJ1cGRhdGVUaW1lXCI6XCIyMDE5LTAyLTIyIDA4OjIwOjM1XCIsXCJ2b2x1bnRlZXJJZFwiOlwidm9sdW50ZWVyMVwifSIsInBob25lIjoiMTM1ODgyMjE5NDciLCJwYXNzd29yZCI6IjEyMzQ1NiIsImV4cCI6MTU1MTE3NzYxMCwibmJmIjoxNTUxMDkxMjEwfQ.9WHK8fBdKeFD044x1yHpO6nv9-oGZH-zW93W6vTihmo'
    },
  })
}
// 获取学院列表
export function getAcademyList () {
  return Axios.get(URL+'/api/class/academy/all/', {
    headers: {
      'Content-Type': 'application/json',
      'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoie1wiY2xhc3NJZFwiOjEsXCJjb2RlXCI6XCIyMDE1MjEwNDA1MDQ5XCIsXCJjcmVhdGVUaW1lXCI6XCIyMDE5LTAyLTE3IDA3OjA0OjQ1XCIsXCJpZFwiOjEsXCJuYW1lXCI6XCLkvanlpYdcIixcInBhc3N3b3JkXCI6XCIxMjM0NTZcIixcInNvdXJjZVwiOjAsXCJ0ZWxcIjpcIjEzNTg4MjIxOTQ3XCIsXCJ1cGRhdGVUaW1lXCI6XCIyMDE5LTAyLTIyIDA4OjIwOjM1XCIsXCJ2b2x1bnRlZXJJZFwiOlwidm9sdW50ZWVyMVwifSIsInBob25lIjoiMTM1ODgyMjE5NDciLCJwYXNzd29yZCI6IjEyMzQ1NiIsImV4cCI6MTU1MTE3NzYxMCwibmJmIjoxNTUxMDkxMjEwfQ.9WHK8fBdKeFD044x1yHpO6nv9-oGZH-zW93W6vTihmo'
    },
  })
}
// 获取班级列表
export function getClassList (academyId) {
  return Axios.get(URL+'/api/class/' + academyId, {
    headers: {
      'Content-Type': 'application/json',
      'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoie1wiY2xhc3NJZFwiOjEsXCJjb2RlXCI6XCIyMDE1MjEwNDA1MDQ5XCIsXCJjcmVhdGVUaW1lXCI6XCIyMDE5LTAyLTE3IDA3OjA0OjQ1XCIsXCJpZFwiOjEsXCJuYW1lXCI6XCLkvanlpYdcIixcInBhc3N3b3JkXCI6XCIxMjM0NTZcIixcInNvdXJjZVwiOjAsXCJ0ZWxcIjpcIjEzNTg4MjIxOTQ3XCIsXCJ1cGRhdGVUaW1lXCI6XCIyMDE5LTAyLTIyIDA4OjIwOjM1XCIsXCJ2b2x1bnRlZXJJZFwiOlwidm9sdW50ZWVyMVwifSIsInBob25lIjoiMTM1ODgyMjE5NDciLCJwYXNzd29yZCI6IjEyMzQ1NiIsImV4cCI6MTU1MTE3NzYxMCwibmJmIjoxNTUxMDkxMjEwfQ.9WHK8fBdKeFD044x1yHpO6nv9-oGZH-zW93W6vTihmo'
    },
  })
}
// 修改用户信息
export function editUserInfos (user) {
  return Axios.patch(URL+'/api/user/manager/', user,{
    headers: {
      'Content-Type': 'application/json',
      'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoie1wiY2xhc3NJZFwiOjEsXCJjb2RlXCI6XCIyMDE1MjEwNDA1MDQ5XCIsXCJjcmVhdGVUaW1lXCI6XCIyMDE5LTAyLTE3IDA3OjA0OjQ1XCIsXCJpZFwiOjEsXCJuYW1lXCI6XCLkvanlpYdcIixcInBhc3N3b3JkXCI6XCIxMjM0NTZcIixcInNvdXJjZVwiOjAsXCJ0ZWxcIjpcIjEzNTg4MjIxOTQ3XCIsXCJ1cGRhdGVUaW1lXCI6XCIyMDE5LTAyLTIyIDA4OjIwOjM1XCIsXCJ2b2x1bnRlZXJJZFwiOlwidm9sdW50ZWVyMVwifSIsInBob25lIjoiMTM1ODgyMjE5NDciLCJwYXNzd29yZCI6IjEyMzQ1NiIsImV4cCI6MTU1MTE3NzYxMCwibmJmIjoxNTUxMDkxMjEwfQ.9WHK8fBdKeFD044x1yHpO6nv9-oGZH-zW93W6vTihmo'
    },
  })
} 
// 重置密码
export function resetPassword (id) {
  return Axios.post(URL+'/api/user/manager/reset/'+id, {
    headers: {
      'Content-Type': 'application/json',
      'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoie1wiY2xhc3NJZFwiOjEsXCJjb2RlXCI6XCIyMDE1MjEwNDA1MDQ5XCIsXCJjcmVhdGVUaW1lXCI6XCIyMDE5LTAyLTE3IDA3OjA0OjQ1XCIsXCJpZFwiOjEsXCJuYW1lXCI6XCLkvanlpYdcIixcInBhc3N3b3JkXCI6XCIxMjM0NTZcIixcInNvdXJjZVwiOjAsXCJ0ZWxcIjpcIjEzNTg4MjIxOTQ3XCIsXCJ1cGRhdGVUaW1lXCI6XCIyMDE5LTAyLTIyIDA4OjIwOjM1XCIsXCJ2b2x1bnRlZXJJZFwiOlwidm9sdW50ZWVyMVwifSIsInBob25lIjoiMTM1ODgyMjE5NDciLCJwYXNzd29yZCI6IjEyMzQ1NiIsImV4cCI6MTU1MTE3NzYxMCwibmJmIjoxNTUxMDkxMjEwfQ.9WHK8fBdKeFD044x1yHpO6nv9-oGZH-zW93W6vTihmo'
    },
  })
}