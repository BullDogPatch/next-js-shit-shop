import Image from 'next/image';
import Link from 'next/link';

export default function Product({ product }) {
  return (
    <div className='text-center p-6'>
      <h2>{product.title}</h2>
      <div>
        <Image
          src={product.images[1]}
          width={150}
          height={150}
          className='m-auto'
        />
        <Link href='/'>
          <button></button>
        </Link>
      </div>
    </div>
  );
}
