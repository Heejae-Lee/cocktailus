const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8080;
// const routes = require('./routes/index.js');
// 위 코드와 아래 코드는 같다.
const routes = require('./routes');

app.use(cors());
app.use(express.urlencoded({ extended : false}))
app.use(express.json());

// 1차 라우터 /로 들어온다
app.use("/", routes)

app.listen(PORT, ()=> console.log(`this server listening on ${PORT}`));