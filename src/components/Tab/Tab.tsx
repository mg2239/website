type TabProps = {
  onClick: () => void;
  active: boolean;
};

export default ({
  onClick,
  active,
  children,
}: React.PropsWithChildren<TabProps>) => {
  return (
    <div className="mb-2 w-max">
      <button className="font-bold cursor-pointer" onClick={onClick}>
        {children}
      </button>
      <span
        className={`block w-full h-px bg-black opacity-0 ${
          active && 'opacity-100'
        }`}
      />
    </div>
  );
};
