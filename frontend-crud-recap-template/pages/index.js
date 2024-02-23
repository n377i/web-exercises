import PhotoList from "@/components/PhotoList";

export default function IndexPage({ photos = [] }) {
  return (
    <>
      <h1>Frontend Recap</h1>
      {!photos.length ? "No photos yet." : <PhotoList photos={photos} />}
    </>
  );
}
