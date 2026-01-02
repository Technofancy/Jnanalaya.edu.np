import React from "react";

const Footer = ({ t }) => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      {/* Developed by Technofancy */}
      <div className="flex items-center justify-center gap-2">
        <p>
          <a
            href="https://bhuwankhatri.com.np/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            Developed by Technofancy
          </a>
        </p>
        <p>|</p>
        <p>{t.copy}</p>
      </div>
    </footer>
  );
};

export default Footer;
