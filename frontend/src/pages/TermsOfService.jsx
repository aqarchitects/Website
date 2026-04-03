import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";

const TermsOfService = () => {
  // Get current date formatted as "Month Day, Year"
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <SEO
        title="Terms of Service - AG Design"
        description="Read our terms of service and conditions"
      />
      <Header />

      {/* Hero Section */}
      <PageHero
        backgroundImage="/images/homepagebg.png"
        title="Terms of Service"
        description="Please read these terms and conditions carefully before using our services."
        overlayOpacity="40"
      />

      {/* Terms of Service Content */}
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
                  Welcome to AG Design (AQ Architects). These Terms of Service
                  ("Terms") govern your use of our website and services. By
                  accessing or using our services, you agree to be bound by
                  these Terms. If you do not agree with any part of these Terms,
                  please do not use our services.
                </p>
              </section>
            </ScrollReveal>

            {/* Services */}
            <ScrollReveal
              direction="right"
              distance={150}
              duration={1.2}
              delay={0.1}
            >
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  2. Services
                </h2>
                <p className="text-gray-light leading-relaxed">
                  AG Design provides architectural design, interior design,
                  landscape architecture, and related consulting services. The
                  scope of services will be defined in individual project
                  agreements and proposals.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-light ml-4">
                  <li>Architectural Design & Planning</li>
                  <li>Interior Design & Space Planning</li>
                  <li>Landscape Architecture</li>
                  <li>Project Management & Consultation</li>
                  <li>3D Visualization & Rendering</li>
                </ul>
              </section>
            </ScrollReveal>

            {/* Client Responsibilities */}
            <ScrollReveal
              direction="left"
              distance={150}
              duration={1.2}
              delay={0.1}
            >
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  3. Client Responsibilities
                </h2>
                <p className="text-gray-light leading-relaxed">
                  Clients agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-light ml-4">
                  <li>
                    Provide accurate and complete information necessary for
                    project execution
                  </li>
                  <li>
                    Respond to requests for information in a timely manner
                  </li>
                  <li>Make payments according to the agreed schedule</li>
                  <li>
                    Obtain necessary approvals and permits as required by local
                    authorities
                  </li>
                  <li>
                    Respect intellectual property rights of all designs and
                    materials
                  </li>
                </ul>
              </section>
            </ScrollReveal>

            {/* Payment Terms */}
            <ScrollReveal
              direction="right"
              distance={150}
              duration={1.2}
              delay={0.1}
            >
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  4. Payment Terms
                </h2>
                <p className="text-gray-light leading-relaxed">
                  Payment terms will be specified in individual project
                  agreements. Generally:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-light ml-4">
                  <li>An initial deposit is required to commence work</li>
                  <li>
                    Progress payments are due at specified project milestones
                  </li>
                  <li>Final payment is due upon project completion</li>
                  <li>Late payments may incur additional fees</li>
                  <li>
                    All fees are non-refundable unless otherwise specified
                  </li>
                </ul>
              </section>
            </ScrollReveal>

            {/* Intellectual Property */}
            <ScrollReveal
              direction="left"
              distance={150}
              duration={1.2}
              delay={0.1}
            >
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  5. Intellectual Property
                </h2>
                <p className="text-gray-light leading-relaxed">
                  All designs, drawings, specifications, and other materials
                  created by AG Design remain our intellectual property until
                  full payment is received. Upon full payment, clients receive a
                  license to use the designs for the specific project. AG Design
                  retains the right to use project images and information for
                  marketing purposes unless otherwise agreed.
                </p>
              </section>
            </ScrollReveal>

            {/* Project Timeline */}
            <ScrollReveal
              direction="right"
              distance={150}
              duration={1.2}
              delay={0.1}
            >
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  6. Project Timeline
                </h2>
                <p className="text-gray-light leading-relaxed">
                  Project timelines are estimates and may be subject to change
                  due to unforeseen circumstances, client delays, or changes in
                  project scope. AG Design will make reasonable efforts to meet
                  agreed timelines but is not liable for delays beyond our
                  control.
                </p>
              </section>
            </ScrollReveal>

            {/* Changes and Revisions */}
            <ScrollReveal
              direction="left"
              distance={150}
              duration={1.2}
              delay={0.1}
            >
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  7. Changes and Revisions
                </h2>
                <p className="text-gray-light leading-relaxed">
                  Each project includes a specified number of revision rounds.
                  Additional revisions or changes to approved designs may incur
                  additional fees. Significant changes to project scope will
                  require a new agreement and fee structure.
                </p>
              </section>
            </ScrollReveal>

            {/* Limitation of Liability */}
            <ScrollReveal
              direction="right"
              distance={150}
              duration={1.2}
              delay={0.1}
            >
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  8. Limitation of Liability
                </h2>
                <p className="text-gray-light leading-relaxed">
                  AG Design's liability is limited to the fees paid for the
                  specific project. We are not liable for indirect, incidental,
                  or consequential damages. Clients are responsible for
                  obtaining necessary permits, approvals, and ensuring
                  compliance with local building codes and regulations.
                </p>
              </section>
            </ScrollReveal>

            {/* Termination */}
            <ScrollReveal
              direction="left"
              distance={150}
              duration={1.2}
              delay={0.1}
            >
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  9. Termination
                </h2>
                <p className="text-gray-light leading-relaxed">
                  Either party may terminate the agreement with written notice.
                  Upon termination, the client is responsible for payment of all
                  work completed to date. AG Design will deliver all completed
                  work upon receipt of payment.
                </p>
              </section>
            </ScrollReveal>

            {/* Confidentiality */}
            <ScrollReveal
              direction="right"
              distance={150}
              duration={1.2}
              delay={0.1}
            >
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  10. Confidentiality
                </h2>
                <p className="text-gray-light leading-relaxed">
                  Both parties agree to maintain confidentiality of proprietary
                  information shared during the course of the project. This
                  obligation continues after project completion.
                </p>
              </section>
            </ScrollReveal>

            {/* Governing Law */}
            <ScrollReveal
              direction="left"
              distance={150}
              duration={1.2}
              delay={0.1}
            >
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  11. Governing Law
                </h2>
                <p className="text-gray-light leading-relaxed">
                  These Terms are governed by the laws of Qatar. Any disputes
                  will be resolved through arbitration in Doha, Qatar.
                </p>
              </section>
            </ScrollReveal>

            {/* Changes to Terms */}
            <ScrollReveal
              direction="right"
              distance={150}
              duration={1.2}
              delay={0.1}
            >
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  12. Changes to Terms
                </h2>
                <p className="text-gray-light leading-relaxed">
                  AG Design reserves the right to modify these Terms at any
                  time. Changes will be effective immediately upon posting to
                  our website. Continued use of our services constitutes
                  acceptance of modified Terms.
                </p>
              </section>
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal
              direction="left"
              distance={150}
              duration={1.2}
              delay={0.1}
            >
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  13. Contact Information
                </h2>
                <p className="text-gray-light leading-relaxed">
                  For questions about these Terms, please contact us through our
                  contact page or at:
                </p>
                <div className="text-gray-light space-y-1 ml-4">
                  <p>AG Design (AQ Architects)</p>
                  <p>Doha, Qatar</p>
                  <p>Email: info@aq-architects.com</p>
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

export default TermsOfService;
