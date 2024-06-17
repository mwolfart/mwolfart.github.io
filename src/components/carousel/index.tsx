import { ReactNode } from "react";

type Props = {
  children: ReactNode[];
};

export const Carousel = ({ children }: Props) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8 overflow-x-scroll snap-mandatory snap-x">
        {children.map((child, idx) => (
          <div key={idx} className="shrink-0 basis-full snap-center">
            {child}
          </div>
        ))}
      </div>
      <div className="flex gap-2 justify-center items-center">
        <div className="flex-grow h-[1px] bg-copy" />
        {children.map((_, idx) => (
          <div key={idx} className="h-2 bg-copy flex-grow rounded max-w-6" />
        ))}
        <div className="flex-grow h-[1px] bg-copy" />
      </div>
    </div>
  );
};
