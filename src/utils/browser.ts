'use strict'

import Browser from '../interfaces/Browser';

/**
 * Gets the name and version of the browser that the website visitor is using.
 * 
 * @returns {Browser}
 */
export function getBrowserInfo(): Browser {
  const userAgent: string = navigator.userAgent;

  const browserInfo: RegExpMatchArray = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)!;

  return { name: browserInfo[1], version: browserInfo[2] };
}