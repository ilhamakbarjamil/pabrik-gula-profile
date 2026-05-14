import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300",
        {
          "bg-blue-600 text-white hover:bg-blue-700":
            variant === "primary",

          "border border-slate-300 bg-white hover:bg-slate-100":
            variant === "outline",
        }
      )}
    >
      {children}
    </button>
  );
}