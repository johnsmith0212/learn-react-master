const express = require('express')
const path = require('path')
const colors = require('colors')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../frontend/build')))
	app.get('*', (req, res) => {
		res.sendFile(__dirname, 'frontend', 'build', 'index.html')
	})
} else {
	app.get('/', (req, res) => {
		res.status(200).json({ message: 'Welcome to the support desk api' })
	})
}

app.use(errorHandler)

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`)
})
