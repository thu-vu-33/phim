import React from "react";

import { Button, Img, Line, List, SeekBar, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import MainpageMoviecard from "components/MainpageMoviecard";

const KinohaqidavakinokorishsaxifasiPage = () => {
  const mainpageMoviecardPropList = [
    { title: "Wonder Woman 1984", cardimgOne: "images/img_cardimg.png" },
    {},
    { title: "The Courier", cardimgOne: "images/img_cardimg_2.png" },
    { title: "Thunder Force", cardimgOne: "images/img_cardimg_3.png" },
  ];

  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-start mx-auto pb-10 w-full">
        <Header className="flex items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col gap-12 items-start mt-[50px] md:px-10 sm:px-5 px-[150px] w-full">
          <div className="flex flex-col items-center justify-start w-[46%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
              <div className="h-[300px] relative w-2/5 sm:w-full">
                <Img
                  className="h-[300px] m-auto object-cover rounded-md w-full"
                  src="images/img_cardimg_1.png"
                  alt="cardimg"
                />
                <Text
                  className="absolute bg-red-A700 justify-center left-[0] pt-[3px] px-2 rounded-br-md rounded-tl-md text-sm text-white-A700 top-[0] w-auto"
                  size="txtPoppinsRegular14"
                >
                  Fantasy
                </Text>
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
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[126px] shadow-bs"
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
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[126px] text-center text-sm"
                    shape="round"
                    color="gray_900"
                    size="xs"
                    variant="fill"
                  >
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
            size="txtPoppinsSemiBold22"
          >
            About the movie
          </Text>
        </div>
        <Text
          className="leading-[180.00%] mt-[21px] text-sm text-white-A700 tracking-[0.28px] w-4/5 sm:w-full"
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
            (after over a decade of both operating as separate divisions of Time
            Warner), made a bid to purchase most of Midway&#39;s assets,
            including Mortal Kombat. In June 2009, Kasanoff and Threshold sued
            in bankruptcy court, arguing that they owned the copyright to many
            of the characters from the series. [1] On July 1, 2009, the
            bankruptcy court approved the sale of most of Midway&#39;s assets to
            Warner Bros.[2] subject to the intellectual property claims of
            Threshold Entertainment.[3] After years of development hell, a
            reboot of the series was released in April 2021.
          </>
        </Text>
        <div className="h-[730px] md:h-[749px] max-w-[1140px] mt-12 mx-auto md:px-5 relative w-full">
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
              alt="overflowmenu"
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
        <div className="flex flex-col items-center justify-start max-w-[1140px] mt-[50px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-5 items-start justify-start w-full">
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
            <div className="bg-gray-900 flex flex-col items-center justify-end p-[23px] sm:px-5 rounded-md w-full">
              <div className="flex flex-col items-start justify-start mt-2 w-[92%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Img
                    className="h-[65px] md:h-auto rounded-[50%] w-[65px]"
                    src="images/img_rectangle7.png"
                    alt="rectangleSeven"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start">
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
                  className="flex flex-col gap-[30px] mt-[30px] w-[93%]"
                  orientation="vertical"
                >
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <Img
                      className="h-[65px] md:h-auto rounded-[50%] w-[65px]"
                      src="images/img_rectangle6.png"
                      alt="rectangleSix"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                        <div className="flex flex-row gap-2.5 items-start justify-start w-[28%] md:w-full">
                          <Text
                            className="text-sm text-white-A700"
                            size="txtPoppinsMedium14WhiteA700"
                          >
                            Asadbek Shomurodov
                          </Text>
                          <Text
                            className="mt-0.5 text-red-A700 text-xs"
                            size="txtPoppinsRegular12RedA700"
                          >
                            a day ago
                          </Text>
                        </div>
                        <Text
                          className="text-sm text-white-A700 w-full"
                          size="txtPoppinsRegular14"
                        >
                          <span className="text-white-A700 font-poppins text-left font-normal">
                            Lorem ipsum dolor sit amet consectetur. Ac tortor
                            vitae id lorem. Consectetur donec cursus massa nunc
                            ullamcorper semper...{" "}
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
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <Img
                      className="h-[65px] md:h-auto rounded-[50%] w-[65px]"
                      src="images/img_rectangle6.png"
                      alt="rectangleSix"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                        <div className="flex flex-row gap-2.5 items-start justify-start w-[28%] md:w-full">
                          <Text
                            className="text-sm text-white-A700"
                            size="txtPoppinsMedium14WhiteA700"
                          >
                            Asadbek Shomurodov
                          </Text>
                          <Text
                            className="mt-0.5 text-red-A700 text-xs"
                            size="txtPoppinsRegular12RedA700"
                          >
                            a day ago
                          </Text>
                        </div>
                        <Text
                          className="text-sm text-white-A700 w-full"
                          size="txtPoppinsRegular14"
                        >
                          <span className="text-white-A700 font-poppins text-left font-normal">
                            Lorem ipsum dolor sit amet consectetur. Ac tortor
                            vitae id lorem. Consectetur donec cursus massa nunc
                            ullamcorper semper...{" "}
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
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <Img
                      className="h-[65px] md:h-auto rounded-[50%] w-[65px]"
                      src="images/img_rectangle6.png"
                      alt="rectangleSix"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <div className="flex flex-row gap-2.5 items-start justify-start w-[28%] md:w-full">
                          <Text
                            className="text-sm text-white-A700"
                            size="txtPoppinsMedium14WhiteA700"
                          >
                            Asadbek Shomurodov
                          </Text>
                          <Text
                            className="mt-0.5 text-red-A700 text-xs"
                            size="txtPoppinsRegular12RedA700"
                          >
                            a day ago
                          </Text>
                        </div>
                        <Text
                          className="text-sm text-white-A700 w-full"
                          size="txtPoppinsRegular14"
                        >
                          <span className="text-white-A700 font-poppins text-left font-normal">
                            Lorem ipsum dolor sit amet consectetur. Ac tortor
                            vitae id lorem. Consectetur donec cursus massa nunc
                            ullamcorper semper...{" "}
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
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <Img
                      className="h-[65px] md:h-auto rounded-[50%] w-[65px]"
                      src="images/img_rectangle6.png"
                      alt="rectangleSix"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                        <div className="flex flex-row gap-2.5 items-start justify-start w-[28%] md:w-full">
                          <Text
                            className="text-sm text-white-A700"
                            size="txtPoppinsMedium14WhiteA700"
                          >
                            Asadbek Shomurodov
                          </Text>
                          <Text
                            className="mt-0.5 text-red-A700 text-xs"
                            size="txtPoppinsRegular12RedA700"
                          >
                            a day ago
                          </Text>
                        </div>
                        <Text
                          className="text-sm text-white-A700 w-full"
                          size="txtPoppinsRegular14"
                        >
                          <span className="text-white-A700 font-poppins text-left font-normal">
                            Lorem ipsum dolor sit amet consectetur. Ac tortor
                            vitae id lorem. Consectetur donec cursus massa nunc
                            ullamcorper semper...{" "}
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
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <Img
                      className="h-[65px] md:h-auto rounded-[50%] w-[65px]"
                      src="images/img_rectangle6.png"
                      alt="rectangleSix"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                        <div className="flex flex-row gap-2.5 items-start justify-start w-[28%] md:w-full">
                          <Text
                            className="text-sm text-white-A700"
                            size="txtPoppinsMedium14WhiteA700"
                          >
                            Asadbek Shomurodov
                          </Text>
                          <Text
                            className="mt-0.5 text-red-A700 text-xs"
                            size="txtPoppinsRegular12RedA700"
                          >
                            a day ago
                          </Text>
                        </div>
                        <Text
                          className="text-sm text-white-A700 w-full"
                          size="txtPoppinsRegular14"
                        >
                          <span className="text-white-A700 font-poppins text-left font-normal">
                            Lorem ipsum dolor sit amet consectetur. Ac tortor
                            vitae id lorem. Consectetur donec cursus massa nunc
                            ullamcorper semper...{" "}
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
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <Img
                      className="h-[65px] md:h-auto rounded-[50%] w-[65px]"
                      src="images/img_rectangle6.png"
                      alt="rectangleSix"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                        <div className="flex flex-row gap-2.5 items-start justify-start w-[28%] md:w-full">
                          <Text
                            className="text-sm text-white-A700"
                            size="txtPoppinsMedium14WhiteA700"
                          >
                            Asadbek Shomurodov
                          </Text>
                          <Text
                            className="mt-0.5 text-red-A700 text-xs"
                            size="txtPoppinsRegular12RedA700"
                          >
                            a day ago
                          </Text>
                        </div>
                        <Text
                          className="text-sm text-white-A700 w-full"
                          size="txtPoppinsRegular14"
                        >
                          <span className="text-white-A700 font-poppins text-left font-normal">
                            Lorem ipsum dolor sit amet consectetur. Ac tortor
                            vitae id lorem. Consectetur donec cursus massa nunc
                            ullamcorper semper...{" "}
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
                  className="md:ml-[0] ml-[459px] mt-[51px] text-red-A700 text-sm underline"
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
        <div className="flex flex-col items-center justify-start max-w-[1140px] mt-[50px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[35px] items-start justify-start w-full">
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
        <Footer className="flex items-center justify-center mt-[100px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default KinohaqidavakinokorishsaxifasiPage;
