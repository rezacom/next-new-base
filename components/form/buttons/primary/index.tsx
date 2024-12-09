import { Spin } from "antd";
import clsx from "clsx";
import React, { ReactNode } from "react";
import { LoadingOutlined } from "@ant-design/icons";

interface IProps {
  children: ReactNode;
  type?: "submit" | "button";
  className?: string;
  isLoading?: boolean;
}

export default function PrimaryButton({ children, type = "button", className, isLoading }: IProps) {
  return (
    <button
      type={type}
      className={clsx(
        "btn btn-gradient !mt-6 w-full shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)] rounded",
        className
      )}
    >
      {isLoading ? <Spin indicator={<LoadingOutlined spin />} /> : children}
    </button>
  );
}
