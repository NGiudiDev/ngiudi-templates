import express from 'express';

import { config } from "./config/environment.js";

const app = express();

//? app configuration
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//TODO: add routers

//? server initialization.
app.listen(config.server.port, () => {
	console.log(`Server runing in port ${config.server.port}...`);
});
