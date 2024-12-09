import { Input, InputProps } from '@nextui-org/react';
import clsx from 'clsx';

export interface BaseInputProps extends InputProps {}

export function TextInput(props: BaseInputProps) {
  return (
    <Input
      labelPlacement="outside"
      {...props}
      classNames={{
        // errorMessage: 'text-[#D84315]',\
        inputWrapper:
          'form-input placeholder:text-white-dark !rounded light:bg-white dark:bg-[#121e32]',
        ...props.classNames,
        label: clsx(
          props.classNames?.label,
          props.dir === 'rtl' ? 'right-0 text-right' : 'left-0 text-left'
        )
      }}
    />
  );
}

export default TextInput;
