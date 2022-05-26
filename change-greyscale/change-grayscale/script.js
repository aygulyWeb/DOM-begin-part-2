const div = document.createElement('div');
const img = document.createElement('img');
const imgGray = document.createElement('img');

document.body.append(div);
div.append(img);
div.append(imgGray);


img.setAttribute('src', 'plant.jpeg');
img.classList.add('imageColor');
imgGray.setAttribute('src', 'plant.jpeg');

div.style.cssText = `
				margin: 0 auto;
				max-width: 600px;
				height: 450px;
				margin-top: 110px;
				border: 2px solid #fff;
				border-radius:15px;
				position: relative;	`;

img.style.cssText = `
				width: 50%;
				height: 100%;
				object-fit:cover;
				border-radius:15px;`;
imgGray.style.cssText = `
				position: absolute;
				top:0;
				left:0;
				width: -50%;
				height: 100%;
				object-fit:cover;
				border-radius:15px;
				filter:grayscale(100%);
				z-index: -1;`


div.addEventListener('mousemove', (event) => {
	let x = event.offsetX;
	img.classList.remove('transition');
	img.style.width = x + 'px';

})

div.addEventListener('mouseleave', () => {
	img.style.width = 50 + '%';
	img.classList.add('transition');

})