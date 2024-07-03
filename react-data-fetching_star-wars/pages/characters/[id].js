import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: character,
    isLoading,
    error,
  } = useSWR(
    `https://swapi.dev/api/people/${id}`,
    null // fetcher wird hier nicht übergeben, da er global in SWRConfig konfiguriert ist
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Layout>
      <Card
        id={id}
        name={character.name}
        height={character.height}
        eyeColor={character.eye_color}
        birthYear={character.birth_year}
      />
    </Layout>
  );
}
