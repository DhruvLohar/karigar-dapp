import React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface QuickLinkProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const QuickLink: React.FC<QuickLinkProps> = ({ href, icon, children }) => {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm border border-dori/10 hover:border-dori/40 hover:shadow-md transition-all"
    >
      <div className="p-3 mb-2 rounded-full bg-dori/10 text-dori">
        {icon}
      </div>
      <span className="font-medium text-center">{children}</span>
    </Link>
  );
};

export default QuickLink; 