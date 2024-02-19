"use client";
import { useRouter } from "next/navigation";

export default function Page1() {
  const router = useRouter();
  return (
    <div>
      <h1>TOP Page</h1>
      <button onClick={() => router.push("/cocacola")}>
        コカコーラのページ
      </button>
    </div>
  );
}
