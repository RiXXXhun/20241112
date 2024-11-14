import express, {Request, Response} from "express"
import { createPart, deletePart, getAllParts, updatePart } from "../services/part.service";


const router = express.Router()


router.get("/", async (req: Request, res: Response) => {
    const parts = await getAllParts()

    res.json(parts)
    return
})


router.post("/create", async (req: Request, res: Response) => {
    res.status(201).json(await createPart({
        
    }))
})



router.put("/update/:id", async (req: Request, res: Response) => {
    const update = await updatePart({
        
    })

    res.status(update.statusCode).json(update)
    return
})


router.delete("/delete/:id", async (req: Request, res: Response) => {
    const deleted = await deletePart(parseInt(req.params.id)) 

    res.status(deleted.statusCode).json(deleted)
})

export default router;