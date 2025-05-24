import multer from "multer";

const storage = multer.diskStorage({
   filename: function(req,cb,file){

    cb(null,file.originalname)

   }
})


const upload = multer({storage:storage})


export default upload