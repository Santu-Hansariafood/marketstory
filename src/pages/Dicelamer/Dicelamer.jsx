const Disclaimer = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-green-100 p-6">
      <div className="bg-yellow-200 p-8 rounded-2xl shadow-lg w-full max-w-4xl text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Disclaimer</h1>
        <p className="text-green-700 text-lg mb-4">
          This document is provided based on research conducted by our market
          research team. Our team analyzes various industries and collects data
          from multiple sources to provide valuable insights.
        </p>
        <p className="text-green-700 text-lg mb-4">
          The information shared here is intended for market insights and
          general knowledge. However, we recommend conducting further research
          and consulting professionals before making any business decisions.
        </p>
        <p className="text-green-700 text-lg mb-4">
          For more details, please visit our website:
          <a
            href="https://www.hansariafood.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-800 font-semibold"
          >
            {" "}
            www.hansariafood.com
          </a>
          , or reach out to us via email at
          <a
            href="mailto:info@hansariafood.com"
            className="text-green-800 font-semibold"
          >
            {" "}
            info@hansariafood.com
          </a>
          .
        </p>
        <p className="text-green-700 text-lg">
          Stay connected with us for the latest market trends, insights, and
          updates!
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
