import { Icon } from "./Icon.jsx";

export function StockAlert({ products, threshold }) {
  return (
    <article className="stock-alert">
      <div className="stock-alert__icon"><Icon name="bell" size={17} /></div>
      <div className="stock-alert__copy">
        <p className="overline">Restock priority</p>
        <h2>{products.length} product{products.length === 1 ? "" : "s"} need attention</h2>
        <p>Inventory below {threshold} units is flagged for review.</p>
      </div>
      <div className="stock-alert__items">
        {products.slice(0, 3).map((product) => (
          <div key={product.id}>
            <span>{product.name}</span>
            <strong>{product.stock} left</strong>
          </div>
        ))}
      </div>
    </article>
  );
}
