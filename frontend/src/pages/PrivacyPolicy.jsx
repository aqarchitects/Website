import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";

const PrivacyPolicy = () => {
  // Get current date formatted as "Month Day, Year"
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <SEO
        title="Privacy Policy - AG Design"
        description="Read our privacy policy and data protection information"
      />
      <Header />

      {/* Hero Section */}
      <PageHero
        backgroundImage="/images/homepagebg.png"
        title="Privacy Policy"
        description="Your privacy is important to us. Learn how we collect, use, and protect your personal information."
        overlayOpacity="40"
      />

      {/* Privacy Policy Content */}
      <div className="min-h-screen bg-black py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-12">
            {/* Last Updated */}
            <ScrollReveal direction="bottom" distance={80} duration={1}>
              <div className="text-gray-medium text-sm">
                Last Updated: {currentDate}
              </div>
            </ScrollReveal>

            {/* Introduction */}
            <ScrollReveal
              direction="left"
              distance={150}
              duration={1.2}
              delay={0.1}
            >
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  1. Introduction
                </h2>
                <p className="text-gray-light leading-relaxed">
                  At AG Design (AQ Architects), we are committed to protecting
                  your privacy and personal information. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your
                  information when you visit our website or use our services.
                </p>
              </section>
            </ScrollReveal>

            {/* Information We Collect */}
            <ScrollReveal
              direction="right"
              distance={150}
              duration={1.2}
              delay={0.1}
            >
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  2. Information We Collect
                </h2>
                <p className="text-gray-light leading-relaxed">
                  We collect information that you provide directly to us,
                  including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-light ml-4">
                  <li>
                    <span className="font-semibold text-white">
                      Personal Information:
                    </span>{" "}
                    Name, email address, phone number, mailing address
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      Project Information:
                    </span>{" "}
                    Project details, preferences, budget, timeline
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      Communication Data:
                    </span>{" "}
                    Messages, inquiries, and feedback you send to us
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      Technical Data:
                    </span>{" "}
                    IP address, browser type, device information, cookies
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      Usage Data:
                    </span>{" "}
                    Pages visited, time spent on site, navigation patterns
                  </li>
                </ul>
              </section>
            </ScrollReveal>

            {/* How We Use Your Information */}
            <ScrollReveal
              direction="left"
              distance={150}
              duration={1.2}
              delay={0.1}
            >
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  3. How We Use Your Information
                </h2>
                <p className="text-gray-light leading-relaxed">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-light ml-4">
                  <li>To provide and maintain our services</li>
                  <li>To communicate with you about projects and inquiries</li>
                  <li>To send project updates, proposals, and invoices</li>
                  <li>To improve our website and services</li>
                  <li>To send marketing communications (with your consent)</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                </ul>
              </section>
            </ScrollReveal>

            {/* Information Sharing */}
            <ScrollReveal
              direction="right"
              distance={150}
              duration={1.2}
              delay={0.1}
            >
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  4. Information Sharing and Disclosure
                </h2>
                <p className="text-gray-light leading-relaxed">
                  We may share your information with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-light ml-4">
                  <li>
                    <span className="font-semibold text-white">
                      Service Providers:
                    </span>{" "}
                    Third-party contractors, consultants, and vendors who assist
                    in our operations
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      Professional Partners:
                    </span>{" "}
                    Engineers, contractors, and other professionals involved in
                    your project
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      Legal Requirements:
                    </span>{" "}
                    When required by law or to protect our rights
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      Business Transfers:
                    </span>{" "}
                    In connection with a merger, sale, or acquisition
                  </li>
                </ul>
                <p className="text-gray-light leading-relaxed mt-4">
                  We do not sell your personal information to third parties.
                </p>
              </section>
            </ScrollReveal>

            {/* Data Security */}
            <ScrollReveal
              direction="left"
              distance={150}
              duration={1.2}
              delay={0.1}
            >
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  5. Data Security
                </h2>
                <p className="text-gray-light leading-relaxed">
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. However, no
                  method of transmission over the internet is 100% secure, and
                  we cannot guarantee absolute security.
                </p>
              </section>
            </ScrollReveal>

            {/* Data Retention */}
            <ScrollReveal
              direction="right"
              distance={150}
              duration={1.2}
              delay={0.1}
            >
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  6. Data Retention
                </h2>
                <p className="text-gray-light leading-relaxed">
                  We retain your personal information for as long as necessary
                  to fulfill the purposes outlined in this Privacy Policy,
                  unless a longer retention period is required by law.
                  Project-related information may be retained for archival and
                  portfolio purposes.
                </p>
              </section>
            </ScrollReveal>

            {/* Your Rights */}
            <ScrollReveal
              direction="left"
              distance={150}
              duration={1.2}
              delay={0.1}
            >
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  7. Your Rights
                </h2>
                <p className="text-gray-light leading-relaxed">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-light ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Request restriction of processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="text-gray-light leading-relaxed mt-4">
                  To exercise these rights, please contact us using the
                  information provided below.
                </p>
              </section>
            </ScrollReveal>

            {/* Cookies */}
            <ScrollReveal
              direction="right"
              distance={150}
              duration={1.2}
              delay={0.1}
            >
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  8. Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-light leading-relaxed">
                  We use cookies and similar tracking technologies to track
                  activity on our website and store certain information. You can
                  instruct your browser to refuse all cookies or to indicate
                  when a cookie is being sent. However, if you do not accept
                  cookies, you may not be able to use some portions of our
                  website.
                </p>
              </section>
            </ScrollReveal>

            {/* Third-Party Links */}
            <ScrollReveal
              direction="left"
              distance={150}
              duration={1.2}
              delay={0.1}
            >
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  9. Third-Party Links
                </h2>
                <p className="text-gray-light leading-relaxed">
                  Our website may contain links to third-party websites. We are
                  not responsible for the privacy practices or content of these
                  external sites. We encourage you to review the privacy
                  policies of any third-party sites you visit.
                </p>
              </section>
            </ScrollReveal>

            {/* Children's Privacy */}
            <ScrollReveal
              direction="right"
              distance={150}
              duration={1.2}
              delay={0.1}
            >
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  10. Children's Privacy
                </h2>
                <p className="text-gray-light leading-relaxed">
                  Our services are not directed to individuals under the age of
                  18. We do not knowingly collect personal information from
                  children. If you become aware that a child has provided us
                  with personal information, please contact us.
                </p>
              </section>
            </ScrollReveal>

            {/* International Transfers */}
            <ScrollReveal
              direction="left"
              distance={150}
              duration={1.2}
              delay={0.1}
            >
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  11. International Data Transfers
                </h2>
                <p className="text-gray-light leading-relaxed">
                  Your information may be transferred to and processed in
                  countries other than your country of residence. We ensure
                  appropriate safeguards are in place to protect your
                  information in accordance with this Privacy Policy.
                </p>
              </section>
            </ScrollReveal>

            {/* Changes to Privacy Policy */}
            <ScrollReveal
              direction="right"
              distance={150}
              duration={1.2}
              delay={0.1}
            >
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  12. Changes to This Privacy Policy
                </h2>
                <p className="text-gray-light leading-relaxed">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "Last Updated" date. You are
                  advised to review this Privacy Policy periodically for any
                  changes.
                </p>
              </section>
            </ScrollReveal>

            {/* Contact Us */}
            <ScrollReveal
              direction="left"
              distance={150}
              duration={1.2}
              delay={0.1}
            >
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  13. Contact Us
                </h2>
                <p className="text-gray-light leading-relaxed">
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us:
                </p>
                <div className="text-gray-light space-y-1 ml-4">
                  <p>AG Design (AQ Architects)</p>
                  <p>Doha, Qatar</p>
                  <p>Email: privacy@agdesign.com</p>
                  <p>Phone: +974 XXXX XXXX</p>
                </div>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
