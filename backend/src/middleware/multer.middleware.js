import multer from "multer";

const storage = multer.diskStorage({
  destination: 'public/temp',
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
    // destination: function (req, file, cb) {
  
    //   cb(null, "./public/temp")
    // },
    // filename: function (req, file, cb) {
    //   cb(null, file.originalname)
    // }
    
  })

 export const upload = multer({ storage: storage })
