import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { us } from "@/app/constants/us";
import { SUPPORT_EMAIL } from "@/lib/site";

export const metadata = {
  title: "Acceptable Use Policy – AI Invitation Maker Content Rules",
  description:
    "Read the AI Invitation Maker acceptable use policy and content safety rules for AI-generated invitations and event designs.",
};

export default function AcceptableUsePage() {
  return (
    <>
      <Navbar navLinks={us.navLinks} country="us" />
      <main className="bg-white text-black">
        <div className="mycontainer py-18 md:py-20">
          <div className="max-w-4xl space-y-10">
            {/* Header */}
            <header className="space-y-4 border-b border-black/10 pb-8">
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-black">
                Content Safety
              </p>

              <h1 className="text-[30px] sm:text-[40px] md:text-[48px] font-bold leading-tight">
                Acceptable Use Policy
              </h1>

              <p className="text-[16px] sm:text-[18px] leading-8 text-black/80">
                AI Invitation Maker is an independent AI-powered platform that
                helps users create personalized invitations for events such as
                weddings, birthdays, parties, and corporate gatherings. We are
                not affiliated with Apple or any third-party AI provider.
              </p>
            </header>

            {/* Allowed Use */}
            <section className="space-y-4">
              <h2 className="text-[24px] font-bold">Allowed Use</h2>
              <p className="text-[16px] leading-8 text-black">
                You may use AI Invitation Maker to generate invitation designs,
                event cards, digital invites, celebration templates, and
                creative text for personal or professional event planning
                purposes.
              </p>
            </section>

            {/* Prohibited Content */}
            <section className="space-y-4">
              <h2 className="text-[24px] font-bold">Prohibited Content</h2>

              <p className="text-[16px] leading-8 text-black">
                You may not use AI Invitation Maker to create, request, upload,
                or generate content that is sexually explicit, pornographic,
                nude, or otherwise inappropriate for general audiences.
              </p>

              <p className="text-[16px] leading-8 text-black">
                You are also prohibited from using the platform for illegal,
                harmful, abusive, hateful, misleading, or privacy-violating
                purposes. This includes impersonation, harassment, or generating
                invitations that promote violence or discrimination.
              </p>
            </section>

            {/* Moderation */}
            <section className="space-y-4">
              <h2 className="text-[24px] font-bold">
                Moderation and Enforcement
              </h2>

              <p className="text-[16px] leading-8 text-black">
                All generation requests are subject to automated moderation.
                Requests that violate our safety policies may be blocked or
                rejected.
              </p>

              <p className="text-[16px] leading-8 text-black">
                We reserve the right to suspend or terminate accounts that
                attempt to bypass safety systems or misuse the platform. We may
                also review reported content and take appropriate action when
                necessary.
              </p>
            </section>

            {/* Questions */}
            <section className="space-y-4">
              <h2 className="text-[24px] font-bold">Questions</h2>

              <p className="text-[16px] leading-8 text-black">
                If you have any questions about this policy, feel free to
                contact us at{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="underline bg-gradient-to-b from-[#7A00FF] to-[#FF6B81] bg-clip-text text-transparent">
                  {SUPPORT_EMAIL}
                </a>
                .
              </p>

              {/* Links */}
              <div className="flex flex-wrap gap-3 pt-2 text-sm font-semibold">
                <Link
                  href="/privecypolice"
                  className="rounded-full border border-[#FFFFFF1A] bg-gradient-to-br from-[#7A00FF]/15 to-[#FF6B81]/15 px-4 py-2 text-black"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/conditions"
                  className="rounded-full border border-[#FFFFFF1A] bg-gradient-to-br from-[#7A00FF]/15 to-[#FF6B81]/15 px-4 py-2 text-black"
                >
                  Terms & Conditions
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer footer={us.footer} country="us" supportEmail={SUPPORT_EMAIL} />
    </>
  );
}
