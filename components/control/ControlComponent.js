import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Fragment } from "react";
import classes from './ControlComponent.module.css'

function ControlComponent() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    return (
      <Fragment >
        <h1 className={classes.content}>ControlPage</h1>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <h1 className={classes.content}>debes iniciar sesion para acceder a esta seccion</h1>
        <Link href="/login" className={classes.content}>Click aqui para log in</Link>
      </Fragment>
    );
  }
}

export default ControlComponent;
