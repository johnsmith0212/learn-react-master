const express = require('express')
const router = express.Router({ mergeParams: true })
const { getTickets, createTicket, getTicket, deleteTicket, updateTicket } = require('../controllers/ticketController')

const { protect } = require('../middleware/authMiddleware')
const { route } = require('./noteRoutes')
const noteRouter = require('./noteRoutes')

router.use('/:ticketId/notes', noteRouter)

router.route('/').get(protect, getTickets).post(protect, createTicket)

router.route('/:id').get(protect, getTicket).delete(protect, deleteTicket).put(protect, updateTicket)

module.exports = router
