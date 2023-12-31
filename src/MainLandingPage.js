import React from "react";
import AnimationRevealPage from "./helpers/AnimationRevealPage.js";
import { Container, Content2Xl } from "./components/misc/Layouts";
import tw from "twin.macro";
import { LogoLink} from "./components/headers/light.js";
import { SectionDescription as DescriptionBase } from "./components/misc/Typography";
import Footer from "./components/footers/SimpleFiveColumn.js";
import heroScreenshotImageSrc from "./images/demo/MainLandingPageHero.png";
import logo from "./images/ticketwize_logo_purple_horizontal.png";

/* Hero */
const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 mr-12 text-gray-700 border-gray-400 hocus:border-gray-700`;
const HeroRow = tw(Row)`flex-col lg:flex-row justify-between items-center pt-8 lg:pt-12 pb-16 max-w-screen-2xl mx-auto flex-wrap`;
const Column = tw.div`flex-1`;
const HeadingBase = tw.h3`text-3xl sm:text-4xl font-black tracking-wide text-left`
const Heading = tw(HeadingBase)`text-center lg:text-left text-primary-500 leading-snug`;
const TextColumn = tw(Column)`mx-auto lg:mr-0 max-w-2xl lg:max-w-xl xl:max-w-2xl flex-shrink-0`;
const Description = tw(
  DescriptionBase
)`mt-4 text-center lg:text-left lg:text-base text-gray-700 max-w-lg mx-auto lg:mx-0`;
const ImageColumn = tw(Column)`mx-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-8`;
const ImageContainer = tw.div``;
const Image = tw.img`max-w-full rounded-t sm:rounded`;
const PrimaryAction = tw.button`text-center lg:text-center rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  features = [
    "Book Your Events"
  ],
  heading = <>Book Your Favorite Events with <span style={{ color: 'rgb(100,21,255)' }}>TicketWize</span>.</>,
  description = "Welcome to TicketWize, your ultimate destination for concert and event ticket booking. We are passionate about connecting you with unforgettable live experiences and making the ticket buying process convenient, secure, and enjoyable."
}) => {
  /*
   * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
   * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
   */
  return (
    <AnimationRevealPage disabled>
      <Container tw="bg-gray-100 -mx-8 -mt-8 pt-8 px-8">
        <Content2Xl>
          <NavRow>
            <LogoLink href="/">
              <img style={{ height: 60, width: 309 }} src={logo} alt="" />
            </LogoLink>
          </NavRow>
          <HeroRow>
            <TextColumn>
              <Heading as="h1">{heading}</Heading>
              <Description>{description}</Description>
              <NavLink href="/components/landingPages/EventLandingPage?event_id=c446aab3-fb96-4249-a7b7-af89c300c31c">
                <PrimaryAction>Current Event</PrimaryAction>
              </NavLink>
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <Image src={heroScreenshotImageSrc} />
              </ImageContainer>
            </ImageColumn>
          </HeroRow>
        </Content2Xl>
        <Footer />
      </Container>
    </AnimationRevealPage>
  );
};