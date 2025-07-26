


import { useState, useEffect } from "react";
import circular from '../../assets/circularsection.jpg';
import circularsecond from '../../assets/circularsection_second.jpg'

const CircularFlagsAnimation = () => {
  // const [profileImage, setProfileImage] = useState("");

  const [profileImage, setProfileImage] = useState(
 circular
);


  useEffect(() => {
    const imageId = Math.floor(Math.random() * 1000);
    setProfileImage(
  circular
    );
  }, []);

  const flags = [
    { country: "https://flagcdn.com/w40/ph.png" , name: "Philippines flag", angle:0 },
    // { country: "🇺🇸", name: "USA", angle: 90 },
    // { country: "🇬🇧", name: "UK", angle: 180 },
       { country: "https://flagcdn.com/w40/ru.png", name: "Russia flag", angle: 90 },
    { country: "https://flagcdn.com/w40/ge.png", name: "Georgia flag", angle: 180 }
  
  ];
  const flags1 = [
    { country: "https://flagcdn.com/w40/kz.png", name: "Kazakhstan flag", angle: 0 },
    { country: "https://flagcdn.com/w40/bd.png", name: "Bangladesh flag", angle: 90 },
    { country: "https://flagcdn.com/w40/kg.png", name: "Kyrgyzstan flag", angle: 180 },
    // { country: "🇫🇷", name: "France", angle: 270 },
  ];

  return (
    <div className="relative w-[400px] h-[400px] mx-auto">
      {/* Outer Dashed Ring */}
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-300"></div>

      {/* Inner Dashed Ring */}
      <div className="absolute inset-12 rounded-full border-2 border-dashed border-gray-300"></div>

      {/* Rotating Container */}
      <div className="absolute inset-0 rounded-full animate-spin-slow">
        {/* Inner Ring Flags */}
        {flags.map((flag) => (
          <div
            key={`inner-${flag.name}`}
            className="absolute w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-gray-200"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${flag.angle}deg) translateY(-140px) rotate(-${flag.angle}deg)`,
              transformOrigin: "50% 50%",
              marginTop: "-24px",
              marginLeft: "-24px",
            }}
          >
            <span className="text-xl animate-spin-slow-reverse">
              <img src={flag.country}    alt="flag" />
            </span>
          </div>
        ))}

        {/* Outer Ring Flags */}
        {flags1.map((flag) => (
          <div
            key={`outer-${flag.name}`}
            className="absolute w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-gray-200"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${flag.angle + 45}deg) translateY(-180px) rotate(-${flag.angle + 45}deg)`,
              transformOrigin: "50% 50%",
              marginTop: "-24px",
              marginLeft: "-24px",
            }}
          >
            <span className="text-xl animate-spin-slow-reverse">
             <img src={flag.country}    alt="flag" />
            </span>
          </div>
        ))}
      </div>

      {/* Center Profile Image */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full overflow-hidden shadow-2xl border-4 border-white">
        <img
          src='https://png.pngtree.com/png-vector/20190307/ourmid/pngtree-vector-flag-icon-png-image_762945.jpg'
          // src={profileImage}
          alt="Profile"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src =
            circular;
          }}
        />
      </div>

      {/* Central Highlight Ring */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full border-2 border-gray-200"></div>

    
<div
  className="absolute w-20 h-20 rounded-full overflow-hidden shadow-lg border-2 border-white"
  style={{
    top: "50%",
    left: "50%",
    transform: `rotate(-45deg) translateY(-190px) rotate(45deg)`,
    transformOrigin: "50% 50%",
    marginTop: "-40px",
    marginLeft: "-40px",
  }}
>
  <img
    src={circularsecond}
    alt="Clarke"
    className="w-full h-full object-cover"
  />
</div>


<div
  className="absolute bg-white px-3 py-0.5 w-44 rounded-lg shadow text-sm border border-gray-200 text-center"
  style={{
    top: "50%",
    left: "50%",
    transform: `rotate(-45deg) translateY(-140px) rotate(45deg)`,
    transformOrigin: "50% 50%",
    marginTop: "-3px",
    marginLeft: "-144px", // half of 208px (w-52) to center
  }}
>
  Priya is an alumna from Kazan State Medical University
</div>



    </div>
  );
};

export default CircularFlagsAnimation;
