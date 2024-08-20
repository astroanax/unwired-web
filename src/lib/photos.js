export async function getPhotos(limit, size = { width: 1280, height: 800 }) {
    const photos = [
        ["./img/1.jpg", 1.33, "1"],
        ["./img/2.jpg", 1.5, "2"],
        ["./img/3.jpg", 1.35, "3"],
        ["./img/4.jpg", 1.5, "4"],
        ["./img/5.jpg", 1.57, "5"],
        ["./img/6.jpg", 1.5, "6"],
    ];

    return photos.reduce((acc, [src, aspectRatio, alt]) => {
            const source = { width: size.height * (aspectRatio / 10), height: size.height };
            const max = { width: size.width, height: size.height };
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