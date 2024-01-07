import React from "react";

import { Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="bg-black-900_05 border-b border-blue_gray-100_72 border-solid h-[100px] w-full"></div>
        <ul className="flex md:flex-col flex-row md:hidden items-center justify-start mx-auto my-[30px] w-4/5 common-row-list">
          <li>
            <div className="flex flex-col items-center justify-start">
              <Img
                className="h-[39px] md:h-auto object-cover w-full"
                src="images/img_frame6removebgpreview.png"
                alt="frame6removebgp"
              />
            </div>
          </li>
          <li>
            <Img
              className="h-4 ml-[366px] rounded-[1px]"
              src="images/img_user.svg"
              alt="user"
            />
          </li>
          <li>
            <Text
              className="hover:font-semibold ml-[5px] text-base text-white-A700"
              size="txtPoppinsSemiBold16"
            >
              Home
            </Text>
          </li>
          <li>
            <Text
              className="hover:font-semibold ml-[50px] text-base text-gray-200 hover:text-white-A700"
              size="txtPoppinsMedium16"
            >
              Movies
            </Text>
          </li>
          <li>
            <Text
              className="hover:font-semibold ml-[50px] text-base text-gray-200 hover:text-white-A700"
              size="txtPoppinsMedium16"
            >
              Series
            </Text>
          </li>
          <li>
            <Text
              className="hover:font-semibold ml-[50px] text-base text-gray-200 hover:text-white-A700"
              size="txtPoppinsMedium16"
            >
              My list
            </Text>
          </li>
          <li>
            <Img
              className="h-[5px] ml-[5px]"
              src="images/img_arrowdown.svg"
              alt="arrowdown"
            />
          </li>
          <li>
            <Img
              className="h-[18px] ml-[100px]"
              src="images/img_search.svg"
              alt="search"
            />
          </li>
          <li>
            <Img
              className="h-[18px] ml-[30px]"
              src="images/img_vector.svg"
              alt="vector"
            />
          </li>
          <li>
            <Img
              className="h-5 ml-[29px]"
              src="images/img_globe.svg"
              alt="globe"
            />
          </li>
          <li>
            <Text
              className="hover:font-semibold ml-1.5 text-white-A700 text-xs"
              size="txtInterSemiBold12"
            >
              ENG
            </Text>
          </li>
          <li>
            <Img
              className="h-1 ml-[5px]"
              src="images/img_arrowdown.svg"
              alt="arrowdown_One"
            />
          </li>
        </ul>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
