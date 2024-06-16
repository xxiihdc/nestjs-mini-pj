### To run project

- Create .env file
  ```
  # .env
  DATABASE_URL=mysql://root:root@localhost:3306/ductvh-wsm
  JWT_SECRET_KEY="your secret key"
  JWT_EXPIRE_TIME=10m
  ```
- RUN:
  ```
  docker compose build
  docker compose up -d
  ```
