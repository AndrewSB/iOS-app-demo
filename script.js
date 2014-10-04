/*Custom Font*/
@import url(http://fonts.googleapis.com/css?family=Open+Sans:300);

/*Basic Reset*/
* {margin: 0; padding: 0;}

body {
	background: #333;
	/*Removing scrollers*/
	overflow: hidden;
	/*A high perspective to give the UL an isometric look*/
	perspective: 3000;
}

h1 {
	color: white;
	font: 45px 'Open Sans';
	width: 500px;
	padding: 50px;
}

.grid {
	position: absolute; top: 100px; left: 0;
	/*Width = (225 + 20 + 20) * 4 = 1060*/
	width: 1060px;
	/*3D Transform*/
	transform: rotateX(60deg) rotateZ(-50deg);
	/*Preserve 3D style for children*/
	transform-style: preserve-3d;
}
.grid li {
	height: 400px; width: 225px;
	float: left; margin: 20px;
	list-style-type: none;
	/*Hide the lighting gradient from the front face*/
	background-size: 0, cover;
	/*Preserve 3D style for children(pseudo elements)*/
	transform-style: preserve-3d;
}
/*Left and Bottom Sides*/
.grid li:before, .grid li:after {
	content: '';
	position: absolute;
	/*100% height and width*/
	top: 0; left: 0; right: 0; bottom: 0;
	background: inherit;
	background-size: cover;
}
/*Left Side*/
.grid li:before {
	transform-origin: left center;
	transform: rotateY(90deg);
	/*Reducing the width of the left side for a flat feel*/
	width: 5px;
}
/*Bottom Side*/
.grid li:after {
	transform-origin: bottom center;
	transform: rotateX(90deg);
	/*Reducing the height*/
	height: 5px; top: auto; bottom: 0;
	/*Background fix - start the background from the bottom*/
	background-position: bottom center;
}
/*Shadow time - sadly all pseudo elements are used so we will have to add an HTML element in each LI*/
.s {
	position: absolute;
	/*30px smaller from each side*/
	top: 30px; left: 30px; right: 30px; bottom: 30px;
	background: rgba(0, 0, 0, 0.5);
	box-shadow: 0 0 30px 30px rgba(0, 0, 0, 0.5);
	/*Pushing down the shadow to give an elevated feel*/
	transform: translateZ(-50px);
}

/*We will add a light gradient to the sides to give some lighting effect*/
.one {
	background: 
		linear-gradient(45deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), 
		url("http://thecodeplayer.com/uploads/media/m1.png");
}
.two {
	background: 
		linear-gradient(45deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), 
		url("http://thecodeplayer.com/uploads/media/m2.png");
}
.three {
	background: 
		linear-gradient(45deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), 
		url("http://thecodeplayer.com/uploads/media/m3.png");
}
.four {
	background: 
		linear-gradient(45deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), 
		url("http://thecodeplayer.com/uploads/media/m4.png");
}