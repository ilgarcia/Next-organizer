import { columns } from "@/components/grocery/columns";
import { DataTable } from "@/components/grocery/data-table";

async function getData(): Promise<Grocery[]> {
  // Fetch data from your API here.
  return [
    {
      id: "m5gr84i9",
      product: "Chocolate",
    },
    // ...
  ];
}

async function page() {
  const data = await getData();


  //  data-[state=checked]:
  return (
    <main>
      <DataTable columns={columns} data={data} />
    </main>
  );
}

export default page;
