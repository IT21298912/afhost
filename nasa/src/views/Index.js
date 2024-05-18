
import React from "react";



import Login from "./examples/RegisterPage";
import DemoFooter from "components/Footers/DemoFooter.js";
import RegisterPage from "./examples/RegisterPage";



function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      {/* <IndexNavbar />
      <IndexHeader /> */}
      <RegisterPage/>
    </>
  );
}

export default Index;
