import { Form, Input } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import { Rule } from "antd/lib/form";
import { NamePath } from "antd/lib/form/interface";
import { LiteralUnion } from "antd/lib/_util/type";
import React, { ChangeEventHandler } from "react";

type InputPropsType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

export interface Ipops {
  label?: React.ReactNode;
  name?: NamePath;
  placeholder?: string | undefined;
  size?: any;
  type?: InputPropsType;
  max?: number | string;
  min?: number | string;
  rules?: Rule[];
  showRulesDefault?: boolean;
  prefix?: React.ReactNode;
  sizeInput?: SizeType;
  style?: React.CSSProperties;
  disabled?: boolean | undefined;
  styleInput?: React.CSSProperties;
  showPlaceholderDefault?: boolean;
  className?: any;
  maxLength?: number;
  defaultValue?: any;
  onChange?: ChangeEventHandler<any> | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
  showClassNameDefault?: boolean;
  onPressEnter?: any;
  onKeyDown?: any;
}
const FormInput = ({
  label,
  name,
  maxLength,
  defaultValue,
  placeholder,
  size,
  type,
  max,
  min,
  rules,
  showRulesDefault,
  prefix,
  sizeInput,
  style,
  disabled,
  styleInput,
  showPlaceholderDefault,
  className,
  onChange,
  value,
  showClassNameDefault,
  onPressEnter,
  onKeyDown,
  ...rest
}: Ipops) => {
  return (
    <Form.Item
      className={showClassNameDefault ? "form-control-input" : className}
      style={style}
      {...size}
      label={label}
      name={name}
      validateFirst
      rules={
        showRulesDefault ? [{ required: true, message: "Please Enter" }] : rules
      }
      {...rest}
    >
      <Input
        value={value}
        onKeyDown={onKeyDown}
        defaultValue={defaultValue}
        maxLength={maxLength}
        onChange={onChange}
        style={styleInput}
        disabled={disabled}
        prefix={prefix}
        size={sizeInput}
        placeholder={showPlaceholderDefault ? "Enter" : placeholder}
        type={type}
        min={min}
        max={max}
        onPressEnter={onPressEnter}
      />
    </Form.Item>
  );
};
export default FormInput;
