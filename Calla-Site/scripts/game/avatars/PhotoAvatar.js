import { setContextSize } from "../../html/canvas";
import { BaseAvatar } from "./BaseAvatar";

/**
 * An avatar that uses an Image as its representation.
 **/
export class PhotoAvatar extends BaseAvatar {

    /**
     * Creates a new avatar that uses an Image as its representation.
     * @param {(URL|string)} url
     */
    constructor(url) {
        super(false);

        const img = new Image();
        img.addEventListener("load", () => {
            const offset = (img.width - img.height) / 2,
                sx = Math.max(0, offset),
                sy = Math.max(0, -offset),
                dim = Math.min(img.width, img.height);
            setContextSize(this.g, dim, dim);
            this.g.drawImage(img,
                sx, sy,
                dim, dim,
                0, 0,
                dim, dim);
        });

        /** @type {string} */
        this.url
            = img.src
            = url && url.href || url;
    }
}