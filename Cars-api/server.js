const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./Config/db');
const carRoutes = require('./routes/carRoutes');
const errorHandler = require('./errorHandling.js/errorHandler.js');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use('/api/cars', carRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));