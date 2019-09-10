import { rootDir } from "../dir";

export const DatabaseConfig = {
  // name: 'DatabaseConfig',
  type: "mysql",
  host: "localhost",
  port: 3306, 
  username: "root",
  password: "20180124",
  database: "wtAdmin",
  synchronize: true,
  dropSchema: true,
  logging: true,
  maxQueryExecutionTime: "1000",
  entityPrefix: "WT-",
  emitDecoratorMetadata: true,
  experimentalecorators: true,
  entities: [rootDir+'/src/entity/*.entity{.ts,.js}'],
  // migrations: [rootDir+"/src/migration/**/*.ts"],
  // subscribers: [rootDir+"/src/subscriber/**/*.ts"],
  // cli: {
  //   entitiesDir: rootDir+"/src/entity",
  //   migrationsDir: rootDir+"/src/migration",
  //   subscribersDir: rootDir+"/src/subscriber"
  // }
}
