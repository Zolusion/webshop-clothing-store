import React from 'react'

const ProductGrid = () => {
  return (
    <section className="container mx-auto my-8">
        <h1 className="text-3xl font-bold mb-4 px-6">Our most popular products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6">
            <div className="bg-white shadow-md rounded-lg p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="image1.jpg" className="w-auto object-cover rounded-lg min-h-[500px]" alt="Flowbite Logo"/>
                </a>
                <h2 className="text-lg text-black mt-2 font-bold">Product 1</h2>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="text-gray-900 font-bold mt-2">€69.99</p>
                <button className="bg-blue-500 text-white py-2 px-4 mt-4">Add to Cart</button>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="image2.jpg" className="w-auto object-cover rounded-lg min-h-[500px]" alt="Flowbite Logo"/>
                </a>
                <h2 className="text-lg text-black mt-2 font-bold">Product 1</h2>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="text-gray-900 font-bold mt-2">$49.99</p>
                <button className="bg-blue-500 text-white py-2 px-4 mt-4">Add to Cart</button>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="image3.jpg" className="w-auto object-cover rounded-lg min-h-[500px]" alt="Flowbite Logo"/>
                </a>
                <h2 className="text-lg text-black mt-2 font-bold">LuxeLine Heritage Blazer</h2>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="text-gray-900 font-bold mt-2">$49.99</p>
                <button className="bg-blue-500 text-white py-2 px-4 mt-4">Add to Cart</button>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="image4.jpg" className="w-auto object-cover rounded-lg min-h-[500px]" alt="Flowbite Logo"/>
                </a>
                <h2 className="text-lg text-black mt-2 font-bold">Celestial Rose Denim Wrap</h2>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="text-gray-900 font-bold mt-2">$49.99</p>
                <button className="bg-blue-500 text-white py-2 px-4 mt-4">Add to Cart</button>
            </div>
        </div>
    </section>
  )
}

export default ProductGrid