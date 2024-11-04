import React from "react";
import { Typography } from "@material-tailwind/react";
import { AddProductDialog } from "../components/admin/AddProductDialog";
import { ProductsTable } from "../components/admin/ProductsTable";

export default function AdminProductsPage() {
  return (
    <div className="py-14 px-10 flex flex-col gap-7">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-2">
        <Typography variant="h2" className="text-gray-900 dark:text-white">Products</Typography>
        <AddProductDialog />
      </div>
      <ProductsTable />
    </div>
  );
}
