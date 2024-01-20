import { configDB } from "./config/dbConfig.js";
import app from "./app.js";
const PORT = process.env.PORT || 5000;
configDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running in on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(`Error: ${error.message}`);
  });
