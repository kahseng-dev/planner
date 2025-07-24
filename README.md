# Planner App
Planner is a distraction-free planning tool for forward-thinkers and helps you map your goals and tasks.

<img alt="spring" src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=fff"/> <img alt="react" src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=fff"/> <img alt="react-router" src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=fff"/> <img alt="axios" src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=fff"/> <img alt="tailwindcss" src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=fff"/> <img alt="typescript" src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=fff"/> <img alt="bun" src="https://img.shields.io/badge/bun-000?style=for-the-badge&logo=bun&logoColor=fff"/> <img alt="vite" src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=fff"/> <img alt="mysql" src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=fff"/>

# Overview

<img src="docs/overview.png" />

---
# Features
## Pick your timeline
Look at your daily, weekly, monthly, and yearly goals all in one place.

<img src="docs/select-timeline.png" />

---
## Manage your goals and tasks
No more staring at huge goals feeling overwhelmed. Break them down into smaller pieces so that you can tackle individually.

<img src="docs/manage-goal.png" />

---
## Store your data locally
Planner allows you to continue as a guest without the need to register an account.

<img src="docs/continue-as-guest.png" />

---
# Development
1. Install the project
```
git clone https://github.com/kahseng-dev/planner.git
cd planner\web
bun install
```

2. Configure your `application.yaml` under `planner\src\main\resources\application.yaml`
```
spring:
  application:
    name: planner
  datasource:
    url: jdbc:mysql://localhost:3306/planner-db
    username: {YOUR_SQL_USERNAME} 
    password: {YOUR_SQL_PASSWORD} 
```

3. Start the frontend web application using
```
bun run dev
```

4. Start the backend springboot application using
```
./mvnw spring-boot:run
```
If you're on Windows:
```
./mvnw.cmd spring-boot:run
```

5. Once running, the application will be available at:
```
http://localhost:5173/
```

# Shoutouts
Thank you for the introduction tutorials and educational resources:
- Mosh Hamedani, OktaDev, and EmbarkX - React Frontend and Springboot Intergration
- Sergio Lema - Spring Security and JWT Authentication