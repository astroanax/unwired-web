export async function getPhotos(limit, size = { width: 1280, height: 800 }) {
    const photos = [
        ["/img/1c.jpg", 13.3, "1"],
        ["/img/2c.jpg", 15, "2"],
        ["/img/3c.jpg", 13.5, "3"],
        ["/img/4c.jpg", 15, "4"],
        ["/img/5c.jpg", 15.7, "5"],
        ["/img/6c.jpg", 15, "6"],
    ];

    return photos.reduce((acc, [src, aspectRatio, alt], i) => {
            const source = { width: size.height * (aspectRatio / 20), height: size.height };
            const max = { width: size.width, height: size.height };
            const query = `?w=${ratio(aspect(source, max).width)}`;
            console.log(src, query);
            acc.push({
                src: src,
                alt: alt,
                ...aspect(source, max)
            });
        return acc;
    }, []);


    function ratio(size) {
        return size * devicePixelRatio;
    }

    function aspect(src, max) {
        const ratio = Math.min(max.width / src.width, max.height / src.height);
        return {
            width: Math.round(src.width * ratio),
            height: Math.round(src.height * ratio),
        };
    }
}