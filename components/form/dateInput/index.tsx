'use client';

import DP, {
  DatePickerProps as DPProps,
  DayValue
} from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { Input } from '@nextui-org/react';
import clsx from 'clsx';
import { FocusEvent, ReactNode, RefObject, useEffect, useState } from 'react';

interface DatePickerProps
  extends Omit<
    DPProps<DayValue>,
    | 'value'
    | 'onChange'
    | 'calendarSelectedDayClassName'
    | 'calendarPopperPosition'
    | 'calendarClassName'
  > {
  onSelect?: (value: DayValue) => void;
  value?: DayValue;
  handleFocus?: (
    event: FocusEvent<HTMLInputElement, Element> | FocusEvent<Element, Element>
  ) => void;
  handleBlur?: VoidFunction;
  label?: string;
  classNames?: {
    label?: string;
  };
  dir?: 'rtl' | 'ltr';
  popperPosition?: 'auto' | 'top' | 'bottom';
  startContent?: ReactNode;
  endContent?: ReactNode;
}

export default function DatePicker({
  onSelect,
  inputPlaceholder = '--:--',
  inputClassName,
  wrapperClassName,
  inputName = 'calendar-input',
  handleFocus,
  handleBlur,
  label,
  classNames,
  value,
  popperPosition = 'auto',
  dir = 'rtl',
  startContent,
  endContent,
  ...rest
}: DatePickerProps) {
  const [selectedDate, setSelectedDate] = useState<DayValue>(value);
  const handleSelect = (value: DayValue) => {
    setSelectedDate(value);
    onSelect?.(value);
  };

  useEffect(() => {
    setSelectedDate(value);
  }, [value]);

  return (
    <DP
      {...rest}
      inputName={inputName}
      renderInput={({ ref }) => (
        <Input
          label={label}
          labelPlacement="outside"
          placeholder=" "
          ref={ref as RefObject<HTMLInputElement>}
          value={
            selectedDate
              ? `${selectedDate.year}/${selectedDate.month}/${selectedDate.day}`
              : undefined
          }
          onFocus={(event) => {
            handleFocus?.(event);
          }}
          dir={dir}
          onBlur={handleBlur}
          classNames={{
            mainWrapper: 'h-auto w-full',
            base: 'h-auto',
            inputWrapper:
              'form-input h-auto placeholder:text-white-dark rounded bg-white',
            // input: 'text-center',
            label: clsx(
              classNames?.label,
              dir === 'rtl' ? 'right-0 text-right' : 'left-0 text-left'
            ),
            ...classNames
          }}
          endContent={endContent}
          startContent={startContent}
        />
      )}
      wrapperClassName={clsx('w-full', wrapperClassName)}
      calendarPopperPosition={popperPosition}
      inputClassName={clsx(
        '!border-0 !shadow-0 appearance-none !ring-0 !bg-transparent !border-transparent w-[inherit]',
        inputClassName
      )}
      locale="fa"
      calendarClassName="!z-[99999999999999] !text-[8px]"
      calendarSelectedDayClassName="!bg-primary"
      value={selectedDate}
      onChange={handleSelect}
      inputPlaceholder={inputPlaceholder}
    />
  );
}
