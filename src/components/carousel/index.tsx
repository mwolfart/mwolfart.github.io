import { ReactNode, useState } from "react";

type Props = {
  children: ReactNode[];
};

export const Carousel = ({ children }: Props) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="flex flex-col gap-8">
      <div
        className="flex gap-8 overflow-x-scroll snap-mandatory snap-x hide-scrollbar"
        onScroll={(evt) => {
          const target = evt.target as HTMLDivElement;
          const index = Math.round(target.scrollLeft / target.clientWidth);
          setActiveItem(index);
        }}
      >
        {children.map((child, idx) => (
          <div key={idx} className="shrink-0 basis-full snap-center">
            {child}
          </div>
        ))}
      </div>
      <div className="flex gap-2 justify-center items-center">
        <div className="flex-grow h-[1px] bg-copy" />
        {children.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 bg-copy flex-grow rounded max-w-6 ${
              activeItem === idx && "bg-primary"
            }`}
          />
        ))}
        <div className="flex-grow h-[1px] bg-copy" />
      </div>
    </div>
  );
};
