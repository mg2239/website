interface ButtonProps {
  to: string;
}

export default ({ to, children }: React.PropsWithChildren<ButtonProps>) => {
  return (
    <a
      href={to}
      className="box-border block px-6 py-3 text-xs font-bold text-white uppercase transition-colors bg-black w-min hover:bg-gray-700"
      role="button"
    >
      {children}
    </a>
  );
};
