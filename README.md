
<h1 align="center" style="display:flex; align-items: center; justify-content: center">
    <img alt="glauberbrack" title="#glauberbrack" src=".github/logo.png" width="150px" />
    <img alt="glauberbrack" title="#graphql" src=".github/graphql.png" width="100px" />
</h1>



<h4 align="center" style="margin-bottom: 20px">
  GraphQL - Blog Client & Server
</h4>

<div align="center">
  <img src="https://img.shields.io/static/v1?label=React&message=18.2.0&color=61DAFB&logo=react" style="margin-right: 10px;" />
  <img src="https://img.shields.io/static/v1?label=GraphQL&message=16.6.0&color=E10098&logo=graphql" style="margin-right: 10px;" />
  <img src="https://img.shields.io/static/v1?label=ApolloClient&message=3.6.9&color=311C87&logo=apollographql" style="margin-right: 10px;" />
  <img src="https://img.shields.io/static/v1?label=ApolloServer&message=2.25.0&color=311C87&logo=apollographql" style="margin-right: 10px;" />
   <img src="https://img.shields.io/static/v1?label=Prisma&message=2.24.1&color=2D3748&logo=prisma" style="margin-right: 10px;" />
</div>

<p align="center" style="width: 100%; display: flex; flex-direction: row; justify-content: center; margin: 20px 0;">
  <a href="#book-descrpition" style="margin: 0 10px">Description</a> |
  <a href="#notebook-running"style="margin: 0 10px">Running</a> 
</p>
<br>

## :book: Description
Sup, there! This monorepo has a client and a server with Apollo and Prisma. It's pretty simple to run it and you can try out how to work with queries and mutations.

---

## :notebook: Running Server

```bash
# Clone the project
$ git clone https://github.com/glauberbrack/blog-graphql

# Create a docker container for postgress DB
$ docker run --name blog-graphql -e POSTGRES_PASSWORD=yourpassword -p 5432:5432 -d postgres

# Go to Server folder and change yours variables after create a new .env
$ cd server && cp .env.example .env

# Install all dependecies
$ yarn install && yarn dev

# Open another terminal and install the client dependencies
$ cd client && yarn install && yarn start
```

## 🤓 Found Me
LinkedIn: https://www.linkedin.com/in/glauber-brack/

---
