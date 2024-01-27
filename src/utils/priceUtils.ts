export const calculateTotalPrice = (price: number, vat: number | undefined) => {
  if (!vat) return price;

  return parseFloat((price * (1 + vat / 100)).toFixed(2));
};
