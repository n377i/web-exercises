import Form from "@/components/Form";
import { useRouter } from "next/router";

export default function EditPage({ getPhoto, editPhoto }) {
  const router = useRouter();
  const photo = getPhoto(router.query.id);

  if (!photo) {
    return "Loading...";
  }

  async function onSubmit(data) {
    editPhoto({ ...data, id: photo.id });
    router.push(`/photos/${photo.id}`);
  }

  return (
    <>
      <h1>Edit Photo</h1>
      <Form onSubmit={onSubmit} photo={photo} />
    </>
  );
}
