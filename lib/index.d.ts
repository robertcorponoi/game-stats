import Statistics from './interfaces/Statistics';
/**
 * GameStats binds to your game loop and provides helpful statistics about your game's performance.
 */
export default class GameStats {
    /**
     * A reference to the options for this instance of GameStats.
     *
     * @private
     *
     * @property {Options}
     */
    private _options;
    /**
     * The information about which browser the player is using.
     *
     * @private
     *
     * @property {Browser}
     */
    private _browser;
    /**
     * The timestamp as of the current call to record.
     *
     * @private
     *
     * @property {DOMHighResTimestamp}
     */
    private _timestamp;
    /**
     * The timestamp as of the previous call to record.
     *
     * @private
     *
     * @property {DOMHighResTimeStamp}
     */
    private _prevTimestamp;
    /**
     * Keeps a record of timestamps to compute additional data.
     *
     * @private
     *
     * @property {Array<DOMHighResTimeStamp>}
     */
    private _timestampHistory;
    /**
     * Keeps a record of deltas to compute additional data.
     *
     * @private
     *
     * @property {Array<number>}
     */
    private _deltaHistory;
    /**
     * Indicates the current frame of the game the player is on.
     *
     * @private
     *
     * @property {number}
     */
    private _frame;
    /**
     * @param {Object} [options]
     * @param {number} [options.historyLimit=10] The amount of items that will be kept in history to be used in calculations. The more history you keep the more accurate the calculations but the longer they will take.
     */
    constructor(options?: Object);
    /**
     * Starts recording information about the game's statistics.
     *
     * @param {DOMHighResTimeStamp} timestamp The current time, in milliseconds, since the game loop began.
     */
    record(timestamp: DOMHighResTimeStamp): void;
    /**
     * Returns the current statistics.
     *
     * @returns {Statistics}
     */
    stats(): Statistics;
}
