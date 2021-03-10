import { useGlobal } from "reactn";

interface Currency {
    [key: string]: any
}

const useCurrency = (getter: string) => {
    const [currencies] = useGlobal<Currency>("currencies");
    
    return currencies.filter((currency: Currency) => {
        return (currency.name === getter || currency.symbol === getter);
    });
}

export default useCurrency;
