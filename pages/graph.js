import { Fragment } from "react";
import FormGrafico from "../components/graficos/FormGrafico";
import Head from "next/head";

function GraphPage(props) {
  return (
    <Fragment>
      <Head>
        <title>LED-Trap - Graficos</title>
      </Head>
      <FormGrafico />
    </Fragment>
  );
}

export default GraphPage;
