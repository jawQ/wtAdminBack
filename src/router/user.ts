import * as express from "express";
import {UserController} from "../controller/User.ct";
const router = express.Router()
// 将控制器放在外层new，会报错，具体什么原因未知：
const user = new UserController

router.use('/*', (req, res, next)=>{
  console.log('user ...')
  next()
})
// router.get('/:id', user.test)
router.get('/:id', user.test)
// router.get('/:id', (req, res)=>{
//   res.json({res: 123})
// })

export default router
// module.exports = router 