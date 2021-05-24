import mongoose from 'mongoose';


async function connect() {
    try {
        const URI:any= process.env.DB_URI;
        // console.log(URI);
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology:true
        }).then(() => {
            console.log("DATABASE CONNECTED")
        })
    }
    catch (error) {
        console.log("ERROR", error.message);
    }
}

export default connect;