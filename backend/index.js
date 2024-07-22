const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')


const app = express()
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))
// app.use(cors({
//     origin : process.env.ADMIN_URL,
//     credentials : true
// }))
app.use(express.json())
app.use(cookieParser())

app.use("/api",router)

const PORT = 8080 || process.env.PORT


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})


// const express = require('express');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// require('dotenv').config();
// const connectDB = require('./config/db');
// const router = require('./routes');

// const app = express();

// // Custom CORS Middleware
// const allowedOrigins = [process.env.FRONTEND_URL, process.env.ADMIN_URL];
// app.use(cors({
//     origin: function (origin, callback) {
//         // Allow requests with no origin (like mobile apps or curl requests)
//         if (!origin) return callback(null, true);
//         if (allowedOrigins.indexOf(origin) === -1) {
//             const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//             return callback(new Error(msg), false);
//         }
//         return callback(null, true);
//     },
//     credentials: true
// }));

// app.use(express.json());
// app.use(cookieParser());

// app.use("/api", router);

// const PORT = process.env.PORT || 8080;

// connectDB().then(() => {
//     app.listen(PORT, () => {
//         console.log("Connected to DB");
//         console.log("Server is running on port " + PORT);
//     });
// });
