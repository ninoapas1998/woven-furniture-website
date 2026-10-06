import PageShell from "../components/PageShell";

export default function PrivacyPage() {
  return (
    <PageShell>
      <div className="bg-[#fafafa] py-20">
        <div className="container-site max-w-3xl">
          {/* <p className="eyebrow">PRIVACY POLICY</p> */}
          <h1 className="text-4xl font-bold text-woven-navy md:text-5xl">Privacy Policy</h1>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-gray-700">
            <p>
              Woven Furniture Designs values your privacy. We collect information that you voluntarily
              provide when contacting us, requesting a quote, or engaging with our services.
            </p>
            <p>
              This information may include your name, email address, phone number, business details, and
              message content. We use this information only to respond to your inquiries, provide
              quotations, and improve our customer support experience.
            </p>
            <p>
              We do not sell or rent personal information to third parties. Information may be shared
              only with trusted service providers when required to complete a project, delivery, or
              communication process.
            </p>
            <p>
              By using this website, you consent to the collection and use of the information described
              in this policy. We may update this policy from time to time, and any changes will appear
              on this page.
            </p>
            <p>
              If you have any questions about how we handle your data, please contact us at
              info@wovenfurnituredesigns.com.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
