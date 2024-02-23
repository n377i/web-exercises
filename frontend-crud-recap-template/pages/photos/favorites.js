import PhotoList from "@/components/PhotoList";

export default function FavoritesPage({ photos }) {
  const favoritePhotos = photos.filter(({ isFavorite }) => isFavorite);
  return (
    <>
      <h1>Favorite Photos</h1>
      {!favoritePhotos.length ? (
        <p>No favorite photos yet.</p>
      ) : (
        <PhotoList photos={favoritePhotos} />
      )}
    </>
  );
}
