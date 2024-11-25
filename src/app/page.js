


import AddUser from "./components/AddUsers";
import DisplayUser from "./components/DisplayUsers";

export default function Home() {
  return (
    <main className="flex flex-col ">
      <AddUser />
      <DisplayUser />
    </main>
  );
}
