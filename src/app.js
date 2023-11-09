const express  = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const app = express();
const userRouter = require('./routes/user')

app.use(bodyParser.json());
app.use(cors({}));
app.use(express.json());

const port = 3000 || process.env.PORT;
const mongoDb = process.env.MONGODB_URI || "mongodb://localhost:27017/testing"   ; 
console.log('kdjfjdfjdjdj->>>>>>>>>>>>>>>>>>>', mongoDb )
console.log('kdjfjdfjdjdj->>>>>>>>>>>>>>>>>>>', process.env.MONGODB_URI )
app.use(userRouter);

//mongodb
async function conectarBD() {

    try {
        await mongoose.connect(mongoDb, {
            useNewUrlParser: true,
            // useUnifiedTopology: true
        });
        console.log('MongoDB Conectada');
        // Puedes realizar tus consultas aquí después de haber establecido la conexión
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
    }
}

conectarBD();

app.listen(port, ()=> console.log(`Server running on port ${port}`))