FROM openjdk:17-oracle
WORKDIR /app
COPY ../build/libs/contact-book-web-0.0.1-SNAPSHOT.jar ContactBook.jar
ENV SOCKET_SERVER_HOST=postgres
ENV SOCKET_SERVER_PORT=5432
CMD ["java", "-jar", "ContactBook.jar"]