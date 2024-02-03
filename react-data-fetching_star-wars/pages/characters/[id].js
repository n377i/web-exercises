import useSWR from "swr";
import { useRouter } from "next/router";
import Card from "../../components/Card";
import Layout from "../../components/Layout";

export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR(
    `https://swapi.dev/api/people/${id}`,
    null // fetcher wird hier nicht übergeben, da er global in SWRConfig konfiguriert ist
  );

  if (isLoading) {
    return (
      <Layout>
        <h1>Loading...</h1>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <h1>{error.status}</h1>
        <p>Error: {error.message}</p>
      </Layout>
    );
  }

  const { name, height, eye_color, birth_year } = data;

  return (
    <Layout>
      <Card
        id={id}
        name={name}
        height={height}
        eyeColor={eye_color}
        birthYear={birth_year}
      />
    </Layout>
  );
}
