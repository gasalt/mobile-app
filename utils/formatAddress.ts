export default function formatAddress(address: string, start = 15, end = 10) {
    return `${address.substring(0, start)}...${address.substring(
        address.length - end,
        address.length
    )}`;
}
