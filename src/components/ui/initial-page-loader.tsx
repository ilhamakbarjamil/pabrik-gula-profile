export default function InitialPageLoader() {
  return (
    <div
      id="initial-page-loader"
      role="status"
      aria-live="polite"
      aria-label="Memuat halaman"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
      <div className="w-full max-w-sm px-6 text-center">
        <h1
          className="text-xl font-semibold tracking-tight text-[#002B6B]"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Berkah Gula Group
        </h1>

        <p
          className="mt-2 text-sm text-slate-500"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Memuat halaman
        </p>

        <div className="mx-auto mt-8 h-[2px] w-40 overflow-hidden rounded-full bg-slate-200">
          <div
            id="page-loader-progress"
            className="h-full w-24 rounded-full bg-[#003B95]"
          />
        </div>
      </div>
    </div>
  );
}
