//external module
const express = require('express');
//core module
const http = require('http');
//local module
const {mongoDbConfig} = require('./utils/dbConfig');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({ extended: false }));
const userRouter = require('./routes/userRouter');
app.use(express.static('public'));

app.use(userRouter);

const port = 3000;
mongoDbConfig( (client) => {
    console.log("Database Connected");
    app.listen(port, () => {
        console.log(`Server app listening on port http://localhost:${port}`);
    })
});
