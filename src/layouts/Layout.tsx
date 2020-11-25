import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar/Navbar";

interface Props {
  title: string;
  lang?: string;
}

const Layout: React.FC<Props> = ({ children, lang }) => {
  return (
    <React.Fragment>
      <Helmet>
        <html lang={lang || "pl"} />
      </Helmet>
      <Navbar />
      <div className="bg-gray-100">
        <div className="container pt-20 lg:pt-24">
          <div className="mt-4 pb-12">{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
