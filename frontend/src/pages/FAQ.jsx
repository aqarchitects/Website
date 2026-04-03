import { useState } from "react";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What services does AQ Design offer?",
          answer:
            "AQ Design (AQ Architects) offers comprehensive architectural and design services including architectural design & planning, interior design & space planning, landscape Architects, project management & consultation, 3D visualization & rendering, and construction supervision. We work on residential, commercial, and mixed-use projects of all scales.",
        },
        {
          question: "Where is AQ Design located and what areas do you serve?",
          answer:
            "We are based in Doha, Qatar, and primarily serve clients throughout Qatar and the Gulf region. However, we also work on international projects and are open to collaborating with clients worldwide for exceptional design opportunities.",
        },
        {
          question: "What types of projects do you specialize in?",
          answer:
            "We specialize in a wide range of projects including luxury residential villas, commercial buildings, hospitality spaces, mixed-use developments, landscape design, and interior design. Our portfolio includes over 57 successful constructions with more than 12 international clients.",
        },
        {
          question: "How experienced is your team?",
          answer:
            "Our team consists of over 1,500 professional technicians and designers with extensive experience in architecture and design. We have completed more than 12,000,000 hours of construction work, ensuring the highest quality and expertise in every project.",
        },
      ],
    },
    {
      category: "Project Process",
      questions: [
        {
          question: "What is your design process?",
          answer:
            "Our design process typically includes: 1) Initial consultation and site analysis, 2) Concept development and preliminary designs, 3) Design development with detailed drawings, 4) Final design and documentation, 5) Construction administration and supervision. We maintain close communication with clients throughout each phase.",
        },
        {
          question: "How long does a typical project take?",
          answer:
            "Project timelines vary depending on scope and complexity. A residential villa design might take 3-6 months, while larger commercial projects can take 6-12 months or more. We provide detailed timelines during the initial consultation and keep you updated throughout the process.",
        },
        {
          question: "How involved will I be in the design process?",
          answer:
            "We believe in collaborative design. You'll be involved in key decision points throughout the process, with regular presentations and review sessions. We value your input while providing professional guidance to achieve the best possible outcome.",
        },
        {
          question: "Do you handle permits and approvals?",
          answer:
            "Yes, we can assist with obtaining necessary permits and approvals from local authorities. We're familiar with building codes and regulations in Qatar and can guide you through the approval process, though final responsibility for permits rests with the client.",
        },
      ],
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          question: "How much do your services cost?",
          answer:
            "Our fees vary based on project scope, complexity, and services required. We offer competitive pricing and provide detailed proposals after the initial consultation. Contact us for a personalized quote based on your specific project needs.",
        },
        {
          question: "What is your payment structure?",
          answer:
            "We typically work with a milestone-based payment structure: an initial deposit to commence work (usually 30%), progress payments at key milestones (40-50%), and final payment upon completion (20-30%). Specific terms are outlined in individual project agreements.",
        },
        {
          question: "Do you offer payment plans?",
          answer:
            "Yes, we can discuss flexible payment arrangements for larger projects. Payment terms are negotiated during the contract phase and tailored to your project timeline and budget.",
        },
        {
          question: "Are your fees negotiable?",
          answer:
            "Our fees are based on the scope of work, project complexity, and value we provide. While we strive to offer competitive pricing, we focus on delivering exceptional quality and service. We're happy to discuss your budget and find solutions that work for both parties.",
        },
      ],
    },
    {
      category: "Design & Revisions",
      questions: [
        {
          question: "How many design revisions are included?",
          answer:
            "Each project includes a specified number of revision rounds (typically 2-3 rounds per design phase). Additional revisions beyond the agreed scope may incur additional fees. We discuss revision policies during the contract phase.",
        },
        {
          question: "Can I make changes after the design is approved?",
          answer:
            "Yes, changes can be made, but significant modifications to approved designs may require additional fees and could affect the project timeline. We recommend finalizing decisions at each phase to maintain efficiency and budget.",
        },
        {
          question: "What if I don't like the initial design concepts?",
          answer:
            "We work closely with you from the start to understand your vision and preferences. If initial concepts don't meet your expectations, we'll revise them within the agreed revision rounds. Our goal is your complete satisfaction with the final design.",
        },
        {
          question: "Do you provide 3D visualizations?",
          answer:
            "Yes, we provide high-quality 3D visualizations and renderings to help you visualize the final design. This service is included in most comprehensive design packages and helps ensure everyone is aligned on the vision before construction begins.",
        },
      ],
    },
    {
      category: "Technical Questions",
      questions: [
        {
          question: "Do you work with sustainable and eco-friendly design?",
          answer:
            "Absolutely! We're committed to sustainable design practices and can incorporate eco-friendly materials, energy-efficient systems, and green building principles into your project. We can also pursue green building certifications if desired.",
        },
        {
          question: "Can you work with my existing contractor or builder?",
          answer:
            "Yes, we regularly collaborate with clients' preferred contractors and builders. We can provide construction documentation and supervision services to ensure the design is executed properly, regardless of who handles the construction.",
        },
        {
          question: "What software and tools do you use?",
          answer:
            "We use industry-leading software including AutoCAD, Revit, SketchUp, 3ds Max, V-Ray, and Adobe Creative Suite. This ensures precise documentation, stunning visualizations, and seamless collaboration with other professionals.",
        },
        {
          question: "Do you provide construction supervision?",
          answer:
            "Yes, we offer construction administration and supervision services to ensure your project is built according to the design intent. This includes site visits, contractor coordination, and quality control throughout the construction phase.",
        },
      ],
    },
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I start a project with AQ Design?",
          answer:
            "Simply contact us through our website, email, or phone. We'll schedule an initial consultation to discuss your project, goals, and requirements. After understanding your needs, we'll provide a proposal outlining scope, timeline, and fees.",
        },
        {
          question: "What should I prepare for the initial consultation?",
          answer:
            "Bring any inspiration images, sketches, or ideas you have. If you have a site, bring property documents, surveys, and any existing plans. Most importantly, come prepared to discuss your vision, budget, timeline, and any specific requirements or constraints.",
        },
        {
          question: "Is the initial consultation free?",
          answer:
            "Yes, we offer a complimentary initial consultation to discuss your project and determine if we're the right fit for your needs. This allows us to understand your vision and provide you with preliminary information about our services.",
        },
        {
          question: "How quickly can you start my project?",
          answer:
            "Our availability varies depending on current workload. Typically, we can begin new projects within 2-4 weeks of contract signing. For urgent projects, we may be able to accommodate faster start times. Contact us to discuss your timeline.",
        },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="FAQ - AQ Design"
        description="Frequently asked questions about AQ Design services"
      />
      <Header />

      {/* Hero Section */}
      <PageHero
        backgroundImage="/images/homepagebg.png"
        title="Frequently Asked Questions"
        description="Find answers to common questions about our services, process, and expertise."
        overlayOpacity="30"
      />

      {/* FAQ Content */}
      <div className="min-h-screen bg-black py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Introduction */}
          <ScrollReveal direction="bottom" distance={80} duration={1}>
            <div className="text-center mb-12 md:mb-16">
              <p className="text-gray-light text-lg leading-relaxed max-w-2xl mx-auto">
                Have questions? We've compiled answers to the most common
                questions about our services, process, and how we work with
                clients.
              </p>
            </div>
          </ScrollReveal>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {faqData.map((category, categoryIndex) => (
              <ScrollReveal
                key={categoryIndex}
                direction={categoryIndex % 2 === 0 ? "left" : "right"}
                distance={150}
                duration={1.2}
                delay={0.1}
              >
                <div className="space-y-6">
                  {/* Category Title */}
                  <h2 className="text-2xl md:text-3xl font-semibold text-white border-b border-gray-800 pb-4">
                    {category.category}
                  </h2>

                  {/* Questions in Category */}
                  <div className="space-y-4">
                    {category.questions.map((faq, questionIndex) => {
                      const globalIndex = `${categoryIndex}-${questionIndex}`;
                      const isOpen = openIndex === globalIndex;

                      return (
                        <div
                          key={questionIndex}
                          className="border border-gray-800 rounded-lg overflow-hidden hover:border-primary/30 transition-colors"
                        >
                          {/* Question Button */}
                          <button
                            onClick={() => toggleFAQ(globalIndex)}
                            className="w-full px-6 py-4 flex items-center justify-between text-left bg-gray-900/30 hover:bg-gray-900/50 transition-colors"
                          >
                            <span className="text-white font-medium pr-4">
                              {faq.question}
                            </span>
                            <svg
                              className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>

                          {/* Answer */}
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              isOpen ? "max-h-96" : "max-h-0"
                            }`}
                          >
                            <div className="px-6 py-4 bg-black/50">
                              <p className="text-gray-light leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Still Have Questions CTA */}
          <ScrollReveal
            direction="bottom"
            distance={120}
            duration={1.3}
            delay={0.1}
          >
            <div className="mt-16 text-center bg-linear-to-r from-gray-900/50 to-gray-800/50 rounded-lg p-8 md:p-12 border border-gray-800">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-light mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our team is here to
                help. Reach out to us and we'll get back to you as soon as
                possible.
              </p>
              <a
                href="/contact"
                className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Contact Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FAQ;
