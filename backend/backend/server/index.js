const	http = require('http')
	express = require('express')
	mongoose = require('mongoose')
	OperacionesUsuario = require('./../bd/OperacionesUsuario.js')
	Router = require('./Router.js')
	bodyParser = require('body-parser')	
	cors = require('cors')

const	PORT = 8080,
	URL_DB = 'mongodb://localhost/tienda'
	app = express();
	server = http.createServer(app)

mongoose.connect(URL_DB)

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());


app.use('/',Router)

server.listen(PORT,()=>console.log('El servidor iniciado correctamente'))
