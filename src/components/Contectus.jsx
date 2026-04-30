"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Mail, Home, Phone } from "lucide-react";
import { SUPPORT_EMAIL } from "@/lib/site";

const Contectus = ({ contact }) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const placeholders = {
    name: contact?.form?.name ?? "Name",
    email: contact?.form?.email ?? "Email",
    phone: contact?.form?.phone ?? "Phone",
    message: contact?.form?.message ?? "Message",
  };

  const interestPlaceholder = contact?.form?.interest ?? "Select An Interest";
  const interestOptions = contact?.form?.interestOptions;

  const requiredFieldsLabel =
    contact?.form?.required ?? "Please fill required fields";
  const successLabel = contact?.form?.success ?? "Form submitted successfully!";
  const failureLabel = contact?.form?.failure ?? "Failed to submit form";

  const buttonLabel =
    contact?.button ?? contact?.form?.submit ?? "Send Message";
  const loadingLabel = contact?.loading ?? "Sending...";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error(requiredFieldsLabel);
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          option: formData.interest,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || failureLabel);
      }

      toast.success(successLabel);

      // form reset
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
      });
    } catch (error) {
      toast.error(error?.message || failureLabel);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className=" bg-[#FFFFFF] text-black ">
      <div className="mycontainer pt-8 md:pt-12 pb-8 md:pb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 order-2 md:order-1"
          >
            {" "}
            <input
              type="text"
              name="name"
              placeholder={placeholders.name}
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gradient-to-br from-[#7A00FF]/15 to-[#FF6B81]/15 border border-[#FFFFFF1A] text-black placeholder-[#8C8C8C] rounded-xl px-5 py-4 outline-none transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder={placeholders.email}
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gradient-to-br from-[#7A00FF]/15 to-[#FF6B81]/15 border border-[#FFFFFF1A] text-black placeholder-[#8C8C8C] rounded-xl px-5 py-4 outline-none transition-all"
            />
            <input
              type="tel"
              name="phone"
              placeholder={placeholders.phone}
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-gradient-to-br from-[#7A00FF]/15 to-[#FF6B81]/15 border border-[#FFFFFF1A] text-black placeholder-[#8C8C8C] rounded-xl px-5 py-4 outline-none transition-all"
            />
            <div className="relative">
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full bg-gradient-to-br from-[#7A00FF]/15 to-[#FF6B81]/15 border border-[#FFFFFF1A] text-[#8C8C8C] rounded-xl px-5 py-4 outline-none appearance-none cursor-pointer"
              >
                <option value="">{interestPlaceholder}</option>
                <option value="general">
                  {interestOptions?.general ?? "General Inquiry"}
                </option>
                <option value="support">
                  {interestOptions?.support ?? "Technical Support"}
                </option>
                <option value="business">
                  {interestOptions?.business ?? "Business Partnership"}
                </option>
                <option value="other">
                  {interestOptions?.other ?? "Other"}
                </option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="#6B7280"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <textarea
              name="message"
              placeholder={placeholders.message}
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full bg-gradient-to-br from-[#7A00FF]/15 to-[#FF6B81]/15 border border-[#FFFFFF1A] text-black placeholder-[#8C8C8C] rounded-xl px-5 py-4 outline-none transition-all resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-[#7A00FF] to-[#FF6B81] rounded-full font-bold px-5 py-3 text-white disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? loadingLabel : buttonLabel}
            </button>
          </form>

          <div className="md:pl-20 max-w-md py-12 order-1 md:order-2">
            <h2 className="text-[24px] sm:text-[30px] md:text-[40px] font-bold mb-6">
              {contact?.title}
            </h2>

            <p className="text-black mb-10 leading-relaxed text-[16px] sm:text-[18px]">
              {contact?.description}
            </p>

            <div className="space-y-6">
              {SUPPORT_EMAIL && (
                <div className="flex items-start gap-4 md:gap-6">
                  <Mail className="w-5 h-5 shrink-0 mt-1" />
                  <a
                    href={`mailto:${SUPPORT_EMAIL}`}
                    className="text-black leading-relaxed text-[16px] sm:text-[18px] underline"
                  >
                    {SUPPORT_EMAIL}
                  </a>
                </div>
              )}

              {contact?.address ? (
                <div className="flex items-start gap-4 md:gap-6">
                  <Home className="w-5 h-5 shrink-0 mt-1" />
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      contact.address,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black leading-relaxed text-[16px] sm:text-[18px] underline"
                  >
                    {contact.address}
                  </a>
                </div>
              ) : null}

              {contact?.phone ? (
                <div className="flex items-start gap-4 md:gap-6">
                  <Phone className="w-5 h-5 shrink-0 mt-1" />
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-black text-[16px] sm:text-[18px] underline"
                  >
                    {contact.phone}
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contectus;
