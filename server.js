var express = require('express');
var multer = require('multer');


var app = express();


var storage = multer.memoryStorage();
var upload = multer({
    storage: storage
});


app.use('/', express.static('client'));


app.post('/get-file-size', upload.single('data'), function(request, response) {
    if (request.file) {
        response.send({
            filename: request.file.originalname,
            size: request.file.size,
            type: request.file.mimetype
        });
    }
    else {
        response.status(500).json({
            error: `No file selected`
        });
    }
});

app.listen(process.env.PORT || 5000);
