/**
 * Functionality for adding images in SVG tree.
 */
/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */
import { Sprite, ISpriteProperties, ISpriteAdapters, ISpriteEvents } from "../Sprite";
/**
 * ============================================================================
 * REQUISITES
 * ============================================================================
 * @hidden
 */
/**
 * Defines properties for [[Image]].
 */
export interface IImageProperties extends ISpriteProperties {
    /**
     * A URI of the image.
     *
     * @type {string}
     */
    href?: string;
    /**
     * Sets image `width` in relation to its `height`.
     *
     * @type {number}
     */
    widthRatio?: number;
    /**
     * Sets image `height` in relation to its `width`.
     *
     * @type {number}
     */
    heightRatio?: number;
}
/**
 * Defines events for [[Image]].
 */
export interface IImageEvents extends ISpriteEvents {
}
/**
 * Defines adapters for [[Image]].
 *
 * @see {@link Adapter}
 */
export interface IImageAdapters extends ISpriteAdapters, IImageProperties {
}
/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * Used to add `<image>` elements to SVG.
 *
 * @see {@link IImageEvents} for a list of available events
 * @see {@link IImageAdapters} for a list of available Adapters
 */
export declare class Image extends Sprite {
    /**
     * Defines available properties.
     *
     * @type {IImageProperties}
     */
    _properties: IImageProperties;
    /**
     * Defines available adapters.
     *
     * @type {IImageAdapters}
     */
    _adapter: IImageAdapters;
    /**
     * Defines available events.
     *
     * @type {IImageEvents}
     */
    _events: IImageEvents;
    /**
     * Constructor
     */
    constructor();
    /**
     * Draws an `<image>` element.
     *
     * @ignore Exclude from docs
     */
    draw(): void;
    /**
     * @return {string} Image URI
     */
    /**
     * An image URI.
     *
     * @param {string}  value  Image URI
     */
    href: string;
    /**
     * @return {number} Ratio
     */
    /**
     * Sets image `width` relatively to its `height`.
     *
     * If image's `height = 100` and `widthRatio = 0.5` the actual width will be
     * `50`.
     *
     * @param {number}  value  Ratio
     */
    widthRatio: number;
    /**
     * @return {number} Ratio
     */
    /**
     * Sets image `height` relatively to its `width`.
     *
     * If image's `width = 100` and `heightRatio = 0.5` the actual height will be
     * `50`.
     *
     * @param {number}  value  Ratio
     */
    heightRatio: number;
    /**
     * Updates bounding box based on element dimension settings.
     *
     * @ignore Exclude from docs
     */
    measureElement(): void;
}
