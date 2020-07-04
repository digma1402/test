document.getElementById('flang').onclick = function(){
			let login = document.getElementById('login').value;
			let password = document.getElementById('password').value;

			if (login == 'dmitry' && password == '34')
				document.location.replace("");
			else
				alert('Ошибка');
		}