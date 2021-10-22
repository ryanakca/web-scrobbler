'use strict';

const playerBar = '#music';

function getCataID () {
    return Util.getTextFromSelectors(`${playerBar} .u-album`);
}

Connector.useMediaSessionApi();

/**
 * It should be sufficient to set
 *
 * Connector.playerSelector = `.u-control.u-process';
 *
 * Unfortunately, this results in "Web Scrobbler: `Connector.playerSelector` is
 * empty. The current connector is expected to manually detect state changes"
 * in Firefox.
 *
 * Surely setting playerSelector to body should do it, but same thing?
 *
 */

Connector.playerSelector = 'body';

Connector.artistSelector = `${playerBar} .u-artist`;

Connector.trackSelector = `${playerBar} .u-music-title`;

Connector.albumSelector = () => {
    const cataID = getCataID ();
    const albumHeader = $(`.eps._playAlbum[data-catalogueid="${cataID}"]`);
    return albumHeader[0].lastChild.data;
}

Connector.currentTimeSelector = `${playerBar} .u-control.u-surplusTime`;

Connector.durationSelector = `${playerBar} .u-control .u-time`;

Connector.pauseButtonSelector = `${playerBar} .u-play-btn.ctrl-play.paused`;

Connector.trackArtSelector = `${playerBar} .u-cover img`;

Connector.getUniqueID = () => {
        const uAlbum = $('${playerBar} span .u-album`);
        const cataID = getCataID();
	const trackNum = uAlbum.attr('data-tracknum');
	return `${cataID}+${trackNum}`;
};
