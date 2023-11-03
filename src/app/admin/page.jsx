import Image from "next/image";
import InitialNavigation from "~/container/InitialNavigation";

export default function Home() {
  return (
    <>
      <InitialNavigation logoPresent={false} fromLayout={false} />
    </>
  );
}
