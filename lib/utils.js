/**
 * Sorts the keys of an object alphabetically in ascending (A→Z) or descending (Z→A) order.
 *
 * @param {Object} obj - The object to sort.
 * @param {"asc" | "desc"} [order="asc"] - Sorting order.
 * @returns {Object} A new object with keys sorted in the specified order.
 */
export function sorted(obj, order = "asc") {
  const entries = Object.entries(obj).sort(([a], [b]) =>
    order === "desc" ? b.localeCompare(a) : a.localeCompare(b)
  );

  return Object.fromEntries(entries);
}

/**
 * Generates a unique Nextra-compatible separator metadata entry.
 *
 * @example
 * separator({ title: "Server" });
 * // => { _sep_1: { type: "separator", title: "Server" } }
 */
let separatorId = 0;

/**
 * @param {Object} options
 * @param {string} options.title - Separator title.
 * @param {Object} [options.theme] - Optional theme overrides.
 * @param {string} [options.prefix="_sep_"] - Optional custom key prefix.
 */
export const separator = ({ title, theme, prefix = "_sep_" }) => {
  separatorId++;

  const key = `${prefix}${separatorId}`;

  return {
    [key]: {
      type: "separator",
      title,
      ...(theme ? { theme } : {}),
    },
  };
};
