import { ProductColumn } from "@/components/products/columns";
import ProductClient from "@/components/products/product-client";
import prismadb from "@/lib/prismaDb";
import { priceFormatter } from "@/lib/utils";
import { format } from "date-fns";

const ProductsPage = async (
  { params }:
    { params: { storeId: string } }
) => {

  const products = await prismadb.product.findMany({
    where: {
      storeId: params.storeId
    },
    include: {
      category: true,
      size: true,
      color: true,
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  const formattedProducts: ProductColumn[] =
    products.map((item) => ({
      id: item.id,
      name: item.name,
      price: priceFormatter.format(item.price.toNumber()),
      size: item.size.name,
      category: item.category.name,
      color: item.color.value,
      isFeatured: item.isFeatured,
      isArchived: item.isArchived,
      createdAt: format(item.createdAt, "MMMM do, yyyy"),
    }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductClient data={formattedProducts} />
      </div>
    </div>
  )
}

export default ProductsPage