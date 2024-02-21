import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import data from "../data.json";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  const [photos, setPhotos] = useState(data);

  const getPhoto = (id) => {
    return photos.find((photo) => photo.id == id);
  };

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
          toggleFavorite={toggleFavorite}
          {...pageProps}
        />
      </main>
      <Footer />
    </>
  );
}
