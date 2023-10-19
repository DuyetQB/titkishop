import { ButtonShape, ButtonType } from "antd/es/button";
import { CSSProperties } from "react";

export interface IButton {
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  title?: React.ReactNode;
  style?: CSSProperties | undefined;
  disabled?: boolean | undefined;
  shape?: ButtonShape;
  type?: ButtonType;
  ghost?: boolean;
  children?: any;
  danger?: boolean | undefined;
  onFunction: () => any;
  className?: any;
}

export interface IBaseCard {
  data: any;
  loading?: boolean;
}

export interface FetchResult<T> {
  loading: boolean;
  error?: React.ReactNode | unknown;
  data?: T;
}

export interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}
