import animationBg from "../../assets/background.jpg";

const RabiCorn = () => {
  return (
    <div
      className="h-full flex flex-col justify-center items-center bg-cover bg-center text-gray-800 relative"
      style={{ backgroundImage: `url(${animationBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-green-400 via-yellow-300 to-green-500 opacity-75"></div>
      <div className="relative z-10 p-6 bg-white bg-opacity-90 rounded-xl shadow-lg text-center">
        <h2 className="text-4xl font-extrabold text-green-700 mb-6">
        Rabi Corn Yield Projections 2024 - 25
        </h2>
        
      </div>
    </div>
  );
};

export default RabiCorn