// import clsx from 'clsx';

import clsx from "clsx";
import { ChangeEvent, ReactNode } from "react";

export interface BaseInputProps {
  className?: string;
  label?: string;
  classNames?: {
    root?: string;
    label?: string;
    input?: string;
    inputWraper?: string;
  };
  errorMessage?: string;
  startContent?: ReactNode;
  endContent?: ReactNode;
  placeholder?: string;
  type?: string;
  dir?: "rtl" | "ltr";
  name?: string;
  onChange?: (e: ChangeEvent<unknown>) => void;
  value?: string;
}

export function TextInput({
  className,
  classNames,
  label,
  errorMessage,
  startContent,
  endContent,
  placeholder,
  type,
  dir,
  name,
  value,
  onChange,
}: BaseInputProps) {
  return (
    <div className={clsx(className, classNames?.root)} dir={dir}>
      {label ? <label className={clsx("text-base pb-1", classNames?.label)}>{label}</label> : <></>}
      <div className={clsx("flex items-center border border-gray-50", classNames?.inputWraper)}>
        {startContent}
        <input
          name={name}
          className={classNames?.input}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
        />
        {endContent}
      </div>
      {errorMessage ? <p className="text-red-500 text-xs pt-1">{errorMessage}</p> : <></>}
    </div>
  );
}

export default TextInput;
