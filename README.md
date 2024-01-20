# Devlopment
Pasos para levantar la app en desarrollo

1. Levantar base de datos
```
docker compose up -d
```
2. Crear una copia del .env.template, y renombrarlo a .env
3. Reemplazar variables de entorno
4. Ejecutar ```npm install```
5. Ejecutar ```npm run dev```
6. Ejecutar estos comandos de prisma
```npx prisma migrate dev```
```npx prisma generate```
7. Ejecutar SEED para crear la base de datos local - http://localhost:3000/api/seed

# Prisma Commands

```
npx prisma init
npx prisma migrate dev
npx prisma generate

```
