import { Icon } from "../Icon.jsx";

const categoryNames = {
  "indoor plants": "Indoor plants",
  "pots & planters": "Pots & planters",
  "plant care": "Plant care"
};

export function ProductTable({ products, threshold }) {
  const rows = [...products].sort((a, b) => a.stock - b.stock);
  return (
    <article className="panel table-panel">
      <div className="panel__header table-panel__header">
        <div>
          <p className="overline">Inventory monitor</p>
          <h2>Product performance</h2>
        </div>
        <span className="row-count">{rows.length} products</span>
      </div>
      <div className="table-scroll">
        <table>
          <thead>
            <tr><th>Product</th><th>Category</th><th>Revenue</th><th>Units sold</th><th>In stock</th><th>Status</th><th aria-label="Actions" /></tr>
          </thead>
          <tbody>
            {rows.map((product) => {
              const critical = product.stock < threshold;
              return (
                <tr key={product.id}>
                  <td><strong>{product.name}</strong><small>{product.sku}</small></td>
                  <td>{categoryNames[product.category] || product.category}</td>
                  <td>${product.revenue.toLocaleString()}</td>
                  <td>{product.units}</td>
                  <td><b className={critical ? "stock-low" : ""}>{product.stock}</b></td>
                  <td><span className={`status ${critical ? "status--critical" : "status--healthy"}`}><i />{critical ? "Critical" : "Healthy"}</span></td>
                  <td><button className="icon-button icon-button--muted" aria-label={`Actions for ${product.name}`}><Icon name="dots" size={16} /></button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {!rows.length && <p className="empty-state">No products match the selected filters.</p>}
    </article>
  );
}
