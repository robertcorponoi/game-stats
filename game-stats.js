function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Options =
/**
 * The amount of items that will be kept in history to be used in calculations.
 * 
 * The more history you keep the more accurate the calculations but the longer they will take.
 * 
 * @property {number}
 * 
 * @default 10
 */

/**
 * @param {Object} options The initialization options passed to GameStats.
 */
function Options(options) {
  _classCallCheck(this, Options);

  _defineProperty(this, "historyLimit", 10);

  Object.assign(this, options);
};

/**
 * Gets the name and version of the browser that the website visitor is using.
 * 
 * @returns {Browser}
 */
function getBrowserInfo() {
  var userAgent = navigator.userAgent;
  var browserInfo = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i);
  return {
    name: browserInfo[1],
    version: browserInfo[2]
  };
}

/**
 * GameStats binds to your game loop and provides helpful statistics about your game's performance.
 */

var GameStats =
/*#__PURE__*/
function () {
  /**
   * A reference to the options for this instance of GameStats.
   * 
   * @private
   * 
   * @property {Options}
   */

  /**
   * The information about which browser the player is using.
   * 
   * @private
   * 
   * @property {Browser}
   */

  /**
   * The timestamp as of the current call to record.
   * 
   * @private
   * 
   * @property {DOMHighResTimestamp}
   */

  /**
   * The timestamp as of the previous call to record.
   * 
   * @private
   * 
   * @property {DOMHighResTimeStamp}
   */

  /**
   * Keeps a record of timestamps to compute additional data.
   * 
   * @private
   * 
   * @property {Array<DOMHighResTimeStamp>}
   */

  /**
   * Keeps a record of deltas to compute additional data.
   * 
   * @private
   * 
   * @property {Array<number>}
   */

  /**
   * Indicates the current frame of the game the player is on.
   * 
   * @private
   * 
   * @property {number}
   */

  /**
   * @param {Object} [options]
   * @param {number} [options.historyLimit=10] The amount of items that will be kept in history to be used in calculations. The more history you keep the more accurate the calculations but the longer they will take.
   */
  function GameStats() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, GameStats);

    _defineProperty(this, "_options", void 0);

    _defineProperty(this, "_browser", getBrowserInfo());

    _defineProperty(this, "_timestamp", 0);

    _defineProperty(this, "_prevTimestamp", 0);

    _defineProperty(this, "_timestampHistory", []);

    _defineProperty(this, "_deltaHistory", []);

    _defineProperty(this, "_frame", 0);

    this._options = new Options(options);
  }
  /**
   * Starts recording information about the game's statistics.
   * 
   * @param {DOMHighResTimeStamp} timestamp The current time, in milliseconds, since the game loop began.
   */


  _createClass(GameStats, [{
    key: "record",
    value: function record(timestamp) {
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

  }, {
    key: "stats",
    value: function stats() {
      // let predictedNextTimestamp: number = 0;
      // this._timestampHistory.map((timestamp: number) => predictedNextTimestamp += timestamp);
      var deltaCumulative = 0;

      this._deltaHistory.map(function (delta) {
        return deltaCumulative += delta;
      });

      var delta = this._timestamp - this._prevTimestamp;
      var deltaAverage = deltaCumulative / this._deltaHistory.length;
      var stats = {
        browser: this._browser,
        timestamp: this._timestamp,
        prevTimestamp: this._prevTimestamp,
        predictedNextTimestamp: this._timestamp + deltaAverage,
        delta: delta,
        deltaAverage: deltaAverage,
        frame: this._frame,
        fps: Math.round(1 / delta * 1000),
        fpsAverage: Math.round(1 / deltaAverage * 1000),
        history: {
          timestamps: this._timestampHistory,
          deltas: this._deltaHistory
        }
      };
      return stats;
    }
  }]);

  return GameStats;
}();

export default GameStats;
