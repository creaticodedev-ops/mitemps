import Grid from "components/grid";
import { ProductCard } from "components/product/product-card";
import { Product } from "lib/shopify/types";

export default function ProductGridItems({
  products,
}: {
  products: Product[];
}) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle}>
          <ProductCard product={product} />
        </Grid.Item>
      ))}
    </>
  );
}
