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
        "rounded-md px-6 py-3 text-sm font-semibold transition-all duration-300",
        {
          "bg-blue-700 text-white hover:bg-blue-800":
            variant === "primary",

          "border border-slate-300 bg-white text-slate-800 hover:bg-slate-100":
            variant === "outline",
        }
      )}
    >
      {children}
    </button>
  );
}