import animationBg from "../../assets/wave.webp";

const DemandUpdate = () => {
  return (
    <div
      className="h-full flex flex-col justify-center items-center text-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${animationBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-green-400 via-yellow-300 to-green-500 opacity-90"></div>
      <div className="relative z-10 p-6 bg-white bg-opacity-90 rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-extrabold text-green-700 mb-4">
          Indian Maize Demand update
        </h1>
      </div>
    </div>
  );
};

export default DemandUpdate;
