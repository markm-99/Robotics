import '../../stencil.core';
export declare class Compass {
    compassElement: HTMLElement;
    /**
     * The compass direction (in degrees) to which the compass should point.
     */
    bearing: number;
    /**
     * The compass direction (in degrees) the device is facing.
     */
    heading: number;
    /**
     * Specifies whether or not to show the heading
     * and bearing values next to the compass, for
     * debugging purposes.
     */
    showValues: boolean;
    render(): JSX.Element;
}
