import { Icon } from "../Icon.jsx";

export function KPICard({ eyebrow, title, value, unit, trend, alert, tone = "green" }) {
  return (
    <article className={`kpi-card ${alert ? "kpi-card--alert" : ""}`}>
      <div className="kpi-card__top">
        <span className="kpi-card__eyebrow">{eyebrow}</span>
        <span className={`kpi-card__marker kpi-card__marker--${tone}`}>
          <Icon name={alert ? "bell" : "spark"} size={14} />
        </span>
      </div>
      <div className="kpi-card__value">
        {value}
        {unit && <span>{unit}</span>}
      </div>
      <div className="kpi-card__footer">
        <span>{title}</span>
        {trend && (
          <span className={`trend trend--${trend.direction}`}>
            <Icon name={trend.direction === "up" ? "up" : "down"} size={13} />
            {trend.value}
          </span>
        )}
      </div>
    </article>
  );
}
