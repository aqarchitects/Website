import { useState } from "react";
import SectionAmbientLayer from "./SectionAmbientLayer";
import ScrollReveal from "./ScrollReveal";

const FormSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    countryCode: "+971",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact-form"
      className="relative min-h-150 sm:min-h-175 md:min-h-225 py-8 md:py-8 lg:py-16 overflow-visible"
    >
      {/* Ambient Layer with Custom SVG */}
      <SectionAmbientLayer
        svgConfig={[
          {
            src: "/images/logo_vector.svg",
            position: { top: "0", left: "0" },
            width: "370px",
            opacity: 1,
            drift: {
              x: [-15, 0, -15],
              y: [-15, 0, -15],
              duration: 10,
            },
            hideOnMobile: true,
          },
        ]}
        containerZIndex={5}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-12 lg:px-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <ScrollReveal direction="bottom" distance={120} duration={1.2}>
          <div className="flex flex-col items-start text-left space-y-8 md:space-y-10 lg:space-y-12">
            {/* 1. Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-medium text-left leading-tight sm:leading-snug lg:leading-tight tracking-tight text-primary">
              Send us your message:
            </h2>

            {/* 2. Description */}
            <p className="text-sm sm:text-base lg:text-base font-normal leading-relaxed max-w-3xl text-white">
              <strong>AQ Design House ® Customer support team</strong>Hello,
              We’d love to hear from you. Whether you have a question, a project
              in mind, or just want to say hello, drop us a line and our team
              will get back to you as soon as possible.
            </p>

            {/* 3. Form */}
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-6xl space-y-6"
            >
              {/* Full Name */}
              <div className="w-full">
                <div className="flex items-center gap-2 border-b border-neutral-600 focus-within:border-primary transition-colors pb-3">
                  <label
                    htmlFor="fullName"
                    className="text-base sm:text-lg lg:text-xl font-medium text-neutral-600 tracking-tight"
                  >
                    Full Name:
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="flex-1 bg-transparent text-white focus:outline-none text-base sm:text-lg lg:text-xl font-medium leading-relaxed tracking-tight border-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="w-full">
                <div className="flex items-center gap-2 border-b border-neutral-600 focus-within:border-primary transition-colors pb-3">
                  <label
                    htmlFor="email"
                    className="text-base sm:text-lg lg:text-xl font-medium text-neutral-600 tracking-tight"
                  >
                    E-Mail:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="flex-1 bg-transparent text-white focus:outline-none text-base sm:text-lg lg:text-xl font-medium leading-relaxed tracking-tight border-none"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="w-full">
                <div className="flex items-center gap-2 border-b border-neutral-600 focus-within:border-primary transition-colors pb-3">
                  <label
                    htmlFor="subject"
                    className="text-base sm:text-lg lg:text-xl font-medium text-neutral-600 tracking-tight"
                  >
                    Subject:
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="flex-1 bg-transparent text-white focus:outline-none text-base sm:text-lg lg:text-xl font-medium leading-relaxed tracking-tight border-none"
                  />
                </div>
              </div>

              {/* Phone with Country Code */}
              <div className="w-full">
                <div className="flex items-center gap-2 border-b border-neutral-600 focus-within:border-primary transition-colors pb-3">
                  <label
                    htmlFor="phone"
                    className="text-base sm:text-lg lg:text-xl font-medium text-neutral-600 tracking-tight"
                  >
                    Mobile:
                  </label>
                  <select
                    id="countryCode"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-12 pl-2 bg-transparent text-white focus:outline-none text-base sm:text-lg lg:text-xl font-medium leading-relaxed tracking-tight appearance-none cursor-pointer text-center"
                    style={{
                      backgroundColor: "#1a1a1a",
                      border: "1px solid #666666",
                      borderRadius: "0.675rem",
                    }}
                  >
                    <option value="+1">🇺🇸</option>
                    <option value="+44">🇬🇧</option>
                    <option value="+91">🇮🇳</option>
                    <option value="+86">🇨🇳</option>
                    <option value="+81">🇯🇵</option>
                    <option value="+49">🇩🇪</option>
                    <option value="+33">🇫🇷</option>
                    <option value="+39">🇮🇹</option>
                    <option value="+34">🇪🇸</option>
                    <option value="+61">🇦🇺</option>
                    <option value="+971">🇦🇪</option>
                    <option value="+966">🇸🇦</option>
                  </select>
                  <span className="text-white text-base sm:text-lg lg:text-xl font-medium">
                    {formData.countryCode}
                  </span>
                  <span className="text-neutral-600 text-base sm:text-lg lg:text-xl">
                    |
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="flex-1 bg-transparent text-white focus:outline-none text-base sm:text-lg lg:text-xl font-medium leading-relaxed tracking-tight border-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="w-full">
                <div className="flex items-start gap-2 border-b border-neutral-600 focus-within:border-primary transition-colors pb-3">
                  <label
                    htmlFor="message"
                    className="text-base sm:text-lg lg:text-xl font-medium text-neutral-600 tracking-tight"
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="flex-1 bg-transparent text-white focus:outline-none text-base sm:text-lg lg:text-xl font-medium leading-relaxed tracking-tight border-none resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-start pt-2 md:pt-4">
                <button
                  type="submit"
                  className="px-4 py-1 text-base sm:text-lg lg:text-lg font-semibold text-black text-center leading-normal tracking-tight rounded-full bg-primary transition-all duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
                >
                  Send the message
                </button>
              </div>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FormSection;
