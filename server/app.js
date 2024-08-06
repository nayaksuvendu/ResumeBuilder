const dotenv = require('dotenv');
const Express = require('express');
const cookieParse = require('cookie-parser')
const cors = require('cors');
const morgan = require('morgan')
const UserRouter = require('./Routers/Userrouter.js');
const errorMidleware = require('./midleware/errorMidleware.js');

const ContactUs=require('./Routers/ContactusRouter.js')


dotenv.config();

const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({extended:true})); // parsing encoded url

app.use(cors({ // it allow this frontend_url only to access the server and connect frontend and server
    origin:[process.env.FRONTEND_URL] ,
    credentials:true,
}))

app.use(cookieParse()); // parsing cookies comes from header to req.cookies

app.use(morgan('dev')); // it show wrong url on terminal that user entered

app.use('/api/v1/user',UserRouter);
app.use('/api/v1/contact',ContactUs);


app.all('*',function(req,res){ //"*" mean the router that not mentioned 
    res.status(404).send("404 erroe!! page not found")
})
app.use(errorMidleware); // for sending error to user

module.exports = app;