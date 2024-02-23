import styles from "./Form.module.css";

export default function Form({ onSubmit, photo = {} }) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    onSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Title
        <input
          name="title"
          required
          placeholder="Enter the photo title"
          defaultValue={photo.title}
        />
      </label>
      <label>
        Artist
        <input
          name="artist"
          required
          placeholder="Enter the photo artist"
          defaultValue={photo.artist}
        />
      </label>
      <label>
        Year
        <input
          name="year"
          type="number"
          required
          placeholder="Enter the photo year"
          defaultValue={photo.year}
        />
      </label>
      <label>
        Photo
        <input
          name="photo"
          type="url"
          required
          placeholder="Enter the photo URL"
          defaultValue={photo.image}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
