import express, {Request, Response} from "express"
import { createUser, deleteUser, getAllUser, updateUser } from "../services/user.service";


const router = express.Router()


router.get("/", async (req: Request, res: Response) => {
    const users = await getAllUsers()

    res.json(users)
    return
})


router.post("/create", async (req: Request, res: Response) => {
    res.status(201).json(await createUser({
        
    }))
})



router.put("/update/:id", async (req: Request, res: Response) => {
    const update = await updateUser({
        
    })

    res.status(update.statusCode).json(update)
    return
})


router.delete("/delete/:id", async (req: Request, res: Response) => {
    const deleted = await deleteUser(parseInt(req.params.id)) 

    res.status(deleted.statusCode).json(deleted)
})

export default router;