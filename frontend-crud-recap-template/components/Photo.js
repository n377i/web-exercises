import Link from "next/link";
import Image from "next/image";
import styles from "./Photo.module.css";

export default function Photo({ artist, title, image, id }) {
  return (
    <article className={styles.photo}>
      <Link href={`/photos/${id}`} className={styles.link}>
        <Image
          className={styles.image}
          src={image}
          alt={`${artist} - ${title}`}
          width={200}
          height={200}
        />
      </Link>
      <Link href={`/photos/${id}`} className={styles.link}>
        <span className={styles.artist}>{artist}</span>
        <span className={styles.title}>{title}</span>
      </Link>
    </article>
  );
}
