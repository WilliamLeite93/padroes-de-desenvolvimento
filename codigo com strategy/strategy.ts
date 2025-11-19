
interface TaxStrategy {
    calculate(amount: number): number;
}


class IcmsTaxStrategy implements TaxStrategy {
    calculate(amount: number): number {
        return (amount * 0.04) / 100; // 4%
    }
}

class IssTaxStrategy implements TaxStrategy {
    calculate(amount: number): number {
        return (amount * 0.11) / 100; // 11%
    }
}

class IpiTaxStrategy implements TaxStrategy {
    calculate(amount: number): number {
        return (amount * 0.15) / 100; // 15%
    }
}

class TaxCalculator {
    constructor(private strategy: TaxStrategy) {}

    setStrategy(strategy: TaxStrategy): void {
        this.strategy = strategy;
    }

    calculate(amount: number): number {
        return this.strategy.calculate(amount);
    }
}

class TaxStrategyFactory {
    private strategies: Record<string, TaxStrategy> = {
        ICMS: new IcmsTaxStrategy(),
        ISS: new IssTaxStrategy(),
        IPI: new IpiTaxStrategy(),
    };

    getStrategy(taxType: string): TaxStrategy {
        const key = taxType.toUpperCase();
        const strategy = this.strategies[key];

        if (!strategy) {
            throw new Error(`Invalid tax type: ${taxType}`);
        }

        return strategy;
    }
}


const factory = new TaxStrategyFactory();

const calcIcms = new TaxCalculator(factory.getStrategy("ICMS"));
console.log(calcIcms.calculate(1000)); // 40


calcIcms.setStrategy(factory.getStrategy("IPI"));
console.log(calcIcms.calculate(1000)); // 150
