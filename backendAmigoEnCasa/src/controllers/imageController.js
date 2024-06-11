import multer from "multer";


const storage = multer.diskStorage({
destination:function (res, file, cb) {
    cb(null, "public/img");
},

filename: function (res, file, cb) {
    
    cb(null, file.originalname);
},
});

const upload = multer({ storage: storage });

export const subirImagen=upload.single("images")
