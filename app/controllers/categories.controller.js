const Articles = require('../models/categories.model');
const fs = require('fs')
const multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

var upload = multer({ storage: storage }).single('catimage');



// Post API
module.exports.AddArticle = function (req, res, next) {
    // var id = req.params.id
    // if (id !== undefined) { // updating image for particular id
    //     upload(req, res, (err) => {
    //         if (err) {
    //             console.log('errors', error);
    //         } else {
    //             var imageData = fs.readFileSync(req.file.path);
    //             Articles.update(
    //                 { image: imageData },
    //                 { where: { article_id: id } }
    //             )
    //                 .then(result => {
    //                     console.log(result);
    //                     res.json({status: 200});
    //                 }
    //                 )
    //                 .catch(err => {
    //                     console.log(err);
    //                 }
    //                 )
    //         }
    //     });
    // } else { // inserting record into table
        upload(req, res, (err) => {
            if (err) {
                //console.log('errors', error);
            } else {
                // console.log(req.file + req.body.description);
                var imageData = fs.readFileSync(req.file.path);
                // console.log(imageData)
                var article = Articles.build({
                    categoryName: req.body.categoryName,
                    catimage: imageData
                });
                article.save()
                    .then(function (result) {
                        console.log(result);
                        res.json({status: 200});
                    });
            }
        });
    }
//}


// Update API
// module.exports.UpdateArticle = function (req, res, next) {
//     const {id, description} = req.body;
//     console.log(req.body);
//     Articles.update(
//         { description: description },
//         { where: { article_id: id } }
//     )
//         .then(result => {
//             console.log(result);
//             res.json({status: 200});
//         }
//         )
//         .catch(err => {
//             console.log(err);
//         }
//         )
// }