const multer = require('multer')

const Storage = multer.diskStorage({
    destination: function(req, res ,next){
        next(null, './uploads/img')
    },
    filename: function(req, file, next){
        next(null, Date.now()+file.originalname)
    }
})

const upload = multer({storage: Storage})

module.exports = upload