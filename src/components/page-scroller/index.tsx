import { ReactNode } from "react";

type Props = {
  children: ReactNode[];
};

export const PageScroller = ({ children }: Props) => {
  return (
    <div className="h-full w-full relative">
      <div className="absolute left-4 top-0 bottom-0 flex flex-col justify-center items-center gap-2">
        {children.map((_, idx) => (
          <div key={idx} className={`w-2 aspect-square rounded-full bg-copy`} />
        ))}
      </div>
      <div className="h-full overflow-auto snap-mandatory snap-y">
        {children.map((child, idx) => (
          <div key={idx} className="h-full flex flex-col snap-center">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};
