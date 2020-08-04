import { Router } from 'express'
import ClassesController from '../controllers/ClassesController'
import ConnectionsController from '../controllers/ConnectionsController'

const routes = Router()
const classesControllers = new ClassesController()
const connectionsControllers = new ConnectionsController()

routes.get('/classes', classesControllers.index)
routes.post('/classes', classesControllers.create)

routes.get('/connections', connectionsControllers.index)
routes.post('/connections', connectionsControllers.create)

export default routes
