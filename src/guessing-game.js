class GuessingGame {
    constructor() {
        this.minValue = null;
        this.maxValue = null;
        this.result = null;
    }

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        this.result = Math.round((this.maxValue + this.minValue) / 2);
        return this.result;
    }

    lower() {
        this.maxValue = this.result;
    }

    greater() {
        this.minValue = this.result;
    }
}

module.exports = GuessingGame;
