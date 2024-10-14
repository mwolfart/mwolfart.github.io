import { ReactNode, useState } from "react";

type Props = {
  children: ReactNode[];
};

export const PageScroller = ({ children }: Props) => {
  const [activePage, setActivePage] = useState(0);
  const filtered = children.filter((child) => child);

  return (
    <div className="h-full w-full relative">
      <div className="absolute left-4 top-0 bottom-0 flex flex-col justify-center items-center gap-2">
        {filtered.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 aspect-square rounded-full bg-copy ${
              activePage === idx && "bg-primary"
            }`}
          />
        ))}
      </div>
      <div
        className="h-full overflow-y-auto overflow-x-hidden snap-mandatory snap-y hide-scrollbar"
        onScroll={(evt) => {
          const target = evt.target as HTMLDivElement;
          const index = Math.round(target.scrollTop / target.clientHeight);
          setActivePage(index);
        }}
      >
        {filtered.map((child, idx) => (
          <div
            key={idx}
            className="h-full flex flex-col snap-center py-8 md:py-16 px-10"
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};
