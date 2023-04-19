import { useRouter } from "next/router";

function Project() {
  const router = useRouter();
  const id = router.query.id;

  return <div></div>;
}

export default Project;
