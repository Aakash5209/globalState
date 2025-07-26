
import React from 'react';

export default function CostComparisonTable() {
  return (
    <div className="w-full flex justify-center p-6">
      <div className="max-w-4xl w-full">
        <h2 className="text-center text-2xl text-purple-800 font-medium mb-4">
          Cut cost not opportunities
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl overflow-hidden">
            <thead className="bg-purple-100 text-black text-left">
              <tr>
                <th className="p-4"></th>
                <th className="p-4 font-semibold">Normal program</th>
                <th className="p-4 font-semibold">CAP</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-t">
                <td className="p-4">Tuition fees*</td>
                <td className="p-4">₹ 45L</td>
                <td className="p-4">₹ 30L</td>
              </tr>
              <tr className="bg-purple-50 border-t">
                <td className="p-4">Duration</td>
                <td className="p-4">18–24 months</td>
                <td className="p-4">12 months</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">Living expense*</td>
                <td className="p-4">₹ 24L</td>
                <td className="p-4">₹ 12L</td>
              </tr>
              <tr className="bg-purple-50 border-t">
                <td className="p-4">Advanced certification from IIT</td>
                <td className="p-4">NA</td>
                <td className="p-4">₹ 1L for certification</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">Credit transfer fee</td>
                <td className="p-4">NA</td>
                <td className="p-4">₹ 2L for credit transfer</td>
              </tr>
              <tr className="bg-purple-100 border-t">
                <td className="p-4 font-medium text-purple-800">
                  Average Savings<br />
                  <span className="text-xs text-gray-600">
                    * all numbers represented are averages
                  </span>
                </td>
                <td className="p-4"></td>
                <td className="p-4 text-xl font-bold text-purple-800 whitespace-nowrap">
                  ₹24,00,000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


