
var search = document.getElementById('search');
search.addEventListener( 'click', searchFunc);


function searchFunc(){
	let currentSearch = document.getElementsByTagName('option');
	let currentTask =  document.querySelector('.bg input:first-child').value;
	console.log(currentSearch)
	let sysyem;
	// Берем адрес для поиска 
	for( let i = 0; i < currentSearch.length; i++){ 
		if(!currentSearch[i].selected){
			continue
		}  else {
			sysyem = currentSearch[i].value;
			break
		}	
	}
	// Проверка: выбрана ли поисковая система и передан ли поисковой запрос
	if (sysyem == "undefined" ) {		
		showAlertSystem();
		// Предотвращаем последующее выполнение функции
		return;
	} else if( currentTask.length <1 ){		
		showAlertTarget();
		// Предотвращаем последующее выполнение функции
		return
	}
	// Открываем новое окно с результатами поиска
	var searchWin =  window.open(`${sysyem}`+`${currentTask}`);
}
// Требуем выбрать систему поиска
function showAlertSystem(){
	let target = document.querySelector('select');
	target.classList.add('redAlert');
} 
//Предотвращение отправки пустой строки запроса
function showAlertTarget(){
	let x = document.querySelector('form input:first-child');
	x.classList.add('redAlert');
	x.placeholder = 'ВВЕДИТЕ ЗАПРОС';
} 