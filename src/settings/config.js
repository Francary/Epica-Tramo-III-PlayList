import 'dotenv/config';

export const config = {
  port: process.env.PORT ,
  mongo: "mongodb://127.0.0.1:27017/" || process.env.MONGO_URI,
  jwt_secret:  process.env.JWT_SECRET ,
  database: process.env.DATABASE_NAME ,
};
