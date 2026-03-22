type PillProps = {
  children: React.ReactNode;
};

export default function Pill({ children }: PillProps) {
  return (
    <span className="inline-block bg-amber/[0.08] border border-amber/20 rounded-full px-[18px] py-2 font-sans text-[0.82rem] text-brown-mid font-medium">
      {children}
    </span>
  );
}
