import AuthWrapper from "@/components/AuthWrapper";
import Companies from "@/components/Landing/Companies";
import Everything from "@/components/Landing/Everything";
import FiverrBussines from "@/components/Landing/FiverrBussines";
import HeroBanner from "@/components/Landing/HeroBanner";
import JoinFiverr from "@/components/Landing/JoinFiverr";
import PopularServices from "@/components/Landing/PopularServices";
import Services from "@/components/Landing/Services";
import { useStateProvider } from "@/context/StateContext";
import React from "react";

function Index() {
  const [{ showLoginModal, showSignupModal }] = useStateProvider();
  return (
    <div>
      <HeroBanner />
      <Companies />
      <PopularServices />
      <Everything />
      <Services />
      <FiverrBussines />
      <JoinFiverr />
      {(showLoginModal || showSignupModal) && <AuthWrapper />}
    </div>
  );
}

export default Index;
