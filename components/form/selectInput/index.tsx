'use client';
import clsx from 'clsx';
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useEffect, useRef, useState } from 'react';
import arrowIcon from '@/assets/icons/arrow-down.svg';
import { ReactSVG } from 'react-svg';
import { Spinner } from '@nextui-org/react';

export interface BaseSelectProps {
  items: any[];
  className?: string;
  classNameC?: string;
  onBlur?: () => void;
  handleChangeValue?: (value: string) => void;
  hasSearch?: boolean;
  hasSearchLocal?: boolean;
  onFocus?: () => void;
  onChange?: (e: any) => void;
  disabled?: boolean;
  label?: string;
  classNames?: {
    base?: string;
    main?: string;
    innerWrapper?: string;
    trigger?: string;
    errorMessage?: string;
    label?: string;
    popoverContent?: string;
    icon?: string;
  };
  startContent?: ReactNode;
  endContent?: ReactNode;
  name?: string;
  errorMessage?: string | boolean;
  placeholder?: string;
  selectedKey?: string | number;
  isLoading?: boolean;
  defaultValue?: string;
  hideValue?: boolean;
  dir?: 'rtl' | 'ltr';
}

export default function SelectInput(props: BaseSelectProps) {
  const [value, setValue] = useState<any>();
  const [textValue, setTextValue] = useState<string | undefined>(
    props.defaultValue
  );

  const [show, setShow] = useState<boolean>(false);
  const wrapperRef: React.MutableRefObject<any> = useRef(null);

  useEffect(() => {
    const result = props.items?.find(
      (item: any) => item.value == props.selectedKey
    );
    setValue(result);
    // props.items.map((item: any) => {
    //   if (item.value == props.selectedKey) {
    //     setValue(item);
    //   }
    // });
  }, [props.selectedKey]);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShow(false);
      }
      if (props.onBlur) {
        props.onBlur();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const onChangeValue = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    props.handleChangeValue &&
      props.handleChangeValue(e.target.value as string);
    setTextValue(e.target.value as string);
    setValue(e.target.value);
  };

  // useEffect(() =>{
  //   if(hasbeenReset) {
  //     reset(setValue);
  //   }
  //   console.log('hey')
  // }, [hasbeenReset]);

  const handleChange = (item: any) => {
    setShow(false);
    if (props.onBlur) {
      props.onBlur();
    }
    setValue(item);
    if (props.onChange) props.onChange(item);
  };

  const handleShow = () => {
    if (props.isLoading) return;
    if (props.disabled) return;
    if (!show) setShow(true);
    else setShow(false);
    if (props.onFocus) {
      props.onFocus();
    }
    if (props.hasSearch && props.handleChangeValue && !textValue)
      props.handleChangeValue('');
  };

  return (
    <div
      className={clsx(
        `w-full h-max`,
        props.classNames?.base as string,
        props.className
      )}
      ref={wrapperRef}
      dir={props.dir}
    >
      {props.label ? (
        <label
          className={clsx(
            'dark:text-white-light',
            props.classNames?.label as string
          )}
          onClick={handleShow}
        >
          {props.label}
        </label>
      ) : (
        <></>
      )}
      <div
        className={clsx(
          `w-full flex items-center px-3 gap-[5px] cursor-pointer relative form-input h-auto placeholder:text-white-dark rounded border-solid border-1`,
          props.classNames?.innerWrapper as string
        )}
        onClick={handleShow}
      >
        {props.startContent && props.startContent}
        {value?.icon ? (
          <img
            src={value.icon}
            className={clsx('w-5 h-5 rounded-3xl', props.classNames?.icon)}
          />
        ) : (
          <></>
        )}
        {!props.hideValue && (
          <input
            name={props.name}
            readOnly
            className={`h-full outline-none cursor-pointer border-none text-base w-full bg-transparent ${
              props.classNames?.trigger as string
            }`}
            value={value?.label || ''}
            placeholder={props.placeholder}
            onChange={onChangeValue}
          />
        )}
        <div className="ml-auto">
          {props.isLoading ? (
            <Spinner color="primary" size="sm" />
          ) : (
            <ReactSVG
              src={arrowIcon.src}
              beforeInjection={(svg) => {
                svg.setAttribute('stroke', `#52525B`);
                svg.setAttribute('width', `14px`);
                svg.setAttribute('height', `14px`);
              }}
            />
          )}
        </div>
        {props.endContent && props.endContent}
        <div
          className={clsx(
            'bg-white dark:bg-[#1b2e4b]',
            `z w-full absolute right-0 rounded-lg z-[100]`,
            'transition-all duration-300 p-2 shadow-md max-h-60 overflow-y-auto overflow-x-hidden',
            show
              ? 'visible opacity-100 top-[110%]'
              : 'opacity-0 invisible top-[130%]',
            props.classNames?.popoverContent
          )}
        >
          <ul className="">
            {props.items.map((item: any, index: number) => {
              return (
                <li
                  key={index}
                  onClick={() => handleChange(item)}
                  className={clsx(
                    `flex items-center py-2 px-2 dark:hover:bg-[#4361ee1a] rounded-lg gap-[5px] my-1`,
                    value?.value === item?.value
                      ? 'text-[#4361ee] bg-[#4361ee1a]'
                      : ''
                  )}
                >
                  {item?.icon ? (
                    <img src={item.icon} className="w-5 h-5 rounded-3xl" />
                  ) : (
                    <></>
                  )}
                  {item?.label ? (
                    <span className="text-small font-normal truncate grow">
                      {item.label}
                    </span>
                  ) : (
                    <></>
                  )}
                  {/* <ReactSVG
                    src="/icons/stroke/check2.svg"
                    beforeInjection={(svg) => {
                      svg.setAttribute('stroke', `#52525B`);
                    }}
                  /> */}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {props.errorMessage && (
        <p className={props.classNames?.errorMessage as string}>
          {props.errorMessage as string}
        </p>
      )}
    </div>
  );
}
