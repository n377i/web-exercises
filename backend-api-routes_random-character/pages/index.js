import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const { data: character, isLoading } = useSWR(
    "/api/random-character",
    fetcher
  );

  if (!character || isLoading) {
    return "Loading...";
  }

  const { firstName, lastName, twitterName, geoHash } = character;

  return (
    <>
      <h1>
        {firstName} {lastName}
      </h1>
      <ul>
        <li>
          <strong>Twitter Name:</strong> {twitterName}
        </li>
        <li>
          <strong>Geo Hash:</strong> {geoHash}
        </li>
      </ul>
    </>
  );
}
