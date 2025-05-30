# Etapa 1: build y entorno de producción
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia archivos necesarios
COPY package*.json tsconfig*.json ./
RUN npm install

# Copia el resto del código fuente
COPY ./src ./src

# Compilar TypeScript
RUN npm run build

# Exponer el puerto que usa la app
EXPOSE 3000

# Ejecutar la aplicación compilada
CMD ["node", "dist/index.js"]
