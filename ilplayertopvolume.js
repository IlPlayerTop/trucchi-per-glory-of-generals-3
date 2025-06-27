/**
 * IlPlayerTopVolume - Basic Volume Control Utility
 * Author: IlPlayerTop
 * License: Custom
 */

const IlPlayerTopVolume = {
    /**
     * Sets the volume of an audio or video element.
     * @param {string} elementId - The ID of the media element.
     * @param {number} volume - The desired volume (0.0 to 1.0).
     */
    setVolume(elementId, volume) {
        const media = document.getElementById(elementId);
        if (!media || !(media instanceof HTMLMediaElement)) {
            console.error('[IlPlayerTopVolume] Invalid element ID or element is not audio/video.');
            return;
        }
        if (typeof volume !== 'number' || volume < 0 || volume > 1) {
            console.error('[IlPlayerTopVolume] Volume must be a number between 0.0 and 1.0.');
            return;
        }
        media.volume = volume;
        console.log(`[IlPlayerTopVolume] Volume set to ${volume * 100}%.`);
    }
};

// Example usage:
// IlPlayerTopVolume.setVolume('myAudio', 0.5);

module.exports = IlPlayerTopVolume;
