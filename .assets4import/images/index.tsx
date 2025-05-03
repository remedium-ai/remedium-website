import { type FC } from "react";
import PreviewPng from "./preview.webp";
import HeroImg from "./hero-img.webp";
// import Logo from "./logo.webp";
import Logo from "./remedium1.svg";

// import HeroSlider1 from "./hero-slider-01.webp";
import HeroSlider2 from "./hero-slider-02.webp";
// import HeroSlider3 from "./hero-slider-03.webp";

// import HeroSlider1 from "./index-teaser.png";
import HeroSlider1 from "./slider/717342439.jpeg";
// import HeroSlider2 from "./hero-slider-02.webp";
// import HeroSlider3 from "./services-teaser.png";
import HeroSlider3 from "./slider/268793354.jpeg";
//import InfiniteImg1 from "./infinite-img-1.webp";
//import InfiniteImg2 from "./infinite-img-2.webp";

import InfiniteImg1 from "./sbi-teaser.png";
import InfiniteImg2 from "./services-teaser.png";

export const images = {
    preview: PreviewPng,
    heroImg: HeroImg,
    logo: Logo,
};

export type ImageProps = {
    srcLocal?: keyof typeof images;
    src?: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    loading?: "lazy" | "eager";
};

/**
 * @example
 * <Image src="logo" alt="logo" width="50px" height="50px" />
 */
export const Image: FC<ImageProps> = ({
    alt,
    srcLocal,
    height,
    width,
    src,
    loading,
    ...rest
}) => {
    /**
     * If srcLocal or src is not provided throw an error
     */
    if (!srcLocal && !src) {
        throw new Error("srcLocal or src is required");
    }

    /**
     * this component should be able to use local images or images from external sources
     */
    const image = srcLocal ? images[srcLocal] : { src, width, height };

    return (
        <img
            src={image.src}
            alt={alt}
            width={width ? width : image.width}
            height={height ? height : image.height}
            loading={loading}
            {...rest}
        />
    );
};

// default export of the images
export {
    PreviewPng,
    HeroSlider1,
    HeroSlider2,
    HeroSlider3,
    InfiniteImg1,
    InfiniteImg2,
};
