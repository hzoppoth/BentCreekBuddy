const express = require('express');
const sequelize = require('./database'); 
const reportRoutes = require('./routes/reportRoutes');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use('/report', reportRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Database connected...');
    await sequelize.sync();
    console.log('Database synced!');
  } catch (error) {
    console.error('Error: ' + error);
  }
});
