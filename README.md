# Node.js Challenge
Jobsity Code Challenge

### tech

NestJS as the backend-framework
Sequelize as the ORM
Sqlite as the DB
JWT for authorization
docker-compose for orchestration


### Endpoints

Endpoints remain the same as the requirement

POST http://localhost:3000/register
GET http://localhost:3000/stock?q=msft.us
GET http://localhost:3000/history
GET http://localhost:3000/stats

super user role `super_user`

stocks_service running in port 3001

### Manual test

to test the endpoints I have used `REST Client` which I included 2 files inside the folder `/http`

to test the super_user you need to login with the super_user request