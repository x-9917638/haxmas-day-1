"use client";
import Image from "next/image";
import JollyOrpheusClick from "@/components/JollyOrpheusClick";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0); // useState!
  return (
    <div className="min-h-screen flex flex-col bg-linear-60 from-emerald-500 to-emerald-900">
      <main className="flex min-h-screen flex-col items-center justify-between py-32 px-16 ">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className={"text-6xl self-center my-10"}>Christmas Clicker</h1>
          <p className={"text-3xl font-bold"}>Clicked {count} times :3</p>
          <JollyOrpheusClick
            onClick={() => {
              setCount(count + 1);
            }}
          />
        </div>
      </main>
    </div>
  );
}
