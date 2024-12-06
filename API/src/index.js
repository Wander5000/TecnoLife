//* Aqui se Hacen Importaciones
const express=require('express');
const morgan= require('morgan');
const mongoose=require('mongoose');
const cors=require('cors')

//* Se hace conexion con MongoDB y su base correspondiente
mongoose.connect('mongodb://localhost/TecnoLife')
.then(DB => console.log('Conectado a la base de datos'))
.catch(err => console.error(err));

//* Se instancia express
const app = express();

//* Se Configura el Puerto
app.set('port', process.env.PORT || 524);

//* MiddleWares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//* Rutas
app.use(require('./routes/products'));

app.listen(app.get('port'), () => {
  console.log(`El servidor esta escuchando al puerto ${app.get('port')}`)
})