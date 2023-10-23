import CardGrid from "@/components/CardGrid";
import Tabs from "@/components/Tabs";

export default function Home() {
  return (
    <main className="flex flex-col gap-7 mx-4 my-5 min-h-screen">
      <Tabs />
      <CardGrid />
    </main>
  );
}
