import React from "react";
import AnimationRevealPage from "./../helpers/AnimationRevealPage.js";
import Header from "./../components/headers/light.js";
import Pricing from "./../components/pricing/TwoPlansWithDurationSwitcher.js";
import Testimonial from "./../components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "./../components/footers/FiveColumnWithInputForm.js";
import FAQ from "./../components/faqs/SingleCol.js";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Pricing />
      <Testimonial
        heading="Our Paying Customers"
      />
      <FAQ />
      <Footer/>
    </AnimationRevealPage>
  );
};
