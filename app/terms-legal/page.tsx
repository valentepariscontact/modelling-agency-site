import ScrollFadeIn from "@/components/ScrollFadeIn";

export default function TermsPage() {
  return (
    <main className="flex w-full flex-col pb-24 pt-16 md:pt-24">

      {/* ── Header ── */}
      <ScrollFadeIn className="mb-20 border-b border-[#001F3F] pb-16 md:mb-28 md:pb-20">
        <p className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.5em] text-[#001F3F]">
          Legal
        </p>
        <h1 className="max-w-3xl font-sans text-xl font-medium leading-tight tracking-[0.2em] uppercase text-[#001F3F] md:text-2xl">
          Terms & Legal Notice
        </h1>
        <p className="mt-6 text-[0.65rem] uppercase tracking-[0.3em] text-[#001F3F]/50">
          Last updated: March 2025
        </p>
      </ScrollFadeIn>

      <div className="mx-auto w-full max-w-3xl space-y-20">

        {/* ── Legal Notice ── */}
        <ScrollFadeIn className="space-y-6" delay={100}>
          <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-[#001F3F]">
            Legal Notice
          </h2>
          <div className="space-y-4 text-sm leading-8 text-[#001F3F]">
            <p>
              This website is published by Valenté Models, operating as a model and talent
              management agency based in Paris, France. Valenté is currently in the process
              of completing its formal registration as a licensed agency under French law.
            </p>
            <p>
              Contact: <a href="mailto:contact@valentemodels.com" className="underline underline-offset-4">contact@valentemodels.com</a>
            </p>
            <p>
              Publication Director: Valenté Models<br />
              Host: Vercel Inc., 340 Pine Street Suite 701, San Francisco, CA 94104, USA
            </p>
          </div>
        </ScrollFadeIn>

        <div className="border-t border-[#001F3F]/10" />

        {/* ── Use of Website ── */}
        <ScrollFadeIn className="space-y-6" delay={110}>
          <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-[#001F3F]">
            Use of This Website
          </h2>
          <div className="space-y-4 text-sm leading-8 text-[#001F3F]">
            <p>
              Access to and use of this website is subject to the following terms. By browsing
              this site, you acknowledge that you have read and accepted these terms in full.
            </p>
            <p>
              The content published on this website — including text, images, and design — is
              the exclusive property of Valenté Models and may not be reproduced, distributed,
              or used without prior written permission.
            </p>
            <p>
              Valenté Models reserves the right to modify the content of this website at any
              time without prior notice.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="border-t border-[#001F3F]/10" />

        {/* ── Applications ── */}
        <ScrollFadeIn className="space-y-6" delay={120}>
          <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-[#001F3F]">
            Model & Talent Applications
          </h2>
          <div className="space-y-4 text-sm leading-8 text-[#001F3F]">
            <p>
              By submitting an application through this website, you consent to Valenté Models
              collecting and processing the personal data and photographs provided, solely for
              the purpose of evaluating your application.
            </p>
            <p>
              Submitting an application does not constitute any form of contract or commitment
              between you and Valenté Models. All applications are reviewed at our sole
              discretion, and we are not obligated to respond to every submission.
            </p>
            <p>
              Applicants must be 18 years of age or older to submit independently. If you are
              between 16 and 18 years old, a parent or legal guardian must provide written
              consent alongside your application. Applications from individuals under 16 years
              of age will not be considered.
            </p>
            <p>
              By submitting photographs, you confirm that you hold the rights to those images
              and that their use by Valenté Models for internal evaluation purposes is
              authorized.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="border-t border-[#001F3F]/10" />

        {/* ── Data & Privacy ── */}
        <ScrollFadeIn className="space-y-6" delay={130}>
          <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-[#001F3F]">
            Personal Data & Privacy
          </h2>
          <div className="space-y-4 text-sm leading-8 text-[#001F3F]">
            <p>
              Valenté Models processes personal data in accordance with the General Data
              Protection Regulation (GDPR) and applicable French data protection law.
            </p>
            <p>
              The data collected through this website — including names, contact details,
              measurements, and photographs — is used exclusively to evaluate applications
              and manage our talent roster. It is never sold or shared with third parties
              for commercial purposes.
            </p>
            <p>
              You have the right to access, correct, or request the deletion of your personal
              data at any time. To exercise these rights, contact us at{" "}
              <a href="mailto:contact@valentemodels.com" className="underline underline-offset-4">
                contact@valentemodels.com
              </a>.
            </p>
            <p>
              Data submitted through application forms is retained for a maximum of 12 months
              from the date of submission, after which it is permanently deleted unless a
              representation agreement has been established.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="border-t border-[#001F3F]/10" />

        {/* ── Intellectual Property ── */}
        <ScrollFadeIn className="space-y-6" delay={140}>
          <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-[#001F3F]">
            Intellectual Property
          </h2>
          <div className="space-y-4 text-sm leading-8 text-[#001F3F]">
            <p>
              All elements of this website, including but not limited to its design, typography,
              logos, and written content, are protected by intellectual property law and remain
              the property of Valenté Models.
            </p>
            <p>
              Any reproduction, representation, or distribution of these elements without
              express written authorization is prohibited and may result in legal proceedings.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="border-t border-[#001F3F]/10" />

        {/* ── Limitation of Liability ── */}
        <ScrollFadeIn className="space-y-6" delay={150}>
          <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-[#001F3F]">
            Limitation of Liability
          </h2>
          <div className="space-y-4 text-sm leading-8 text-[#001F3F]">
            <p>
              Valenté Models makes every effort to ensure that the information published on
              this website is accurate and up to date. However, we cannot guarantee the
              completeness or accuracy of all content and accept no liability for any errors
              or omissions.
            </p>
            <p>
              Valenté Models shall not be held liable for any direct or indirect damages
              arising from the use of this website or from the temporary unavailability of
              any of its features.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="border-t border-[#001F3F]/10" />

        {/* ── Governing Law ── */}
        <ScrollFadeIn className="space-y-6" delay={160}>
          <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-[#001F3F]">
            Governing Law
          </h2>
          <div className="space-y-4 text-sm leading-8 text-[#001F3F]">
            <p>
              These terms are governed by French law. Any dispute arising in connection with
              this website or these terms shall be subject to the exclusive jurisdiction of
              the competent courts of Paris, France.
            </p>
          </div>
        </ScrollFadeIn>

      </div>
    </main>
  );
}
