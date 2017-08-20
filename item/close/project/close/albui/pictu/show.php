<?php
//Include each
if(isset($_GET['show'])){
	require substr(dirname(__FILE__),0,-18).'/include/each.php';
}
/*echo the source's number*/
$html0=array();
$search=sql_search("SELECT
		      COUNT(Calbum_id)
		     AS
		     num
		  FROM
		    He_calbum
		  WHERE
		    Calbum_type=1
		      AND
		       Calbum_cid='{$_GET['closeid']}'
		        AND		    
		Calbum_hid='{$_COOKIE['userid']}'		
	       ");
$html0['source_num']=htmlF($search['num']);
/*create the album sort*/
		//filter for information filter for information
		//need to search the information
		$result_sort=sql_search("SELECT
				    Sort_sor
				   FROM
				       He_sortalbum
				  WHERE
				       Sort_atype=1				
				     AND
				    Sort_cid='{$_GET['closeid']}'				
				   AND
				 Sort_hid='{$_COOKIE['userid']}'
				");
		//filter for information filter for information
		
		//Save the infor Save the infor Save the infor
		/*Save the infor:new the close's sort default by server*/
		if(!($result_sort)){
		$result_sort=sql("INSERT INTO
				He_sortalbum(
					             Sort_sor,
					                    Sort_atype,
					                 Sort_cid,
					             Sort_hid
				             )
				       VALUES
				             (
					      'ORDER BY Calbum_time DESC',
					       1,
						      '{$_GET['closeid']}',
					      '{$_COOKIE['userid']}'
				             )
		               ");
		}
		//Save the infor Save the infor Save the infor
		//infor to the browser infor to the browser
		/*infor to the browser:select the infor*/
		$result=sql("SELECT
			     Calbum_id,Calbum_name,Calbum_face,Calbum_des,Calbum_cid
			   FROM
			     He_calbum
			  WHERE
			     Calbum_type=1
			    AND
			     Calbum_cid='{$_GET['closeid']}'
			    AND
			     Calbum_hid='{$_COOKIE['userid']}'
			     		{$result_sort['Sort_sor']} 			     					     
			");		
?>
<link type='text/css' rel='stylesheet' href='<?php echo PROJECTCSSOTHERSDIR.'close/album/pictu/show.css'; ?>' />
<div id='AlbuM_con_mtool'>	
	<div id='AlbuM_con_mtoolnormal'>	
		    <div id='AlbumtooL' class='AlbumtooL'>	
			<dl>
			<dt id='AlbuM_delete' class='AlbuM_delete'>
			<span id='DeletE' class='DeletE' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/album/tool/delete.png';?>);">Delete</span>
			<span id='DeletenO' class='DeletenO' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/album/tool/delete.png';?>);">Delete</span>
			</dt>				
			<dt id='AlbuM_create' class='AlbuM_create'>
			<a id='AlbuM_createa' class='AlbuM_createa' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/album/tool/add.png';?>);">
			<span id='CreatE' class='CreatE' >Create</span>
			</a>
			<a id='AlbuM_createano' class='AlbuM_createano' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/album/tool/add.png';?>);">
			<span id='CreatenO' class='CreatenO' >Create</span>
			</a>
			</dt>
			<dt id='AlbuM_set' class='AlbuM_set'>
			<span id='SeT' class='SeT' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/album/tool/settings.png';?>);">Set</span>
			<span id='SetnO' class='SetnO' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/album/tool/settings.png';?>);">Set</span>
			</dt>
			</dl>
		    </div>									
	</div>		
</div>

<div id='AlbuM_con_oaback'>
	<div id='AoutsideforE'>	
	            <div id='AoutsideforE_div1'>
			<dl id='AoutsideforE_div1_dl1'>
			<dt><span>Hurry up</span></dt>
			</dl>
					
			<dl id='AoutsideforE_div1_dl2'>
			<dt><span>Just&nbsp;</span></dt>
			<dt id='AoutsideforE_add'>C<span id='AoutsideforE_addspan'>reate&nbsp;</span></dt>
			<dt><span>some albums into me</span></dt>
			</dl>
		</div>	
	</div>		
</div>
		
<div id='AlbuM_con_otooltop'>
	      <div id='AlbumprocoutsidE_topcenter'>
		<div id='AlbumiteM2'>		            
			<dl id='AlbumitemsearcH'>
				<dt><img id='AlbumitemsearcH_img' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/album/search/search_start.png'?>"></dt>
			</dl>
			
			<form id='AlbumitemsearcH_form' autocomplete="off">			
				<dl id='AlbumitemsearcH_menu'>			
				<dt><img id='AlbumitemsearcH_back' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/album/search/search_back.png'?>"></dt>
				<dt><input type='text' id='AlbumitemsearcH_input' value='' maxlength='25' /></dt>
				<dt><img id='AlbumitemsearcH_search' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/album/search/search_end.png'?>"></dt>
			</dl>
			</form>
		</div>	      
	            <div id='AlbumiteM1'>
			<dl id="IteM_num">
				<dt id="IteM_numshowdt">item:<span id="IteM_numshow"><?php echo $html0['source_num'];?></span></dt><dt id="ItemselecT_numshowdt">;selected:<span id="ItemselecT_numshow"></span></dt>
			</dl>
		</div>
	      </div>
	      
	      <div id='AlbumprocoutsidE_topright'>
		<div id='AoutsidE_toprighttool'>
			<dl id='AlbumitemsorT'>
				<dt><span id='AlbumitemsorT_mark'>sort</span></dt>
				<dt><span id='AlbumitemsorT_mark1'>sort</span></dt>
			</dl>
		</div>

	      </div>
		
	      <div id='AlbumprocoutsidE_topexpand'>
		<div id='AoutsidE_toprighttoolmenu'>
			<dl id='AlbumitemsorT_menu'>
				<dt><span id='AlbumitemsorT_datedea' class='date0'>sort by date[default</span></dt>
				<dt><span id='AlbumitemsorT_dateopp' class='date1'>sort by date[opposite</span></dt>
			</dl>
		</div>	
	      </div>
	</div>
	
<div id='AlbuM_con_album'>					
	<div id="AlbuM" class='album'>
<?php
/*infor to the browser:echo the infor*/
$html=array();
while(!!$search = sql_searchall($result)){
	$html['id']=htmlF($search['Calbum_id']);            
            $html['name']=htmlF($search['Calbum_name']);
            $html['face']=htmlF($search['Calbum_face']);
            $html['des']=htmlF($search['Calbum_des']);
            $html['cid']=htmlF($search['Calbum_cid']);
?>
<div id="<?php echo 'AlbuM-p'.$html['id']; ?>" class="album-p" style="background-image: url('<?php echo ROOTOTHERSDIR1.$html['face']; ?>')" data-src="<?php echo ROOTOTHERSDIR1.$html['face']; ?>">
	<dl class="album-p-mark">
	<dt>
	            <a href="<?php echo PROJECTOTHERSDIR.'close/album/source/picture.php?closeid='.$_GET['closeid'].'&calbumid='.$html['id']; ?>">
		<span class="album-p-mark-show" title='Picture for album' style="background-image: url(<?php echo ROOTOTHERSDIR1.'frame/album/picture/mark.png'; ?>)"></span>
		</a>
		<span class="album-p-mark-show-noface" title='add a face' style="background-image: url(<?php echo ROOTOTHERSDIR1.'frame/album/picture/mark.png'; ?>)"></span>
	</dt>
	</dl>	
	<dl class="album-p-name">
	<dt>
		<span class="album-p-name-show" title="<?php echo $html['name']; ?>"><?php echo $html['name']; ?></span>
	</dt>
	</dl>
	<dl style='display:none;'>
	<dt><input type='hidden' value="<?php echo $html['des']; ?>" class='album-p-des-hide' /></dt>
	</dl>		
</div>
<?php 
      }
freeRT($result);
/*infor to the browser:echo the infor*/
//infor to the browser infor to the browser	     	 
?>
	</div>											
</div>

<div id='AlbuM_con_otoolbottom'>
	<div id='AlbumprocoutsidE_bottom'>
		<div id='IteM_search'>
			<dl id="ItemsearcH_num">
			<dt id="ItemsearcH_numitemdt">item:<span id="ItemsearcH_numitem"><?php echo $html0['source_num'];?></span></dt>
			<dt id="ItemsearcH_numshowdt">;searched:<span id="ItemsearcH_numshow"><?php echo $html0['source_num'];?></span></dt>
			<dt id="ItemsearcH_numselectdt">;selected:<span id="ItemsearcH_numselect"></span></dt>
			</dl>
		</div>		
	</div>		
</div>
<div id='AlbuM_con_mtmenu'>
	<?php
	//Include the part the create menu
	require PROJECTDIR.'close/albui/pictu/create.php';
	   ?>
	<?php
	//Include the part the create menu
	require PROJECTDIR.'close/albui/pictu/set.php';
	   ?>
	<?php
	//Include the part the create menu
	require PROJECTDIR.'close/albui/pictu/delete.php';
	   ?>			   		
</div>							
<script src='<?php echo PROJECTJSOTHERSDIR.'close/album/pictu/show.js'; ?>' charset='utf-8'></script>