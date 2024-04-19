import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center ">
      <div
        className="container h-50 w-50 bg-white p-12 rounded-3xl flex flex-col md:flex-row gap-8 items-center justify-center mx-4 "
        style={{ paddingTop: "100px", paddingBottom: 100 }}
      >
        <div className="order-2 md:order-1">
          <Image src={"/OBJECTS.svg"} width={483} height={304} alt="svg" />
        </div>
        <div className="order-1 md:order-2 flex flex-col gap-5 items-center justify-center w-full md:w-1/2">
          <Image src={"/logo.svg"} width={200} height={59.79} alt="logo" />
          <p className="text-center w-3/4">
            We Are Currently Working On this Website To deliver A Better User
            Experience
          </p>
        </div>
      </div>
    </main>
  );
}
