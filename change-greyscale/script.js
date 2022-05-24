const div = document.createElement('div');
const img = document.createElement('img');
const button = document.createElement('button');

document.body.append(div);
div.append(button);
div.append(img);


img.setAttribute('src', '/plant.jpeg');

div.style.cssText = `
				margin: 0 auto;
				max-width: 600px;
				height: 450px;
				margin-top: 110px;
				border: 2px solid #fff;
				border-radius:15px;
				position: relative;	`;

img.style.cssText = `
				width: 100%;
				height: 100%;
				object-fit:cover;
				border-radius:15px;`;

function getImg() {
	img.style.filter = 'grayscale(100%)'
}


button.addEventListener('click', getImg);