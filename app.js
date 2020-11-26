const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
let reqTimeStamp
let reqTimeStampValues
let reqDateNow

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(function (req, res, next) {
  reqDateNow = Date.now()
  reqTimeStamp = new Date
  reqTimeStampValues = [
    reqTimeStamp.getFullYear() + '-',
    reqTimeStamp.getMonth() + 1 + '-',
    reqTimeStamp.getDate() + ' ',
    reqTimeStamp.getHours() + ':',
    reqTimeStamp.getMinutes() + ':',
    reqTimeStamp.getSeconds(),
  ]
  next()
})

app.get('/', (req, res) => {
  const resDateNow = Date.now()
  console.log(`${reqTimeStampValues.join('')} | ${req.method} from ${req.originalUrl} | totol time: ${resDateNow - reqDateNow} milliseconds`)
  res.render('index')
})

app.get('/new', (req, res) => {
  const resDateNow = Date.now()
  console.log(`${reqTimeStampValues.join('')} | ${req.method} from ${req.originalUrl} | totol time: ${resDateNow - reqDateNow} milliseconds`)
  res.render('new')
})

app.get('/:id', (req, res) => {
  const resDateNow = Date.now()
  console.log(`${reqTimeStampValues.join('')} | ${req.method} from ${req.originalUrl} | totol time: ${resDateNow - reqDateNow} milliseconds`)
  res.render('show')
})

app.post('/', (req, res) => {
  const resDateNow = Date.now()
  console.log(`${reqTimeStampValues.join('')} | ${req.method} from ${req.originalUrl} | totol time: ${resDateNow - reqDateNow} milliseconds`)
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
