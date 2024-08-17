import type { ProductItem } from "./utils/types";
import styles from "./productCard.module.css";
export function ProductCard({ product }: { product: ProductItem }) {
  return <div className={styles.layout}>{product.title}</div>;
}
