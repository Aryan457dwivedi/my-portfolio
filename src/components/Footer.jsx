import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black py-6 text-center">
      <p className="text-gray-400">
        © {new Date().getFullYear()} Aryan Dwivedi. All rights reserved.
      </p>
    </footer>
  );
}
