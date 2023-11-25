import BatteryIcon from "./BatteryIcon";
import { useState } from "react";
import classes from "./BatteryPage.module.css";

function BatteryPage() {
  const [porcentaje, setPorcentaje] = useState("100");
  const [hora, setHora] = useState("15:00");
  const [fecha, setFecha] = useState("25/11/2023");

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

    console.log(res.dataBateria[0])

    setPorcentaje(res.dataBateria[0].nivel);
    setFecha(res.dataBateria[0].fecha);
    setHora(res.dataBateria[0].hora);
  }
  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center", fontSize: '2rem' }}>
        Estado de la bateria
      </h1>
      <div className={classes.boton}>
        <button onClick={actualizarHandler}>Actualizar datos</button>
      </div>
      <div className={classes.iconoyh2}>
        <BatteryIcon percentage={porcentaje} />
        <h2 >
          Ultima actualizacion {fecha} a las {hora}
        </h2>
      </div>
    </div>
  );
}

export default BatteryPage;
