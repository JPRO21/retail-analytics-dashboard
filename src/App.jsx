import { salesData } from "./data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./App.css";

function App() {
  const totalRevenue = salesData.reduce((sum, item) => sum + item.revenue, 0);
  const totalUnits = salesData.reduce((sum, item) => sum + item.units, 0);
  const lowStock = salesData.filter((item) => item.stock < 30).length;

  return (
    <main className="dashboard">
      <h1>Retail Analytics Dashboard</h1>

      <div className="cards">
        <div className="card">
          <span>Total Revenue</span>
          <strong>${totalRevenue}</strong>
        </div>

        <div className="card">
          <span>Total Units</span>
          <strong>{totalUnits}</strong>
        </div>

        <div className="card">
          <span>Low Stock</span>
          <strong>{lowStock}</strong>
        </div>
      </div>

      <div className="chart">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesData}>
            <XAxis dataKey="product" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default App;