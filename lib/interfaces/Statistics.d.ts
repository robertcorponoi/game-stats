import Browser from './Browser';
import History from './History';
/**
 * Defines the structure of the statistics object returned by GameStats.
 */
export default interface Statistics {
    /**
     * The information about the browser being used.
     */
    browser: Browser;
    /**
     * The current timestamp of the game loop.
     */
    timestamp: DOMHighResTimeStamp;
    /**
     * The previous timestamp of the game loop.
     */
    prevTimestamp: DOMHighResTimeStamp;
    /**
     * The predicted next timestamp of the game loop.
     *
     * Note: This is predicted from the average of previous timestamps but is in no way dependable.
     */
    predictedNextTimestamp: number;
    /**
     * The time in between the previous and current timestamp.
     */
    delta: number;
    /**
     * The average time in between previous and current timestamps.
     *
     * This uses a collection of deltas to compute the average.
     */
    deltaAverage: number;
    /**
     * The current frame that the game is on.
     */
    frame: number;
    /**
     * The frames per second being achieved.
     */
    fps: number;
    /**
     * The average fps being achieved.
     *
     * This uses a collection of fps to compute the average.
     */
    fpsAverage: number;
    /**
     * A collection of the histories of certain statistics.
     */
    history: History;
}
