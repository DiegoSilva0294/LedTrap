import { Fragment } from "react";
import classes from "./Bienvenido.module.css";
import Image from "next/image";

function Bienvenido() {
  return (
    <Fragment>
      <h1 className={classes.h1}>Bienvenido a Ledtrap...</h1>
      <div className={classes.image}>
        <Image
          src="/imagenes/diploschema.jpg"
          title="diploschema"
          alt="Diploschema rotundicolle"
          width={400}
          height={400}
        />
      </div>
    </Fragment>
  );
}

export default Bienvenido;
