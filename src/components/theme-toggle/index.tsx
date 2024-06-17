export const ThemeToggle = () => {
  return (
    <button
      className="bg-primary text-background rounded-full p-2"
      onClick={() => {
        document.documentElement.classList.toggle("dark");
      }}
    >
      Toggle theme
    </button>
  );
};
