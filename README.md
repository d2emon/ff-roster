# ff-roster

Roster for Fighting Fantasy games.

## Как запускать

```
docker compose up --build
```

API Gateway будет доступен:

<http://localhost:3000>

## Prisma — и сразу правильно

```
npx prisma init
```

```
npx prisma migrate dev
```

или, если БД уже есть:

```
npx prisma migrate deploy
```


## JWT — сразу по-взрослому (RS256)

Генерим ключи (один раз)

```
mkdir -p infra/keys

openssl genrsa -out infra/keys/private.pem 2048
openssl rsa -in infra/keys/private.pem -pubout -out infra/keys/public.pem
```
