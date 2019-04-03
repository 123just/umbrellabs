import Axios from 'axios'
export function getUmbrellaList (data) {
  return Axios.post('/api/umbrella/manager/', data, {
    headers: {
      'Content-Type': 'application/json',
      'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoie1wiY2xhc3NJZFwiOjEsXCJjb2RlXCI6XCIyMDE1MjEwNDA1MDQ5XCIsXCJjcmVhdGVUaW1lXCI6XCIyMDE5LTAyLTE3IDA3OjA0OjQ1XCIsXCJpZFwiOjEsXCJuYW1lXCI6XCLkvanlpYdcIixcInBhc3N3b3JkXCI6XCIxMjM0NTZcIixcInNvdXJjZVwiOjAsXCJ0ZWxcIjpcIjEzNTg4MjIxOTQ3XCIsXCJ1cGRhdGVUaW1lXCI6XCIyMDE5LTAyLTIyIDA4OjIwOjM1XCIsXCJ2b2x1bnRlZXJJZFwiOlwidm9sdW50ZWVyMVwifSIsInBob25lIjoiMTM1ODgyMjE5NDciLCJwYXNzd29yZCI6IjEyMzQ1NiIsImV4cCI6MTU1MTE3NzYxMCwibmJmIjoxNTUxMDkxMjEwfQ.9WHK8fBdKeFD044x1yHpO6nv9-oGZH-zW93W6vTihmo'
    },
  });
}