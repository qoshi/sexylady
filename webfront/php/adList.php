<?php 
session_start(); //开启session
?>
<div>
	<table class="table table-hover">
		<tr>
			<td>#</td>
			<td>广告名称</td>
			<td>广告图标</td>
			<td>广告排序</td>
			<td>广告URL</td>
			<td>是否启用</td>
			<td>操作</td>
		</tr>
<?php
if(isset($_SESSION['user']))
{
	$userName = $_SESSION ['user'];
	include "../Model/ADModel.php";
	$AD = new ADModel;
	$adList = $AD->getADList ( $userName );
	$len = count ( $adList );
	if($len==0)
	{
		echo "<p class='bg-warning'>无广告！</p>";
	}else {
		for($x = 0; $x < $len; $x ++) {
			$ad = $adList [$x];
			echo "<tr>";
			echo "<td>".($x+1)."</td>";
			echo "<td>" . $ad ["name"] . "</td>";
			echo "<td><img src='" . $ad ["icon"] . "' height='40' width='40'></td>";
			echo "<td>" . $ad ["sort"] . "</td>";
			echo "<td><a href='".$ad["url"]."' >".$ad["url"]."</a></td>";
			echo "<td>".$ad["enable"]."</td>";
			echo "<td><span class='glyphicon glyphicon-pencil'></span><a href='editAD.php?id=".$ad["id"]."'>编辑</a><br><span class='glyphicon glyphicon-trash'></span><a href='../Action/delAD.php?id=".$ad["id"]."' onclick='return del()'>删除</a></td>";
			echo "</tr>";
		}
	}
}else {
	echo "<script>alert('请重新登录！');</script>";
	echo "<script>location.href='login.html';</script>";
}

?>
</table>
</div>

