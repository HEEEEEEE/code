<link type='text/css' rel='stylesheet' href='<?php echo PROJECTCSSOTHERSDIR."close/album/pictu/set.css"?>' />
<div id='AlbuM_con_mtmenuset'>
<div id='AlbumsMbacK'></div>
<div id='AlbumsM'>
<div class='AlbumsM'>
	<div id='AlbumsM_top'>
	       <dl>                                 
		<dt id='AlbumsM_toptitle'>
		<span>S</span><span>et</span>		 
		</dt>
		<dt id='AlbumsM_topmarkdt'>
		<img id='MarK' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/album/toolmenu/palbum.png'?>" />
		</dt>
		<dt id='AlbumsM_topclosedt'>
		<img id='AlbumsM_topclose' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/album/toolmenu/close.png'?>" />		
		</dt>	
	       </dl>	
	</div>
	
	<div id='AlbumsM_content'>
		<form id='AlbumsM_form' name='close_set' autocomplete="off">
		       <dl style='display:none;'>                                 
			<dt id='AlbumsM_sid'>
			<input type='hidden' value='' id='ID' name='id' />
			</dt>	
		       </dl>		
		       <dl>                                 
			<dt id='AlbumsM_sname'>
			<span>NamE</span>
			<input type='text' value='' id='NamE' name='name' maxlength='25' />
			</dt>	
		       </dl>
		       
		       <dl id='AlbumsM_sfaceadd'>  		                                      
			<dt id='AlbumsM_sup'>
			<input type='text' name='up' value='' id='UP' />			
			</dt>			
			<dt id='AlbumsM_supcover'><span>FacE</span><span>add</span></dt>																
		       </dl>
		       <dl id='AlbumsM_sface'>  		                                      			
			<dt>
			<span id='AlbumsM_sfacestr'>FacE</span>
			</dt>
			
			<dt id='AlbumsM_sfaceimgdt'>
			<span><img id='AlbumsM_sfaceimg' src="" /></span>
			<span></span>			
			</dt>
			
			<dt>
			<span id='AlbumsM_sfacechange'>ChangE</span>
			</dt>
			<dt>
			<span id='AlbumsM_sfaceremove'><img id='AlbumsM_sfaceremoveimg' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/album/toolmenu/cancel.png'?>" title='remove' /></span>
			</dt>																						
		       </dl>
		       		       		       
		       <dl id='AlbumsM_sdes'>                                 
			<dt>
			<span>DescriptioN</span>
			</dt>
			<dt id='DeSdt'>
			<textarea id='DeS' name='des'></textarea>
			</dt>				
		       </dl>		       		       		       		
		</form>
	</div>
	
	<div id='AlbumsM_bom'>
	       <dl>                                 
		<dt>
		<input name='SubmiT' type='button' value='DONE' id='SubmiT'/>
		</dt>	
	       </dl>		       		
	</div>

	
	<div>
	       <dl>                                 
		<dt id='AlbumsM_tip'>
		<span id='AlbumsM_tipspan1'></span>		 
		</dt>
		<dt id='AlbumsM_tip1'>
		<span id='AlbumsM_tipspan2'></span>		 
		</dt>			
	       </dl>
	</div>
</div>	
</div>
</div>	
<script src="<?php echo PROJECTJSOTHERSDIR."close/album/pictu/set.js"?>"></script>