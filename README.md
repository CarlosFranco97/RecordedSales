# Recorded Sales App

Aplicación creada principalmente para el manejo de los registros de ventas, compras y efectivo a retirar de una empresa de industria panadera.
La moneda que se maneja es peso colombiano.
Manejo de estado con useReducer y useContext.

## Inicio de sesion: 
## USER: Francos12345
###
## PASSWORD: 123456

## Pasos para poder descargar y visualizar la app: 
1. Renombrar el archivo .env.template por .env

2. Hacer los cambios respectivos en las variables de entorno

... 
VITE_API_URL=http://localhost:4000/api
...

## Tecnologías utilizadas

Node.js - Entorno de ejecución para JavaScript en el servidor.

Express - Framework minimalista para la creación de API REST.

MongoDB - Base de datos NoSQL para el almacenamiento de registros.

Mongoose - ODM para la manipulación de datos en MongoDB.


## Librerías utilizadas

Dayjs - Manejo y formateo de fechas.

Jsonwebtoken (JWT) - Autenticación y autorización de usuarios.

ExcelJS - Generación de reportes en formato Excel.

html-pdf - Conversión de documentos HTML a PDF.

## Mejoras futuras

Implementación de roles y permisos para usuarios.

Integración con servicios de pago.

Dashboard estadístico con gráficos interactivos.

Migrar a tailwind

## Instalación y configuración

1. Clonar el repositorio:
git clone https://github.com/carlosfranco97/recordersaledbackend.git

2. Acceder al directorio del proyecto: 
cd recordersaledbackend

3. Renombrar el archivo .env.template a .env y configurar las variables de entorno:
VITE_API_URL=http://localhost:4000/api

4. Instalar las dependencias del proyecto:
npm install

5. Iniciar el servidor:
npm start

## Autor
Carlos Franco - GitHub
