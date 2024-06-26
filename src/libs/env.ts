import dotenv from 'dotenv'

dotenv.config()

export const ENV = {
  PORT: process.env.PORT || 3000,
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
}
