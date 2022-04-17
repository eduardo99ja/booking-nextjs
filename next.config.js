module.exports = {
  env: {
    DB_LOCAL_URI: 'mongodb://localhost:27017/bookit',
    DB_URI: '',

    STRIPE_API_KEY: '',
    STRIPE_SECRET_KEY: '',

    STRIPE_WEBHOOK_SECRET: '',

    CLOUDINARY_CLOUD_NAME: 'du17vjpcn',
    CLOUDINARY_API_KEY: '856255745964269',
    CLOUDINARY_API_SECRET: 'kyP8pUBMm_49q8HhNpQUSkR38Fg',

    SMTP_HOST: '',
    SMTP_PORT: '',
    SMTP_USER: '',
    SMTP_PASSWORD: '',
    SMTP_FROM_EMAIL: '',
    SMTP_FROM_NAME: '',

    NEXTAUTH_URL: '',
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
}
