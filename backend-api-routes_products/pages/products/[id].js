import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: product, isLoading } = useSWR(
    router.query.id ? `/api/products/${id}` : null
  );

  if (!product || isLoading) {
    return "Loading...";
  }

  const { name, description, price, currency, category } = product;

  return (
    <>
      <h1>{`${name}`}</h1>
      <ul>
        <li>{`ID: ${id}`}</li>
        <li>{`Description: ${description}`}</li>
        <li>{`Price: ${price} ${currency}`}</li>
        <li>{`Category: ${category}`}</li>
        <p>
          <Link href={`/products`}>Show all products</Link>
        </p>
      </ul>
    </>
  );
}
