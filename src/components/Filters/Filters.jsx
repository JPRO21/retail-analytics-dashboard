import { Icon } from "../Icon.jsx";

const labelCategory = (value) => value === "all" ? "All categories" : value[0].toUpperCase() + value.slice(1);

export function Filters({ categories, category, setCategory, startDate, setStartDate, endDate, setEndDate, threshold, setThreshold }) {
  return (
    <section className="filters">
      <div className="filters__intro">
        <Icon name="filter" size={16} />
        <span>Filter view</span>
      </div>
      <label className="filter-field filter-field--select">
        <span>Category</span>
        <select value={category} onChange={(event) => setCategory(event.target.value)}>
          {categories.map((item) => <option key={item} value={item}>{labelCategory(item)}</option>)}
        </select>
        <Icon name="arrow" size={14} />
      </label>
      <label className="filter-field">
        <span>From</span>
        <input type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
      </label>
      <label className="filter-field">
        <span>To</span>
        <input type="date" value={endDate} onChange={(event) => setEndDate(event.target.value)} />
      </label>
      <label className="threshold">
        <span>Low-stock threshold</span>
        <strong>&lt; {threshold}</strong>
        <input aria-label="Low-stock threshold" type="range" min="2" max="30" value={threshold} onChange={(event) => setThreshold(Number(event.target.value))} />
      </label>
    </section>
  );
}
