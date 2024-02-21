import Image from "next/image";
import { useRouter } from "next/router";

export default function PhotoPage({ getPhoto, toggleFavorite, removePhoto }) {
  const router = useRouter();
  const photo = getPhoto(router.query.id);

  if (!photo) {
    return "Loading...";
  }

  const { artist, title, image, year, id, isFavorite } = photo;

  return (
    <article>
      <h1>{title}</h1>
      <h3>
        by {artist} ({year})
      </h3>
      <Image src={image} width={800} height={600} alt={`${artist}: ${title}`} />
      <div>
        <br></br>
        <button onClick={() => toggleFavorite(id)}>
          {isFavorite ? "Gemerkt" : "Merken"}
        </button>
      </div>
    </article>
  );
}
