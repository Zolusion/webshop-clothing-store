import React from 'react';

const SaleContainer: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: 'url("/ambassadors-image/hijab-model.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    height: '600px', // Set an appropriate height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
      };

  const textStyle: React.CSSProperties = {
    backgroundColor: 'red',
    padding: '20px',
    textAlign: 'center',
    fontSize: '40px',
    fontWeight: 'bold',
    color: 'black',
  };

  return (
    <div style={containerStyle}>
      <div style={textStyle}>
        <a href='/sale' className='text-white uppercase text-6xl justify-center items-center flex'>sale</a>
      </div>
    </div>
  );
}

export default SaleContainer;
