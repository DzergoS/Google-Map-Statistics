import React, { useEffect } from "react";
import PageHeader from "./PageHeader";
import PageMain from "./PageMain";
import PageAside from "./PageAside";
import "../Css/Page3.css";

const Page3 = ({ setHeader }) => {
  useEffect(() => {
    setHeader(false);
    return () => {
      setHeader(true);
    };
  }, [setHeader]);

  const activeMain = "Mission List";

  return (
    <div className="screen">
      <PageHeader />
      <PageMain title={activeMain} />
      <PageAside />
    </div>
  );
};

export default Page3;
