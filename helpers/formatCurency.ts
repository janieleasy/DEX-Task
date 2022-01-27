export default function formatCurrency(string: string) {
    const num = Number(string);

    if (num >= 1000) {
        return num.toLocaleString(undefined, { maximumFractionDigits: 0 });
    } else if (num < 1000 && num >=10) {
        return num.toLocaleString(undefined, { maximumFractionDigits: 1 });
    } else if (num < 10 && num >= 1) {
        return num.toLocaleString(undefined, { maximumFractionDigits: 3 });
    } else if (num < 1) {
        return num.toLocaleString(undefined, { maximumFractionDigits: 6 });
    }
}