import { useMemo, useState } from "react";

export function useFilters(products) {
  const dates = products.map((product) => product.date).sort();
  const [category, setCategory] = useState("all");
  const [startDate, setStartDate] = useState(dates[0]);
  const [endDate, setEndDate] = useState(dates[dates.length - 1]);
  const [threshold, setThreshold] = useState(10);

  const categories = useMemo(
    () => ["all", ...new Set(products.map((product) => product.category))],
    [products]
  );

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        const matchesCategory = category === "all" || product.category === category;
        const matchesDate = product.date >= startDate && product.date <= endDate;
        return matchesCategory && matchesDate;
      }),
    [category, endDate, products, startDate]
  );

  return {
    categories,
    category,
    setCategory,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    threshold,
    setThreshold,
    filteredProducts
  };
}
