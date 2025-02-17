import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const tasks = await prisma.task.findMany(); //task es el nombre de la tabla en la base de datos creada por prisma, findMany es una funcion que nos permite obtener todos los registros de la tabla
  // console.log(tasks);

  return NextResponse.json({ tasks });
}

export async function POST(request) {
  const { title, description } = await request.json(); //esto es para obtener los datos que se envian en el body de la peticion
  // console.log(data);
  const newTask = await prisma.task.create({
    //create es una funcion que nos permite crear un nuevo registro en la tabla
    data: {
      title: title,
      description: description,
    },
  });

  return NextResponse.json({ newTask });
}
