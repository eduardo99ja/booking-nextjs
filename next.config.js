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

    SMTP_HOST: 'smtp.mailtrap.io',
    SMTP_PORT: '2525',
    SMTP_USER: '08f4273ad6727b',
    SMTP_PASSWORD: 'dd190619f58bc2',
    SMTP_FROM_EMAIL: 'BookIt',
    SMTP_FROM_NAME: 'noreply@bookit.com',

    NEXTAUTH_URL: '',
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
}
