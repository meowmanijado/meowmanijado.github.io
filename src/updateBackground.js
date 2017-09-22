export default function updateBackground() {
	const randColor1 = {
		r: Math.floor(Math.random() * 256),
		g: Math.floor(Math.random() * 256),
		b: Math.floor(Math.random() * 256)
	};

	const randColor2 = {
		r: Math.floor(Math.random() * 256),
		g: Math.floor(Math.random() * 256),
		b: Math.floor(Math.random() * 256)
	};

	const color1 = "rgb("+randColor1.r+","+randColor1.g+","+randColor1.b+")";
	const color2 = "rgb("+randColor2.r+","+randColor2.g+","+randColor2.b+")";

	document.body.style.background = 'linear-gradient(20deg, '+color1+', '+color2+')';
}