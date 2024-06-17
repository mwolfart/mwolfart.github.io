type Props = {
  tech: string;
};

export const TechPill = ({ tech }: Props) => (
  <span className="py-1 px-4 rounded-full bg-copy text-background text-sm">
    {tech}
  </span>
);
