"use client"; // Add this at the top of the file

import { useState, useEffect } from "react";
import {
  Search,
  Building,
  Clock,
  MapPin,
  Share2,
  Briefcase,
  DollarSign,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";

// Add this function at the top of the file, outside of any component
function smoothScroll(e) {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
}

const trendingJobs = [
  {
    title: "Master Potter",
    company: "Khurja Pottery Village",
    postedAgo: "2 weeks ago",
    type: "Full-time",
    time: "On-site",
    ctc: "₹15,000 - ₹25,000 per month",
    experience: "5+ Years",
    location: "Khurja, UP",
    description:
      "Seeking skilled potter to create high-quality traditional and innovative pottery pieces...",
  },
  {
    title: "Textile Weaver",
    company: "Chanderi Handloom Cluster",
    postedAgo: "1 month ago",
    type: "Contract",
    time: "Flexible",
    ctc: "Based on production",
    experience: "3-5 Years",
    location: "Chanderi, MP",
    description:
      "Experienced weaver needed for creating exquisite Chanderi sarees and fabrics...",
  },
  {
    title: "Woodcarving Artisan",
    company: "Saharanpur Wood Craft",
    postedAgo: "3 weeks ago",
    type: "Full-time",
    time: "On-site",
    ctc: "₹12,000 - ₹20,000 per month",
    experience: "2-4 Years",
    location: "Saharanpur, UP",
    description:
      "Skilled woodcarver needed for creating intricate designs on furniture and decorative items...",
  },
];

const trendingCompanies = [
  {
    name: "Jaipur Blue Pottery",
    logo: "/artisanProfileImage1.png",
    rolesAvailable: 5,
  },
  {
    name: "Madhubani Art Center",
    logo: "/artisanProfileImage2.png",
    rolesAvailable: 3,
  },
];

const faqData = [
  {
    question: "How can I apply for artisan jobs?",
    answer:
      'To apply for artisan jobs, create a profile showcasing your skills and experience. Browse available positions and use the "Apply" button to submit your application.',
  },
  {
    question:
      "Are there opportunities for apprenticeships in traditional crafts?",
    answer:
      'Yes, many artisan communities offer apprenticeship programs. Look for "Apprentice" or "Trainee" positions in your desired craft area.',
  },
  {
    question: "How can I promote my artisan skills to potential employers?",
    answer:
      "Create a portfolio of your work, participate in craft fairs and exhibitions, and consider taking courses to enhance your skills. You can also use our platform to showcase your creations.",
  },
  {
    question: "Are there government schemes to support artisans?",
    answer:
      'Yes, the Indian government offers various schemes to support artisans, such as the "Scheme for Promoting Innovation, Rural Industry & Entrepreneurship" (ASPIRE). Check our resources section for more information.',
  },
];

const HeroSection = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Apply Your Enhanced Skills To Land A Dream Job
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Let your skills represent you, While we open your Doors to
              Exclusive Jobs from our top Recruiters.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {Array(9)
                .fill("lorem ipsum")
                .map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                  >
                    #{tag}
                  </span>
                ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-300 group-focus-within:text-blue-500" />
                <input
                  type="text"
                  placeholder="Search Designation"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300"
                />
              </div>
              <input
                type="text"
                placeholder="Location"
                className="w-full sm:w-1/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300"
              />
              <button className="bg-[#1A2B4A] hover:bg-[#1A2B4A]/90 text-white px-6 py-2 rounded-lg transition duration-300">
                Explore
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-150 h-80 lg:w-100 lg:h-100">
              <img
                src="/potter.png"
                alt="Smiling professional man in suit giving thumbs up"
                className="w-full h-full object-contain transform scale-125"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrendingJobs = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Trending Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingJobs.map((job, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {job.title}
                  </h3>
                  <p className="text-gray-600">{job.company}</p>
                </div>
                <span className="text-sm text-gray-500">{job.postedAgo}</span>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Building className="w-4 h-4 mr-2" />
                  <span>{job.type}</span>
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  <span>{job.time}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <DollarSign className="w-4 h-4 mr-2" />
                  <span>
                    CTC: <b>{job.ctc}</b>
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span>
                    Exp: <b>{job.experience}</b>
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>
                    <b>{job.location}</b>
                  </span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{job.description}</p>
              <div className="flex justify-between items-center">
                <Link
                  // href={`/artisan/jobPortal/${encodeURIComponent(job.title)}`}
                  href={`/masterpotter`}
                >
                  <button className="bg-[#1A2B4A] hover:bg-[#1A2B4A]/90 text-white px-4 py-2 rounded transition duration-300">
                    View Job
                  </button>
                </Link>
                <button className="text-blue-900 hover:text-blue-700 transition duration-300 flex items-center">
                  <Share2 className="w-4 h-4 mr-1" />
                  Share Job
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TrendingCompaniesAndFAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(0);

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Trending Companies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {trendingCompanies.map((company, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="mb-4 w-48 h-24 object-contain"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {company.name}
              </h3>
              <p className="text-gray-600 mb-4">
                {company.rolesAvailable} roles available
              </p>
              <button className="text-blue-900 hover:text-blue-700 transition duration-300 flex items-center">
                View Jobs →
              </button>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() =>
                  setOpenQuestion(openQuestion === index ? -1 : index)
                }
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openQuestion === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 transition-transform duration-300" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-300" />
                )}
              </button>
              <div
                className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                  openQuestion === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 bg-[#1A2B4A] hover:bg-[#1A2B4A]/90 text-white p-2 rounded-full shadow-lg transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <ChevronUp size={24} />
    </button>
  );
};

const MainComponent = () => {
  useEffect(() => {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", smoothScroll);
    });

    // Cleanup
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  return (
    <>
      <HeroSection />
      <TrendingJobs />
      <TrendingCompaniesAndFAQ />
      <BackToTopButton />
    </>
  );
};

export default MainComponent;
