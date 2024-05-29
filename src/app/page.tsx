import { Select, SelectItem } from "@tremor/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Select error>
        <SelectItem value="1">Option 1</SelectItem>
      </Select>
    </main>
  );
}
