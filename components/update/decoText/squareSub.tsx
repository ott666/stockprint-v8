import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
interface SquareSubProps extends HTMLAttributes<HTMLElement> {
  text: string;
}
export default function SquareSub({ text, ...rest }: SquareSubProps) {
  return (
    <div className="flex items-center gap-[12px]">
      <div className="h-4 w-4 bg-[#0085FF]" />
      <p className={twMerge('', rest.className)}>{text}</p>
    </div>
  );
}
