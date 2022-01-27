export default function formatPercentage(apr: number) {
    const number = (apr * 100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return number + '%';
}