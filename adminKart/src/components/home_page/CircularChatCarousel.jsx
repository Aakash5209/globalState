import { ArrowLeftRight } from "lucide-react"
import circularchat from '../../assets/circularchat.png';

export default function CircularChatCarousel() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-purple-50 to-white">
      {/* Background Image - Bigger and Centered */}
      <div className="absolute inset-0 flex justify-center items-start pointer-events-none">
        <img
          src={circularchat}
          alt="background"
          className="w-[1035px] h-auto mt-16 object-contain" // 900px + 15%
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <div className="flex flex-col items-center justify-start pt-16 px-4">
          <div className="text-center mb-8">
            <h1 className="text-6xl font-bold text-purple-600 mb-4">
             MBBS Abroad <span className="text-purple-800">Services</span>
            </h1>
            <p className="text-xl text-purple-500 max-w-2xl">
              One-stop solution for all your MBBS abroad needs
            </p>
          </div>
        </div>

        {/* Scrolling Cards Section - Starts 30% below image */}
        <div className="relative mx-auto w-[1035px] overflow-hidden mt-[150px]"> {/* 30% of ~1000px */}
          <div className="animate-scroll whitespace-nowrap flex">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className={`h-40 w-56 flex-shrink-0 flex flex-col items-center justify-center m-4 ${card.bg}`}
                  >
                    <div className="mb-4">{card.icon}</div>
                    <p className="text-center text-sm font-medium text-gray-700">{card.label}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Smooth Ease Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 25s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

// Card Data
const cards = [
  {
    label: "credit card",
    bg: "bg-orange-100",
    icon: (
      <div className="w-12 h-8 bg-orange-400 rounded-sm flex items-center justify-center">
        <div className="w-8 h-6 bg-orange-500 rounded-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-right w-10 h-10 text-green-500" aria-hidden="true"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg>   </div>
        
      </div>
    ),
  },

  {
    label: "international bank account",
    bg: "bg-teal-200",
    icon: (
      <div className="w-16 h-16 border-2 border-teal-400 rounded-full flex items-center justify-center">
        <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
          <div className="text-white text-lg font-bold"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plane w-10 h-10 text-orange-500" aria-hidden="true"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
</div>

        </div>
      </div>
    ),
  },
  {
    label: "international bank account",
    bg: "bg-teal-200",
    icon: (
      <div className="w-16 h-16 border-2 border-teal-400 rounded-full flex items-center justify-center">
        <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
          <div className="text-white text-lg font-bold">  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-right w-10 h-10 text-green-500" aria-hidden="true"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg>
</div>

        </div>
      </div>
    ),
  },
  // {
  //   label: "international money transfer",
  //   bg: "bg-orange-100",
  //   icon: (
  //     <div className="flex items-center space-x-1">
  //       <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
  //       <div className="flex space-x-1">
  //         <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
  //         <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
  //         <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
  //       </div>
  //       <ArrowLeftRight className="w-6 h-6 text-orange-500" />
  //       <div className="flex space-x-1">
  //         <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
  //         <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
  //         <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
  //       </div>
  //       <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
  //     </div>
  //   ),
  // },
  // {
  //   label: "housing",
  //   bg: "bg-green-200",
  //   icon: (
  //     <div className="relative">
  //       <div className="w-12 h-10 bg-green-500 relative">
  //         <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-b-4 border-transparent border-b-green-600"></div>
  //         <div className="absolute top-2 left-2 w-3 h-3 bg-green-300 rounded-sm"></div>
  //         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-green-600"></div>
  //       </div>
  //     </div>
  //   ),
  // },
]
