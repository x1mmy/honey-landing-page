type SectionLabelProps = {
  children: React.ReactNode;
  centered?: boolean;
};

export default function SectionLabel({
  children,
  centered = false,
}: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-2.5 font-sans text-xs font-medium text-amber uppercase tracking-[0.12em] mb-4 ${
        centered ? "justify-center" : ""
      }`}
    >
      {!centered && (
        <span className="w-[30px] h-[1.5px] bg-amber inline-block" />
      )}
      {children}
    </div>
  );
}
