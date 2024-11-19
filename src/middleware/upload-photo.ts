import multer from "multer";
import {Request} from "express"
import { root_dir } from "../config/config";

const storage = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, callback: (err: Error | null, destination: string) => void) => {
        const storagePath = `${root_dir}/public/player_photo/`
        callback(null, storagePath)
    },
    filename: (req: Request, file: Express.Multer.File, callback: (err: Error | null, destination: string) => void) => {
        const fileName = `${Math.random()}-${file.originalname}`
        callback(null, fileName)
    },
})

const storage2 = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, callback: (err: Error | null, destination: string) => void) => {
        const storagePath = `${root_dir}/public/club/`
        callback(null, storagePath)
    },
    filename: (req: Request, file: Express.Multer.File, callback: (err: Error | null, destination: string) => void) => {
        const fileName = `${Math.random()}-${file.originalname}`
        callback(null, fileName)
    },
})

const fileFilter = (
    req: Request,
    file: Express.Multer.File,
    callback: multer.FileFilterCallback
) => {
    /** define allowed extenstion */
    const allowedFile = /png|jpg|jpeg|gif/
    /** check extenstion of uploaded file */
    const isAllow = allowedFile.test(file.mimetype)
    if (isAllow) {
        callback(null, true)
    }else {
        callback(new Error("erorr"))
    }
}

export const uploadPhoto = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {fileSize: 10 * 1024 * 1024} // 2mb
})

export const uploadPhotoClub = multer({
    storage: storage2,
    fileFilter: fileFilter,
    limits: {fileSize: 10 * 1024 * 1024} // 2mb
})