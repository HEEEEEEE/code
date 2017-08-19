<?php
if($_GET['action']=='album_show'){
//Include each
require substr(dirname(__FILE__),0,-18).'/include/each.php';
//is dangerous operation check the uniqid
cUniqid();
	//filter for information filter for information filter for information
	//Include the function
	include PROJECTDIR.'include/engine/fu/fu_string.php';	
	$data=array();
	$data['cid']=string_filterid($_POST['cid'],0,12);
	$data['sort']=string_filtersortalbum($_POST['sort']);
	$data['search']=string_filtersearchalbum($_POST['search'],0,25);
	//filter for information filter for information filter for information
	
	//Save the infor Save the infor Save the infor
		/*Save the infor:update the album's sort custom by user*/
		$result_sort=sql("UPDATE
				He_sortalbum
			        SET
			            Sort_sor='{$data['sort']}'
			      WHERE
				Sort_atype=1				
			         AND
				Sort_cid='{$data['cid']}'				
			              AND
			                Sort_hid='{$_COOKIE['userid']}'
			   ");
		/*Save the infor:update the close's sort custom by user*/
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
 			         Calbum_cid='{$data['cid']}'
 			          AND				
			           Calbum_hid='{$_COOKIE['userid']}'
			             {$data['search']}
			  	          {$data['sort']}
		           ");
		/*infor to the browser:select the infor*/
		/*echo the source's number*/
		$html1=array();
		$search=sql_search("SELECT
				      COUNT(Calbum_id)
				     AS
				     num
				  FROM
				    He_calbum
				  WHERE
				    Calbum_type=1
				      AND
				       Calbum_cid='{$data['cid']}'
				        AND		    
				Calbum_hid='{$_COOKIE['userid']}'
			     			{$data['search']}
			     	 ORDER BY
			     	      Calbum_time
			     	      DESC      				     			
			     ");
		$html1['source_num']=htmlF($search['num']);		
}	
?>
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
	<dt><input type='hidden' class='HiddeN_projectsearchitemnum' value='<?php echo $html1['source_num'];?>' /></dt>	
	</dl>		
</div>
<?php 
      }
freeRT($result);
/*infor to the browser:echo the infor*/
//infor to the browser infor to the browser	     	 
?>											