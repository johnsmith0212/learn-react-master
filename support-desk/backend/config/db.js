const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI)
		console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
	} catch (error) {
		console.log(`Error: ${error}`.red.underline.bold)
		process.exit(1)
	}
}

module.exports = connectDB
