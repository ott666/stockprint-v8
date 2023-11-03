import { ReactNode, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
interface ContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export default function Container({ children, ...rest }: ContainerProps) {
  return (
    <div
      className={twMerge(
        'px-[20px] w-full max-w-[1200px] mx-auto',
        rest.className
      )}
    >
      {children}
    </div>
  );
}
