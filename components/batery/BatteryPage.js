import BatteryIcon from "./BatteryIcon";
import { useState } from "react";
import classes from "./BatteryPage.module.css";

function BatteryPage() {
  const [porcentajeBateria, setPorcentajeBateria] = useState("100");
  const [horaBateria, setHoraBateria] = useState("15:00");
  const [fechaBateria, setFechaBateria] = useState("25/11/2023");

  const [estado, setEstado] = useState("apagado");
  const [horaEstado, setHoraEstado] = useState("15:00");
  const [fechaEstado, setFechaEstado] = useState("25/11/2023");

  const [fechaActual, setFechaActual] = useState("25/11/2023");
  const [horaActual, setHoraActual] = useState("18:16");

  async function actualizarHandler(event) {
    event.preventDefault();

    const response = await fetch("/api/bateria", {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // Indica que estás enviando datos en formato JSON
      },
    });

    if (!response.ok) {
      throw new Error(res.message || "something went wrong!!!");
    }

    const res = await response.json();

    console.log(res.data[0]);

    console.log(res.data[1]);

    setPorcentajeBateria(res.data[0].nivel);
    setFechaBateria(res.data[0].fecha);
    setHoraBateria(res.data[0].hora);

    console.log(res.data[1]);
    console.log(res.data[1].estado);
    console.log(estado)

    setEstado(res.data[1].estado);
    setFechaEstado(res.data[1].fecha);
    setHoraEstado(res.data[1].hora);

    let fechaNueva = await new Date();

    const horas = await fechaNueva.getHours().toString().padStart(2, "0");
    const minutos = await fechaNueva.getMinutes().toString().padStart(2, "0");

    const dia = await fechaNueva.getDate().toString().padStart(2, "0");
    const mes = await (fechaNueva.getMonth() + 1).toString().padStart(2, "0"); // Nota: Los meses comienzan desde 0
    const anio = await fechaNueva.getFullYear();

    setFechaActual(`${dia}/${mes}/${anio}`);

    setHoraActual(`${horas}:${minutos}`);
  }
  return (
    <div>
      <h1
        style={{ display: "flex", justifyContent: "center", fontSize: "2rem" }}
      >
        Estado de la bateria y de la trampa
      </h1>
      <ul
        style={{ display: "flex", flexDirection: "column", fontSize: "1rem" }}
      >
        <li key={Math.random()} style={{ marginBottom: "10px" }}>
          {" "}
          Ultimos datos de la bateria obtenidos: {fechaBateria} a las{" "}
          {horaBateria}
        </li>
        <li key={Math.random()} style={{ marginBottom: "10px" }}>
          {" "}
          Ultimos datos del estado de la trampa obtenidos: {fechaEstado} a las{" "}
          {horaEstado}
        </li>
      </ul>
      <div className={classes.boton}>
        <h3>
          Ultima actualizacion {fechaActual} a las {horaActual}
        </h3>
        <button onClick={actualizarHandler}>Actualizar datos</button>
      </div>
      <div className={classes.iconoyh2}>
        <BatteryIcon percentage={porcentajeBateria} />
        <h2>Estado de la trampa: {estado}</h2>
      </div>
    </div>
  );
}

export default BatteryPage;
