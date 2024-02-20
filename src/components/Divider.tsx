import React from "react";

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  bg?: string;
}

const Divider = ({ width, bg, className, ...rest }: DividerProps) => {
  const dividerClassName = `h-[2px] w-14 rounded-full bg-primary lg:w-20 ${width ? width : "w-14 lg:w-20"} ${bg ? bg : "bg-primary"} ${className ? className : ""}`;
  return <div className={dividerClassName} {...rest}></div>;
};

export default Divider;
