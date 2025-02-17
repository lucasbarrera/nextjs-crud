// este archivo es una configuracion que nos permite conectarnos a la base de datos y exportar funciones para interactuar con ella
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();
//para poner a correr la base de datos se debe correr el siguiente comando: npx prisma studio
//esto nos abrira un navegador con la base de datos en la que podremos interactuar con elle
