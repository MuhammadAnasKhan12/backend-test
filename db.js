const {Pool}=require("pg")
const pool=new Pool({
    host: 'localhost',
    database: 'anas',
    user: 'postgres',
    password: 'anas123',
    port: 5432,
})
pool.connect().then(()=>console.log("connected")).catch(()=>console.log("not connected"))

module.exports=pool;