"use client";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

function NuevaTarea() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      (async () => {
        // realizo pedido a la api para obtener los datos de la tarea con el id que viene en los parametros
        const res = await fetch(`/api/tasks/${params.id}`);
        //obtengo los datos completos
        const data = await res.json();
        //seteo el titulo y la descripcion con los valores de onetask que viene de la variable data obtenida de la peticion
        setTitle(data.oneTask.title || "");
        setDescription(data.oneTask.description || "");
        console.log(data.oneTask);
      })();
    }
  }, [params.id]);

  //funciones de los botones del formulario
  const updateTask = async () => {
    const res = await fetch(`/api/tasks/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });
    const data = await res.json();
    console.log(data);
    alert("Tarea actualizada");
  };

  const createTask = async () => {
    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", //para que el servidor sepa que tipo de contenido se esta enviando
      },
      body: JSON.stringify({ title, description }),
    });
    const data = await res.json();
    // console.log(data);
    alert("Tarea creada");
  };

  const deleteTask = async () => {
    const res = await fetch(`/api/tasks/${params.id}`, {
      method: "DELETE",
    });
    const data = res.json;
    console.log(data);
    router.refresh();
    router.push("/");
  };

  // controlador de acciones del formulario
  const onSubmit = async (event) => {
    event.preventDefault();
    if (params.id) {
      await updateTask(params.id);
    } else {
      await createTask();
    }
    //realizamos refresh y push luego de terminado el condicional para evitar que se interrumpa la ejecucion
    router.refresh();
    router.push("/");
  };
  return (
    <form onSubmit={onSubmit} className="new-task">
      <label htmlFor="tltle">Titulo de la tarea</label>
      <input
        type="text"
        placeholder="title"
        name="title"
        id="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        placeholder="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      ></textarea>
      {params.id ? (
        <>
          <button>Actualizar</button>
          <button
            onClick={async () => {
              await deleteTask(params.id);
            }}
          >
            Eliminar
          </button>
        </>
      ) : (
        <button>Crear</button>
      )}
    </form>
  );
}

export default NuevaTarea;
