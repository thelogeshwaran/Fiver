import Companies from "@/components/Companies";
import Everything from "@/components/Everything";
import FiverrBussines from "@/components/FiverrBussines";
import HeroBanner from "@/components/HeroBanner";
import JoinFiverr from "@/components/JoinFiverr";
import PopularServices from "@/components/PopularServices";
import Services from "@/components/Services";
import React from "react";

function Index() {
  return (
    <div>
      <HeroBanner />
      <Companies />
      <PopularServices />
      <Everything />
      <Services />
      <FiverrBussines />
      <JoinFiverr />
    </div>
  );
}

export default Index;
