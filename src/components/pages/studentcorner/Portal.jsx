import React from 'react';
import l1 from "../../../assets/l1.jpg";

const Portal = () => {
  return (
    <div className="bg-gray-100">
      <div
        style={{ backgroundImage: `url(${l1})` }}
        className="bg-cover bg-center h-[150vh]"
      >
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white p-8 rounded shadow-md w-96">
            <h2 className="text-2xl font-bold mb-6 text-red-700">Login to i-EMS</h2>
            <div className="mb-4">
              <label htmlFor="userId" className="block text-gray-700 font-bold mb-2">User ID</label>
              <input type="text" id="userId" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
              <input type="password" id="password" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="flex justify-between items-center mb-6">
              <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
            </div>
            <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-600 hover:bg-blue-600">Login</button>
            <div className="mt-4 text-sm text-gray-600">
              Developed & Maintained by
              <span className="text-blue-500">Baits bd.com</span>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Powered By: Baits bd.com
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portal;
