import Button from "@/components/Button";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Button variant="primary" mode="light">
        Button 1
      </Button>
      <Button variant="secondary" mode="light">
        Button 2
      </Button>
      <div className="p-5 bg-black">
        <Button variant="primary" mode="dark">
          Button 1
        </Button>
        <Button variant="secondary" mode="dark">
          Button 2
        </Button>

      </div>
    </div>
  );
}
