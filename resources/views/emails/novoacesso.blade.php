<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<h4>Seja bem vindo(a), {{ $nome}}</h4>
	<p>Você acabou de acessar o sistema utilizando seu email: {{ $email}}</p>
	<p>Data e hora de acesso: {{ $datahora}}</p>

	<div>
		<img width="10%" height="10%" 
		src="{{ $message->embed( public_path(). '/img/logo.jpg' ) }}">
	</div>

</body>
</html>