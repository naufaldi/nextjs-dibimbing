import Image from 'next/image';
import React from 'react';

const ImageExample = () => {
  return (
    <div className='max-w-screen-lg mx-auto h-screen flex flex-col items-center justify-center'>
      <div className='flex w-[400px]'>
        <Image
          src='/assets/unsplash.avif'
          alt='Image Unsplash'
          width={400}
          height={400}
        />
      </div>
      <div className='flex w-[400px]'>
        <Image
          src='https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80'
          alt='Image Unsplash'
          width={400}
          height={400}
        />
      </div>
      <div className='flex w-[400px]'>
        <Image
          src='https://images.unsplash.com/photo-1690233318473-7672623f7767?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
          alt='Image Unsplash'
          width={400}
          height={400}
        />
      </div>
      <div className='flex w-[400px]'>
        <Image
          src='https://images.unsplash.com/photo-1690221115995-8c80b43aac01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
          alt='Image Unsplash'
          width={400}
          height={400}
        />
      </div>
      <div className='flex w-[400px]'>
        <Image
          src='https://images.unsplash.com/photo-1687360440613-7e002b7261da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
          alt='Image Unsplash'
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default ImageExample;
