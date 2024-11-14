import { Response, Request , NextFunction } from "express";
import { console } from "inspector";

export function logger(){
    return (req: Request, res: Response, next: NextFunction) => {
        const date = new Date();

        console.log(`[${date.toISOString()}] ${req.path} - ${req.method}`)
        next()
    }
}