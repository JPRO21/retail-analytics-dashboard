import { useMemo } from "react";
import { Icon } from "./components/Icon.jsx";
import { KPICard } from "./components/KPICard/KPICard.jsx";
import { Filters } from "./components/Filters/Filters.jsx";
import { RevenueChart } from "./components/Charts/RevenueChart.jsx";
import { CategoryPerformance } from "./components/Charts/CategoryPerformance.jsx";
import { ProductTable } from "./components/ProductTable/ProductTable.jsx";
import { StockAlert } from "./components/StockAlert.jsx";
import { rawProducts } from "./data/mockData.js";
import { cleanData } from "./data/cleanData.js";
import { useFilters } from "./hooks/useFilters.js";

const products = cleanData(rawProducts);
const currency = (value) => `$${Math.round(value).toLocaleString()}`;

function App() {
  const filters = useFilters(products);
  const { filteredProducts, threshold } = filters;

  const insights = useMemo(() => {
    const revenue = filteredProducts.reduce((sum, product) => sum + product.revenue, 0);
    const units = filteredProducts.reduce((sum, product) => sum + product.units, 0);
    const lowStock = filteredProducts.filter((product) => product.stock < threshold).sort((a, b) => a.stock - b.stock);
    const averageOrder = units ? revenue / units : 0;

    const byDate = Object.values(filteredProducts.reduce((acc, product) => {
      acc[product.date] ||= { date: product.date, revenue: 0 };
      acc[product.date].revenue += product.revenue;
      return acc;
    }, {})).sort((a, b) => a.date.localeCompare(b.date));

    const byCategory = Object.values(filteredProducts.reduce((acc, product) => {
      acc[product.category] ||= { category: product.category, revenue: 0 };
      acc[product.category].revenue += product.revenue;
      return acc;
    }, {})).map((item) => ({ ...item, share: revenue ? Math.round((item.revenue / revenue) * 100) : 0 })).sort((a, b) => b.revenue - a.revenue);

    return { revenue, units, lowStock, averageOrder, byDate, byCategory };
  }, [filteredProducts, threshold]);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand"><span>B</span><strong>botanica</strong></div>
        <nav>
          <a className="nav-item nav-item--active" href="#overview"><Icon name="grid" />Overview</a>
          <a className="nav-item" href="#products"><Icon name="package" />Products</a>
          <a className="nav-item" href="#analytics"><Icon name="chart" />Analytics</a>
        </nav>
        <a className="nav-item sidebar__bottom" href="#settings"><Icon name="settings" />Settings</a>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <p className="eyebrow">Botanical retail</p>
            <h1>Greenhouse overview</h1>
          </div>
          <div className="topbar__actions">
            <button className="icon-button" aria-label="Search"><Icon name="search" /></button>
            <button className="icon-button has-dot" aria-label="Notifications"><Icon name="bell" /></button>
            <div className="profile">
              <span>BA</span>
              <div><strong>Botanica Admin</strong><small>Nursery operations</small></div>
            </div>
          </div>
        </header>

        <section className="content">
          <div className="content__heading">
            <div>
              <p className="eyebrow">Live nursery snapshot</p>
              <h2>Plant shop performance</h2>
              <p>Track sales momentum and surface restock priorities across the botanical catalog.</p>
            </div>
            <span className="updated"><i />Updated today, 08:42</span>
          </div>

          <Filters {...filters} />

          <section className="kpi-grid">
            <KPICard eyebrow="Gross revenue" title="vs. previous period" value={currency(insights.revenue)} trend={{ direction: "up", value: "12.4%" }} tone="green" />
            <KPICard eyebrow="Units sold" title="vs. previous period" value={insights.units.toLocaleString()} trend={{ direction: "up", value: "8.7%" }} tone="blue" />
            <KPICard eyebrow="Revenue / unit" title="average realized value" value={currency(insights.averageOrder)} trend={{ direction: "up", value: "3.2%" }} tone="ochre" />
            <KPICard eyebrow="Low stock items" title={`below ${threshold} units`} value={insights.lowStock.length} alert tone="red" />
          </section>

          <StockAlert products={insights.lowStock} threshold={threshold} />

          <section className="analytics-grid" id="analytics">
            <RevenueChart data={insights.byDate} />
            <CategoryPerformance data={insights.byCategory} />
          </section>

          <section id="products">
            <ProductTable products={filteredProducts} threshold={threshold} />
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
