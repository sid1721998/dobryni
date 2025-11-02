import React from "react";

const flightCompanies = [
  { name: "Skyscanner", url: "https://www.skyscanner.com", logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Skyscanner_Logo_LockupHorizontal_SkyBlue_RGB.svg" },
  { name: "Expedia", url: "https://www.expedia.com", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Expedia_Logo.svg" },
  { name: "Google Flights", url: "https://www.google.com/flights", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Flights_logo.svg" },
  { name: "Kayak", url: "https://www.kayak.com", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Kayak_Logo.svg" },
  { name: "Momondo", url: "https://www.momondo.com", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Momondo_logo.svg" },
  { name: "Priceline", url: "https://www.priceline.com", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Priceline_logo.svg" },
  { name: "Orbitz", url: "https://www.orbitz.com", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Orbitz_logo.svg" },
  { name: "CheapOair", url: "https://www.cheapoair.com", logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/CheapOair_logo.svg" },
  { name: "Trip.com", url: "https://www.trip.com", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Trip.com_logo.svg" },
  { name: "Hopper", url: "https://www.hopper.com", logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/Hopper_logo.svg" },
  { name: "Travelocity", url: "https://www.travelocity.com", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Travelocity_Logo.svg" },
  { name: "FareCompare", url: "https://www.farecompare.com", logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/FareCompare_logo.svg" }
];

export default function LogoGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {flightCompanies.map((company) => (
        <a
          key={company.name}
          href={company.url}
          target="_blank"
          rel="noopener noreferrer"
          className="logo-card flex items-center justify-center bg-white rounded-2xl shadow p-4 transition-transform duration-200"
        >
          <img src={company.logo} alt={company.name} className="max-h-12 w-auto object-contain" />
        </a>
      ))}
    </div>
  );
}
