

// Создаем маркеры высоко, чтобы отсовсюду видно было 
var marker1,marker2,marker3,marker4;

function initMap() {
    var element = document.getElementById('map');
 	var options = {
 	 	zoom: 15, 
 	 	center: {lat: 59.437714, lng: 24.757020 }
 	};
 	// Создаем карту, и маркеры на карте*/ 
 	var myMap = new google.maps.Map(element, options),

	 	marker1 = new google.maps.Marker({position: {lat: 59.433025, lng: 24.758840}, map: myMap}),
	 	marker2 = new google.maps.Marker({position: {lat: 59.441318, lng: 24.759968}, map: myMap}),
	 	marker3 = new google.maps.Marker({position: {lat: 59.438833, lng: 24.749589}, map: myMap}),
	 	marker4 = new google.maps.Marker({position: {lat: 59.432056, lng: 24.749180}, map: myMap});
	// Собираем маркеры в массив, чтобы удобно было их передавать в другие функции
	var arr = [marker1, marker2, marker3, marker4];

 	// Добавляем нашим карточкам событие при клике (должно показыватся "infoWindow" с уменьшеным изображением самой карточки)
 	var apps = document.getElementsByClassName('subcard');
 	// Сюда будем записывать окно - infoWindow, чтобы можно было закрыть его сторонней функцией
 	var lastOpenedWindow;
 	// Добавляем обработчик при наведении
 	for (var i = 0; i < apps.length; i++) {
 		apps[i].addEventListener('mouseover', function(e){
 			// Создаем элемент, который будем выводить на карте "myMap", при наведении на карточку слева
 			var smallCard = document.createElement('div');
 			// Получаем карточку, на которой произошло событие
 			let target = e.currentTarget;
 			// Добавляем класс, который должен уменьшить и сформировать выводимый результат
			 	smallCard.classList.add('scale');
			// Записываем в наш элемент "уменьшеную карточку"
			 	smallCard.innerHTML = target.innerHTML;
			// Получаем имя нужного маркера из элемента DOM
	 		var marker = arr[target.dataset.marker];
	 		// Создаем новое окно - infoWindow
	 		var infoWindow = new google.maps.InfoWindow({
		 		content: smallCard
		 	})
		 	// Открываем окно на соответствующем маркере
	 		infoWindow.open(myMap, marker);
	 		// Передаем объект, содержащий выведенное окно, наружу, чтобы закрывать его
	 		lastOpenedWindow = infoWindow;
 		})
 	} // Обработчик, который будет закрывать infoWindow, когда мышь будет уходть с "карточки"
 	for (var i = 0; i < apps.length; i++) {
 		apps[i].addEventListener('mouseout', function(e){
 			if(lastOpenedWindow){
 				lastOpenedWindow.close()
 			}
 		});
 	}
}
