export const formatCurrency = (value: number) => {
  const format = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
  });
  return format.format(value)
}
