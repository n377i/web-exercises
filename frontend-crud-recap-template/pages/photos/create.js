import Form from "@/components/Form";
import { useRouter } from "next/router";

export default function NewPage({ addPhoto }) {
  const router = useRouter();

  async function onSubmit(data) {
    addPhoto(data);
    router.push("/");
  }

  return (
    <>
      <h1>Add Photo</h1>
      <Form onSubmit={onSubmit} />
    </>
  );
}
