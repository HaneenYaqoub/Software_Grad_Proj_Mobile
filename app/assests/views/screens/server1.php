<?php
$con=mysql_connect("localhost","root","");
$db=mysql_select_db($con,"letsshopping");

$username=$_POST['user_name'];
$email=$_POST['email'];
$password=$_POST['password'];
$address=$_POST['address'];
$phonenumber=$_POST['phonenumber'];

$IQ="insert into signup(username,email,password,address,phonenumber) values ('$username','$email','$password','$address',phonenumber)";
$R=mysqli_query($con,$IQ);
if($R){
    $message="registered successfully";
}
else{
    $message="failed to register";
}
$Response[]=array("message"=>$message);
echo json_encode($Response);
?>