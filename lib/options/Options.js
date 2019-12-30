'use strict';
/**
 * Defines the options that are available for an instance of GameStats and their default values.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

exports["default"] = Options;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL09wdGlvbnMudHMiXSwibmFtZXMiOlsiT3B0aW9ucyIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLE87QUFDbkI7Ozs7Ozs7Ozs7QUFXQTs7O0FBR0EsaUJBQVlDLE9BQVosRUFBNkI7QUFBQTs7QUFBQSx3Q0FMTixFQUtNOztBQUMzQkMsRUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWMsSUFBZCxFQUFvQkYsT0FBcEI7QUFDRCxDOzs7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgdGhlIG9wdGlvbnMgdGhhdCBhcmUgYXZhaWxhYmxlIGZvciBhbiBpbnN0YW5jZSBvZiBHYW1lU3RhdHMgYW5kIHRoZWlyIGRlZmF1bHQgdmFsdWVzLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGFtb3VudCBvZiBpdGVtcyB0aGF0IHdpbGwgYmUga2VwdCBpbiBoaXN0b3J5IHRvIGJlIHVzZWQgaW4gY2FsY3VsYXRpb25zLlxyXG4gICAqIFxyXG4gICAqIFRoZSBtb3JlIGhpc3RvcnkgeW91IGtlZXAgdGhlIG1vcmUgYWNjdXJhdGUgdGhlIGNhbGN1bGF0aW9ucyBidXQgdGhlIGxvbmdlciB0aGV5IHdpbGwgdGFrZS5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKiBcclxuICAgKiBAZGVmYXVsdCAxMFxyXG4gICAqL1xyXG4gIGhpc3RvcnlMaW1pdDogbnVtYmVyID0gMTA7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFRoZSBpbml0aWFsaXphdGlvbiBvcHRpb25zIHBhc3NlZCB0byBHYW1lU3RhdHMuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogT2JqZWN0KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xyXG4gIH1cclxufTsiXX0=