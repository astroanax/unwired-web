import { base } from '$app/paths';
export async function getPhotos(size = { width: window.innerWidth, height: window.innerHeight }) {
	const photos = [
		[`${base}/img/1c.jpg`, 13.3, '1'],
		[`${base}/img/2c.jpg`, 15, '2'],
		[`${base}/img/3c.jpg`, 13.5, '3'],
		[`${base}/img/4c.jpg`, 15, '4'],
		[`${base}/img/5c.jpg`, 15.7, '5'],
		[`${base}/img/6c.jpg`, 15, '6']
	];

	return photos.reduce((acc, [src, aspectRatio, alt]) => {
		const source = { width: size.height * (aspectRatio / 20), height: size.height };
		const max = { width: size.width, height: size.height };
		acc.push({
			src: src,
			alt: alt,
			...aspect(source, max)
		});
		return acc;
	}, []);

	function aspect(src, max) {
		const ratio = Math.min(max.width / src.width, max.height / src.height);
		return {
			width: Math.round(src.width * ratio),
			height: Math.round(src.height * ratio)
		};
	}
}
