import React from "react";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ContactPage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins justify-start mx-auto pb-10 w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="flex items-center justify-center md:px-5 w-full" />
        </div>
        <div className="flex flex-row font-montserrat items-center justify-start md:ml-[0] ml-[147px] mt-[49px] md:px-5 w-[15%] md:w-full">
          <Img
            className="h-[15px] rounded-[1px]"
            src="images/img_user.svg"
            alt="user_One"
          />
          <Text
            className="ml-[5px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
            size="txtMontserratSemiBold22"
          >
            Connect with us
          </Text>
        </div>
        <Text
          className="leading-[160.00%] md:ml-[0] ml-[150px] mt-5 text-white-A700 text-xs tracking-[0.24px]"
          size="txtPoppinsRegular12WhiteA700"
        >
          <>
            Hello, dear guest of our site! You can send us a message on any
            topic using the contact form below. We will review your request and
            write you an answer within 24 hours. Thank you for choosing our
            site!
            <br />
            Source: filmberry.com
          </>
        </Text>
        <div className="flex flex-col font-montserrat items-center justify-start md:ml-[0] ml-[150px] mt-[49px] md:px-5 w-[38%] md:w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-12 items-center justify-start w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <Input
                  name="frameSixty"
                  placeholder="Name *"
                  className="leading-[normal] p-0 placeholder:text-white-A700 text-center text-sm w-full"
                  wrapClassName="border border-gray-300 border-solid w-full"
                  type="text"
                ></Input>
                <Input
                  name="frameSixtyOne"
                  placeholder="Email *"
                  className="leading-[normal] p-0 placeholder:text-white-A700 text-center text-sm w-full"
                  wrapClassName="border border-gray-300 border-solid w-full"
                  type="email"
                ></Input>
                <TextArea
                  className="bg-gray-900_02 border border-gray-300 border-solid gap-2 h-40 leading-[normal] pl-4 pr-2 py-3.5 rounded-md text-center text-sm placeholder:text-white-A700 text-white-A700 w-[538px]"
                  name="frameSixtyThree"
                  placeholder="Message"
                ></TextArea>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-[49px] items-center justify-between w-full">
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[265px] rounded text-center text-sm"
                  color="red_A700"
                  size="md"
                  variant="fill"
                >
                  Send Message
                </Button>
                <div className="flex flex-row gap-[26px] items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_instagram.svg"
                    alt="instagram"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_linkedin.svg"
                    alt="linkedin"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_twitter.svg"
                    alt="twitter"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_youtube.svg"
                    alt="youtube"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-poppins items-center mt-[100px] w-full">
          <Footer className="flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
