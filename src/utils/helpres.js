export const format_price = (number) => {
  const newNumber = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100)
  return newNumber
}
