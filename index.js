/**
 * 
 * @author TheIdiotGuy <kroko.dev.99@gmail.com>
 * @license
 * Copyright (c) [year] [fullname]

 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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