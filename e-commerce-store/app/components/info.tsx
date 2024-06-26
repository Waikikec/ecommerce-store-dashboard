"use client";
import { ProductType } from '@/types';
import { ShoppingCart } from 'lucide-react';
import Button from './ui/button';
import Currency from './ui/currency';

interface InfoProps {
  data: ProductType;
}

const Info = ({ data }: InfoProps) => {
  return (
    <div>
      {/* NAME */}
      <h1 className='text-3xl font-bold text-gray-900'>
        {data.name}
      </h1>

      {/* PRICE */}
      <div className='mt-3 flex items-end justify-between'>
        <p className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className='my-4' />

      {/* SIZE */}
      <div className='flex flex-col gap-y-6'>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>
            {data.size.name}
          </div>
        </div>

        {/* COLOR */}
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className='h-6 w-6 rounded-full border border-gray-600'
            style={{ backgroundColor: data.color.value }}
          />
        </div>
      </div>

      {/* BUTTON */}
      <div className="mt-10 flex items-center gap-x-3">
        <Button className='flex items-center gap-x-2'>
          Add to Cart
          <ShoppingCart />
        </Button>
      </div>


    </div>
  )
}

export default Info