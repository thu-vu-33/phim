import React from "react";

import { Img, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <Line className="bg-gray-900_01 h-px w-full" />
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[52px] w-4/5 md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start md:mt-0 mt-[5px] w-[44%] md:w-full">
                <div className="flex flex-col items-center justify-start w-[26%] md:w-full">
                  <Img
                    className="h-[39px] md:h-auto object-cover w-full"
                    src="images/img_frame6removebgpreview_1.png"
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
                    joylashtirilgan noqonuniy materiallar uchun javobgar emas!
                    Har qanday film mualliflik huquqi egasining iltimosiga
                    binoan olib tashlanadi
                  </>
                </Text>
              </div>
              <ul className="flex flex-col items-start justify-start w-[44%] md:w-full common-column-list">
                <li>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start">
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
                </li>
                <li>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-0.5 md:ml-[0] mt-3.5">
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
                </li>
                <li>
                  <div className="flex flex-row items-center justify-between ml-0.5 md:ml-[0] mt-1.5">
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
                </li>
                <li>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-0.5 md:ml-[0] mt-[5px]">
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
                </li>
                <li>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-0.5 md:ml-[0] mt-[5px]">
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
                </li>
              </ul>
            </div>
            <Text
              className="mt-[133px] text-sm text-white-A700"
              size="txtPoppinsMedium14WhiteA700"
            >
              <>© Filmberry.com - 2023</>
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
