import Product from './components/Product';

export default async function Home() {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  console.log(data);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='grid grid-cols-5'>
        {data.products?.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </main>
  );
}
