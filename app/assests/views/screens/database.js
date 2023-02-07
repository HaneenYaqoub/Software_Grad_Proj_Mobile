const {createPool}=require('mysql');
const pool=createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"nodejs",
    connectionLimit:10
});
pool.query(`SELECT * FROM login`,(err,result)=>{
    return console.log(result);

}
);