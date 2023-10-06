import FlakeTable from "@/components/FlakeTable";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Dashboard</h1>
      <FlakeTable />
      <Link href={"/dashboard/flakes/new"}> Add new Flakes </Link>
    </>
  );
}
