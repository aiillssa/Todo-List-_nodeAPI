const errorMiddleware = (err, req, res, next)=>{
    console.log('here is an error middleware')
    //if we get code, just show it, if not, show 500 as status code
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode)
    //detect which mode our program is, if it's in dev, then show stack message.
     res.json({message: err.message, stack: process.env.NODE_ENV == "development" ? err.stack : "top secret"})
}

module.exports = errorMiddleware