import React from "react";

import { Button, Img, Line, List, SeekBar, Text } from "components";
import MainpageMoviecard from "components/MainpageMoviecard";

const FullwidthPage = () => {
  const mainpageMoviecardPropList = [
    { title: "Wonder Woman 1984", cardimgOne: "images/img_cardimg.png" },
    {},
    { title: "The Courier", cardimgOne: "images/img_cardimg_2.png" },
    { title: "Thunder Force", cardimgOne: "images/img_cardimg_3.png" },
  ];

  return (
    <>
      <div className="bg-black-900 flex font-poppins h-[970px] justify-end mx-auto relative w-full">
        <header className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto md:px-5 top-[0] w-full">
          <div className="md:h-[100px] h-[101px] relative w-full">
            <div className="bg-black-900_05 border-b border-blue_gray-100_72 border-solid h-[100px] m-auto w-full"></div>
            <ul className="absolute flex md:flex-col flex-row h-max md:hidden inset-[0] items-center justify-center m-auto p-[7px] w-4/5 common-row-list">
              <li>
                <a href="javascript:">
                  <div className="flex flex-row items-center justify-center">
                    <Img
                      className="h-4 rounded-[1px]"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <Text
                      className="hover:font-medium ml-[5px] hover:text-gray-200 text-lg text-white-A700"
                      size="txtPoppinsSemiBold18"
                    >
                      Home
                    </Text>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div className="flex flex-row items-center justify-center ml-[269px] mt-0.5">
                    <Text
                      className="hover:font-medium text-gray-200 text-lg"
                      size="txtPoppinsMedium18"
                    >
                      My list
                    </Text>
                    <Img
                      className="h-[5px] ml-[5px]"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div className="flex flex-row font-inter gap-1.5 items-start justify-center ml-[181px] mr-[5px]">
                    <Img
                      className="h-5 w-5"
                      src="images/img_globe.svg"
                      alt="globe"
                    />
                    <Text
                      className="hover:font-medium mt-[3px] hover:text-gray-200 text-white-A700 text-xs"
                      size="txtInterSemiBold12"
                    >
                      ENG
                    </Text>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </header>
        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-end max-w-[1140px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-[46%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
              <div className="h-[300px] relative w-2/5 sm:w-full">
                <Img
                  className="h-[300px] m-auto object-cover rounded-md w-full"
                  src="images/img_cardimg_1.png"
                  alt="cardimg"
                />
                <div className="absolute bg-red-A700 flex flex-col items-center justify-start left-[0] px-2 py-1 rounded-br-md rounded-tl-md top-[0] w-auto">
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtPoppinsRegular14"
                  >
                    Fantasy
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[53%] sm:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  Mortal Kombat
                </Text>
                <Text
                  className="mt-3.5 text-sm text-white-A700"
                  size="txtPoppinsMedium14WhiteA700"
                >
                  <span className="text-white-A700 font-poppins text-left font-semibold">
                    Name:
                  </span>
                  <span className="text-white-A700 font-poppins text-left font-medium">
                    {" "}
                  </span>
                  <span className="text-red-A700 font-poppins text-left font-medium">
                    Mortal Kombat{" "}
                  </span>
                </Text>
                <Text
                  className="mt-[7px] text-sm text-white-A700"
                  size="txtPoppinsMedium14WhiteA700"
                >
                  <span className="text-white-A700 font-poppins text-left font-semibold">
                    Time:
                  </span>
                  <span className="text-white-A700 font-poppins text-left font-medium">
                    {" "}
                  </span>
                  <span className="text-red-A700 font-poppins text-left font-medium">
                    2 hours 12 minutes 8 seconds
                  </span>
                </Text>
                <Text
                  className="mt-2 text-sm text-white-A700"
                  size="txtPoppinsMedium14WhiteA700"
                >
                  <span className="text-white-A700 font-poppins text-left font-semibold">
                    Date:{" "}
                  </span>
                  <span className="text-red-A700 font-poppins text-left font-medium">
                    2022{" "}
                  </span>
                </Text>
                <Text
                  className="mt-2.5 text-sm text-white-A700"
                  size="txtPoppinsMedium14WhiteA700"
                >
                  <span className="text-white-A700 font-poppins text-left font-semibold">
                    Genre:
                  </span>
                  <span className="text-white-A700 font-poppins text-left font-medium">
                    {" "}
                  </span>
                  <span className="text-red-A700 font-poppins text-left font-medium">
                    Fantasy{" "}
                  </span>
                </Text>
                <Text
                  className="mt-1.5 text-sm text-white-A700"
                  size="txtPoppinsMedium14WhiteA700"
                >
                  <span className="text-white-A700 font-poppins text-left font-semibold">
                    Language:
                  </span>
                  <span className="text-white-A700 font-poppins text-left font-medium">
                    {" "}
                  </span>
                  <span className="text-red-A700 font-poppins text-left font-medium">
                    Uzbekch ( Tarjima ){" "}
                  </span>
                </Text>
                <div className="flex flex-row gap-4 items-center justify-start mt-[15px] w-[38%] md:w-full">
                  <div className="flex flex-row items-start justify-evenly w-[45%]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_bxlike.svg"
                      alt="bxlike"
                    />
                    <Text
                      className="mt-0.5 text-sm text-white-A700"
                      size="txtPoppinsSemiBold14"
                    >
                      1K
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-evenly w-2/5">
                    <Img
                      className="h-6 w-6"
                      src="images/img_bxdislike.svg"
                      alt="bxdislike"
                    />
                    <Text
                      className="text-sm text-white-A700"
                      size="txtPoppinsSemiBold14"
                    >
                      0
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-between mt-[21px] w-full">
                  <div className="bg-red-A700 flex flex-row items-center justify-center p-2 rounded-[20px] shadow-bs w-[48%]">
                    <Img
                      className="h-[15px] ml-[17px] rounded-[1px] w-[15px]"
                      src="images/img_overflowmenu.svg"
                      alt="overflowmenu"
                    />
                    <Text
                      className="ml-[5px] mr-[17px] text-sm text-white-A700"
                      size="txtPoppinsSemiBold14"
                    >
                      WATCH
                    </Text>
                  </div>
                  <div className="bg-gray-900 flex flex-col items-center justify-start p-2 rounded-[20px]">
                    <Text
                      className="mb-0.5 text-sm text-white-A700"
                      size="txtPoppinsSemiBold14"
                    >
                      Download
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="mt-12 text-[22px] sm:text-lg text-white-A700 md:text-xl"
            size="txtPoppinsSemiBold22"
          >
            About the movie
          </Text>
          <Text
            className="leading-[180.00%] mt-[21px] text-sm text-white-A700 tracking-[0.28px] w-full"
            size="txtPoppinsRegular14"
          >
            <>
              Mortal Kombat is an American series of martial arts action films
              based on the fighting video game series of the same name by Midway
              Games.
              <br />
              The first film was produced by Lawrence Kasanoff’s Threshold
              Entertainment. The first film, Mortal Kombat, was released in 1995
              and its sequel, Mortal Kombat: Annihilation, was released in 1997.
              After the two films, game publisher Midway filed for bankruptcy.
              Warner Bros., having become the parent of New Line Cinema in 2008
              (after over a decade of both operating as separate divisions of
              Time Warner), made a bid to purchase most of Midway&#39;s assets,
              including Mortal Kombat. In June 2009, Kasanoff and Threshold sued
              in bankruptcy court, arguing that they owned the copyright to many
              of the characters from the series. [1] On July 1, 2009, the
              bankruptcy court approved the sale of most of Midway&#39;s assets
              to Warner Bros.[2] subject to the intellectual property claims of
              Threshold Entertainment.[3] After years of development hell, a
              reboot of the series was released in April 2021.
            </>
          </Text>
          <div className="h-[730px] md:h-[749px] mt-12 relative w-full">
            <div className="absolute h-[701px] inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[701px] m-auto object-cover rounded-md w-full"
                src="images/img_image15.png"
                alt="imageFifteen"
              />
              <Img
                className="absolute h-[234px] inset-x-[0] mx-auto top-[30%]"
                src="images/img_playback.svg"
                alt="playback"
              />
            </div>
            <div className="absolute bg-blue_gray-900_a5 bottom-[0] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-start mx-auto p-[21px] sm:px-5 rounded-bl-md rounded-br-md w-full">
              <Img
                className="h-[47px] mb-[3px] md:ml-[0] ml-[9px] w-[47px]"
                src="images/img_overflowmenu_white_a700.svg"
                alt="overflowmenu_One"
              />
              <Img
                className="h-[29px] ml-5 md:ml-[0] w-[29px]"
                src="images/img_fluentnext16filled.svg"
                alt="fluentnext16fil"
              />
              <Img
                className="h-[31px] md:ml-[0] ml-[19px] w-[31px]"
                src="images/img_user_white_a700.svg"
                alt="user_One"
              />
              <div className="flex md:flex-1 md:flex-col flex-row gap-[7.85px] items-center justify-center md:ml-[0] ml-[35px] w-auto md:w-full">
                <Text
                  className="sm:text-[19.51px] md:text-[21.51px] text-[23.51px] text-white-A700 w-auto"
                  size="txtPoppinsRegular2351"
                >
                  0:51
                </Text>
                <SeekBar
                  inputValue={[0]}
                  trackColors={["#e50914", "#ffffff7f"]}
                  thumbClassName="h-[undefinedpx] w-[undefinedpx] flex justify-center items-center rounded-[50%] outline-none"
                  className="flex h-5 rounded w-[88%]"
                  trackClassName="h-[5px] flex rounded w-full"
                />{" "}
                <Text
                  className="sm:text-[19.51px] md:text-[21.51px] text-[23.51px] text-white-A700 w-auto"
                  size="txtPoppinsRegular2351"
                >
                  2:31
                </Text>
              </div>
              <Img
                className="h-[31px] ml-10 md:ml-[0] w-[77px]"
                src="images/img_television.svg"
                alt="television"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[50px] w-full">
            <div className="flex flex-col gap-[25px] items-start justify-start w-full">
              <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] w-[13%] md:w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_television_red_a700.svg"
                  alt="television_One"
                />
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsMedium24"
                >
                  Thoughts
                </Text>
              </div>
              <div className="bg-gray-900 flex flex-col items-center justify-end p-[25px] sm:px-5 rounded-md w-full">
                <div className="flex flex-col items-start justify-start mt-[7px] w-[93%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <Img
                      className="h-[65px] md:h-auto rounded-[50%] w-[65px]"
                      src="images/img_rectangle7.png"
                      alt="rectangleSeven"
                    />
                    <div className="flex flex-col gap-1.5 items-start justify-start">
                      <Text
                        className="text-white-A700_7f text-xs"
                        size="txtPoppinsRegular12"
                      >
                        Express an opinion
                      </Text>
                      <Line className="bg-white-A700_8c h-px w-full" />
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-[25px] mt-[25px] w-[93%]"
                    orientation="vertical"
                  >
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <Img
                        className="h-[65px] md:h-auto rounded-[50%] w-[65px]"
                        src="images/img_rectangle6.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-row gap-2.5 items-center justify-start w-[28%] md:w-full">
                            <Text
                              className="leading-[32.00px] text-sm text-white-A700 w-[69%] sm:w-full"
                              size="txtPoppinsMedium14WhiteA700"
                            >
                              Asadbek Shomurodov
                            </Text>
                            <Text
                              className="text-red-A700 text-xs"
                              size="txtPoppinsRegular12RedA700"
                            >
                              a day ago
                            </Text>
                          </div>
                          <Text
                            className="mt-0.5 text-sm text-white-A700 w-full"
                            size="txtPoppinsRegular14"
                          >
                            <span className="text-white-A700 font-poppins text-left font-normal">
                              Lorem ipsum dolor sit amet consectetur. Ac tortor
                              vitae id lorem. Consectetur donec cursus massa
                              nunc ullamcorper semper...{" "}
                            </span>
                            <a
                              href="javascript:"
                              className="text-red-A700 font-poppins text-left font-normal underline"
                            >
                              More
                            </a>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <Img
                        className="h-[65px] md:h-auto rounded-[50%] w-[65px]"
                        src="images/img_rectangle6.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-row gap-2.5 items-center justify-start w-[28%] md:w-full">
                            <Text
                              className="leading-[32.00px] text-sm text-white-A700 w-[69%] sm:w-full"
                              size="txtPoppinsMedium14WhiteA700"
                            >
                              Asadbek Shomurodov
                            </Text>
                            <Text
                              className="text-red-A700 text-xs"
                              size="txtPoppinsRegular12RedA700"
                            >
                              a day ago
                            </Text>
                          </div>
                          <Text
                            className="mt-0.5 text-sm text-white-A700 w-full"
                            size="txtPoppinsRegular14"
                          >
                            <span className="text-white-A700 font-poppins text-left font-normal">
                              Lorem ipsum dolor sit amet consectetur. Ac tortor
                              vitae id lorem. Consectetur donec cursus massa
                              nunc ullamcorper semper...{" "}
                            </span>
                            <a
                              href="javascript:"
                              className="text-red-A700 font-poppins text-left font-normal underline"
                            >
                              More
                            </a>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <Img
                        className="h-[65px] md:h-auto rounded-[50%] w-[65px]"
                        src="images/img_rectangle6.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-row gap-2.5 items-center justify-start w-[28%] md:w-full">
                            <Text
                              className="leading-[32.00px] text-sm text-white-A700 w-[69%] sm:w-full"
                              size="txtPoppinsMedium14WhiteA700"
                            >
                              Asadbek Shomurodov
                            </Text>
                            <Text
                              className="text-red-A700 text-xs"
                              size="txtPoppinsRegular12RedA700"
                            >
                              a day ago
                            </Text>
                          </div>
                          <Text
                            className="mt-[3px] text-sm text-white-A700 w-full"
                            size="txtPoppinsRegular14"
                          >
                            <span className="text-white-A700 font-poppins text-left font-normal">
                              Lorem ipsum dolor sit amet consectetur. Ac tortor
                              vitae id lorem. Consectetur donec cursus massa
                              nunc ullamcorper semper...{" "}
                            </span>
                            <a
                              href="javascript:"
                              className="text-red-A700 font-poppins text-left font-normal underline"
                            >
                              More
                            </a>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <Img
                        className="h-[65px] md:h-auto rounded-[50%] w-[65px]"
                        src="images/img_rectangle6.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-row gap-2.5 items-center justify-start w-[28%] md:w-full">
                            <Text
                              className="leading-[32.00px] text-sm text-white-A700 w-[69%] sm:w-full"
                              size="txtPoppinsMedium14WhiteA700"
                            >
                              Asadbek Shomurodov
                            </Text>
                            <Text
                              className="text-red-A700 text-xs"
                              size="txtPoppinsRegular12RedA700"
                            >
                              a day ago
                            </Text>
                          </div>
                          <Text
                            className="mt-0.5 text-sm text-white-A700 w-full"
                            size="txtPoppinsRegular14"
                          >
                            <span className="text-white-A700 font-poppins text-left font-normal">
                              Lorem ipsum dolor sit amet consectetur. Ac tortor
                              vitae id lorem. Consectetur donec cursus massa
                              nunc ullamcorper semper...{" "}
                            </span>
                            <a
                              href="javascript:"
                              className="text-red-A700 font-poppins text-left font-normal underline"
                            >
                              More
                            </a>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <Img
                        className="h-[65px] md:h-auto rounded-[50%] w-[65px]"
                        src="images/img_rectangle6.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-row gap-2.5 items-center justify-start w-[28%] md:w-full">
                            <Text
                              className="leading-[32.00px] text-sm text-white-A700 w-[69%] sm:w-full"
                              size="txtPoppinsMedium14WhiteA700"
                            >
                              Asadbek Shomurodov
                            </Text>
                            <Text
                              className="text-red-A700 text-xs"
                              size="txtPoppinsRegular12RedA700"
                            >
                              a day ago
                            </Text>
                          </div>
                          <Text
                            className="mt-0.5 text-sm text-white-A700 w-full"
                            size="txtPoppinsRegular14"
                          >
                            <span className="text-white-A700 font-poppins text-left font-normal">
                              Lorem ipsum dolor sit amet consectetur. Ac tortor
                              vitae id lorem. Consectetur donec cursus massa
                              nunc ullamcorper semper...{" "}
                            </span>
                            <a
                              href="javascript:"
                              className="text-red-A700 font-poppins text-left font-normal underline"
                            >
                              More
                            </a>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <Img
                        className="h-[65px] md:h-auto rounded-[50%] w-[65px]"
                        src="images/img_rectangle6.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-row gap-2.5 items-center justify-start w-[28%] md:w-full">
                            <Text
                              className="leading-[32.00px] text-sm text-white-A700 w-[69%] sm:w-full"
                              size="txtPoppinsMedium14WhiteA700"
                            >
                              Asadbek Shomurodov
                            </Text>
                            <Text
                              className="text-red-A700 text-xs"
                              size="txtPoppinsRegular12RedA700"
                            >
                              a day ago
                            </Text>
                          </div>
                          <Text
                            className="mt-0.5 text-sm text-white-A700 w-full"
                            size="txtPoppinsRegular14"
                          >
                            <span className="text-white-A700 font-poppins text-left font-normal">
                              Lorem ipsum dolor sit amet consectetur. Ac tortor
                              vitae id lorem. Consectetur donec cursus massa
                              nunc ullamcorper semper...{" "}
                            </span>
                            <a
                              href="javascript:"
                              className="text-red-A700 font-poppins text-left font-normal underline"
                            >
                              More
                            </a>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                  <Text
                    className="md:ml-[0] ml-[459px] mt-[50px] text-red-A700 text-sm underline"
                    size="txtPoppinsRegular14RedA700"
                  >
                    <span className="text-red-A700 font-poppins text-left font-normal">
                      More all t
                    </span>
                    <span className="text-red-A700 font-poppins text-left font-normal">
                      houghts
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[50px] w-full">
            <div className="flex flex-col gap-10 items-start justify-start w-full">
              <div className="flex flex-row gap-2.5 items-center justify-start w-[13%] md:w-full">
                <Img
                  className="h-3.5 rounded-[1px] w-3.5"
                  src="images/img_user.svg"
                  alt="user_Two"
                />
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsMedium24"
                >
                  Thoughts
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                orientation="horizontal"
              >
                {mainpageMoviecardPropList.map((props, index) => (
                  <React.Fragment key={`MainpageMoviecard${index}`}>
                    <MainpageMoviecard
                      className="flex flex-1 flex-col items-center justify-start rounded-md w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full items-center justify-end mt-auto mx-auto w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Line className="bg-gray-900_01 h-px w-full" />
            <div className="flex md:flex-col flex-row font-inter md:gap-10 items-start justify-between max-w-6xl mt-[49px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-1 flex-col gap-5 justify-start w-[45%] md:w-full">
                <Img
                  className="h-11 md:h-auto object-cover w-[26%] sm:w-full"
                  src="images/img_image7.png"
                  alt="imageSeven"
                />
                <Text
                  className="leading-[20.00px] md:ml-[0] ml-[11px] text-white-A700 text-xs"
                  size="txtInterMedium12"
                >
                  <>
                    Filmlarga bo&#39;lgan huquqlar ularning mualliflariga
                    tegishli. Barcha filmlar faqat ma&#39;lumot uchun taqdim
                    etiladi. Ma&#39;muriyat foydalanuvchilar tomonidan
                    joylashtirilgan noqonuniy materiallar uchun javobgar emas!
                    Har qanday film mualliflik huquqi egasining iltimosiga
                    binoan olib tashlanadi
                    <br />
                  </>
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-0.5 w-[43%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start ml-1 md:ml-[0] w-full">
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
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-3 w-[96%] md:w-full">
                  <Text
                    className="text-white-A700 text-xs"
                    size="txtInterMedium12"
                  >
                    The most watched movies
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[46px] text-white-A700 text-xs"
                    size="txtInterMedium12"
                  >
                    Telegram
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[113px] text-white-A700 text-xs"
                    size="txtInterMedium12"
                  >
                    Telegram
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-0.5 w-[97%] md:w-full">
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
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-0.5 w-[97%] md:w-full">
                  <Text
                    className="text-white-A700 text-xs"
                    size="txtInterMedium12"
                  >
                    Movies
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[155px] text-white-A700 text-xs"
                    size="txtInterMedium12"
                  >
                    Facebook
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[110px] text-white-A700 text-xs"
                    size="txtInterMedium12"
                  >
                    Whatsapp
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-0.5 w-[92%] md:w-full">
                  <Text
                    className="text-white-A700 text-xs"
                    size="txtInterMedium12"
                  >
                    Serials
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[158px] text-white-A700 text-xs"
                    size="txtInterMedium12"
                  >
                    YouTube
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[117px] text-white-A700 text-xs"
                    size="txtInterMedium12"
                  >
                    Skype
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="leading-[32.00px] mt-[127px] text-sm text-white-A700"
              size="txtPoppinsMedium14WhiteA700"
            >
              <>
                © Filmberry.com - 2023
                <br />
              </>
            </Text>
          </div>
        </div>
        <div className="absolute bg-black-900_cc bottom-[0] flex flex-col inset-x-[0] items-center justify-center mx-auto p-[60px] md:px-10 sm:px-5 w-full">
          <div className="md:h-[3304px] h-[730px] max-w-[1320px] mb-[2514px] mt-[60px] relative w-full">
            <Img
              className="h-[730px] m-auto object-cover rounded-md w-full"
              src="images/img_image16.png"
              alt="imageSixteen"
            />
            <div className="absolute bg-blue_gray-900_a5 bottom-[0] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-start mx-auto p-[21px] sm:px-5 w-full">
              <Img
                className="h-[47px] mb-[3px] md:ml-[0] ml-[19px] w-[47px]"
                src="images/img_overflowmenu_white_a700.svg"
                alt="overflowmenu_Two"
              />
              <Img
                className="h-[29px] ml-5 md:ml-[0] w-[29px]"
                src="images/img_fluentnext16filled.svg"
                alt="fluentnext16fil_One"
              />
              <Img
                className="h-[31px] md:ml-[0] ml-[19px] w-[31px]"
                src="images/img_user_white_a700.svg"
                alt="user_Three"
              />
              <div className="flex md:flex-1 md:flex-col flex-row gap-[7.85px] items-center justify-center md:ml-[0] ml-[46px] w-auto md:w-full">
                <Text
                  className="sm:text-[19.51px] md:text-[21.51px] text-[23.51px] text-white-A700 w-auto"
                  size="txtPoppinsRegular2351"
                >
                  0:51
                </Text>
                <SeekBar
                  inputValue={[0]}
                  trackColors={["#e50914", "#ffffff7f"]}
                  thumbClassName="h-[undefinedpx] w-[undefinedpx] flex justify-center items-center rounded-[50%] outline-none"
                  className="flex h-[23px] rounded w-[90%]"
                  trackClassName="h-1.5 flex rounded w-full"
                />{" "}
                <Text
                  className="sm:text-[19.51px] md:text-[21.51px] text-[23.51px] text-white-A700 w-auto"
                  size="txtPoppinsRegular2351"
                >
                  2:31
                </Text>
              </div>
              <Img
                className="h-[31px] md:ml-[0] ml-[35px] w-[77px]"
                src="images/img_television.svg"
                alt="television_Two"
              />
            </div>
            <Img
              className="absolute h-[234px] inset-[0] justify-center m-auto"
              src="images/img_playback_white_a700.svg"
              alt="playback_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FullwidthPage;
