import { MikroORM } from "@mikro-orm/core"
require('dotenv').config();

//process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {host: process.env.DB_HOST,dialect: process.env.DIALECT}

const main = async() => {
    const orm = await MikroORM.init({
        dbName: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS
    });
    console.log("hello world2");
}

main();