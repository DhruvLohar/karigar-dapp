import { Share2 } from "lucide-react";
import Link from "next/link";

export default function MasterPotterPage() {
  const jobData = {
    title: "Master Potter",
    company: "Khurja Pottery Village",
    openings: 3,
    applicants: 12,
    industry: "Traditional Crafts",
    salary: "₹15,000 - ₹25,000 per month",
    education: "Artisan Training",
    category: "Pottery & Ceramics",
    responsibilities: [
      "Create high-quality pottery pieces using traditional techniques and modern innovations",
      "Train apprentices in the art of pottery making and glazing techniques",
      "Collaborate with designers to develop new product lines that blend traditional and contemporary styles",
      "Ensure the quality and authenticity of all pottery products",
      "Participate in craft fairs and exhibitions to showcase and sell products",
      "Maintain and operate pottery equipment, including kilns and wheels",
    ],
  };

  const similarJobs = [
    {
      title: "Textile Weaver",
      company: "Chanderi Handloom Cluster",
      postedAgo: "2 Weeks ago",
      type: "Full-time",
    },
    {
      title: "Woodcarving Artisan",
      company: "Saharanpur Wood Craft",
      postedAgo: "1 Month ago",
      type: "Contract",
    },
    {
      title: "Zardozi Embroiderer",
      company: "Lucknow Chikan & Zardozi Hub",
      postedAgo: "3 Weeks ago",
      type: "Part-time",
    },
  ];

  const popularCourses = [
    "Advanced Pottery Techniques",
    "Traditional Indian Crafts Preservation",
    "Artisan Entrepreneurship Program",
    "Digital Marketing for Craftspeople",
  ];

  return (
    <div className="bg-white min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Main content */}
          <div className="md:w-2/3 p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {jobData.title}
                </h1>
                <p className="text-gray-600">{jobData.openings} Openings</p>
                <p className="text-blue-600">
                  {jobData.company} ({jobData.applicants} Applicants)
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-300">
                  Save Job
                </button>
                <Link href="/masterpotter/apply">
                  <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition duration-300">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>

            {/* Job details grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span className="text-gray-600">{jobData.industry}</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08 .402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-600">{jobData.salary}</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
                <span className="text-gray-600">{jobData.education}</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-600">{jobData.category}</span>
              </div>
            </div>

            {/* Job responsibilities */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                About the job
              </h2>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Job Responsibilities and Duties
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {jobData.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end">
              <button className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300">
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:w-1/3 bg-gray-50 p-8">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Similar Jobs
              </h2>
              {similarJobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-md shadow-sm mb-4"
                >
                  <h3 className="font-medium text-gray-900">{job.title}</h3>
                  <p className="text-gray-600">{job.company}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-500">
                      {job.postedAgo}
                    </span>
                    <span className="px-2 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">
                      {job.type}
                    </span>
                  </div>
                  <Link href={`/jobs/${encodeURIComponent(job.title)}`}>
                    <button className="mt-4 text-blue-600 hover:text-blue-800 transition duration-300">
                      View Job →
                    </button>
                  </Link>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Popular Courses
              </h2>
              <ul className="space-y-2">
                {popularCourses.map((course, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="block bg-white p-4 rounded-md shadow-sm hover:bg-gray-50 transition duration-300"
                    >
                      <h3 className="font-medium text-gray-900">{course}</h3>
                      <span className="text-blue-600">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
