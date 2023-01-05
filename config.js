const mysql=require('mysql');  //Imported Package
const con=mysql.createConnection({ //Here we created connection
    host:'localhost',
    user:'root',
    password:'root',
    database:'Company'
});

con.connect((err)=>{    //Here we check our database is connected or not.
    if(err){
        console.log("Not Connected");
    }
    else{
        console.log("connected");
    }
})

module.exports=con;  // Ecported 