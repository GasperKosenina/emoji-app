interface Product {
  id: number;
  title: string;
}

interface ProfileViewProps {
  products: Product[];
}


export default function Profileview({ products }: ProfileViewProps) {
  return (
    <div className="flex flex-col w-full">
      {products.map((product) => (
        <div key={product.id} className="m-4 p-4 border rounded">
          {product.title}
        </div>
      ))}
    </div>
  );
}
