FROM node:20-alpine

WORKDIR /app

# COPY prisma ./prisma/

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

CMD ["node", "dist/main.js"]
