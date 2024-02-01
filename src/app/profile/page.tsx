import Profileview from "../components/ProfileView";

export default async function Profile() {
  const response = await fetch('https://dummyjson.com/products')
  const data = await response.json()
  return (
    <div className="flex w-full">
      <Profileview products={data.products} />
    </div>
  );
}
