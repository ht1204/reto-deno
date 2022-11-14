# Reto DenoJS - HTTP Requests - Bases de Datos

## Instrucciones
Instalar y configurar DenoJS en el equipo de trabajo. \
Revisar: [Documentación Oficial](https://deno.land/manual@v1.28.0/introduction)

Tener instalado Typescript de antemano.
Configurar IDE o editor de texto para trabajar con DenoJS.



## Correr Aplicación
- Arrancar la aplicación en modo producción:  ```npm run start ```
- El servidor se apaga una vez logra el objetivo de decodificar el código secreto. 

## Salida de sistema
- Visualizar código secreto obtenido y comparar la pista obtenida por medio de un endpoint.


## Bases de datos
- Redis
- Mongo DB 

## Funcionamiento
- Realiza solicitud http a un endpoint para obtener las credenciales de acceso a una BD en redis.
- Con las credenciales anteriores, toma unas credenciales para acceder a una colección en un cluster de MongoDB.
- Accede a la BD y a la colección objetivo para obtener el campo requerido referente al código.
- Decodifica el código secreto y lo muestra.


Propuesto por [Santiago Aguilar](https://github.com/sant123)

Reto:
DenoJS - HTTP Requests -Bases de Datos \
[Enlace Reto](https://paper.dropbox.com/doc/Reto-de-Node-HTTP-y-Bases-de-Datos-p9dWNgBSNXj8ZpZfK9C60) \
[Enlace versión original](https://github.com/ht1204/reto-node) \
[Enlace versión Node+TS](https://github.com/ht1204/reto-node-v2) \
[Enlace versión python](https://github.com/ht1204/reto-python)