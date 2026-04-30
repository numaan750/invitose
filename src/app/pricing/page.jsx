import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { us } from "@/app/constants/us";
import { PUBLIC_PRICING, SUPPORT_EMAIL } from "@/lib/site";

export const metadata = {
  title: "AI Invitation Maker Pricing – Plans & Subscription Options",
  description:
    "Explore AI Invitation Maker pricing, subscription plans, renewal terms, and billing details for AI-generated invitations and event designs.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar navLinks={us.navLinks} country="us" />

      <main className="bg-white text-black">
        <div className="mycontainer py-18 md:py-20">
          <div className="space-y-10">
            {/* Header */}
            <header className="space-y-4 border-b border-[#C4D0BB] pb-8">
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-black">
                Billing Transparency
              </p>

              <h1 className="text-[30px] sm:text-[40px] md:text-[48px] font-bold leading-tight">
                AI Invitation Maker Pricing
              </h1>

              <p className="text-[16px] sm:text-[18px] leading-8 text-black max-w-full">
                AI Invitation Maker offers simple and transparent pricing for
                creating AI-powered invitations for weddings, birthdays,
                parties, and special events. All plans renew automatically
                unless cancelled, and billing is handled securely through our
                payment provider.
              </p>
            </header>

            {/* Pricing Plans */}
            <section className="grid gap-6 md:grid-cols-2">
              {PUBLIC_PRICING.map((plan) => (
                <article
                  key={plan.id}
                  className="rounded-3xl border border-[#FFFFFF1A] bg-gradient-to-br from-[#7A00FF]/15 to-[#FF6B81]/15 p-6 shadow-sm"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] bg-gradient-to-br from-[#7A00FF] to-[#FF6B81] bg-clip-text text-transparent">
                    {plan.name}
                  </p>

                  <div className="mt-4 space-y-2">
                    <h2 className="text-3xl font-bold bg-gradient-to-br from-[#7A00FF] to-[#FF6B81] bg-clip-text text-transparent">
                      {plan.price}
                    </h2>

                    <p className="text-black">{plan.cadence}</p>
                    <p className="text-black font-medium">{plan.summary}</p>
                    <p className="text-black">{plan.renewal}</p>
                  </div>
                </article>
              ))}
            </section>

            {/* Extra Sections */}
            <section className="grid gap-6 md:grid-cols-2">
              {/* Renewal */}
              <div className="rounded-3xl border border-[#FFFFFF1A] bg-gradient-to-br from-[#7A00FF]/15 to-[#FF6B81]/15 p-6 space-y-4">
                <h2 className="text-2xl font-bold bg-gradient-to-br from-[#7A00FF] to-[#FF6B81] bg-clip-text text-transparent">
                  Renewal and Cancellation
                </h2>

                <p className="text-[16px] leading-8 text-black">
                  Subscription plans renew automatically based on your selected
                  billing cycle unless cancelled before the next billing date.
                </p>

                <p className="text-[16px] leading-8 text-black">
                  You can manage your subscription anytime from your dashboard,
                  including updating payment methods, viewing invoices, or
                  cancelling your plan.
                </p>

                <div className="flex flex-wrap gap-3 pt-2 text-sm font-semibold">
                  <Link
                    href="/manage-subscription"
                    className="rounded-full border border-[#7A00FF] px-4 py-2 bg-gradient-to-br from-[#7A00FF] to-[#FF6B81] bg-clip-text text-transparent"
                  >
                    Manage Subscription
                  </Link>

                  <Link
                    href="https://apps.apple.com/us/app/inviteos-ai-invitation-maker/id6755988566"
                    target="blank"
                    className="rounded-full border border-[#7A00FF] px-4 py-2 bg-gradient-to-br from-[#7A00FF] to-[#FF6B81] bg-clip-text text-transparent"
                  >
                    Account Login
                  </Link>

                  <Link
                    href="/blog"
                    className="rounded-full border border-[#7A00FF] px-4 py-2 bg-gradient-to-br from-[#7A00FF] to-[#FF6B81] bg-clip-text text-transparent"
                  >
                    Read the Blog
                  </Link>
                </div>
              </div>

              {/* Support */}
              <div className="rounded-3xl border border-[#FFFFFF1A] bg-gradient-to-br from-[#7A00FF]/15 to-[#FF6B81]/15 p-6 space-y-4">
                <h2 className="text-2xl font-bold bg-gradient-to-br from-[#7A00FF] to-[#FF6B81] bg-clip-text text-transparent">
                  Billing Support
                </h2>

                <p className="text-[16px] leading-8 text-black">
                  Need help with billing, subscriptions, or account access? Our
                  support team is here to assist you.
                </p>

                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="inline-flex rounded-full border border-[#7A00FF] px-5 py-3 bg-gradient-to-br from-[#7A00FF] to-[#FF6B81] bg-clip-text text-transparent font-medium"
                >
                  {SUPPORT_EMAIL}
                </a>

                <p className="text-sm text-gray-500">
                  Final pricing, applicable taxes, and currency may vary based
                  on your location and payment provider at checkout.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer footer={us.footer} country="us" supportEmail={SUPPORT_EMAIL} />
    </>
  );
}
