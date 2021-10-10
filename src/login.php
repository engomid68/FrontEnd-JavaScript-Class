<html>
<body>

Welcome <?php if $_POST["email"] == 'admin' && $_POST["pass"] == '123' ? echo $_POST["name"]; : print 'bye' ?><br>
Your email address is: <?php echo $_POST["pass"]; ?>

</body>
</html>