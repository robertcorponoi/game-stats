'use strict'

import Browser from './interfaces/Browser';
import Statistics from './interfaces/Statistics';

import Options from './options/Options';
import { getBrowserInfo } from './utils/browser';

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
  private _options: Options;

  /**
   * The information about which browser the player is using.
   * 
   * @private
   * 
   * @property {Browser}
   */
  private _browser: Browser = getBrowserInfo();
  /**
   * The timestamp as of the current call to record.
   * 
   * @private
   * 
   * @property {DOMHighResTimestamp}
   */
  private _timestamp: DOMHighResTimeStamp = 0;

  /**
   * The timestamp as of the previous call to record.
   * 
   * @private
   * 
   * @property {DOMHighResTimeStamp}
   */
  private _prevTimestamp: DOMHighResTimeStamp = 0;

  /**
   * Keeps a record of timestamps to compute additional data.
   * 
   * @private
   * 
   * @property {Array<DOMHighResTimeStamp>}
   */
  private _timestampHistory: Array<DOMHighResTimeStamp> = [];

  /**
   * Keeps a record of deltas to compute additional data.
   * 
   * @private
   * 
   * @property {Array<number>}
   */
  private _deltaHistory: Array<number> = [];

  /**
   * Indicates the current frame of the game the player is on.
   * 
   * @private
   * 
   * @property {number}
   */
  private _frame: number = 0;

  /**
   * @param {Object} [options]
   * @param {number} [options.historyLimit=10] The amount of items that will be kept in history to be used in calculations. The more history you keep the more accurate the calculations but the longer they will take.
   */
  constructor(options: Object = {}) {
    this._options = new Options(options);
  }

  /**
   * Starts recording information about the game's statistics.
   * 
   * @param {DOMHighResTimeStamp} timestamp The current time, in milliseconds, since the game loop began.
   */
  record(timestamp: DOMHighResTimeStamp) {
    this._prevTimestamp = this._timestamp;
    this._timestamp = timestamp;

    this._timestampHistory.push(timestamp);
    this._deltaHistory.push(this._timestamp - this._prevTimestamp);

    if (this._timestampHistory.length > this._options.historyLimit) this._timestampHistory.shift();
    if (this._deltaHistory.length > this._options.historyLimit) this._deltaHistory.shift();

    this._frame++;
  }

  /**
   * Returns the current statistics.
   * 
   * @returns {Statistics}
   */
  stats(): Statistics {
    // let predictedNextTimestamp: number = 0;
    // this._timestampHistory.map((timestamp: number) => predictedNextTimestamp += timestamp);

    let deltaCumulative: number = 0;
    this._deltaHistory.map((delta: number) => deltaCumulative += delta);

    const delta: number = this._timestamp - this._prevTimestamp;
    const deltaAverage: number = deltaCumulative / this._deltaHistory.length;

    const stats: Statistics = {
      browser: this._browser,
      timestamp: this._timestamp,
      prevTimestamp: this._prevTimestamp,
      predictedNextTimestamp: this._timestamp + deltaAverage,
      delta: delta,
      deltaAverage: deltaAverage,
      frame: this._frame,
      fps: Math.round(1 / delta * 1000),
      fpsAverage: Math.round(1 / deltaAverage * 1000),
      history: { timestamps: this._timestampHistory, deltas: this._deltaHistory }
    };

    return stats;
  }
};