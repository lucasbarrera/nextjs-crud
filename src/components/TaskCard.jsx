"use client";
import { useRouter } from "next/navigation";
function TaskCard({ task }) {
  const router = useRouter();

  const createdAt = new Date(task.createdAt).toLocaleString();
  const updatedAt = new Date(task.updatedAt).toLocaleString();
  return (
    <div
      className="card-task"
      onClick={() => router.push(`/tasks/edit/${task.id}`)}
    >
      <h3> TITULO</h3>
      <h3> {task.title}</h3>
      <h4>DESCRIPCION</h4>
      <p>{task.description}</p>
      <p>Completada: {String(task.completed)}</p>
      <p>Fecha creacion: {createdAt}</p>
      <p>Fecha actualizacion: {updatedAt}</p>
    </div>
  );
}

export default TaskCard;
