import  { useState } from 'react';


const BloodDirectory = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    altMobile: '',
    dob: '',
    gender: '',
    iomRollNo: '',
    address: '',
    district: '',
    medicalConditions: '',
    covidInfection: '',
    bloodGroup: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };
  return (
    <div className="p-12 max-w-4xl bg-gray-200 mx-auto mt-4">
      
    <h1 className="text-2xl text-center text-red-900">
      IOM Blood Directory
    </h1>
    <div className="mt-4 max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 ">IOM Blood Directory (IBD)</h1>
      <p className="mb-4">রক্ত দিতে ইচ্ছুক ব্যক্তির বিস্তারিত বিবরণ। যারা শুধু আল্লাহকে খুশি করার জন্যই রক্ত দিতে ইচ্ছুক।</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="name">রক্তদাতার নাম *</label>
          <input className="w-full px-3 py-2 border rounded" type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">ই-মেইল *</label>
          <input className="w-full px-3 py-2 border rounded" type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="mobile">মোবাইল নং *</label>
          <input className="w-full px-3 py-2 border rounded" type="text" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="altMobile">বিকল্প মোবাইল নং *</label>
          <input className="w-full px-3 py-2 border rounded" type="text" id="altMobile" name="altMobile" value={formData.altMobile} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="dob">জন্ম তারিখ *</label>
          <input className="w-full px-3 py-2 border rounded" type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="gender">লিঙ্গ *</label>
          <select className="w-full px-3 py-2 border rounded" id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="iomRollNo">IOM-এর রোল নং *</label>
          <input className="w-full px-3 py-2 border rounded" type="text" id="iomRollNo" name="iomRollNo" value={formData.iomRollNo} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="address">বর্তমান ঠিকানা *</label>
          <input className="w-full px-3 py-2 border rounded" type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="district">জেলা *</label>
          <input className="w-full px-3 py-2 border rounded" type="text" id="district" name="district" value={formData.district} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="medicalConditions">আপনার কোন বিশেষ রোগ রয়েছে কিনা?</label>
          <textarea className="w-full px-3 py-2 border rounded" id="medicalConditions" name="medicalConditions" value={formData.medicalConditions} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="covidInfection">আপনি কি করোনা ভাইরাসে আক্রান্ত হয়েছিলেন? ’হ্যাঁ’ হলে কত তারিখে?</label>
          <input className="w-full px-3 py-2 border rounded" type="text" id="covidInfection" name="covidInfection" value={formData.covidInfection} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="bloodGroup">রক্তের গ্রুপ *</label>
          <input className="w-full px-3 py-2 border rounded" type="text" id="bloodGroup" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="notes">নোট</label>
          <textarea className="w-full px-3 py-2 border rounded" id="notes" name="notes" value={formData.notes} onChange={handleChange} />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default BloodDirectory


