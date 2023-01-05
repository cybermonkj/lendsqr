import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder15: "rounded-radius15",
  RoundedBorder8: "rounded-radius8",
  RoundedBorder4: "rounded-radius4",
  icbRoundedBorder4: "rounded-radius4",
  icbCircleBorder20: "rounded-radius20",
};
const variants = {
  FillBluegray6005f: "bg-bluegray_600_5f",
  FillCyan400: "bg-cyan_400 text-white_A700",
  OutlinePinkA400: "border border-pink_A400 border-solid text-pink_A400",
  OutlineCyan400: "border border-cyan_400 border-solid text-cyan_400",
  OutlineBluegray600: "border border-bluegray_600 border-solid",
  OutlineCyan400_1: "bg-cyan_400 border border-cyan_400 border-solid",
  FillIndigo80019: "bg-indigo_800_19",
  FillAmber60063: "bg-amber_600_63",
  FillGreen5005f: "bg-green_500_5f",
  FillPinkA40063: "bg-pink_A400_63",
  icbFillIndigo80019: "bg-indigo_800_19",
  icbFillPurpleA40063: "bg-purple_A400_63",
  icbFillDeeppurpleA40063: "bg-deep_purple_A400_63",
  icbFillRed40063: "bg-red_400_63",
};
const sizes = {
  sm: "sm:p-[3px] md:p-[4px] p-[6px]",
  md: "p-[11px] sm:p-[5px] md:p-[7px]",
  lg: "md:p-[10px] p-[15px] sm:p-[7px]",
  smIcn: "sm:p-[2px] md:p-[3px] p-[5px]",
  mdIcn: "sm:p-[4px] md:p-[6px] p-[9px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
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
  shape: PropTypes.oneOf([
    "CircleBorder15",
    "RoundedBorder8",
    "RoundedBorder4",
    "icbRoundedBorder4",
    "icbCircleBorder20",
  ]),
  variant: PropTypes.oneOf([
    "FillBluegray6005f",
    "FillCyan400",
    "OutlinePinkA400",
    "OutlineCyan400",
    "OutlineBluegray600",
    "OutlineCyan400_1",
    "FillIndigo80019",
    "FillAmber60063",
    "FillGreen5005f",
    "FillPinkA40063",
    "icbFillIndigo80019",
    "icbFillPurpleA40063",
    "icbFillDeeppurpleA40063",
    "icbFillRed40063",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smIcn", "mdIcn"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
