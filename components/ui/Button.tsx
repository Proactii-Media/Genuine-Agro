import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-forest text-white hover:bg-forest-light shadow-lg shadow-forest/20 hover:shadow-emerald/30",
  secondary:
    "bg-emerald text-white hover:bg-emerald-light shadow-lg shadow-emerald/25",
  outline:
    "border-2 border-forest/20 text-forest hover:border-emerald hover:text-emerald bg-transparent",
  ghost: "text-forest hover:text-emerald bg-transparent",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-lg shadow-[#25D366]/30",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-full",
  md: "px-6 py-3 text-sm rounded-full",
  lg: "px-8 py-4 text-base rounded-full",
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
};

export default function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 active:scale-[0.98]",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
