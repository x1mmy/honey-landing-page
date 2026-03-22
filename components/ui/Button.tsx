import Link from "next/link";

type ButtonProps = {
  variant: "primary" | "secondary";
  href?: string;
  children: React.ReactNode;
};

export default function Button({ variant, href, children }: ButtonProps) {
  if (variant === "primary") {
    return (
      <Link
        href={href ?? "#"}
        className="inline-block bg-brown text-white-warm px-8 py-4 rounded-full font-sans text-sm font-medium tracking-wide shadow-[0_4px_24px_rgba(58,34,16,0.2)] transition-all duration-300 hover:bg-amber hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(200,118,10,0.35)]"
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href ?? "#"}
      className="inline-flex items-center gap-2 font-sans text-sm font-medium text-brown-mid transition-all duration-200 hover:gap-3.5 hover:text-amber group"
    >
      {children}
      <span className="transition-transform duration-200">&rarr;</span>
    </Link>
  );
}
