import React from "react";

import { Text } from "components";

const CompanentsPage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="bg-black-900 flex flex-col items-center justify-start w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[500px] items-start justify-start p-[79px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group41.png')" }}
          >
            <div className="flex flex-col gap-6 items-center justify-start mb-[21px] md:ml-[0] ml-[18px] w-[77%] md:w-full">
              <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                <Text
                  className="md:text-5xl text-6xl text-white-A700"
                  size="txtPoppinsSemiBold60"
                >
                  Colors
                </Text>
                <Text
                  className="md:text-5xl text-6xl text-white-A700"
                  size="txtPoppinsSemiBold60"
                >
                  Font
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <div className="flex md:flex-1 flex-col gap-[18px] items-center justify-start w-[16%] md:w-full">
                    <div className="bg-black-900 h-[150px] rounded-[10px] shadow-bs2 w-[150px]"></div>
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtPoppinsMedium24"
                    >
                      #0D0C11
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[18px] items-center justify-start md:ml-[0] ml-[50px] w-[16%] md:w-full">
                    <div className="bg-red-A700 h-[150px] rounded-[10px] w-[150px]"></div>
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtPoppinsMedium24"
                    >
                      #E50914
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[17px] items-center justify-start md:ml-[0] ml-[50px] w-[16%] md:w-full">
                    <div className="bg-white-A700 h-[150px] rounded-[10px] w-[150px]"></div>
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtPoppinsMedium24"
                    >
                      #fffff
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[18px] items-center justify-start md:ml-[0] ml-[50px] w-[16%] md:w-full">
                    <div className="bg-gray-900 h-[150px] rounded-[10px] w-[150px]"></div>
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtPoppinsMedium24"
                    >
                      #17161B
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[100px]">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtPoppinsMedium24"
                    >
                      Poppins
                    </Text>
                    <Text
                      className="mt-[3px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtPoppinsMedium24"
                    >
                      Inter
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanentsPage;
