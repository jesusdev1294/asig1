
# 1 
Instalar las siguientes tecnologias: 
- node js version 18.0.0 o mas 
- docker

# 2 
 En el terminal o shell ir a la raiz del proyecto y ejecutar el siguiente comando para instalar las dependencias.:
 -  npm install

# 3
Levantar el proyecto dockerizado para base de datos y api con el siguiente comando   
- npm run start:compose


# Si deseas Levantar el contenedor solo  de mongo y levantar el api a parte seria :
- docker-compose up -d
- npm run start:dev
- nota: debes comentar el archivo docker-compose.yml las lineas desde la numero 3 a la numero 17 y tener una base de datos mongo levantada. En el archivo app.js puedes cambiar la url de mongo si tienes otra distinta.


# Dockefile solo levantar el api dockerizado sin la base de datos mongo.
- docker build -t app:latest .


# Descripcion de api 

# Si deseas ejecutar los diferentes endpoints del api debes dirigirte a un cliente ejemplo postman y realizar el siguiente request :

- nota:  Puedes tambien ejecutar cada enndpoint en el archivo del proyecto requests.http utilizando visual studio code

### Crear Usuario
- Debes crear varios usuarios manualmente para poblar la base de datos, tambien debes tomar en cuenta que no puedes agregar nuevos usuarios con el mismo "dni" .

POST http://localhost:3000/users
Content-Type: application/json

 {
  "name": "Alex",
  "dni":"178",
  "gender":"female",
  "email": "alex@example.com",
  "password": "password123"
}

### Buscar todos los Usuarios

GET http://localhost:3000/users

### Actualizar Usuario
- Para actualizar un usuario en la url debes enviar el dni como parametro al final, ejemplo: 123,
si no existe, el usuario se guardara automaticamente.

PUT http://localhost:3000/users/123
Content-Type: application/json

 {
  "name": "Alex",
  "gender":"female",
  "email": "alex@example.com",
  "password": "password123"
}

### Buscar Usuario por genero
- Para buscar un usuario por genero debes agregar a la url como parametro el genero que deseas buscar ejemplo : female

GET http://localhost:3000/users/female


### Borrar Un usuario 
- para borrar un usuario desbes agregar como parametro al al final de la url el dni , ejemplo: 1
DELETE http://localhost:3000/users/1

