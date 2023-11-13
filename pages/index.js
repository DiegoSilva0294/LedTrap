import Head from "next/head";

import Bienvenido from "@/components/homepage/Bienvenido";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>LED-Trap</title>
        <meta name="description" content="Pagina oficial LED-Trap" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Bienvenido />
    </Fragment>
  );
}

export default HomePage;
