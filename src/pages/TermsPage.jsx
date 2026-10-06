import PageShell from "../components/PageShell";

export default function TermsPage() {
  return (
    <PageShell>
      <div className="bg-[#fafafa] py-20">
        <div className="container-site max-w-3xl">
          {/* <p className="eyebrow">TERMS OF SERVICE</p> */}
          <h1 className="text-4xl font-bold text-woven-navy md:text-5xl">Terms of Service</h1>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-gray-700">
            <p>
              Welcome to Woven Furniture Designs. By accessing or using this website, you agree to be
              bound by the following terms and conditions.
            </p>
            <p>
              All content on this website, including text, images, and product information, is provided
              for informational purposes only. We reserve the right to update, modify, or remove any
              content at any time without prior notice.
            </p>
            <p>
              Product availability, pricing, and specifications may change depending on stock, lead time,
              and project requirements. Any custom furniture request must be confirmed through written
              communication with our team.
            </p>
            <p>
              We do our best to ensure the information on this site is accurate and current, but we do
              not guarantee that all information is error-free or complete. Any reliance on website
              content is at your own discretion.
            </p>
            <p>
              If you have any questions regarding these terms, please contact us at
              info@wovenfurnituredesigns.com.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
