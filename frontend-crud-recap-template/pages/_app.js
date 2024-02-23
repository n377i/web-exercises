import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { nanoid } from "nanoid";
import data from "../data.json";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  const [photos, setPhotos] = useState(data);

  function getPhoto(id) {
    return photos.find((x) => x.id == id);
  }

  function addPhoto(photo) {
    setPhotos((prev) => [...prev, { ...photo, id: nanoid() }]);
  }

  function deletePhoto(id) {
    setPhotos((prev) => prev.filter((x) => x.id !== id));
  }

  function editPhoto(photo) {
    setPhotos((prev) =>
      prev.map((x) => (x.id === photo.id ? { ...x, ...photo } : x))
    );
  }

  function toggleFavorite(id) {
    setPhotos((prev) =>
      prev.map((photo) =>
        photo.id === id ? { ...photo, isFavorite: !photo.isFavorite } : photo
      )
    );
  }

  return (
    <>
      <Nav />
      <main>
        <Component
          photos={photos}
          getPhoto={getPhoto}
          addPhoto={addPhoto}
          deletePhoto={deletePhoto}
          editPhoto={editPhoto}
          toggleFavorite={toggleFavorite}
          {...pageProps}
        />
      </main>
      <Footer />
    </>
  );
}
