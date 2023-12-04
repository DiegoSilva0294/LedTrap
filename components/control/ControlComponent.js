import { useSession } from "next-auth/react";
import Link from "next/link";
import { Fragment } from "react";
import classes from "./ControlComponent.module.css";

import MqttButton from "./MqttButton";

function ControlComponent() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Fragment>
        <h1 className={classes.content}>Control de las trampas</h1>
        <h2 style={{ margin: "1rem" }}>Trampa 1</h2>
        <ul>
          <li>
            <h3>Estado tira 385:</h3>
            <MqttButton
              nombre="Apagar tira 385"
              topic="trampa1/tira385"
              mensaje="OFF"
            />
            <MqttButton
              nombre="Prender tira 385"
              topic="trampa1/tira385"
              mensaje="ON"
            />
          </li>
          <li>
            <h3>Estado tira 365:</h3>
            <MqttButton
              nombre="Apagar tira 365"
              topic="trampa1/tira365"
              mensaje="OFF"
            />
            <MqttButton
              nombre="Prender tira 365"
              topic="trampa1/tira365"
              mensaje="ON"
            />
          </li>
          <li>
            <h3>Estado trampa:</h3>
            <MqttButton
              nombre="Apagar trampa"
              topic="trampa1/trampaEntera"
              mensaje="OFF"
            />
            <MqttButton
              nombre="Prender trampa"
              topic="trampa1/trampaEntera"
              mensaje="ON"
            />
          </li>
        </ul>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <h1 className={classes.content}>
          debes iniciar sesion para acceder a esta seccion
        </h1>
        <Link href="/login" className={classes.content}>
          Click aqui para log in
        </Link>
      </Fragment>
    );
  }
}

export default ControlComponent;
