const express = require('express');
const con = require('./config');
const app = express();

app.use(express.json());

app.get("/Find", (req, resp) => {
    con.query("select * from Employees", (err, result) => {
        if (err) {
            resp.send("There Something Wrong");
        }
        else {
            resp.send(result);
        }
    })

});

app.post('/Insert', (req, resp) => {
    //const data={Emp_ID:'101',Emp_Name:"Rutuja Patil",Emp_Add:"Mumbai"}
    const data = req.body;
    con.query("insert into Employees set?", data, (err, result, fields) => {
        if (err) err;
        resp.send(result);
    })
})

// app.put('/Update',(req,resp)=>{
//     const data=["Nidhi Sharama","Rajsthan",101];
//     con.query("update Employees set Emp_name=?,Emp_Add=? where EMP_ID=?",data,(err,result,fields)=>{
//         if(err) err;
//         resp.send(result);
//     })
// })


app.put('/:Emp_ID', (req, resp) => {
    const data = [req.body.Emp_Name, req.body.Emp_Add, req.params.Emp_ID];
    con.query("update Employees set Emp_name=?,Emp_Add=? where EMP_ID=?", data, (err, result, fields) => {
        if (err) err;
        resp.send(result);
    })
})



app.delete('/:Emp_Name',(req,resp)=>{
    const data=[req.params.Emp_Name];
    con.query("delete from Employees where Emp_Name=?",data,(err,result,fields)=>{
        if(err) err;
        resp.send(result);
    })
})

 
app.delete('/:Emp_Name',(req,resp)=>{
   
    con.query("delete from Employees where Emp_Name=" +req.params.Emp_Name,(err,result,fields)=>{
        if(err) err;
        resp.send(result);
    })
})

app.listen(5000);