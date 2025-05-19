import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dbconnect from "./db/databaseConnect.js";
import Home from "./routes/home.route.js"

const app = express()

app.use(express.json())
app.use(cookieParser())
// app.use(cors())

app.use(cors({
    origin: ['http://localhost:5173', 'https://4nlh47bt-5173.inc1.devtunnels.ms', 'http://localhost:3000'],
    // origin: '*',
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}))


app.use("/api",Home)


dbconnect()
    .then(() => {
        app.on("error", (error) => {
            console.log(`Server is not talking: ${error}`);
            throw error;
        });

        app.listen(process.env.PORT || 4000, () => {
            console.log(`⚙️ Server running on port ${process.env.PORT || 4000}`);
        });
    })
    .catch((error) => {
        console.error(`Error from app.js:::-> ${error}`);
    });




app.get('/', (req, res) => {
    res.send('Hello Lagtop OS!')
})