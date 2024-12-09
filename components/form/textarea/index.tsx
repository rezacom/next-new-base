// import clsx from 'clsx';

interface BaseTextareaProps {
  className: string;
}

export function TextAreaInput(props: BaseTextareaProps) {
  return (
    <textarea
      {...props}
      // labelPlacement="outside"
      // classNames={{
      //   // errorMessage: 'text-[#D84315]',\
      //   inputWrapper: 'form-input placeholder:text-white-dark rounded bg-white',
      //   ...props.classNames,
      //   label: clsx(
      //     props.classNames?.label,
      //     props.dir === 'rtl' ? 'right-0 text-right' : 'left-0 text-left'
      //   )
      // }}
    />
  );
}

export default TextAreaInput;
