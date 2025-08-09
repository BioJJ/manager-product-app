# Stage 0: compile angular frontend
FROM node:18.16.0-alpine AS build
WORKDIR /app

# Cache de dependências
COPY package.json package-lock.json ./
RUN npm ci

# Copiar o resto dos arquivos
COPY . .

# Build da aplicação
RUN npm run build --prod

# Stage 1: serve app with nginx server
FROM nginx:alpine
COPY --from=build /app/dist/app /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
