/**
 * Defines the options that are available for an instance of GameStats and their default values.
 */
export default class Options {
    /**
     * The amount of items that will be kept in history to be used in calculations.
     *
     * The more history you keep the more accurate the calculations but the longer they will take.
     *
     * @property {number}
     *
     * @default 10
     */
    historyLimit: number;
    /**
     * @param {Object} options The initialization options passed to GameStats.
     */
    constructor(options: Object);
}
