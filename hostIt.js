const server = require("express");
const _ = new server();
const port = 3000;
require("colors");

const keepAlive = async () => {
    _.get("/", async (req, res) => {
        res.send("Now keeping it alive!")
    })

    _.listen(3000, async () => {
        console.log(`[` + `CYBORG`.red + `]` + ` - ` + `Replit Hosted Successfully!`.cyan);
    })
}

module.exports = keepAlive;