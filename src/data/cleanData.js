const normalizeDate = (value) => {
  if (!value) return "1970-01-01";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "1970-01-01" : date.toISOString().slice(0, 10);
};

const normalizeCategory = (value) =>
  String(value || "uncategorized").trim().toLowerCase();

const safeNumber = (value) => (Number.isFinite(Number(value)) ? Number(value) : 0);

export const cleanData = (products) =>
  products.map((product) => ({
    ...product,
    category: normalizeCategory(product.category),
    date: normalizeDate(product.date),
    revenue: safeNumber(product.revenue),
    units: safeNumber(product.units),
    stock: safeNumber(product.stock)
  }));
