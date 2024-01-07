import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[20px]" };
const variants = {
  fill: {
    red_A700: "bg-red-A700 text-white-A700",
    gray_900: "bg-gray-900 text-white-A700",
  },
};
const sizes = { xs: "p-[7px]", sm: "p-2.5", md: "p-[13px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["red_A700", "gray_900"]),
};

export { Button };
