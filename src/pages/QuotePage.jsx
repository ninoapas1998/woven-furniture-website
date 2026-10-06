import PageShell from "../components/PageShell";

export default function QuotePage() {
  return (
    <PageShell>
      <div className="min-h-screen bg-[#fafafa] py-20">
        <div className="container-site">
          <p className="eyebrow">REQUEST A QUOTE</p>
          <h1 className="text-4xl font-bold text-woven-navy md:text-5xl">Tell Us About Your Project</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-700">
            Share your plans and we’ll help you find the ideal furniture solution for your residential or
            commercial project.
          </p>

          <div className="mt-10 max-w-3xl rounded-none bg-white p-8 shadow-sm ring-1 ring-black/5">
            <form className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input className="border border-[#e7ddd0] bg-[#fafafa] p-3 text-sm outline-none" placeholder="Full Name" />
                <input className="border border-[#e7ddd0] bg-[#fafafa] p-3 text-sm outline-none" placeholder="Email Address" />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <input className="border border-[#e7ddd0] bg-[#fafafa] p-3 text-sm outline-none" placeholder="Company / Business" />
                <input className="border border-[#e7ddd0] bg-[#fafafa] p-3 text-sm outline-none" placeholder="Phone Number" />
              </div>
              <textarea className="min-h-[140px] border border-[#e7ddd0] bg-[#fafafa] p-3 text-sm outline-none" placeholder="Project Details" />
              <button type="button" className="btn-brown w-fit">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
