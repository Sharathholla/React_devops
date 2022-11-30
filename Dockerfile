FROM node:10.15 as Builder
RUN apt install git
RUN git clone -b sonarqube https://github.com/Sharathholla/React_devops.git
RUN cd React_devops
WORKDIR React_devops
RUN npm install
RUN npm install sonarqube-scanner
RUN node sonarqube-scanner.js
RUN npm run-script build

FROM nginx:1.22.1
EXPOSE 8080
COPY --from=Builder /React_devops/build/* /usr/share/nginx/html/
COPY --from=Builder /React_devops/build/static /usr/share/nginx/html/static
