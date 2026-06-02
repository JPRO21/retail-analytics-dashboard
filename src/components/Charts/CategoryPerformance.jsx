const categoryNames = {
  "indoor plants": "Indoor plants",
  "pots & planters": "Pots & planters",
  "plant care": "Plant care"
};

export function CategoryPerformance({ data }) {
  const max = Math.max(...data.map((item) => item.revenue), 1);
  return (
    <article className="panel category-panel">
      <div className="panel__header">
        <div>
          <p className="overline">Revenue split</p>
          <h2>Category performance</h2>
        </div>
      </div>
      <div className="category-list">
        {data.map((item) => (
          <div className="category-row" key={item.category}>
            <div className="category-row__meta">
              <span>{categoryNames[item.category] || item.category}</span>
              <strong>${item.revenue.toLocaleString()}</strong>
            </div>
            <div className="category-row__track">
              <span style={{ width: `${(item.revenue / max) * 100}%` }} />
            </div>
            <small>{item.share}% of filtered revenue</small>
          </div>
        ))}
      </div>
    </article>
  );
}
