<?php

	$config = APP_DEBUG ? 'development' : 'production';

	return require("config.$config.php");
