import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";
import MainpageMoviecard from "components/MainpageMoviecard";

const MainpagePage = () => {
  return (
    <>
      <div className="flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="bg-black-900 h-[750px] md:px-5 relative w-full">
          <Img
            className="h-[750px] m-auto object-cover w-full"
            src="images/img_download1.png"
            alt="downloadOne"
          />
          <div className="absolute bottom-[5%] flex flex-col items-start justify-start left-[10%] w-[55%]">
            <Text
              className="bg-red-A700 h-5 justify-center px-3 rounded-[10px] text-white-A700 text-xs w-[50px]"
              size="txtPoppinsBold12"
            >
              TOP
            </Text>
            <Text
              className="mt-2 md:text-5xl text-6xl text-white-A700"
              size="txtPoppinsSemiBold60"
            >
              Spider man no way home{" "}
            </Text>
            <Text
              className="mt-1 text-sm text-white-A700 w-[55%] sm:w-full"
              size="txtPoppinsRegular14"
            >
              Lorem ipsum dolor sit amet consectetur. Ac tortor vitae id lorem.
              Consectetur donec cursus massa nunc ullamcorper semper.
            </Text>
            <Text
              className="mt-[25px] text-gray-100 text-sm"
              size="txtPoppinsMedium14"
            >
              <span className="text-gray-100 font-poppins text-left font-medium">
                2022 |{" "}
              </span>
              <span className="text-red-A400 font-poppins text-left font-medium">
                16+
              </span>
              <span className="text-gray-100 font-poppins text-left font-medium">
                {" "}
                | 1 Seans | TV series for teenagers
              </span>
            </Text>
            <div className="flex sm:flex-col flex-row gap-[19px] items-center justify-start mt-[13px] w-[63%] md:w-full">
              <div className="flex flex-row gap-2 items-center justify-start w-[14%] sm:w-full">
                <Img
                  className="h-[19px]"
                  src="images/img_signal.svg"
                  alt="signal"
                />
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsSemiBold24"
                >
                  5.8
                </Text>
              </div>
              <Text
                className="text-sm text-white-A700"
                size="txtPoppinsMedium14WhiteA700"
              >
                <span className="text-white-A700 font-poppins text-left font-medium">
                  Seans
                </span>
                <span className="text-red-A700 font-poppins text-left font-medium">
                  {" "}
                  1
                </span>
                <span className="text-white-A700 font-poppins text-left font-medium">
                  {" "}
                  - Eplscode{" "}
                </span>
                <span className="text-red-A700 font-poppins text-left font-medium">
                  1
                </span>
                <span className="text-white-A700 font-poppins text-left font-medium">
                  {" "}
                  - Genre{" "}
                </span>
                <span className="text-red-A700 font-poppins text-left font-medium">
                  comedy, detective, detective{" "}
                </span>
              </Text>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[126px] mt-[30px] shadow-bs"
              leftIcon={
                <div className="h-[15px] mt-[3px] mb-0.5 mr-[5px] w-[15px] bg-white-A700 rounded-[1px]">
                  <Img
                    className="h-[15px] rounded-[1px]"
                    src="images/img_overflowmenu.svg"
                    alt="overflow_menu"
                  />
                </div>
              }
              shape="round"
              color="red_A700"
              size="xs"
              variant="fill"
            >
              <div className="font-semibold leading-[normal] text-left text-sm">
                WATCH
              </div>
            </Button>
            <Img
              className="h-px md:ml-[0] ml-[529px] mt-[148px]"
              src="images/img_group5.svg"
              alt="groupFive"
            />
          </div>
          <Header className="absolute flex inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
        </div>
        <div className="bg-black-900 flex flex-col gap-[19px] items-center justify-end py-10 w-full">
          <div className="flex flex-col items-start justify-start max-w-[1150px] mt-[11px] mx-auto md:px-5 w-full">
            <div className="h-10 md:h-[497px] relative w-full">
              <div className="absolute flex md:flex-col flex-row gap-[21px] h-max inset-[0] items-center justify-between m-auto max-w-[1140px] w-full">
                <Button
                  className="cursor-pointer font-medium min-w-[106px] rounded-[18px] text-center text-sm"
                  shape="round"
                  color="red_A700"
                  size="xs"
                  variant="fill"
                >
                  Action
                </Button>
                <Button
                  className="cursor-pointer min-w-[121px] rounded-[18px] text-center text-sm"
                  shape="round"
                  color="gray_900"
                  size="xs"
                  variant="fill"
                >
                  Comedy
                </Button>
                <Button
                  className="cursor-pointer min-w-[133px] rounded-[18px] text-center text-sm"
                  shape="round"
                  color="gray_900"
                  size="xs"
                  variant="fill"
                >
                  Adventure
                </Button>
                <Button
                  className="cursor-pointer font-medium min-w-[109px] rounded-[18px] text-center text-sm"
                  shape="round"
                  color="red_A700"
                  size="xs"
                  variant="fill"
                >
                  Drama
                </Button>
                <Button
                  className="cursor-pointer min-w-[133px] rounded-[18px] text-center text-sm"
                  shape="round"
                  color="gray_900"
                  size="xs"
                  variant="fill"
                >
                  Animation
                </Button>
                <Button
                  className="cursor-pointer font-medium min-w-[117px] rounded-[18px] text-center text-sm"
                  shape="round"
                  color="red_A700"
                  size="xs"
                  variant="fill"
                >
                  Fantasy
                </Button>
                <Button
                  className="cursor-pointer min-w-[106px] rounded-[18px] text-center text-sm"
                  shape="round"
                  color="gray_900"
                  size="xs"
                  variant="fill"
                >
                  Family
                </Button>
                <Button
                  className="cursor-pointer min-w-[104px] rounded-[18px] text-center text-sm"
                  shape="round"
                  color="gray_900"
                  size="xs"
                  variant="fill"
                >
                  Horror
                </Button>
                <div className="bg-gray-900 flex flex-col items-start justify-start sm:px-5 px-[30px] py-2.5 rounded-[18px] w-auto">
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtPoppinsRegular14"
                  >
                    Horror
                  </Text>
                </div>
              </div>
              <div className="absolute backdrop-opacity-[0.5] bg-black-900 blur-[13.00px] flex flex-col h-full inset-y-[0] items-center justify-start my-auto p-3 right-[0] w-[3%]">
                <Img
                  className="h-3 my-0.5"
                  src="images/img_arrowdown.svg"
                  alt="arrowright"
                />
              </div>
            </div>
            <Line className="bg-gray-900_01 h-px mt-7 w-full" />
            <div className="flex flex-row gap-2.5 items-center justify-start mt-[46px] w-[19%] md:w-full">
              <Img
                className="h-3.5 rounded-[1px] w-3.5"
                src="images/img_user.svg"
                alt="user_One"
              />
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtPoppinsMedium24"
              >
                Recommended
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <List
              className="flex sm:flex-col flex-row gap-[26px] justify-center overflow-auto py-[22px] w-full"
              orientation="horizontal"
            >
              <div className="h-[396px] sm:ml-[0] md:px-5 relative w-full">
                <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[48%]">
                  <div className="bg-gradient1  flex flex-col items-start justify-center p-4 w-full">
                    <div className="flex flex-col h-10 items-center justify-start my-[162px] p-2 rotate-[-180deg] w-10">
                      <Img
                        className="h-6 w-6"
                        src="images/img_iconchevronright.svg"
                        alt="iconchevronrigh"
                      />
                    </div>
                  </div>
                </div>
                <MainpageMoviecard
                  className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-md w-full"
                  cardimgOne="images/img_cardimg.png"
                  title="Wonder Woman 1984"
                />
              </div>
              <MainpageMoviecard className="flex flex-1 flex-col items-center justify-start sm:ml-[0] md:px-5 rounded-md w-full" />
              <MainpageMoviecard
                className="flex flex-1 flex-col items-center justify-start sm:ml-[0] md:px-5 rounded-md w-full"
                cardimgOne="images/img_cardimg_1.png"
                title="Mortal Kombat"
              />
              <MainpageMoviecard
                className="flex flex-1 flex-col items-center justify-start sm:ml-[0] md:px-5 rounded-md w-full"
                cardimgOne="images/img_cardimg_2.png"
                title="The Courier"
              />
              <MainpageMoviecard
                className="flex flex-1 flex-col items-center justify-start sm:ml-[0] md:px-5 rounded-md w-full"
                cardimgOne="images/img_cardimg_3.png"
                title="Thunder Force"
              />
              <div className="flex sm:ml-[0] md:px-5 relative w-full">
                <div className="flex flex-col items-center justify-start my-auto w-[48%]">
                  <div className="bg-gradient2  flex flex-col items-end justify-center p-[17px] w-full">
                    <div className="flex flex-col h-10 items-center justify-start my-[161px] p-2 w-10">
                      <Img
                        className="h-6 w-6"
                        src="images/img_iconchevronright_white_a700.svg"
                        alt="iconchevronrigh"
                      />
                    </div>
                  </div>
                </div>
                <MainpageMoviecard
                  className="flex flex-col items-center justify-start ml-[-123px] mr-auto my-auto rounded-md w-[99%] z-[1]"
                  cardimgOne="images/img_cardimg_4.png"
                  title="Peter Rabbit 2: The Runaway"
                />
              </div>
              <MainpageMoviecard
                className="flex flex-1 flex-col font-roboto items-center justify-start sm:ml-[0] md:px-5 rounded-md w-full"
                cardimgOne="images/img_cardimg_5.png"
                title="The Marksman"
              />
              <MainpageMoviecard
                className="flex flex-1 flex-col font-roboto items-center justify-start sm:ml-[0] md:px-5 rounded-md w-full"
                cardimgOne="images/img_cardimg_6.png"
                title="Tom & Jerry"
              />
              <MainpageMoviecard
                className="flex flex-1 flex-col font-roboto items-center justify-start sm:ml-[0] md:px-5 rounded-md w-full"
                cardimgOne="images/img_cardimg_7.png"
                title="The Unholy"
              />
              <MainpageMoviecard
                className="flex flex-1 flex-col font-roboto items-center justify-start sm:ml-[0] md:px-5 rounded-md w-full"
                cardimgOne="images/img_cardimg_8.png"
                title="The Conjuring: The Devil Made Me Do It"
              />
            </List>
            <div className="flex flex-row gap-2.5 items-center justify-start md:ml-[0] ml-[150px] mt-[50px] md:px-5 w-[9%] md:w-full">
              <Img
                className="h-3.5 rounded-[1px] w-3.5"
                src="images/img_user.svg"
                alt="user_Two"
              />
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtPoppinsMedium24"
              >
                Popular
              </Text>
            </div>
            <List
              className="flex sm:flex-col flex-row gap-[26px] justify-center mt-[15px] overflow-auto py-[22px] w-full"
              orientation="horizontal"
            >
              <div className="h-[396px] md:px-5 relative w-full">
                <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[49%]">
                  <div className="bg-gradient1  flex flex-col items-start justify-center p-4 w-full">
                    <div className="flex flex-col h-10 items-center justify-start my-[162px] p-2 rotate-[-180deg] w-10">
                      <Img
                        className="h-6 w-6"
                        src="images/img_iconchevronright.svg"
                        alt="iconchevronrigh"
                      />
                    </div>
                  </div>
                </div>
                <MainpageMoviecard
                  className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-md w-full"
                  cardimgOne="images/img_cardimg.png"
                  title="Wonder Woman 1984"
                />
              </div>
              <MainpageMoviecard className="flex flex-1 flex-col items-center justify-start md:px-5 rounded-md w-full" />
              <MainpageMoviecard
                className="flex flex-1 flex-col items-center justify-start md:px-5 rounded-md w-full"
                cardimgOne="images/img_cardimg_1.png"
                title="Mortal Kombat"
              />
              <MainpageMoviecard
                className="flex flex-1 flex-col items-center justify-start md:px-5 rounded-md w-full"
                cardimgOne="images/img_cardimg_2.png"
                title="The Courier"
              />
              <MainpageMoviecard
                className="flex flex-1 flex-col items-center justify-start md:px-5 rounded-md w-full"
                cardimgOne="images/img_cardimg_3.png"
                title="Thunder Force"
              />
              <div className="h-[396px] md:px-5 relative w-full">
                <MainpageMoviecard
                  className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-md w-[99%]"
                  cardimgOne="images/img_cardimg_4.png"
                  title="Peter Rabbit 2: The Runaway"
                />
                <div className="absolute bg-gradient2  flex flex-col h-full inset-y-[0] items-end justify-center left-[0] my-auto p-[17px] w-[48%]">
                  <div className="flex flex-col h-10 items-center justify-start my-[161px] p-2 w-10">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconchevronright_white_a700.svg"
                      alt="iconchevronrigh"
                    />
                  </div>
                </div>
              </div>
              <MainpageMoviecard
                className="flex flex-1 flex-col font-roboto items-center justify-start md:px-5 rounded-md w-full"
                cardimgOne="images/img_cardimg_5.png"
                title="The Marksman"
              />
              <MainpageMoviecard
                className="flex flex-1 flex-col font-roboto items-center justify-start md:px-5 rounded-md w-full"
                cardimgOne="images/img_cardimg_6.png"
                title="Tom & Jerry"
              />
              <MainpageMoviecard
                className="flex flex-1 flex-col font-roboto items-center justify-start md:px-5 rounded-md w-full"
                cardimgOne="images/img_cardimg_7.png"
                title="The Unholy"
              />
              <MainpageMoviecard
                className="flex flex-1 flex-col font-roboto items-center justify-start md:px-5 rounded-md w-full"
                cardimgOne="images/img_cardimg_8.png"
                title="The Conjuring: The Devil Made Me Do It"
              />
            </List>
            <div className="flex flex-row gap-2.5 items-center justify-start md:ml-[0] ml-[150px] mt-[46px] md:px-5 w-[7%] md:w-full">
              <Img
                className="h-3.5 rounded-[1px] w-3.5"
                src="images/img_user.svg"
                alt="user_Three"
              />
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtPoppinsMedium24"
              >
                Series
              </Text>
            </div>
            <List
              className="flex sm:flex-col flex-row gap-[26px] justify-center mt-[19px] overflow-auto py-[22px] w-full"
              orientation="horizontal"
            >
              <div className="h-[396px] md:px-5 relative w-full">
                <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[49%]">
                  <div className="bg-gradient1  flex flex-col items-start justify-center p-4 w-full">
                    <div className="flex flex-col h-10 items-center justify-start my-[162px] p-2 rotate-[-180deg] w-10">
                      <Img
                        className="h-6 w-6"
                        src="images/img_iconchevronright.svg"
                        alt="iconchevronrigh"
                      />
                    </div>
                  </div>
                </div>
                <MainpageMoviecard
                  className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-md w-full"
                  cardimgOne="images/img_cardimg.png"
                  title="Wonder Woman 1984"
                />
              </div>
              <MainpageMoviecard className="flex flex-1 flex-col items-center justify-start md:px-5 rounded-md w-full" />
              <MainpageMoviecard
                className="flex flex-1 flex-col items-center justify-start md:px-5 rounded-md w-full"
                cardimgOne="images/img_cardimg_1.png"
                title="Mortal Kombat"
              />
              <MainpageMoviecard
                className="flex flex-1 flex-col items-center justify-start md:px-5 rounded-md w-full"
                cardimgOne="images/img_cardimg_2.png"
                title="The Courier"
              />
              <MainpageMoviecard
                className="flex flex-1 flex-col items-center justify-start md:px-5 rounded-md w-full"
                cardimgOne="images/img_cardimg_3.png"
                title="Thunder Force"
              />
              <div className="h-[396px] md:px-5 relative w-full">
                <MainpageMoviecard
                  className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-md w-[99%]"
                  cardimgOne="images/img_cardimg_4.png"
                  title="Peter Rabbit 2: The Runaway"
                />
                <div className="absolute bg-gradient2  flex flex-col h-full inset-y-[0] items-end justify-center left-[0] my-auto p-[17px] w-[48%]">
                  <div className="flex flex-col h-10 items-center justify-start my-[161px] p-2 w-10">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconchevronright_white_a700.svg"
                      alt="iconchevronrigh"
                    />
                  </div>
                </div>
              </div>
              <MainpageMoviecard
                className="flex flex-1 flex-col font-roboto items-center justify-start md:px-5 rounded-md w-full"
                cardimgOne="images/img_cardimg_5.png"
                title="The Marksman"
              />
              <MainpageMoviecard
                className="flex flex-1 flex-col font-roboto items-center justify-start md:px-5 rounded-md w-full"
                cardimgOne="images/img_cardimg_6.png"
                title="Tom & Jerry"
              />
              <MainpageMoviecard
                className="flex flex-1 flex-col font-roboto items-center justify-start md:px-5 rounded-md w-full"
                cardimgOne="images/img_cardimg_7.png"
                title="The Unholy"
              />
              <MainpageMoviecard
                className="flex flex-1 flex-col font-roboto items-center justify-start md:px-5 rounded-md w-full"
                cardimgOne="images/img_cardimg_8.png"
                title="The Conjuring: The Devil Made Me Do It"
              />
            </List>
            <div className="flex flex-row gap-2.5 items-center justify-start md:ml-[0] ml-[150px] mt-[46px] md:px-5 w-[10%] md:w-full">
              <Img
                className="h-3.5 rounded-[1px] w-3.5"
                src="images/img_user.svg"
                alt="user_Four"
              />
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtPoppinsMedium24"
              >
                Multifilms
              </Text>
            </div>
            <List
              className="flex sm:flex-col flex-row gap-[26px] justify-center mt-[19px] overflow-auto py-[22px] w-full"
              orientation="horizontal"
            >
              <div className="h-[396px] md:px-5 relative w-full">
                <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[49%]">
                  <div className="bg-gradient1  flex flex-col items-start justify-center p-4 w-full">
                    <div className="flex flex-col h-10 items-center justify-start my-[162px] p-2 rotate-[-180deg] w-10">
                      <Img
                        className="h-6 w-6"
                        src="images/img_iconchevronright.svg"
                        alt="iconchevronrigh"
                      />
                    </div>
                  </div>
                </div>
                <MainpageMoviecard
                  className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-md w-full"
                  cardimgOne="images/img_cardimg.png"
                  title="Wonder Woman 1984"
                />
              </div>
              <MainpageMoviecard className="flex flex-1 flex-col items-center justify-start md:px-5 rounded-md w-full" />
              <MainpageMoviecard
                className="flex flex-1 flex-col items-center justify-start md:px-5 rounded-md w-full"
                cardimgOne="images/img_cardimg_1.png"
                title="Mortal Kombat"
              />
              <MainpageMoviecard
                className="flex flex-1 flex-col items-center justify-start md:px-5 rounded-md w-full"
                cardimgOne="images/img_cardimg_2.png"
                title="The Courier"
              />
              <MainpageMoviecard
                className="flex flex-1 flex-col items-center justify-start md:px-5 rounded-md w-full"
                cardimgOne="images/img_cardimg_3.png"
                title="Thunder Force"
              />
              <div className="h-[396px] md:px-5 relative w-full">
                <MainpageMoviecard
                  className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-md w-[99%]"
                  cardimgOne="images/img_cardimg_4.png"
                  title="Peter Rabbit 2: The Runaway"
                />
                <div className="absolute bg-gradient2  flex flex-col h-full inset-y-[0] items-end justify-center left-[0] my-auto p-[17px] w-[48%]">
                  <div className="flex flex-col h-10 items-center justify-start my-[161px] p-2 w-10">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconchevronright_white_a700.svg"
                      alt="iconchevronrigh"
                    />
                  </div>
                </div>
              </div>
              <MainpageMoviecard
                className="flex flex-1 flex-col font-roboto items-center justify-start md:px-5 rounded-md w-full"
                cardimgOne="images/img_cardimg_5.png"
                title="The Marksman"
              />
              <MainpageMoviecard
                className="flex flex-1 flex-col font-roboto items-center justify-start md:px-5 rounded-md w-full"
                cardimgOne="images/img_cardimg_6.png"
                title="Tom & Jerry"
              />
              <MainpageMoviecard
                className="flex flex-1 flex-col font-roboto items-center justify-start md:px-5 rounded-md w-full"
                cardimgOne="images/img_cardimg_7.png"
                title="The Unholy"
              />
              <MainpageMoviecard
                className="flex flex-1 flex-col font-roboto items-center justify-start md:px-5 rounded-md w-full"
                cardimgOne="images/img_cardimg_8.png"
                title="The Conjuring: The Devil Made Me Do It"
              />
            </List>
            <div className="flex flex-col items-center justify-start mt-[123px] w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Line className="bg-gray-900_01 h-px w-full" />
                <div className="flex md:flex-col flex-row font-inter md:gap-10 items-start justify-between max-w-[1141px] mt-[52px] mx-auto md:px-5 w-full">
                  <div className="flex md:flex-1 flex-col gap-4 items-start justify-start md:mt-0 mt-[5px] w-[44%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[26%] md:w-full">
                      <Img
                        className="h-[39px] md:h-auto object-cover w-full"
                        src="images/img_frame6removebgpreview_39x125.png"
                        alt="frame6removebgp_One"
                      />
                    </div>
                    <Text
                      className="leading-[20.00px] text-white-A700 text-xs w-full"
                      size="txtInterMedium12"
                    >
                      <>
                        Filmlarga bo&#39;lgan huquqlar ularning mualliflariga
                        tegishli. Barcha filmlar faqat ma&#39;lumot uchun taqdim
                        etiladi. Ma&#39;muriyat foydalanuvchilar tomonidan
                        joylashtirilgan noqonuniy materiallar uchun javobgar
                        emas! Har qanday film mualliflik huquqi egasining
                        iltimosiga binoan olib tashlanadi
                      </>
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[44%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                      <Text
                        className="text-sm text-white-A700"
                        size="txtInterSemiBold14"
                      >
                        Pages
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[173px] text-sm text-white-A700"
                        size="txtInterSemiBold14"
                      >
                        Our social networks
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[50px] text-sm text-white-A700"
                        size="txtInterSemiBold14"
                      >
                        For reference
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-0.5 md:ml-[0] mt-3.5 w-[95%] md:w-full">
                      <Text
                        className="text-white-A700 text-xs"
                        size="txtInterMedium12"
                      >
                        The most watched movies
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[52px] text-white-A700 text-xs"
                        size="txtInterMedium12"
                      >
                        Telegram
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[119px] text-white-A700 text-xs"
                        size="txtInterMedium12"
                      >
                        Telegram
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between ml-0.5 md:ml-[0] mt-1.5 w-[96%] md:w-full">
                      <Text
                        className="text-white-A700 text-xs"
                        size="txtInterMedium12"
                      >
                        Top Rated Movies
                      </Text>
                      <Text
                        className="text-white-A700 text-xs"
                        size="txtInterMedium12"
                      >
                        Instagram
                      </Text>
                      <Text
                        className="text-white-A700 text-xs"
                        size="txtInterMedium12"
                      >
                        Instagram
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-0.5 md:ml-[0] mt-[5px] w-[96%] md:w-full">
                      <Text
                        className="text-white-A700 text-xs"
                        size="txtInterMedium12"
                      >
                        Movies
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[161px] text-white-A700 text-xs"
                        size="txtInterMedium12"
                      >
                        Facebook
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[116px] text-white-A700 text-xs"
                        size="txtInterMedium12"
                      >
                        Whatsapp
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-0.5 md:ml-[0] mt-[5px] w-[92%] md:w-full">
                      <Text
                        className="text-white-A700 text-xs"
                        size="txtInterMedium12"
                      >
                        Serials
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[164px] text-white-A700 text-xs"
                        size="txtInterMedium12"
                      >
                        YouTube
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[123px] text-white-A700 text-xs"
                        size="txtInterMedium12"
                      >
                        Skype
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="mt-[133px] text-sm text-white-A700"
                  size="txtPoppinsMedium14WhiteA700"
                >
                  <>© Filmberry.com - 2023</>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainpagePage;
