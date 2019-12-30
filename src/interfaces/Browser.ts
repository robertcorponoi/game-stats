'use strict'

/**
 * Describes the structure of the browser object provided by the Statistics object.
 */
export default interface browser {
  /**
   * The name of the browser being used.
   */
  name: string;

  /**
   * The version number of the browser being used.
   * 
   * This is a string because it could be non-standard across unique browsers.
   */
  version: string;
}