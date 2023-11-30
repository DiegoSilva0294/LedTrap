import BatteryIcon from "./BatteryIcon";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    // Recuperar los valores almacenados en el almacenamiento local al cargar el componente
    const storedPercentage = localStorage.getItem("porcentajeBateria");
    const storedFechaBateria = localStorage.getItem("fechaBateria");
    const storedHoraBateria = localStorage.getItem("horaBateria");
    const storedEstado = localStorage.getItem("estado");
    const storedFechaEstado = localStorage.getItem("fechaEstado");
    const storedHoraEstado = localStorage.getItem("horaEstado");
    const storedFechaActual = localStorage.getItem("fechaActual");
    const storedHoraActual = localStorage.getItem("horaActual");

    // Establecer los estados con los valores recuperados o los iniciales si no hay datos almacenados
    setPorcentajeBateria(storedPercentage || porcentajeBateria);
    setFechaBateria(storedFechaBateria || fechaBateria);
    setHoraBateria(storedHoraBateria || horaBateria);
    setEstado(storedEstado || estado);
    setFechaEstado(storedFechaEstado || fechaEstado);
    setHoraEstado(storedHoraEstado || horaEstado);
    setFechaActual(storedFechaActual || fechaActual);
    setHoraActual(storedHoraActual || horaActual);
  }, []); // El segundo argumento [] asegura que este efecto solo se ejecute una vez al montar el componente

  async function actualizarHandler(event) {
    event.preventDefault();
    try {
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
      setEstado(res.data[1].estado);
      setFechaEstado(res.data[1].fecha);
      setHoraEstado(res.data[1].hora);

      let fechaNueva = new Date();

      const horas = await fechaNueva.getHours().toString().padStart(2, "0");
      const minutos = await fechaNueva.getMinutes().toString().padStart(2, "0");

      const dia = await fechaNueva.getDate().toString().padStart(2, "0");
      const mes = await (fechaNueva.getMonth() + 1).toString().padStart(2, "0"); // Nota: Los meses comienzan desde 0
      const anio = await fechaNueva.getFullYear();

      // Utilizar la función de setState que acepta un callback para asegurarse de tener los valores más recientes
      setFechaActual(
        (prevFechaActual) => `${dia}/${mes}/${anio}` || prevFechaActual
      );
      setHoraActual(
        (prevHoraActual) => `${horas}:${minutos}` || prevHoraActual
      );

      // Utilizar los valores más recientes para almacenar en el almacenamiento local
      localStorage.setItem("porcentajeBateria", res.data[0].nivel);
      localStorage.setItem("fechaBateria", res.data[0].fecha);
      localStorage.setItem("horaBateria", res.data[0].hora);
      localStorage.setItem("estado", res.data[1].estado);
      localStorage.setItem("fechaEstado", res.data[1].fecha);
      localStorage.setItem("horaEstado", res.data[1].hora);
      localStorage.setItem("fechaActual", `${dia}/${mes}/${anio}`);
      localStorage.setItem("horaActual", `${horas}:${minutos}`);
    } catch {}
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
