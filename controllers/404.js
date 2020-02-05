exports.getErrors = (req, res, next) => {
    res.render('404.ejs', {
        pageTitle: 'Error Page',
        path: ''
    })
}