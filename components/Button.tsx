import { forwardRef } from "react";

type Variant = "primary" | "ghost" | "solid";

const base =
  "group relative inline-flex select-none items-center gap-3 px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.2em] transition-colors duration-300 ease-out focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-produ-white text-produ-black hover:bg-produ-accent hover:text-produ-black",
  ghost:
    "border border-produ-ink-500 text-produ-white hover:border-produ-white hover:bg-produ-white hover:text-produ-black",
  solid: "bg-produ-accent text-produ-black hover:bg-produ-white"
};

function Arrow() {
  return (
    <span
      aria-hidden
      className="inline-block translate-y-[-1px] transition-transform duration-300 group-hover:translate-x-1"
    >
      →
    </span>
  );
}

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type ButtonElProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

type LinkElProps = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

export type ButtonProps = ButtonElProps | LinkElProps;

function isLinkProps(p: ButtonProps): p is LinkElProps {
  return typeof (p as LinkElProps).href === "string";
}

export const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps
>(function Button(props, ref) {
  const variant = props.variant ?? "primary";
  const classNameExtra = props.className ?? "";
  const cls = [base, variants[variant], classNameExtra].join(" ");

  if (isLinkProps(props)) {
    const { variant: _variant, className: _className, children, ...rest } = props;
    void _variant;
    void _className;
    return (
      <a ref={ref as React.Ref<HTMLAnchorElement>} className={cls} {...rest}>
        <span>{children}</span>
        <Arrow />
      </a>
    );
  }

  const { variant: _variant, className: _className, children, ...rest } = props;
  void _variant;
  void _className;
  return (
    <button ref={ref as React.Ref<HTMLButtonElement>} className={cls} {...rest}>
      <span>{children}</span>
      <Arrow />
    </button>
  );
});
