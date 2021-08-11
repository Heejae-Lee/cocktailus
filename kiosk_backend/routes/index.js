const express =require('express');
const userRouter = require('./hose.js');
const router = express.Router();

// 1차 라우터가 /
// 2차 라우터가 /api/hose
// http://localhost:8080/api/hose 라고 시작되는 부분은 모두 hoseRouter로
router.use("/api/hose", userRouter);

module.exports = router;
