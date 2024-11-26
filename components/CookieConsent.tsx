// components/CookieConsent.jsx
"use client";
import { useEffect, useState } from "react";

const CookieConsent = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted the cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (cookieConsent) {
      setIsAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    setIsAccepted(true);
    localStorage.setItem("cookieConsent", "true"); // Store the consent in local storage
  };

  if (isAccepted) return null; // Don't show the banner if consent is given

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 py-4 text-center text-white">
      <p>
        We use cookies to improve your experience. By using our site, you
        consent to our
        <a href="/privacy-policy" className="text-yellow-500 underline">
          Privacy Policy
        </a>
        .
      </p>
      <button
        onClick={handleAccept}
        className="mt-2 rounded-lg bg-yellow-500 px-4 py-2 text-black"
      >
        I Accept
      </button>
    </div>
  );
};

export default CookieConsent;
