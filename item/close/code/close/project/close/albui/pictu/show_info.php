<?php
if($_GET['action']=='album_show'){
//Include each
require substr(dirname(__FILE__),0,-18).'/include/each.php';
//Check the login state
// isloginPT();
//is dangerous operation check the uniqid
cUniqid();
/*echo the source's number*/
$htmlnum=array();
$search=sql_search("SELECT
		      COUNT(Calbum_id)
		     AS
		     num
		  FROM
		    He_calbum
		  WHERE
		    Calbum_type=1
		      AND
		       Calbum_cid='{$_POST['cid']}'
		        AND		    
		Calbum_hid='{$_COOKIE['userid']}'		
	       ");
$htmlnum['album_num']=htmlF($search['num']);
	//infor to the browser infor to the browser
		/*infor to the browser:select the infor*/
		$result=sql("SELECT
                                        Calbum_id,Calbum_name,Calbum_face,Calbum_des,Calbum_cid
			   FROM
			     He_calbum
			   WHERE
 			     Calbum_type=1
			       AND
 			    Calbum_cid='{$_POST['cid']}'
 			     AND				
			  Calbum_hid='{$_COOKIE['userid']}'
 			   AND				
			Calbum_face!=''
		           ");
}	
?>
<div style='display:none;'><?php //HiddeN for speacil ?>
	<dl>						
	<dt><input type='hidden' id='HiddeN_projectalbumitemid' value='' /></dt>
	<dt><input type='hidden' id='HiddeN_projectalbumitemnum' value='<?php echo $htmlnum['album_num'];?>' /></dt>	
	</dl>	
</div>
<div id='AlbuM_back'></div>
<div id='AlbuM_fore'>
<div id='AlbuM_forecenter'>
            <div id='AlbuM_title'>
	       <dl>
	          <dt id='AlbuM_titlename'>
		<span>C</span><span>hoose a album</span>	 
	          </dt>
	          <dt id='AlbuM_titleclose'>
		<img id='AlbuM_titlecloseimg' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/album/showpublic/close.png'?>" />		
	          </dt>	
	       </dl>            
            </div>
	<div id='AlbumcenteR_projectshow'>
		<div id='AlbumcenteR_projectshow_start'>
			<div id='AlbuM_filemarkframe'>
				<dl id='AlbuM_filemark1' class='AlbuM_filemark'>
					<dt id='AlbuM_filemark1_l1' class='AlbuM_filemark_l1'>
					<span>picture</span>
					</dt>
					<dt id='AlbuM_filemark1_l2' data-parentid='AlbuM_filemark1' class='AlbuM_filemark_l2' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/album/showpublic/album.png';?>);">
					<img src='<?php echo PROJECTDATAOTHERSDIR.'close/image/album/showpublic/mark/picture.png';?>' alt='' />
					</dt>				
				</dl>																
			</div>						
		</div>		
		<div id='AlbumcenteR_projectshow_e'>
			<div id='AlbumprojectshowE_top'>
			</div>
			<div id='AlbumprojectshowE_center'>
				<div id='AlbuM_source_div'>
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
<div contenteditable='false' id="<?php echo 'AlbuM-p'.$html['id']; ?>" class="album-p" style="background-image: url('<?php echo ROOTOTHERSDIR1.$html['face']; ?>')">
	<dl class="album-p-mark">
		<dt>
		            <a target='_blank' href="<?php echo PROJECTOTHERSDIR.'close/album/source/picture.php?closeid='.$html['cid'].'&calbumid='.$html['id']; ?>">
			<span class="album-p-mark-show" style="background-image: url(<?php echo ROOTOTHERSDIR1.'frame/album/picture/mark.png'; ?>)"></span>
			</a>
		</dt>
	</dl>	
	<dl class="album-p-name">
		<dt>
			<span class="album-p-name-show" title="<?php echo $html['name']; ?>"><?php echo $html['name']; ?></span>
		</dt>
	</dl>
	<dl class='album-p-des'>
	<dt><span class='album-p-des-hide'><?php echo $html['des']; ?></span></dt>	
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
		</div>								
	</div>
	<div id='AlbuM_done'>
	       <dl style='display:none;'>                                 
		<dt id='ToalbuM_dl1dt1'>
		<a target='_blank' href="<?php echo PROJECTOTHERSDIR.'close/album.php' ?>">
		<span id='AlbuM'>AlbuM</span>
		</a>
		</dt>	
	       </dl>	
	       <dl>                                 
		<dt>
		<input name='SubmiT' type='button' value='NexT' id='SubmiT'/>
		</dt>	
	       </dl>		       		
	</div>			
</div>
</div>



