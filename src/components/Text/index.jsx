import React from "react";

const sizeClasses = {
  txtPoppinsRegular12RedA700: "font-normal font-poppins",
  txtPoppinsSemiBold60: "font-poppins font-semibold",
  txtInterMedium12: "font-inter font-medium",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterSemiBold12: "font-inter font-semibold",
  txtPoppinsRegular2351: "font-normal font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular14RedA700: "font-normal font-poppins",
  txtPoppinsBold12: "font-bold font-poppins",
  txtPoppinsRegular12WhiteA700: "font-normal font-poppins",
  txtMontserratSemiBold22: "font-montserrat font-semibold",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtPoppinsMedium24: "font-medium font-poppins",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsMedium14WhiteA700: "font-medium font-poppins",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtPoppinsSemiBold22: "font-poppins font-semibold",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
