import mqtt from "mqtt";

function MqttButton(props) {
  function handleClick() {
    //conectadrse al cliente
    const client = mqtt.connect("wss://54.232.94.28:8083");

    client.on("error", (error) => {
      console.error("Error de conexión:", error);
    });
    // Manejar eventos de conexión
    client.on("connect", () => {
      // Enviar mensaje al tema 'tu-tema'
      client.publish(props.topic, props.mensaje, { retain: true });

      // Cerrar la conexión después de enviar el mensaje
      client.end();
    });
  }

  return <button onClick={handleClick}>{props.nombre}</button>;
}

export default MqttButton;
