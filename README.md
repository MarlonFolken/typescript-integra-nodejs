# typescript-integra-nodejs
Integración con NodeJS y ExpressJS

## Prerequisites
Inicializar npm, sea eligiendo los valores iniciales o dejando la configuración predeterminada (-y). Lo siguiente en la terminal, dentro de la carpeta del proyecto:

    npm init
    o
    npm init -y

Lo anterior generará el archivo package.json y package-lock.json

## Configuración realizada

Instalación de la integración Typescript con NodeJS:

    npm i -D ts-node

Agregar en el archivo package.json, en su propiedad "scripts" agregar

    "scripts": {
      ...
      "start": "ts-node index.ts"
    }

que permitirá correr ```npm start``` en la terminal para correr el proyecto.

## Agregar ExpressJS

Despues de configurar lo mencionado anteriormente, en la terminal y en la carpeta del proyecto, teclear:

    npm i -S express

Esto agrega una dependencia en la configuración del archivo package.json, por ejemplo:

    "dependencies": {
      "express": '^4.18.2'
    }

ExpressJS no viene con sus definiciones de tipo, por lo que hay que buscarlas en sitios web con colecciones de tipos. Ej: https://github.com/DefinitelyTyped/DefinitelyTyped

Para instalar esos tipos usamos

    npm i -D @types/express @types/node

Y aprovechando, agregamos a los lineamientos tener instalado typescript para asegurarse que en el proyecto, quien lo instale, tenga una versión de typescript que hayamos declarado aqui:

    npm i -D typescript

## Inicializar typescript, habiendo ya agregado su dependencia (del paso anterior)

    tsc --init

