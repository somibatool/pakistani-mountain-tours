import React, { useEffect, useState } from "react";

const Counter = ({ title, targetNumber }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < targetNumber) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 20); // Fast count speed

    return () => clearInterval(interval);
  }, [targetNumber]);

  // Format number like 8K, 4K, etc.
  const formatNumber = (num) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toString();
  };

  return (
    <div className="bg-white border border-blue-200 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition duration-300">
      <div className="text-4xl font-extrabold text-blue-600">
        {formatNumber(count)}
      </div>
      <p className="text-lg font-medium text-gray-700 mt-2">{title}</p>
    </div>
  );
};

const CustomerCounter = () => {
  return (
    <div className="bg-blue-50 py-14 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">
        Why Clients Trust Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <Counter title="Happy Travelers" targetNumber={8000} />
        <Counter title="Successful Tours" targetNumber={4000} />
        <Counter title="Years of Experience" targetNumber={17} />
        <Counter title="Customer Satisfaction" targetNumber={95} />
      </div>
    </div>
  );
};

export default CustomerCounter;
