import React from 'react';

const SaleContainer: React.FC = () => {
  return (
    <div className="h-[700px] 2xl:h-[900px] bg-cover bg-center bg-no-repeat relative flex items-center justify-end" style={{ backgroundImage: 'url("/ambassadors-image/hijab-model.jpeg")' }}>
      <div className="bg-red-500 p-8 text-center text-white">
        <a href='/sale' className='text-5xl uppercase'>sale</a>
      </div>
    </div>
  );
}

export default SaleContainer;
