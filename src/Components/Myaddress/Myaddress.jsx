import React, { useState } from 'react'

const Myaddress = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    pincode: '',
    locality: '',
    address: '',
    city: '',
    state: '',
    landmark: '',
    alternatePhoneNumber: '',
    addressType: 'home',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveAddress = () => {
    // Save the address logic here
    console.log('Address saved:', formData);
    setIsFormOpen(false);
  };

  return (
    <>
        <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">My Address</h2>
      
      {/* Add Address Button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        onClick={() => setIsFormOpen(true)}
      >
        Add Address
      </button>

      {/* Address Form */}
      {isFormOpen && (
        <div className="mt-4 bg-gray-100 p-4 rounded shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Add New Address</h3>
          
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-2 border rounded"
            />
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Pincode"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="locality"
              value={formData.locality}
              onChange={handleChange}
              placeholder="Locality"
              className="w-full p-2 border rounded"
            />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="landmark"
              value={formData.landmark}
              onChange={handleChange}
              placeholder="Landmark"
              className="w-full p-2 border rounded"
            />
            <input
              type="tel"
              name="alternatePhoneNumber"
              value={formData.alternatePhoneNumber}
              onChange={handleChange}
              placeholder="Alternate Phone Number"
              className="w-full p-2 border rounded"
            />

            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="addressType"
                  value="home"
                  checked={formData.addressType === 'home'}
                  onChange={handleChange}
                />
                <span className="ml-2">Home</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="addressType"
                  value="work"
                  checked={formData.addressType === 'work'}
                  onChange={handleChange}
                />
                <span className="ml-2">Work</span>
              </label>
            </div>

            <button
              onClick={handleSaveAddress}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Save Address
            </button>
          </div>
        </div>
      )}

      <div className='my-5'>
        <h2 className="text-lg font-bold mb-4">Address Book</h2>
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10 p-6">
      <h2 className="text-xl font-bold mb-4">Address Details</h2>
      <div className="space-y-2">
        <div>
          <span className="font-semibold">Full Name: </span>
          {formData.fullName}
        </div>
        <div>
          <span className="font-semibold">Phone Number: </span>
          {formData.phoneNumber}
        </div>
        <div>
          <span className="font-semibold">Pincode: </span>
          {formData.pincode}
        </div>
        <div>
          <span className="font-semibold">Locality: </span>
          {formData.locality}
        </div>
        <div>
          <span className="font-semibold">Address: </span>
          {formData.address}
        </div>
        <div>
          <span className="font-semibold">City: </span>
          {formData.city}
        </div>
        <div>
          <span className="font-semibold">State: </span>
          {formData.state}
        </div>
        <div>
          <span className="font-semibold">Landmark: </span>
          {formData.landmark}
        </div>
        <div>
          <span className="font-semibold">Alternate Phone Number: </span>
          {formData.alternatePhoneNumber}
        </div>
        <div>
          <span className="font-semibold">Address Type: </span>
          {formData.addressType}
        </div>
      </div>
    </div>
      </div>
    </div>
    </>
  )
}

export default Myaddress