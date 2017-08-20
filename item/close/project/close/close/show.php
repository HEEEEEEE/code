<?php
//is dangerous operation check the uniqid
cUniqid();
/*echo the source's number*/
$html1=array();
$search=sql_search("SELECT
		COUNT(Close_id)
                    AS
		num
	        FROM
		He_close
	        WHERE
		Close_hid='{$_COOKIE['userid']}'
	      ");
$html1['source_num']=htmlF($search['num']);
            //filter for information filter for information
            	//need to search the information
	$result_sort=sql_search("SELECT
			      Sort_sort
			   FROM
			      He_sortclose
			  WHERE
			      Sort_hid='{$_COOKIE['userid']}'
		           ");
	//filter for information filter for information
	
	//Save the infor Save the infor Save the infor
		/*Save the infor:new the close's sort default by server*/
	if(!($result_sort)){
	 	$result_sort=sql("INSERT INTO
			       He_sortclose(	
	 			            Sort_sort,				
					Sort_hid		
				        )
				      VALUES
	 			       (
	 			            'ORDER BY Close_time DESC',
					'{$_COOKIE['userid']}'					
			                   )
		                ");
	}
	//Save the infor Save the infor Save the infor			
?>
<div id='CoutsidebacK'></div>
<div id='CoutsideforE'>
            <div id='CoutsideforE_div1'>
		<dl id='CoutsideforE_div1_dl1'>
		<dt><span>Hurry up</span></dt>
		</dl>		
		<dl id='CoutsideforE_div1_dl2'>
		<dt><span>Just&nbsp;</span></dt>
		<dt id='CoutsideforE_CloseadD'>C<span id='CoutsideforE_CloseadDspan'>reate&nbsp;</span></dt>
		<dt><span>some closes into me</span></dt>
		</dl>
	</div>	
</div>
<div id="CloseprocoutsidE" >
	<div id='CloseprocoutsidE_top'>
	            <div id='CloseiteM1'>
			<dl id='CloseitemnuM'>
			<dt>item:<span id='CloseitemnuM_show'><?php echo $html1['source_num'];?></span></dt>
			</dl>
		</div>
		<div id='CloseiteM2'>		            
			<dl id='CloseitemsearcH'>
			<dt><img id='CloseitemsearcH_img' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/close/search_start.png'?>"></dt>
			</dl>
			<form id='CloseitemsearcH_form' autocomplete="off">			
			<dl id='CloseitemsearcH_menu'>			
			<dt><img id='CloseitemsearcH_back' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/close/search_back.png'?>"></dt>
			<dt><input type='text' id='CloseitemsearcH_input' value='' maxlength='25' /></dt>
			<dt><img id='CloseitemsearcH_search' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/close/search_end.png'?>"></dt>
			</dl>
			</form>
		</div>				
	</div>
	<div id='CloseprocoutsidE_left'>
		<div id='CoutsidE_lefttool'>
			<dl id='CloseitemsorT'>
			<dt><span id='CloseitemsorT_mark'>sort</span></dt>
			<dt><span id='CloseitemsorT_mark1'>sort</span></dt>
			</dl>
		</div>
		<div id='CoutsidE_lefttoolmenu'>
			<dl id='CloseitemsorT_menu'>
			<dt><span id='CloseitemsorT_datedea' class='date0'>sort by date[default</span></dt>
			<dt><span id='CloseitemsorT_dateopp' class='date1'>sort by date[opposite</span></dt>
			</dl>
		</div>
	</div>
	
	<div id="CloseprocinsidE" ></div>
	
	<div id='CloseprocoutsidE_bottom'>
		<div id='CoutsidE_bomitemsnum'>
			<dl id="CloseitemsearcH_num">
			<dt id="CloseitemsearcH_numitemdt">item:<span id="CloseitemsearcH_numitem"><?php echo $html1['source_num'];?></span></dt><dt id="CloseitemsearcH_numshowdt">;searched:<span id="CloseitemsearcH_numshow"><?php echo $html1['source_num'];?></span></dt>
			</dl>
		</div>		
	</div>	
</div>