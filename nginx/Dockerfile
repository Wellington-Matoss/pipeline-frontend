# Versão do NGINX
FROM nginx:1.15.0

# Remove o arquivo de configuração padrão do NGINX
RUN rm /etc/nginx/conf.d/default.conf

# Copia o arquivo de configuração do NGINX
COPY nginx.conf /etc/nginx/conf.d
