import express, {Request, Response} from "express"
import { createComputer, deleteComputer, getAllComputers, updateComputer } from "../services/computer.service";


const router = express.Router()


router.get("/", async (req: Request, res: Response) => {
    const computers = await getAllComputers()

    res.json(computers)
    return
})


router.post("/create", async (req: Request, res: Response) => {
    res.status(201).json(await createComputer({
        
    }))
})



router.put("/update/:id", async (req: Request, res: Response) => {
    const update = await updateComputer({
        
    })

    res.status(update.statusCode).json(update)
    return
})


router.delete("/delete/:id", async (req: Request, res: Response) => {
    const deleted = await deleteComputer(parseInt(req.params.id)) 

    res.status(deleted.statusCode).json(deleted)
})

export default router;