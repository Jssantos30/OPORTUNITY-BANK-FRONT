# Base Image
FROM node:16.14.2 

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# install node packages
RUN npm set progress=false && npm config set depth 0
RUN npm install
RUN npm run build

# expose port and define CMD
EXPOSE 3000
CMD ["npm", "run", "start"]

# docker build -t bank-landing:latest .
# docker tag bank-landing:latest Alcaldiabancooprtunidad.azurecr.io/frontend_bancooprtunidad:landingV23_qa
# docker push Alcaldiabancooprtunidad.azurecr.io/frontend_bancooprtunidad:landingV23_qa
# docker run -d -p 4000:3000 Alcaldiabancooprtunidad.azurecr.io/frontend_bancooprtunidad:landingV23_qa
