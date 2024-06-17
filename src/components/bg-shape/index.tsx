type Props = {
  className?: string;
};

export const BackgroundShape = ({ className }: Props) => {
  return (
    <div
      className={`absolute aspect-square rounded-full border border-background-detail p-4 -z-10 [&>div]:bg-background-detail ${className}`}
    >
      <div className="w-full h-full rounded-full" />
    </div>
  );
};
