import Photo from "./Photo";
import styles from "./PhotoList.module.css";

export default function PhotoList({ photos = [] }) {
  return (
    <ul className={styles.list}>
      {photos.map((photo) => (
        <li key={photo.id}>
          <Photo {...photo} />
        </li>
      ))}
    </ul>
  );
}
