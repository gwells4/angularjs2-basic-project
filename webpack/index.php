<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<base href="<?php echo dirname($_SERVER["PHP_SELF"]) . "/"; ?>" />

		<title>Angular 2 Quickstart</title>

		<!--
		The lines:
			new HtmlWebpackPlugin({
			inject: 'head',
		in:
			webpack.common.js
		will insert "head" lines here.
		-->

	</head>
	<body>
		<quickstart-app>Loading&hellip;</quickstart-app>
	</body>
</html>