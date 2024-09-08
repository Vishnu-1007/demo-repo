const express = require("express")

const app = new express()
app.use(express.json());

let users = [];

app.post('/signup', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username : username,
        password : password
    });
    res.json({
        message : "Sign-up successful"
    });

})


app.post('/signin', function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const userLogin = users.find(u=>u.username);
    const userLogin1 = users.find(u=>u.password);
    if(userLogin.username==username&&userLogin1.password==password){
        res.json({
            message : "SignIn Successful"
        })
    }
})



app.listen(3000);