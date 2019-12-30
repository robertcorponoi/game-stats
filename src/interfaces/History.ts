'use strict'

/**
 * Defines the object that contains the history data of certain statistics.
 */
export default interface History {
  /**
   * The history of timestamps.
   */
  timestamps: Array<DOMHighResTimeStamp>,

  /**
   * The history of delta values.
   */
  deltas: Array<number>;
};