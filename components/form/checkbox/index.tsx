import { Checkbox, CheckboxProps } from '@nextui-org/react';
import clsx from 'clsx';

export interface BaseInputProps extends CheckboxProps {}

export function CheckboxInput(props: BaseInputProps) {
  return (
    <Checkbox
      {...props}
      classNames={{
        // errorMessage: 'text-[#D84315]',\
        ...props.classNames,
        label: clsx(
          props.classNames?.label,
          props.dir === 'rtl' ? 'right-0 text-right' : 'left-0 text-left'
        )
      }}
    >
      {props.children}
    </Checkbox>
  );
}

export default CheckboxInput;
