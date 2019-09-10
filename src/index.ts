// import {Request, Response} from "express"
import "reflect-metadata"
import { createConnection } from "typeorm"
import * as express from "express"
import * as bodyParser from "body-parser"
import router from "./router/index"
// import { NextFunction, Request, Response } from "express"
// import {Routes} from "./router/routes"
import { User } from "./entity/User.entity"
const PORT = process.env.npm_package_config_port || 3000
// 如果忽略createConnection函数中参数，则在ormconfig中读取：

createConnection()
  .then(connection => {
    console.log(connection)
    const app = express();
    app.set('port', PORT)
    app.use(bodyParser.json())
    app.use("*", (req, res, next) => {
    //   console.log("任意路由都要经过我这~")
      next()
    })
    app.use(router)
    // app.use('/api', router)

    app.listen(3000)

    console.log(
      `"Express server has started on port ${app.get('port')}. Open http://localhost:${app.get('port')} to see results`
    )
  })
  .catch(error => console.log(error))