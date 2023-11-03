import { CheckIcon } from 'lucide-react';
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
interface SquareSubProps extends HTMLAttributes<HTMLElement> {
  text: string;
}
export default function CheckSub({ text, ...rest }: SquareSubProps) {
  return (
    <div className="flex w-fit items-center gap-[12px] ">
      <div className="flex h-[27px] w-[27px] items-center justify-center rounded-full bg-[#0085FF]">
        <CheckIcon className="text-white" />
      </div>
      <p className={twMerge('', rest.className)}>{text}</p>
    </div>
  );
}
