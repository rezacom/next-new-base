import React from 'react';
import loader from '@/assets/icons/loader.svg';
import { ReactSVG } from 'react-svg';

export default function ScreenLoader() {
  return (
    <div className="screen_loader animate__animated fixed inset-0 z-[60] grid place-content-center bg-[#fafafa] dark:bg-[#060818]">
      <ReactSVG src={loader.src} />
    </div>
  );
}
