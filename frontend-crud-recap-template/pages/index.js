import Link from "next/link";

export default function IndexPage({ photos }) {
  return (
    <>
      <h1>Frontend Recap</h1>
      <ul>
        {photos.map(({ id, title }) => (
          <Link href={`/photos/${id}`}>
            <li key={id}>{title}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}
