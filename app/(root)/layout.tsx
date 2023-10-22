import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <section>
        <div>{children}</div>
      </section>
    </main>
  );
};

export default Layout;
