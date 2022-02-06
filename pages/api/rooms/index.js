import nc from 'next-connect'
import dbConnect from '../../../config/dbConnect'

import { allRooms, newRoom } from '../../../controllers/roomControllers'
import onError from '../../../middlewares/errors'

dbConnect()
const handler = nc({ onError })

handler.get(allRooms)
handler.post(newRoom)

export default handler
