import LoginForm from "@/components/login/LoginForm";
import Head from "next/head";
import { Fragment } from "react";

function LoginPage() {
  return (
    <Fragment>
      <Head>
        <title>LED-Trap Login</title>
      </Head>
      <LoginForm />
    </Fragment>
  );
}

export default LoginPage;
