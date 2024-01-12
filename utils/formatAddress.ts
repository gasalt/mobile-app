export function formatAddress(address: string, start = 15, end = 10) {
    return `${address.substring(0, start)}...${address.substring(
        address.length - end,
        address.length
    )}`;
}

export function formatCurrency(value: number) {

    const format = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return format.format(value)

}
