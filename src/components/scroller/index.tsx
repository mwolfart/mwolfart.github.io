import { ReactNode } from "react";

type Props = {
  children: ReactNode[];
};

export const Scroller = ({ children }: Props) => {
  return (
    <div className="h-full w-full flex">
      <div className="basis-16 flex flex-col justify-center items-center gap-2">
        {children.map((_, idx) => (
          <div key={idx} className={`w-2 aspect-square rounded-full bg-copy`} />
        ))}
      </div>
      <div className="h-full flex-grow overflow-auto snap-mandatory snap-y">
        {children.map((child, idx) => (
          <div key={idx} className="h-full flex flex-col snap-center">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};
