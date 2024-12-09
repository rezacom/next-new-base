import { Button, ButtonProps } from '@nextui-org/react';
import clsx from 'clsx';
import React, { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
  type?: 'submit' | 'button';
  className?: string;
}

export interface PrimaryButtonProps extends ButtonProps {}

export default function PrimaryButton({ ...restProps }: PrimaryButtonProps) {
  return (
    <Button
      {...restProps}
      className={clsx(
        'btn btn-gradient !mt-6 w-full shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)] rounded',
        restProps.variant === 'bordered' ? 'border-2' : 'border-none',
        restProps.className
      )}
    />
  );
}
