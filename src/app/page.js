import Product from './components/Product';

export default async function Home() {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  console.log(data);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-8'>
      <div className='grid grid-cols-2 gap-4 lg:grid-cols-5 mt-7'>
        {data.products?.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </main>
  );
}
