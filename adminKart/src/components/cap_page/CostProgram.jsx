import React from 'react';

export default function CostProgram() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-center text-2xl font-medium text-purple-800 mb-6">
        What is <br /> Cost Advantage Program?
      </h2>

      <div className="flex bg-white rounded-2xl overflow-hidden shadow-md">
        {/* LEFT - India 30% */}
        <div className="relative flex-1 bg-amber-50 p-6 flex flex-col justify-between">
          <div>
            <p className="text-lg text-purple-800 mb-2">
              Begin your course in <span className="font-semibold">India</span>
            </p>
            <div className="inline-flex items-center bg-white px-3 py-1 rounded-full shadow-sm">
              <img
                src="https://via.placeholder.com/24?text=IIT"
                alt="IIT Bhubaneswar"
                className="w-6 h-6 mr-2"
              />
              <span className="text-purple-800 text-sm">IIT Bhubaneswar</span>
            </div>
          </div>
          <div className="text-4xl font-bold text-purple-800 absolute top-6 right-6">
            30%
          </div>
          <img
            src="https://via.placeholder.com/200x120?text=India+Flag"
            alt="India flag"
            className="absolute bottom-0 right-0 w-40 opacity-80"
          />
        </div>

        {/* Divider and arrow */}
        <div className="relative w-12 flex items-center justify-center bg-white">
          <span className="absolute bg-purple-800 text-white w-8 h-8 flex items-center justify-center rounded-full transform translate-x-1/4">
            ✈
          </span>
        </div>

        {/* RIGHT - US 70% */}
        <div className="relative flex-[2.3] bg-purple-800 p-6 flex flex-col justify-between">
          <div>
            <p className="text-lg text-white mb-2">
              Finish in the <span className="font-semibold">United States</span>
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              {['Clark University', 'City University of Seattle', 'LIU'].map((u) => (
                <div
                  key={u}
                  className="inline-flex items-center bg-white px-3 py-1 rounded-full"
                >
                  <img
                    src={`https://via.placeholder.com/24?text=${u
                      .split(' ')[0]
                      .charAt(0)}`}
                    alt={u}
                    className="w-6 h-6 mr-2"
                  />
                  <span className="text-gray-800 text-sm">{u}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-4xl font-bold text-white absolute top-6 right-6">
            70%
          </div>
          <img
            src="https://via.placeholder.com/300x180?text=US+Flag"
            alt="USA flag"
            className="absolute bottom-0 right-0 w-48 opacity-50"
          />
        </div>
      </div>
    </div>
  );
}
