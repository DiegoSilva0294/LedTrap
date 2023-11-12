import ControlComponent from "@/components/control/ControlComponent";
import Head from "next/head";
import { Fragment } from "react";

function ControlPage() {
  return (
    <Fragment>
      <Head>
        <title>LED-Trap - Control</title>
      </Head>
      <ControlComponent />
    </Fragment>
  );
}
export default ControlPage;
