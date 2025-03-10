import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import profile from "../assets/profile.png"
import background_img from "../assets/profile_light.png"
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="bg-[#2A2A2A] pt-3">
      <Container>
        <Flex className="justify-between items-center">
          <div className="text-primary_text">
            <h2 className="font-semibold text-[48px] mb-4">Hello</h2>
            <h1 className="font-bold text-[72px] w-[447px] leading-[100%] mb-7">
              I’M GLEB KOSTRUBOV
            </h1>
            <p className="font-normal text-[18px] w-[430px] mb-7">
              I've been doing web design, front-end and back-end development for
              a year now. Do you need a website design, site layout, or maybe a
              turnkey website? Then contact me
            </p>
            <Link className="py-[14px] px-[34px] bg-[#E29500] rounded-[6px] text-primary_bg font-bold text-[18px]">
              Contact me
            </Link>
          </div>
          <div className="relative ">
            <img src={profile} className="z-50" />
            <img
              src={background_img}
              className="absolute top-0 right-0 w-[575px] h-[475px]"
            />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
