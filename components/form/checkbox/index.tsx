// import clsx from "clsx";
import clsx from "clsx";
import { ChangeEvent, ReactNode } from "react";

export interface BaseInputProps {
  children: ReactNode;
  onChange?: (val: boolean) => void;
  className?: string;
  inputClassName?: string;
  checked?: boolean;
}

export function CheckboxInput({ onChange, children, className, inputClassName, checked }: BaseInputProps) {
  return (
    <div className={clsx("flex items-center", className)}>
      <input
        type="checkbox"
        className={inputClassName}
        checked={checked}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange && onChange(e.target.checked)}
      />
      {children}
    </div>
  );
}

export default CheckboxInput;
