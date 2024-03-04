const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json("Hey bud! Tamal here. This is my first ever backend that I have deployed in AWS(Amazon Web Services), the same platform where Messenger, WhatsApp, Netflix type big tech backends are deployed. If I gave you the IP address of this backend then you might be someone really close to me. You're now a witness of my DevOps journey. Wish me luck and I wish you the best :)"))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))