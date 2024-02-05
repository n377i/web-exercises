import useSWR from "swr";
import Link from "next/link";

export default function AllListingsPage() {
  const { data: products, isLoading } = useSWR("/api/products/");

  if (!products || isLoading) {
    return "Loading...";
  }

  return (
    <>
      <h1>All Products</h1>
      <ul>
        {products.map(
          ({ id, name, description, price, currency, category }) => (
            <li key={id}>
              <p>{`ID: ${id}`}</p>
              <p>{`Name: ${name}`}</p>
              <p>{`Description: ${description}`}</p>
              <p>{`Price: ${price} ${currency}`}</p>
              <p>{`Category: ${category}`}</p>
              <p>
                <Link href={`/products/${id}`}>Details</Link>
              </p>
            </li>
          )
        )}
      </ul>
    </>
  );
}
