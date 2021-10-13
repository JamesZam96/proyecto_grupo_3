const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const indexRoutes = require('./routes/index')
const path = require('path')

// configuraciones
  // const port = 3000
app.set('port', process.env.PORT || 3000);
mongoose.connect('mongodb+srv://james:jameszam960212@cluster0.zlimg.mongodb.net/Cluster0?retryWrites=true&w=majority')
.then(db=>console.log('connected'))
.catch(err=>console.log(err))
app.use('/public', express.static(path.join(__dirname, '../uploads/img/')))

//middlewires
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))
app.use(cors())

// rutas
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use('/',indexRoutes);


// inicio servidor
  // app.listen(port, () => {
  //   console.log(`Example app listening at http://localhost:${port}`)
  // })
app.listen(app.get('port'), () => {
  console.log(`Example app listening`)
})