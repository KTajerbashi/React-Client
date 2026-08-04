# همه کانتینرها را متوقف و حذف کنید
-   docker stop mongo-db mongo-ui
-   docker rm mongo-db mongo-ui

# شبکه را حذف کنید
docker network rm mongo-network

# شبکه جدید بسازید
docker network create mongo-network

# MongoDB را با نام mongo اجرا کنید
docker run --name mongo -d --network mongo-network -e MONGO_INITDB_ROOT_USERNAME=tajer -e MONGO_INITDB_ROOT_PASSWORD=tajer123 -p 27017:27017 mongo

# ۱۰ ثانیه صبر کنید تا MongoDB بالا بیاید
Start-Sleep -Seconds 10

docker run --name mongo-ui -d --network mongo-network -p 8081:8081 -e ME_CONFIG_MONGODB_SERVER=mongo -e ME_CONFIG_MONGODB_PORT=27017 -e ME_CONFIG_MONGODB_ADMINUSERNAME=tajer -e ME_CONFIG_MONGODB_ADMINPASSWORD=tajer123 -e ME_CONFIG_BASICAUTH_USERNAME=tajer -e ME_CONFIG_BASICAUTH_PASSWORD=tajer123 mongo-express

docker logs mongo-ui


Mongo Express server listening at http://0.0.0.0:8081
Database connected

http://localhost:8081