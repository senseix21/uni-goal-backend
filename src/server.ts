import { Server } from 'http';
import httpStatus from 'http-status';
import app from "./app";
import config from "./config";
import ApiError from "./errors/ApiError";


process.on('uncaughtException', error => {
    console.error(error);
    process.exit(1);
});

let server: Server;
const connectDB = async () => {
    try {
        console.log("Database connection established successfully!");
        app.listen(config.port, () => {
            console.log("App listening on port " + config.port);
        })

    } catch (error) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid request from server');
    }
}



process.on('unhandledRejection', error => {
    if (server) {
        server.close(() => {
            console.error(error);
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
});


connectDB();
process.on('SIGTERM', () => {
    console.log('SIGTERM is received');
    if (server) {
        server.close();
    }
});
