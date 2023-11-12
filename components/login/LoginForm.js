import classes from "./LoginForm.module.css";
import { useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

function LoginForm() {
  const selectedUsuarioRef = useRef();
  const selectedPasswordRef = useRef();
  const router = useRouter()

  async function onSubmitHandler(event) {
    event.preventDefault();

    const result = await signIn("credentials", {
      username: selectedUsuarioRef.current.value,
      password: selectedPasswordRef.current.value,
      redirect: false,
    });

    console.log(result);

    if (!result.ok) {
      alert("Usuario o contraseña invalido");
    }
    else {
      router.push('/')
    }
  }

  return (
    <section className={classes.auth}>
      <form onSubmit={onSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="usuario">Usuario</label>
          <input
            type="text"
            id="usuario"
            ref={selectedUsuarioRef}
            autoComplete="username"
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            ref={selectedPasswordRef}
            autoComplete="current-password"
            required
          />
        </div>
        <div className={classes.button}>
          <button>Entrar</button>
        </div>
      </form>
    </section>
  );
}

export default LoginForm;
