#Lancement

## Install

###Dépendances
- npm install
- docker-compose : créer db pour prisma 

``docker-compose up -d``
    
    changer le nom du volume et port si besoin
- .env : configurer var d'environnement

###Prisma
- prisma : configurer DATABASE_URL dans 
    - ./.env
    - ./prisma/.env
- prisma : remplir le schema
- prisma : créer la db 

``npm run db:migrate``

###Graphql
- server/graphql : éditer typedef.ts pour correspondre avec Schema prisma
- créer query graphql front
- créer query correspondante dans server/graphql 
- générer le codegen graphql / typescript
``npm run gqlcodegen``

###Start
``npm run dev``
> localhost:3000