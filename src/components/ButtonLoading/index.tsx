import { useState } from "react";
import { Button } from "antd";
import { IButton } from "../../types/base";

const ButtonLoading = ({
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
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      if (typeof onFunction === "function") {
        setLoading(true);
        await onFunction().finally(() => setLoading(false));
      }
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <Button
      style={style}
      {...rest}
      type={type}
      shape={shape}
      className={className}
      disabled={disabled || loading}
      icon={icon}
      loading={loading}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};
export default ButtonLoading;
