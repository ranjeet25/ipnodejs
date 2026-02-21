
logger = (req, res, next) => {
    const method = req.method;        
    const url = req.url;                
    const time = new Date().toISOString();
    console.log(`[${time}]${method}${url}`);
    
    next(); // Call the next middleware or route handler
}       

module.exports = logger;