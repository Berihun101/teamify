"use client"
import React, { useState } from 'react';
const SwitchToggle = () => {
        const [activeTab, setActiveTab] = useState('monthly');
    return (
        <div className="flex gap-4 mb-4 px-2 rounded-3xl bg-blue-800 bg-opacity-12 p-1">
        <button
          className={`rounded-3xl font-bold cursor-pointer text-white px-8 py-3 transition-colors ${
            activeTab === 'monthly' 
              ? 'bg-yellow-500 hover:bg-yellow-600' 
              : 'bg-transparent hover:bg-blue-800 hover:bg-opacity-20'
          }`}
          onClick={() => setActiveTab('monthly')}
        >
          Monthly
        </button>
        <button
          className={`rounded-3xl font-bold cursor-pointer text-white px-8 py-3 transition-colors ${
            activeTab === 'yearly' 
              ? 'bg-yellow-500 hover:bg-yellow-600' 
              : 'bg-transparent hover:bg-blue-800 hover:bg-opacity-20'
          }`}
          onClick={() => setActiveTab('yearly')}
        >
          Yearly <span className="text-[10px]">(save 60%)</span>
        </button>
      </div>
    );
    }
export default SwitchToggle;