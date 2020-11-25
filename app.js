const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(function (req, res, next) {
  const method = req.method
  const url = req.originalUrl
  const reqTimeStamp = new Date
  const reqTimeStampValues = [
    reqTimeStamp.getFullYear() + '-',
    reqTimeStamp.getMonth() + 1 + '-',
    reqTimeStamp.getDate() + ' ',
    reqTimeStamp.getHours() + ':',
    reqTimeStamp.getMinutes() + ':',
    reqTimeStamp.getSeconds(),
  ]
  next()
  const resTimeStamp = new Date
  console.log(`${reqTimeStampValues.join('')} | ${method} from ${url} | totol time: ${resTimeStamp.getMilliseconds() - reqTimeStamp.getMilliseconds()} milliseconds`)
})

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/new', (req, res) => {
  res.render('new')
})

app.get('/:id', (req, res) => {
  res.render('show')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
