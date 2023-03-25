import A from "./A";
import Head from "next/head";

const ManinContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"robert roebrt2" + keywords}></meta>
      </Head>
      <div>
        <A href={"/"} text={"home"} />
        <A href={"/users"} text={"users"} />
        <div>{children}</div>
      </div>
    </>
  );
};
export default ManinContainer;
