import { settings } from '../settings';

let FALLBACK_RESOLUTION_FOR_URL = 0;

/**
 * get the fallback resolution / device pixel ratio of an asset. This is used
 * in conjunction with getResolutionOfUrl
 *
 * @memberof PIXI.utils
 * @function getFallbackResolutionOfUrl
 * @return {number} fallback resolution / device pixel ratio. If 0, then ignore.
 */
export function getFallbackResolutionOfUrl() 
{
	return FALLBACK_RESOLUTION_FOR_URL;
}

/**
 * set the fallback resolution / device pixel ratio of an asset.
 *
 * @memberof PIXI.utils
 * @function setFallbackResolutionOfUrl
 * @param {number} value - the fallback value if no filename prefix is set.
 */
export function setFallbackResolutionOfUrl(value)
{
	FALLBACK_RESOLUTION_FOR_URL = value;
}

/**
 * get the resolution / device pixel ratio of an asset by looking for the prefix
 * used by spritesheets and image urls
 *
 * @memberof PIXI.utils
 * @function getResolutionOfUrl
 * @param {string} url - the image path
 * @param {number} [defaultValue=1] - the defaultValue if no filename prefix is set.
 * @return {number} resolution / device pixel ratio of an asset
 */
export function getResolutionOfUrl(url, defaultValue)
{
    const resolution = settings.RETINA_PREFIX.exec(url);

    if (resolution)
    {
        return parseFloat(resolution[1]);
    } 
    else 
    {
    	const fallback = getFallbackResolutionOfUrl();
    	if (fallback)
    	{
	        return fallback;
    	}
    }

    return defaultValue !== undefined ? defaultValue : 1;
}
