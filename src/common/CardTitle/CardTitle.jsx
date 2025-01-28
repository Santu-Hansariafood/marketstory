const CardTitle = ({ children, className = "" }) => (
    <h2 className={`text-xl font-semibold text-gray-800 text-center ${className}`}>
      {children}
    </h2>
  );
  
  export default CardTitle;
  