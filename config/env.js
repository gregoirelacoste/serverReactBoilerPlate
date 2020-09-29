require('dotenv').config()

if (!process.env.NODE_ENV) {
  throw new Error(
    `Vous n'avez pas défini la variable d'environnement NODE_ENV`
  )
}
