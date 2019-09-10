import * as express from "express";
const router = express.Router()
import user from "./user";

router.use('/user', user)

export default router

// const Router = () =>{
// 	const router = express.Router()
// 	return router
// }