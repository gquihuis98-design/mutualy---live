export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-5xl font-semibold mb-6">
          Mutualy 🚀
        </h1>

        <p className="text-lg text-white/70 mb-8">
          B2B matchmaking — connecting buyers and vendors when there is real fit.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://form.typeform.com/to/oLtDvuLX"
            target="_blank"
            className="rounded-full bg-white px-6 py-3 text-black font-semibold"
          >
            Apply as Buyer
          </a>

          <a
            href="https://form.typeform.com/to/oYc6xZr0"
            target="_blank"
            className="rounded-full border border-white/20 px-6 py-3"
          >
            Apply as Vendor
          </a>
        </div>
      </div>
    </main>
  );
}
