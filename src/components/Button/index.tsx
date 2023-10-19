
import { Button } from "antd";
import { ButtonShape, ButtonType } from "antd/lib/button";
import React, { CSSProperties } from "react";
import "./style.scss"
import { IButton } from "../../types/base";

const ButtonBase = ({
  icon,
  onClick,
  title,
  style,
  disabled,
  shape,
  type,
  children,
  onFunction,
  className,
  ...rest
}: IButton) => {


  return (
    <Button
      style={style}
      {...rest}
      type={type}
      shape={shape}
      className={`${className} button `}
      disabled={disabled}
      icon={icon}
      onClick={onFunction}
    >
      {children}
    </Button>
  );
};
export default ButtonBase;
