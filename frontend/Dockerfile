# Use a imagem base do Node.js
FROM node:latest

# Pasta tempoária para colocar os arquivos do React
WORKDIR /tmp/react

# Copia todos os arquivos para a pasta temporária
COPY . . 

# Remove a pasta node_modules
RUN rm -rf node_modules

# Instale as dependências do projeto
RUN npm install

# Build do projeto
RUN npm run build

# Cria a pasta onde será armazenado os arquivos do projeto
RUN mkdir -p /var/www/html

# Move os arquivos do projeto para a pasta criada
RUN mv dist/* /var/www/html

# Define a pasta como volume (Onde será armazenado os arquivos do projeto mesmo após o container ser removido)
VOLUME /var/www/html

# Volta para a pasta raiz
WORKDIR /

# Remove a pasta temporária
RUN rm -rf /tmp/react