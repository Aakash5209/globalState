import React from 'react';

export default function CurriculumOverview() {
  return (
    <div className="w-full bg-purple-100 rounded-2xl p-6 max-w-4xl mx-auto my-8">
      <h2 className="text-center text-xl font-medium text-purple-800 mb-6">
        Get the best of both worlds
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* LEFT BOX */}
        <div className="flex-1 bg-white rounded-xl p-5 space-y-4">
          <div className="flex items-center text-purple-800 font-medium mb-3">
            <span className="mr-2 text-lg">🇮🇳</span>30% coursework in India
          </div>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li>➤ 12 semester credits over 4 courses</li>
            <hr />
            <li>➤ Online for IIT BBS delivered by top faculty over 3 months</li>
            <hr />
            <li>➤ Upskill yourself with IIT advanced certificate</li>
          </ul>
        </div>

        {/* RIGHT BOX */}
        <div className="flex-1 bg-white rounded-xl p-5 space-y-4">
          <div className="flex items-center text-purple-800 font-medium mb-3">
            <span className="mr-2 text-lg">🇺🇸</span>70% coursework in USA
          </div>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li>➤ 21 semester</li>
            <hr />
            <li>➤ On‑Campus classes (Full‑time) in the US</li>
            <hr />
            <li>➤ Earn US Master’s degree and 3 year work visa</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
