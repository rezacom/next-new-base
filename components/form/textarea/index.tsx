import { TextAreaProps, Textarea } from '@nextui-org/react';
import clsx from 'clsx';

export interface BaseTextareaProps extends TextAreaProps {}

export function TextAreaInput(props: BaseTextareaProps) {
  return (
    <Textarea
      {...props}
      labelPlacement="outside"
      classNames={{
        // errorMessage: 'text-[#D84315]',\
        inputWrapper: 'form-input placeholder:text-white-dark rounded bg-white',
        ...props.classNames,
        label: clsx(
          props.classNames?.label,
          props.dir === 'rtl' ? 'right-0 text-right' : 'left-0 text-left'
        )
      }}
    />
  );
}

export default TextAreaInput;
