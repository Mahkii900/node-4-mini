require('dotenv').config()
const express = require('express')
const app = express()
const {PORT} = process.env
const messCtrl = require('./messagesCtrl')

app.use(express.json())

app.get('/api/messages', messCtrl.getAllMessages)

app.listen(PORT, () => console.log(`Captain's Log#${PORT}: We are lost in space...`))