import React, { useState } from 'react';
import products from './products.json'; // Adjust the path to your JSON file

function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Calculate the range of products to display
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Pagination handler
  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-5/6 flex flex-col gap-5 mt-20">
        <h1 className="text-lg font-bold">Products</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-start space-y-2"
            >
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <p className="text-sm font-bold line-clamp-1">{product.name}</p>
              <p className="text-xs text-gray-700">PHP {product.price}</p>
            </div>
          ))}
        </div>
        {/* Pagination Controls */}
        
      </div>
      <div className="flex justify-center items-center my-14 gap-5">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-gray-800 rounded hover:bg-gray-900 disabled:opacity-50"
          >
            Back
          </button>
          <span className="text-sm font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-gray-800 rounded hover:bg-gray-900 disabled:opacity-50"
          >
            Next
          </button>
        </div>
    </div>
  );
}

export default Shop;
