document.getElementById('flang').onclick = function(){
			let login = document.getElementById('login').value;
			let password = document.getElementById('password').value;

			if (login == 'dmitry' && password == '34')
				document.location.replace("https://digma1402.github.io/load.ru/");
			else
				alert('Ошибка');
		}