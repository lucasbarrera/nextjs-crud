"use clinet";
import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";
import Link from "next/link";
async function loadTasks() {
  //puedo obtener los datos desde la base de datos con una consulta directa
  const tasks = await prisma.task.findMany();
  //
  // o puedo obtener los dataos desde peticiones a http://api/tasks
  // const res = await fetch(`http://localhost:3000/api/tasks`);
  // const tasks = await res.json();

  // console.log(tasks); // mostrar en consola los datos obtenidos
  return tasks;
}
// export const revalidate = 60; //solo se usa en produccion  con esta linea se actualizaria cada 60 segundos la informacion de la pagina en produccion

export const dynamic = "force-dinamic"; //  solo se usa en produccion con esta linea los cambios que se realizen se veran de inmediato en la pagina de produccion

export default async function Home() {
  const tasks = await loadTasks();

  return (
    <div>
      <h1>Home Page</h1>
      <div className="container-tasks">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
      <Link href="/new">
        <button>Crear nueva tarea</button>
      </Link>
    </div>
  );
}
