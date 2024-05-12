export const Link = ({
  to,
  children,
}: React.PropsWithChildren<{ to: string }>) => {
  return (
    <a
      className="mr-2 inline rounded-full text-sm font-semibold transition-colors hover:text-gray-500 sm:mr-4 sm:text-base"
      href={to}
      target="_blank"
    >
      {children}
    </a>
  );
};
