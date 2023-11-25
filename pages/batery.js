import Head from "next/head";
import { Fragment } from "react";
import BatteryPage from "@/components/batery/BatteryPage";

function BateryPage() {
  return (
    <Fragment>
      <Head>
        <title>LED-Trap - Bateria</title>
      </Head>
        <BatteryPage />
    </Fragment>
  );
}

export default BateryPage;
