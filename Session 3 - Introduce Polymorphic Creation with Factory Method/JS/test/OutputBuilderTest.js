module.exports = class DomBuilder {
    constructor(name, source) {
        this.name = name;
        this.OutputBuilder = require(source).default;
    }

    testAddAboveRoot() {
        describe(this.name, () => {
            it('adds stuff above root', () => {
                this._testAddAboveRoot();
            });
        });
    }

    _testAddAboveRoot() {
        const builder = new this.OutputBuilder('order');
        const expected = '<orders><order></order></orders>';
        builder.addAbove('orders');
        expect(builder.generate()).toBe(expected);
    }
}