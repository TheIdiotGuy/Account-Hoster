const eris = require('eris');
const keepAlive = require("./hostIt");
require("dotenv").config();
require("colors")

const User = new eris(process.env.token)

let $status_1 = true;
let $status_2 = true;
let $status_3 = true;

User.on('hello', function () {

    console.log(`[` + `CYBORG`.red + `]` + ` - ` + `Account Hosted Successfully!`.cyan);

    setInterval(() => {
        if ($status_1) {
            User.editStatus("idle", { name: "TheIdiotGuy", type: 2 })
            $status_1 = false;
        } else if ($status_2) {
            User.editStatus("idle", { name: "JavaScript", type: 0 })
            $status_2 = false;
        } else if ($status_3) {
            User.editStatus("idle", { name: "Cyborg Developement", type: 5 })
            $status_3 = false;
        } else {
            User.editStatus("idle", { name: "Your Cam", type: 3 })
            $status_1 = true;
            $status_2 = true;
            $status_3 = true;
        }
    }, 10000)

});

User.on('error', function (e) {
    console.log(e)
})

keepAlive();
User.connect();