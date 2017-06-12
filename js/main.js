// var name = ' DAnNy  '
// console.log(name.toLowerCase())
// console.log(name.toUpperCase())
// console.log(name.trim())



//google maps API
// function initialize() {
// 	// body...
// 	var mapProp = {
// 		center: new google.maps.LatLng(37.7694,122.4862),
// 		zoom:7,
// 		mapTypeId: google.maps.MapTypeId.ROADMAP
// 	}
// 	var map = new google.maps.Map(document.getElementById('googleMap'), mapProp)
// }
// google.maps.event.addDomListener(window, 'load', initialize)

// Google books API

function booksearch(){
	var search = document.getElementById('search').value
	document.getElementById('results').innerHTML = ""
	console.log(search)
	$.ajax({
		url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
		dataType: 'json',

		success: function(data){
			var results = document.getElementById('results')
			var author = document.getElementById('author')
			var pub = document.getElementById('pub')
			var img = document.getElementById('img')
			for (var i = 0; i < data.items.length; i++) {
				results.innerHTML += "<h2>" + data.items[i].volumeInfo.title + "</h2>"
				author.innerHTML += "<h2>" + data.items[i].volumeInfo.authors + "</h2>"
				pub.innerHTML += "<h3>" + data.items[i].volumeInfo.publisher + "</h3>"
				img.innerHTML += "<img src= " + data.items[i].volumeInfo.imageLinks.thumbnail + ">"
			}
		},
		type: 'GET'

	})

}
document.getElementById('button').addEventListener('click', booksearch, false)













