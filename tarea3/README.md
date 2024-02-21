# Tarea1

## Instalación
1. Clona este repositorio en tu máquina local usando el siguiente comando:

```bash
git clone <URL_DEL_REPOSITORIO>
```

2. Ve al directorio del proyecto:

```bash
cd tarea1
```

3. Instala las dependencias utilizando npm:

```
npm install
```

## Uso
Para ejecutar el proyecto en un entorno de producción:
```
npm start
```

Para ejecutar el proyecto en un entorno de desarrollo con reinicio automático:
```
npm run dev
```

## Dependencias
- [Axios](https://www.npmjs.com/package/axios) - Librería para hacer peticiones HTTP.
- [Dotenv](https://www.npmjs.com/package/dotenv) - Carga variables de entorno desde un archivo `.env`.
- [Express](https://www.npmjs.com/package/express) - Marco de aplicación web para Node.js.
  
## Dependencias de desarrollo
- [Cross-env](https://www.npmjs.com/package/cross-env) - Establece variables de entorno de forma cruzada en sistemas Windows y Unix.
- [Nodemon](https://www.npmjs.com/package/nodemon) - Herramienta que reinicia automáticamente la aplicación cuando se detectan cambios en el código.

## Autor
USG

## Variables globales para el funcionamiento de la api (.env)
```python
# puerto
PORT = 3001

# URL mongoDB
DB_URL = mongodb+srv://<admin>:<password>@myapp.qtqehsb.mongodb.net/Tiny_canvas?retryWrites=true&w=majority
```
