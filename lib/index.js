'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Options = _interopRequireDefault(require("./options/Options"));

var _browser = require("./utils/browser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

    _defineProperty(this, "_browser", (0, _browser.getBrowserInfo)());

    _defineProperty(this, "_timestamp", 0);

    _defineProperty(this, "_prevTimestamp", 0);

    _defineProperty(this, "_timestampHistory", []);

    _defineProperty(this, "_deltaHistory", []);

    _defineProperty(this, "_frame", 0);

    this._options = new _Options["default"](options);
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

exports["default"] = GameStats;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJHYW1lU3RhdHMiLCJvcHRpb25zIiwiX29wdGlvbnMiLCJPcHRpb25zIiwidGltZXN0YW1wIiwiX3ByZXZUaW1lc3RhbXAiLCJfdGltZXN0YW1wIiwiX3RpbWVzdGFtcEhpc3RvcnkiLCJwdXNoIiwiX2RlbHRhSGlzdG9yeSIsImxlbmd0aCIsImhpc3RvcnlMaW1pdCIsInNoaWZ0IiwiX2ZyYW1lIiwiZGVsdGFDdW11bGF0aXZlIiwibWFwIiwiZGVsdGEiLCJkZWx0YUF2ZXJhZ2UiLCJzdGF0cyIsImJyb3dzZXIiLCJfYnJvd3NlciIsInByZXZUaW1lc3RhbXAiLCJwcmVkaWN0ZWROZXh0VGltZXN0YW1wIiwiZnJhbWUiLCJmcHMiLCJNYXRoIiwicm91bmQiLCJmcHNBdmVyYWdlIiwiaGlzdG9yeSIsInRpbWVzdGFtcHMiLCJkZWx0YXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBS0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHcUJBLFM7OztBQUNuQjs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7OztBQUlBLHVCQUFrQztBQUFBLFFBQXRCQyxPQUFzQix1RUFBSixFQUFJOztBQUFBOztBQUFBOztBQUFBLHNDQWxETiw4QkFrRE07O0FBQUEsd0NBMUNRLENBMENSOztBQUFBLDRDQWpDWSxDQWlDWjs7QUFBQSwrQ0F4QnNCLEVBd0J0Qjs7QUFBQSwyQ0FmSyxFQWVMOztBQUFBLG9DQU5ULENBTVM7O0FBQ2hDLFNBQUtDLFFBQUwsR0FBZ0IsSUFBSUMsbUJBQUosQ0FBWUYsT0FBWixDQUFoQjtBQUNEO0FBRUQ7Ozs7Ozs7OzsyQkFLT0csUyxFQUFnQztBQUNyQyxXQUFLQyxjQUFMLEdBQXNCLEtBQUtDLFVBQTNCO0FBQ0EsV0FBS0EsVUFBTCxHQUFrQkYsU0FBbEI7O0FBRUEsV0FBS0csaUJBQUwsQ0FBdUJDLElBQXZCLENBQTRCSixTQUE1Qjs7QUFDQSxXQUFLSyxhQUFMLENBQW1CRCxJQUFuQixDQUF3QixLQUFLRixVQUFMLEdBQWtCLEtBQUtELGNBQS9DOztBQUVBLFVBQUksS0FBS0UsaUJBQUwsQ0FBdUJHLE1BQXZCLEdBQWdDLEtBQUtSLFFBQUwsQ0FBY1MsWUFBbEQsRUFBZ0UsS0FBS0osaUJBQUwsQ0FBdUJLLEtBQXZCO0FBQ2hFLFVBQUksS0FBS0gsYUFBTCxDQUFtQkMsTUFBbkIsR0FBNEIsS0FBS1IsUUFBTCxDQUFjUyxZQUE5QyxFQUE0RCxLQUFLRixhQUFMLENBQW1CRyxLQUFuQjtBQUU1RCxXQUFLQyxNQUFMO0FBQ0Q7QUFFRDs7Ozs7Ozs7NEJBS29CO0FBQ2xCO0FBQ0E7QUFFQSxVQUFJQyxlQUF1QixHQUFHLENBQTlCOztBQUNBLFdBQUtMLGFBQUwsQ0FBbUJNLEdBQW5CLENBQXVCLFVBQUNDLEtBQUQ7QUFBQSxlQUFtQkYsZUFBZSxJQUFJRSxLQUF0QztBQUFBLE9BQXZCOztBQUVBLFVBQU1BLEtBQWEsR0FBRyxLQUFLVixVQUFMLEdBQWtCLEtBQUtELGNBQTdDO0FBQ0EsVUFBTVksWUFBb0IsR0FBR0gsZUFBZSxHQUFHLEtBQUtMLGFBQUwsQ0FBbUJDLE1BQWxFO0FBRUEsVUFBTVEsS0FBaUIsR0FBRztBQUN4QkMsUUFBQUEsT0FBTyxFQUFFLEtBQUtDLFFBRFU7QUFFeEJoQixRQUFBQSxTQUFTLEVBQUUsS0FBS0UsVUFGUTtBQUd4QmUsUUFBQUEsYUFBYSxFQUFFLEtBQUtoQixjQUhJO0FBSXhCaUIsUUFBQUEsc0JBQXNCLEVBQUUsS0FBS2hCLFVBQUwsR0FBa0JXLFlBSmxCO0FBS3hCRCxRQUFBQSxLQUFLLEVBQUVBLEtBTGlCO0FBTXhCQyxRQUFBQSxZQUFZLEVBQUVBLFlBTlU7QUFPeEJNLFFBQUFBLEtBQUssRUFBRSxLQUFLVixNQVBZO0FBUXhCVyxRQUFBQSxHQUFHLEVBQUVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXLElBQUlWLEtBQUosR0FBWSxJQUF2QixDQVJtQjtBQVN4QlcsUUFBQUEsVUFBVSxFQUFFRixJQUFJLENBQUNDLEtBQUwsQ0FBVyxJQUFJVCxZQUFKLEdBQW1CLElBQTlCLENBVFk7QUFVeEJXLFFBQUFBLE9BQU8sRUFBRTtBQUFFQyxVQUFBQSxVQUFVLEVBQUUsS0FBS3RCLGlCQUFuQjtBQUFzQ3VCLFVBQUFBLE1BQU0sRUFBRSxLQUFLckI7QUFBbkQ7QUFWZSxPQUExQjtBQWFBLGFBQU9TLEtBQVA7QUFDRDs7Ozs7OztBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgQnJvd3NlciBmcm9tICcuL2ludGVyZmFjZXMvQnJvd3Nlcic7XHJcbmltcG9ydCBTdGF0aXN0aWNzIGZyb20gJy4vaW50ZXJmYWNlcy9TdGF0aXN0aWNzJztcclxuXHJcbmltcG9ydCBPcHRpb25zIGZyb20gJy4vb3B0aW9ucy9PcHRpb25zJztcclxuaW1wb3J0IHsgZ2V0QnJvd3NlckluZm8gfSBmcm9tICcuL3V0aWxzL2Jyb3dzZXInO1xyXG5cclxuLyoqXHJcbiAqIEdhbWVTdGF0cyBiaW5kcyB0byB5b3VyIGdhbWUgbG9vcCBhbmQgcHJvdmlkZXMgaGVscGZ1bCBzdGF0aXN0aWNzIGFib3V0IHlvdXIgZ2FtZSdzIHBlcmZvcm1hbmNlLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVN0YXRzIHtcclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgb3B0aW9ucyBmb3IgdGhpcyBpbnN0YW5jZSBvZiBHYW1lU3RhdHMuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge09wdGlvbnN9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfb3B0aW9uczogT3B0aW9ucztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGluZm9ybWF0aW9uIGFib3V0IHdoaWNoIGJyb3dzZXIgdGhlIHBsYXllciBpcyB1c2luZy5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7QnJvd3Nlcn1cclxuICAgKi9cclxuICBwcml2YXRlIF9icm93c2VyOiBCcm93c2VyID0gZ2V0QnJvd3NlckluZm8oKTtcclxuICAvKipcclxuICAgKiBUaGUgdGltZXN0YW1wIGFzIG9mIHRoZSBjdXJyZW50IGNhbGwgdG8gcmVjb3JkLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtET01IaWdoUmVzVGltZXN0YW1wfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3RpbWVzdGFtcDogRE9NSGlnaFJlc1RpbWVTdGFtcCA9IDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSB0aW1lc3RhbXAgYXMgb2YgdGhlIHByZXZpb3VzIGNhbGwgdG8gcmVjb3JkLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtET01IaWdoUmVzVGltZVN0YW1wfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3ByZXZUaW1lc3RhbXA6IERPTUhpZ2hSZXNUaW1lU3RhbXAgPSAwO1xyXG5cclxuICAvKipcclxuICAgKiBLZWVwcyBhIHJlY29yZCBvZiB0aW1lc3RhbXBzIHRvIGNvbXB1dGUgYWRkaXRpb25hbCBkYXRhLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtBcnJheTxET01IaWdoUmVzVGltZVN0YW1wPn1cclxuICAgKi9cclxuICBwcml2YXRlIF90aW1lc3RhbXBIaXN0b3J5OiBBcnJheTxET01IaWdoUmVzVGltZVN0YW1wPiA9IFtdO1xyXG5cclxuICAvKipcclxuICAgKiBLZWVwcyBhIHJlY29yZCBvZiBkZWx0YXMgdG8gY29tcHV0ZSBhZGRpdGlvbmFsIGRhdGEuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0FycmF5PG51bWJlcj59XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfZGVsdGFIaXN0b3J5OiBBcnJheTxudW1iZXI+ID0gW107XHJcblxyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB0aGUgY3VycmVudCBmcmFtZSBvZiB0aGUgZ2FtZSB0aGUgcGxheWVyIGlzIG9uLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfZnJhbWU6IG51bWJlciA9IDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cclxuICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMuaGlzdG9yeUxpbWl0PTEwXSBUaGUgYW1vdW50IG9mIGl0ZW1zIHRoYXQgd2lsbCBiZSBrZXB0IGluIGhpc3RvcnkgdG8gYmUgdXNlZCBpbiBjYWxjdWxhdGlvbnMuIFRoZSBtb3JlIGhpc3RvcnkgeW91IGtlZXAgdGhlIG1vcmUgYWNjdXJhdGUgdGhlIGNhbGN1bGF0aW9ucyBidXQgdGhlIGxvbmdlciB0aGV5IHdpbGwgdGFrZS5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBPYmplY3QgPSB7fSkge1xyXG4gICAgdGhpcy5fb3B0aW9ucyA9IG5ldyBPcHRpb25zKG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnRzIHJlY29yZGluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2FtZSdzIHN0YXRpc3RpY3MuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtET01IaWdoUmVzVGltZVN0YW1wfSB0aW1lc3RhbXAgVGhlIGN1cnJlbnQgdGltZSwgaW4gbWlsbGlzZWNvbmRzLCBzaW5jZSB0aGUgZ2FtZSBsb29wIGJlZ2FuLlxyXG4gICAqL1xyXG4gIHJlY29yZCh0aW1lc3RhbXA6IERPTUhpZ2hSZXNUaW1lU3RhbXApIHtcclxuICAgIHRoaXMuX3ByZXZUaW1lc3RhbXAgPSB0aGlzLl90aW1lc3RhbXA7XHJcbiAgICB0aGlzLl90aW1lc3RhbXAgPSB0aW1lc3RhbXA7XHJcblxyXG4gICAgdGhpcy5fdGltZXN0YW1wSGlzdG9yeS5wdXNoKHRpbWVzdGFtcCk7XHJcbiAgICB0aGlzLl9kZWx0YUhpc3RvcnkucHVzaCh0aGlzLl90aW1lc3RhbXAgLSB0aGlzLl9wcmV2VGltZXN0YW1wKTtcclxuXHJcbiAgICBpZiAodGhpcy5fdGltZXN0YW1wSGlzdG9yeS5sZW5ndGggPiB0aGlzLl9vcHRpb25zLmhpc3RvcnlMaW1pdCkgdGhpcy5fdGltZXN0YW1wSGlzdG9yeS5zaGlmdCgpO1xyXG4gICAgaWYgKHRoaXMuX2RlbHRhSGlzdG9yeS5sZW5ndGggPiB0aGlzLl9vcHRpb25zLmhpc3RvcnlMaW1pdCkgdGhpcy5fZGVsdGFIaXN0b3J5LnNoaWZ0KCk7XHJcblxyXG4gICAgdGhpcy5fZnJhbWUrKztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgc3RhdGlzdGljcy5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7U3RhdGlzdGljc31cclxuICAgKi9cclxuICBzdGF0cygpOiBTdGF0aXN0aWNzIHtcclxuICAgIC8vIGxldCBwcmVkaWN0ZWROZXh0VGltZXN0YW1wOiBudW1iZXIgPSAwO1xyXG4gICAgLy8gdGhpcy5fdGltZXN0YW1wSGlzdG9yeS5tYXAoKHRpbWVzdGFtcDogbnVtYmVyKSA9PiBwcmVkaWN0ZWROZXh0VGltZXN0YW1wICs9IHRpbWVzdGFtcCk7XHJcblxyXG4gICAgbGV0IGRlbHRhQ3VtdWxhdGl2ZTogbnVtYmVyID0gMDtcclxuICAgIHRoaXMuX2RlbHRhSGlzdG9yeS5tYXAoKGRlbHRhOiBudW1iZXIpID0+IGRlbHRhQ3VtdWxhdGl2ZSArPSBkZWx0YSk7XHJcblxyXG4gICAgY29uc3QgZGVsdGE6IG51bWJlciA9IHRoaXMuX3RpbWVzdGFtcCAtIHRoaXMuX3ByZXZUaW1lc3RhbXA7XHJcbiAgICBjb25zdCBkZWx0YUF2ZXJhZ2U6IG51bWJlciA9IGRlbHRhQ3VtdWxhdGl2ZSAvIHRoaXMuX2RlbHRhSGlzdG9yeS5sZW5ndGg7XHJcblxyXG4gICAgY29uc3Qgc3RhdHM6IFN0YXRpc3RpY3MgPSB7XHJcbiAgICAgIGJyb3dzZXI6IHRoaXMuX2Jyb3dzZXIsXHJcbiAgICAgIHRpbWVzdGFtcDogdGhpcy5fdGltZXN0YW1wLFxyXG4gICAgICBwcmV2VGltZXN0YW1wOiB0aGlzLl9wcmV2VGltZXN0YW1wLFxyXG4gICAgICBwcmVkaWN0ZWROZXh0VGltZXN0YW1wOiB0aGlzLl90aW1lc3RhbXAgKyBkZWx0YUF2ZXJhZ2UsXHJcbiAgICAgIGRlbHRhOiBkZWx0YSxcclxuICAgICAgZGVsdGFBdmVyYWdlOiBkZWx0YUF2ZXJhZ2UsXHJcbiAgICAgIGZyYW1lOiB0aGlzLl9mcmFtZSxcclxuICAgICAgZnBzOiBNYXRoLnJvdW5kKDEgLyBkZWx0YSAqIDEwMDApLFxyXG4gICAgICBmcHNBdmVyYWdlOiBNYXRoLnJvdW5kKDEgLyBkZWx0YUF2ZXJhZ2UgKiAxMDAwKSxcclxuICAgICAgaGlzdG9yeTogeyB0aW1lc3RhbXBzOiB0aGlzLl90aW1lc3RhbXBIaXN0b3J5LCBkZWx0YXM6IHRoaXMuX2RlbHRhSGlzdG9yeSB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBzdGF0cztcclxuICB9XHJcbn07Il19