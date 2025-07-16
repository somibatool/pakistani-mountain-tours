import React, { useEffect, useState } from 'react';

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
    }, 30); // Faster count speed

    return () => clearInterval(interval);
  }, [targetNumber]);

  return (
    <div className="text-center bg-blue-100 rounded-xl shadow-md p-6">
      <h2 className="text-5xl font-extrabold text-secondary">{count}+</h2>
      <p className="text-lg font-medium text-gray-700 mt-2">{title}</p>
    </div>
  );
};

const CustomerCounter = () => {
  return (
    <div className="bg-white py-14 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">
        Why Clients Trust Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <Counter title="Happy Clients" targetNumber={250} />
        <Counter title="Success Stories" targetNumber={120} />
        <Counter title="Customer Satisfaction" targetNumber={180} />
        <Counter title="Years of Experience" targetNumber={10} />
      </div>
    </div>
  );
};

export default CustomerCounter;
