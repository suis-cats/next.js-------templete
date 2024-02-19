"use client";
import { useRouter } from "next/navigation";

export default function Cocacola() {
  const router = useRouter();
  return (
    <div>
      <h1>ようこそ．コカコーラへ</h1>
      <button onClick={() => router.push("cocacola/Ayataka")}>
        綾鷹のページ
      </button>
      <button onClick={() => router.push("cocacola/Cola")}>
        コーラのページ
      </button>
    </div>
  );
}
