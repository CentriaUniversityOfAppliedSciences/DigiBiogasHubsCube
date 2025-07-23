DigiBiogasHubs cubejs service

.env file
```
CUBEJS_DB_HOST=host.docker.internal
CUBEJS_DB_PORT=5432
CUBEJS_DB_NAME=digibiogashubsdbname
CUBEJS_DB_USER=usernamefordigibiogashubsdb
CUBEJS_DB_PASS=passwordfordigibiogashubsdb
CUBEJS_DB_TYPE=postgres
CUBEJS_DB_SSL=false # if postgresql in docker false else true
CUBEJS_EXTERNAL_DEFAULT=true
CUBEJS_SCHEDULED_REFRESH_DEFAULT=true
CUBEJS_DEV_MODE=false
CUBEJS_SCHEMA_PATH=model
CUBEJS_CUBESTORE_HOST=cubestore
CUBEJS_JWT_KEY=same-key-as-in-digibiogashubs-backend-jwtkey
CUBEJS_API_SECRET=same-key-as-in-digibiogashubs-backend-jwtkey
CUBEJS_REFRESH_WORKER=true
```

change postgresql conf to allow incoming from docker ip

start with "docker compose up"
stop with "docker compose stop"
