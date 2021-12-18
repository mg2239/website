type TabProps = {
  onClick: () => void;
};

export default ({ onClick, children }: React.PropsWithChildren<TabProps>) => {
  return (
    <div className="mr-6 group">
      <p className="font-bold cursor-pointer" onClick={onClick}>
        {children}
      </p>
      <span className="block w-full h-px transition-opacity bg-black opacity-0 group-hover:opacity-100" />
    </div>
  );
};
