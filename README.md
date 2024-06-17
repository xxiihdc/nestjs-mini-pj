### To run project

- Create .env file
  ```
  # .env
  DATABASE_URL=mysql://root:root@db:3306/ductvh-wsm
  JWT_SECRET_KEY="your secret key"
  JWT_EXPIRE_TIME=10m
  ```
- Run:
  ```
  docker compose build
  docker compose up -d
  ```

- More information:

  ```
  If using Macos please check it: https://docs.docker.com/desktop/synchronized-file-sharing/
   to synchronized file on host and container. :xd
  ```
