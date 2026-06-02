import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const shortDate = (value) => new Date(`${value}T00:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric" });

const formatMoney = (value) => `$${(value / 1000).toFixed(value >= 10000 ? 0 : 1)}k`;

export function RevenueChart({ data }) {
  return (
    <article className="panel chart-panel">
      <div className="panel__header">
        <div>
          <p className="overline">Performance over time</p>
          <h2>Revenue trend</h2>
        </div>
        <div className="chart-legend"><span />Revenue</div>
      </div>
      <div className="chart-wrap">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 16, right: 8, left: -18, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1f6b4f" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#1f6b4f" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#e7e9e3" strokeDasharray="3 4" />
            <XAxis dataKey="date" tickFormatter={shortDate} axisLine={false} tickLine={false} tick={{ fill: "#788078", fontSize: 11 }} />
            <YAxis tickFormatter={formatMoney} axisLine={false} tickLine={false} tick={{ fill: "#788078", fontSize: 11 }} />
            <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, "Revenue"]} labelFormatter={shortDate} contentStyle={{ borderRadius: 10, border: "1px solid #e1e4dc", boxShadow: "0 8px 20px rgba(32,45,36,.08)" }} />
            <Area type="monotone" dataKey="revenue" stroke="#1f6b4f" strokeWidth={2.4} fill="url(#revenueFill)" dot={{ r: 3, fill: "#f8faf6", strokeWidth: 2 }} activeDot={{ r: 5 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}
