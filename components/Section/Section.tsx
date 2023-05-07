type Props = {
  title: string;
};

export function Section({ title, children }: React.PropsWithChildren<Props>) {
  return (
    <div className="mt-3">
      <p className="mb-2 text-xs font-bold uppercase text-white">{title}</p>
      {children}
    </div>
  );
}
