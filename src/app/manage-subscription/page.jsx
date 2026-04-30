import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { us } from "@/app/constants/us";
import { SUPPORT_EMAIL } from "@/lib/site";

export const metadata = {
  title: "Manage AI Invitation Maker Subscription – Billing & Cancellation",
  description:
    "Manage or cancel your AI Invitation Maker subscription, access billing controls, and get support for your account and payments.",
};

export default function ManageSubscriptionPage() {
  return (
    <>
      <Navbar navLinks={us.navLinks} country="us" />

      <main className="bg-white text-black">
        <div className="mycontainer py-18 md:py-20">
          <div className="max-w-full space-y-10">

            {/* Header */}
            <header className="space-y-4 border-b border-[#E5D4FF] pb-8">
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-black">
                Subscription Controls
              </p>

              <h1 className="text-[30px] sm:text-[40px] md:text-[48px] font-bold leading-tight">
                Manage or Cancel Your Subscription
              </h1>

              <p className="text-[16px] sm:text-[18px] leading-8 text-black">
                AI Invitation Maker allows you to easily manage your subscription,
                view billing details, and cancel your plan anytime. Stay in control
                while creating beautiful invitations for weddings, birthdays,
                parties, and special events.
              </p>
            </header>

            {/* Web Subscription */}
            <section className="rounded-3xl border border-[#FFFFFF1A] bg-gradient-to-br from-[#7A00FF]/15 to-[#FF6B81]/15 p-6 md:p-8 space-y-5">
              <h2 className="text-2xl font-bold bg-gradient-to-br from-[#7A00FF] to-[#FF6B81] bg-clip-text text-transparent">
                For Web Subscriptions
              </h2>

              <p className="text-[16px] leading-8 text-black">
                Log in to your dashboard to view your active plan, check payment
                history, update billing information, or manage renewal settings
                for your AI Invitation Maker subscription.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://apps.apple.com/us/app/inviteos-ai-invitation-maker/id6755988566"
                  target="blank"
                  className="inline-flex rounded-full bg-gradient-to-br from-[#7A00FF] to-[#FF6B81] px-5 py-3 text-white font-medium hover:opacity-90 transition"
                >
                  Open Dashboard Login
                </Link>

                <Link
                  href="/pricing"
                  className="inline-flex rounded-full border border-[#7A00FF] px-5 py-3 bg-gradient-to-br from-[#7A00FF] to-[#FF6B81] bg-clip-text text-transparent font-medium"
                >
                  View Pricing Plans
                </Link>
              </div>
            </section>

            {/* Support + Cancel Info */}
            <section className="grid gap-6 md:grid-cols-2">

              {/* Billing Help */}
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#7A00FF]/15 to-[#FF6B81]/15 p-6 space-y-3">
                <h2 className="text-2xl font-bold bg-gradient-to-br from-[#7A00FF] to-[#FF6B81] bg-clip-text text-transparent">
                  Need Billing Help?
                </h2>

                <p className="text-[16px] leading-8 text-black">
                  If you’re having trouble accessing your subscription or need
                  help identifying a payment, our support team is ready to assist you.
                </p>

                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="inline-flex rounded-full border border-[#7A00FF] px-5 py-3 bg-gradient-to-br from-[#7A00FF] to-[#FF6B81] bg-clip-text text-transparent font-medium"
                >
                  {SUPPORT_EMAIL}
                </a>
              </div>

              {/* Before Cancel */}
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#7A00FF]/15 to-[#FF6B81]/15 p-6 space-y-3">
                <h2 className="text-2xl font-bold bg-gradient-to-br from-[#7A00FF] to-[#FF6B81] bg-clip-text text-transparent">
                  Before You Cancel
                </h2>

                <p className="text-[16px] leading-8 text-black">
                  When you cancel, your subscription will remain active until the
                  end of your current billing cycle. No future charges will be made.
                </p>

                <p className="text-[16px] leading-8 text-black">
                  If you cannot access your dashboard or need help locating a payment,
                  please contact support using the email you used at checkout.
                </p>

                <div className="flex flex-wrap gap-3 pt-2 text-sm font-semibold">
                  <Link
                    href="/pricing"
                    className="rounded-full border border-[#7A00FF] px-4 py-2 bg-gradient-to-br from-[#7A00FF] to-[#FF6B81] bg-clip-text text-transparent font-medium "
                  >
                    Pricing Details
                  </Link>

                  <Link
                    href="https://apps.apple.com/us/app/inviteos-ai-invitation-maker/id6755988566"
                    target="blank"
                    className="rounded-full border border-[#7A00FF] px-4 py-2 bg-gradient-to-br from-[#7A00FF] to-[#FF6B81] bg-clip-text text-transparent font-medium "
                  >
                    Open Dashboard
                  </Link>
                </div>
              </div>

            </section>
          </div>
        </div>
      </main>

      <Footer footer={us.footer} country="us" supportEmail={SUPPORT_EMAIL} />
    </>
  );
}