import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./[id].module.css";

export default function PhotoPage({ getPhoto, toggleFavorite, deletePhoto }) {
  const router = useRouter();
  const photo = getPhoto(router.query.id);

  if (!photo) {
    return "Loading...";
  }

  const { artist, title, image, year, id, isFavorite } = photo;

  function handleDelete() {
    if (!window.confirm("Are you sure?")) {
      return;
    }
    deletePhoto(id);
    router.push("/");
  }

  return (
    <article className={styles.page}>
      <h1>
        {artist} - {title}
      </h1>
      <time>{year}</time>
      <Image
        className={styles.image}
        src={image}
        width={400}
        height={400}
        alt={`${artist} - ${title}`}
      />
      <ul className={styles.actions}>
        <li>
          <Link className={styles.action} href={`/photos/${id}/edit`}>
            Edit
          </Link>
        </li>
        <li>
          <button className={styles.action} onClick={handleDelete}>
            Delete
          </button>
        </li>
        <li>
          <button className={styles.action} onClick={() => toggleFavorite(id)}>
            {isFavorite ? "Unfav" : "Fav"}
          </button>
        </li>
      </ul>
    </article>
  );
}
