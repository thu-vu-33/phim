import React from "react";

import { Img, Text } from "components";

const MainpageMoviecard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[396px] relative rounded-md w-full">
          <Img
            className="absolute h-[396px] inset-[0] justify-center m-auto object-cover rounded-md w-full"
            alt="cardimg_One"
            src={props?.cardimgOne}
          />
          <div className="absolute bg-gradient  flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-md w-full">
            <div className="flex flex-col gap-4 h-[396px] md:h-auto items-start justify-end p-6 sm:px-5 rounded-md w-[264px] md:w-full">
              <div className="bg-red-A700 flex flex-col items-start justify-start px-2 py-1 rounded-[5px] w-auto">
                {!!props?.category ? (
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtPoppinsRegular14"
                  >
                    {props?.category}
                  </Text>
                ) : null}
              </div>
              <div className="flex flex-row h-4 md:h-auto items-start justify-start w-auto">
                <Img
                  className="h-full w-4"
                  src="images/img_signal_white_a700.svg"
                  alt="signal_Five"
                />
                <Img
                  className="h-full w-4"
                  src="images/img_signal_white_a700.svg"
                  alt="signal_Six"
                />
                <Img
                  className="h-full w-4"
                  src="images/img_signal_white_a700.svg"
                  alt="signal_Seven"
                />
                <Img
                  className="h-full w-4"
                  src="images/img_signal_white_a700.svg"
                  alt="signal_Eight"
                />
                <Img
                  className="h-full w-4"
                  src="images/img_signal_white_a700.svg"
                  alt="signal_Nine"
                />
              </div>
              <Text
                className="leading-[32.00px] max-w-[216px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtPoppinsMedium24"
              >
                {props?.title}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MainpageMoviecard.defaultProps = {
  cardimgOne: "images/img_cardimg_396x264.png",
  title: <>Zack Snyder&#39;s Justice League</>,
};

export default MainpageMoviecard;
