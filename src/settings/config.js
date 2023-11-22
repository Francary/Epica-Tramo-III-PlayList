import 'dotenv/config';

export const config = {
  port: process.env.PORT ,
  mongo:  process.env.MONGO_URI ,
  jwt_secret:  process.env.JWT_SECRET ,
  database: process.env.DATABASE_NAME ,
};
