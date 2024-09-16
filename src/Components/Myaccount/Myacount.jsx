import React from 'react'

const Myacount = () => {
  return (
    <div className="  lg:px-6 rounded-lg">
      <h2 className="text-4xl font-bold mb-8 text-[--primary-color] hover:text-[--secondary-color] relative inline-block group">
        Profile
        <span className="block w-0 group-hover:w-full transition-all duration-500 h-1 bg-[--secondary-color] absolute bottom-0 left-0"></span>
      </h2>

      <div className="space-y-2">
        {/* Name */}
        <div className="flex flex-col sm:flex-row  gap-4  p-2 rounded-md shadow-sm">
          <p className="w-full sm:w-1/4 font-medium">Name:</p>
          <p className="flex-1 bg-white p-3 rounded-md shadow-inner text-[--primary-color] font-semibold border border-gray-300">
            John Doe
          </p>
        </div>

        {/* Email */}
        <div className="flex flex-col sm:flex-row  gap-4  p-2 rounded-md shadow-sm">
          <p className="w-full sm:w-1/4 font-medium">Email:</p>
          <p className="flex-1 bg-white p-3 rounded-md shadow-inner text-[--primary-color] font-semibold border border-gray-300">
            johndoe@example.com
          </p>
        </div>

        {/* Phone */}
        <div className="flex flex-col sm:flex-row  gap-4  p-2 rounded-md shadow-sm">
          <p className="w-full sm:w-1/4 font-medium">Phone:</p>
          <p className="flex-1 bg-white p-3 rounded-md shadow-inner text-[--primary-color] font-semibold border border-gray-300">
            +1 234 567 890
          </p>
        </div>

        {/* Address */}
        <div className="flex flex-col sm:flex-row  gap-4  p-2 rounded-md shadow-sm">
          <p className="w-full sm:w-1/4 font-medium">Address:</p>
          <p className="flex-1 bg-white p-3 rounded-md shadow-inner text-[--primary-color] font-semibold border border-gray-300">
            123 Main St, Springfield
          </p>
        </div>
      </div>
    </div>

  )
}

export default Myacount