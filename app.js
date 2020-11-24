const express = require('express')
const app = express()
const port = 3000

app.use(function (req, res, next) {
  const method = req.method
  const url = req.originalUrl
  const date = new Date
  const dateValues = [
    date.getFullYear() + '-',
    date.getMonth() + 1 + '-',
    date.getDate() + ' ',
    date.getHours() + ':',
    date.getMinutes() + ':',
    date.getSeconds()
  ]
  console.log(`${dateValues.join('')} | ${method} form ${url}`)
  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
