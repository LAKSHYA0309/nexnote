import Header from "@/components/landing-page/header";
import React from "react";

const HomePagelayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default HomePagelayout;
