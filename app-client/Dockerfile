# Dockerfile
FROM node:20-alpine AS builder

WORKDIR /app

# کپی فایل‌های package
COPY package*.json ./
COPY tsconfig*.json ./

# نصب وابستگی‌ها (به جای npm ci از npm install استفاده کن)
RUN npm install

# کپی بقیه فایل‌ها
COPY . .

# build
RUN npm run build

# مرحله production
FROM node:20-alpine AS production

WORKDIR /app

# کپی فایل‌های build شده
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# نصب serve
RUN npm install -g serve

EXPOSE 3030

CMD ["serve", "-s", "dist", "-l", "3030"]