window.onload = function () {
    var points = document.getElementsByClassName('enemie');
    points[0].addEventListener('click', showMassage);

// Функция покажет сообщение
    function showMassage(event) {
        var alert = document.getElementsByClassName('alert')[0];
        alert.classList.add('animateShow');
        /* После того, как сообщение показано запускаются таймеры,
                         которые уберут его в течении 5 секунд и очистят класс лист */
        setTimeout(animateHidding, 4000);
        setTimeout(clear, 5000);

        function animateHidding() {
            alert.classList.add('animateHide')

        }

                                        function clear() {
                                            alert.classList.remove('animateShow', 'animateHide');
        }
    }
}

