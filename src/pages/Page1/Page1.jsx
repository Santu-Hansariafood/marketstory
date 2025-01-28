import animationBg from "../../assets/background.jpg";

const Page1 = () => {
  return (
    <div
      className="h-full flex flex-col justify-center items-center bg-cover bg-center text-gray-800 relative"
      style={{ backgroundImage: `url(${animationBg})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-400 via-yellow-300 to-green-500 opacity-75"></div>

      {/* Content */}
      <div className="relative z-10 p-6 bg-white bg-opacity-90 rounded-xl shadow-lg text-center">
        <h2 className="text-4xl font-extrabold text-green-700 mb-6">
          Flow of the Presentation
        </h2>
        <ul className="list-disc list-inside text-lg space-y-4 text-gray-800">
          <li>
            <strong className="text-green-600">Corn Market Outlook:</strong> Exponential demand growth to offset huge supply in 2024-25.
          </li>
          <li>
            <strong className="text-yellow-600">Castor Market Outlook:</strong> Declining acreage for next year and higher stocks on the horizon in the current year.
          </li>
          <li>
            <strong className="text-green-600">Barley Market Forecast:</strong> Lower acreage and expected hike in prices post July 2025.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page1;