
function initMap() {
    var element = document.getElementById('map');
 	var options = {
 	 	zoom: 5,
 	 	center: {lat: 48.390240, lng:  9.938315 }
 	};
 	// Создаем маркеры
 		var myMap = new google.maps.Map(element, options),
		// berlin
		marker1 = new google.maps.Marker({position: {lat: 52.471301, lng: 13.405978}, map: myMap,  animation: google.maps.Animation.BOUNCE}),
		// paris
	 	marker2 = new google.maps.Marker({position: {lat: 48.845961, lng: 2.335728}, map: myMap,  animation: google.maps.Animation.BOUNCE}),
	 	// vien
	 	marker3 = new google.maps.Marker({position: {lat: 48.185267, lng: 16.365800}, map: myMap,  animation: google.maps.Animation.BOUNCE}),
	 	// montreux
	 	marker4 = new google.maps.Marker({position: {lat: 46.429459, lng: 6.914912}, map: myMap,  animation: google.maps.Animation.BOUNCE});
 	
	var arr = [marker1, marker2, marker3, marker4];

 	// Добавляем пунктам меню с городами "infoWindow" на соответствующем маркере (должно показыватся "infoWindow" по событию onhover)
 	var apps = document.getElementsByClassName('city');
 	console.log(apps)
 	// Сюда будем записывать окно - infoWindow, чтобы можно было закрыть его сторонней функцией
 	var lastOpenedWindow;
 	// Добавляем обработчик при наведении
 	for (var i = 0; i < apps.length; i++) {
 		apps[i].addEventListener('mouseover', function(e){
 			// Создаем элемент, который будем выводить на карте "myMap", при наведении на пункт выпадающего меню
 			var card = document.createElement('div');
 			// Получаем пункт, на котором произошло событие
 			let target = e.currentTarget;
 			// Добавляем класс, который должен уменьшить и сформировать выводимый результат
			 	card.classList.add('info-card');
			// Записываем в наш элемент соответствующую разметку
			 	card.innerHTML = `<h4> ${target.dataset.title} </h4><img src="${target.dataset.url}">`;
			// Получаем имя нужного маркера из элемента DOM
	 		var marker = arr[+target.dataset.marker-1];
	 		// Создаем новое окно - infoWindow
	 		var infoWindow = new google.maps.InfoWindow({
		 		content: card
		 	})
		 	// Открываем окно на соответствующем маркере
	 		infoWindow.open(myMap, marker);
	 		// Передаем объект, содержащий выведенное окно, наружу, чтобы закрывать его, когда мышь уходит
	 		lastOpenedWindow = infoWindow;
 		})
 	} // Обработчик, который будет закрывать infoWindow, когда мышь будет уходть из пункста меню
 	for (var i = 0; i < apps.length; i++) {
 		apps[i].addEventListener('mouseout', function(e){
 			if(lastOpenedWindow){
 				lastOpenedWindow.close()
 			}
 		});
 	}
}