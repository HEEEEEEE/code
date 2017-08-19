<?php
if($_GET['action']=='filebox_show'){
//Include each
require substr(dirname(__FILE__),0,-16).'/include/each.php';
//Check the login state
// isloginPT();
//is dangerous operation check the uniqid
cUniqid();
/*echo the source's number*/
$html=array();
$search=sql_search("SELECT
		COUNT(Fileboxpic_id)
		AS
		num
		FROM
		He_fileboxpic
		WHERE
		Fileboxpic_hid='{$_COOKIE['userid']}'
		");
$html['source_num']=htmlF($search['num']);
	//infor to the browser infor to the browser infor to the browser
		/*infor to the browser:select the infor*/
		$result=sql("SELECT
			     Fileboxpic_id,Fileboxpic_path,Fileboxpic_name
			   FROM
			     He_fileboxpic
			  WHERE
			     Fileboxpic_hid='{$_COOKIE['userid']}'
			  ORDER BY
			     Fileboxpic_uptime
			     DESC
		           ");
}	
?>
<div style='display:none;'><?php //HiddeN for speacil ?>
	<dl>						
	<dt><input type='hidden' id='HiddeN_projectfileboxitemid' value='' /></dt>
	<dt><input type='hidden' id='HiddeN_projectfileboxitemnum' value='<?php echo $html['source_num'];?>' /></dt>	
	</dl>	
</div>
<div id='FileboX_back'></div>
<div id='FileboX_fore'>
<div id='FileboX_forecenter'>
            <div id='FileboX_title'>
	       <dl>
	          <dt id='FileboX_titlename'>
		<span>C</span><span>hoose a picture</span>	 
	          </dt>
	          <dt id='FileboX_titleclose'>
		<img id='FileboX_titlecloseimg' src="<?php echo PROJECTDATAOTHERSDIR.'filebox/image/showpublic/close.png'?>" />		
	          </dt>	
	       </dl>            
            </div>
	<div id='FileboxcenteR_projectshow'>
		<div id='FileboxcenteR_projectshow_start'>
			<div id='FileboX_filemarkframe'>
				<dl id='FileboX_filemark1' class='FileboX_filemark'>
					<dt id='FileboX_filemark1_l1' class='FileboX_filemark_l1'>
					<span>picture</span>
					</dt>
					<dt id='FileboX_filemark1_l2' data-parentid='FileboX_filemark1' class='FileboX_filemark_l2' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'filebox/image/showpublic/box.png';?>);">
					<img src='<?php echo PROJECTDATAOTHERSDIR.'filebox/image/showpublic/mark/picture.png';?>' alt='' />
					</dt>				
				</dl>																
			</div>						
		</div>		
		<div id='FileboxcenteR_projectshow_e'>
			<div id='ProjectshowE_top'>
			</div>
			<div id='ProjectshowE_center'>
				<div id='FileboX_source_div'>
					<ol>
						<?php
						/*infor to the browser:echo the infor*/
						$html=array();
						$n=0;
						while(!!$search = sql_searchall($result)){
							$html['id']=htmlF($search['Fileboxpic_id']);            
						            $html['source']=htmlF($search['Fileboxpic_path']);
						            $html['name']=htmlF($search['Fileboxpic_name']);
						$n++;
						?>
						<li id="<?php echo 'FileboX-source'.$html['id']; ?>" class="filebox-source">
							<div id="" class="filebox-source-content" style="background-image: url(<?php echo ROOTOTHERSDIR1.$html['source']; ?>)" data-src="<?php echo ROOTOTHERSDIR1.$html['source']; ?>"></div>
							<div id="" class="filebox-source-name">
								<span class="filebox-source-name-show"><?php echo $html['name']; ?></span>
							</div>
						</li>								
					            <?php 
					             }
					     	 freeRT($result);
					     	 /*infor to the browser:echo the infor*/
					     	 //infor to the browser infor to the browser	     	 
					            ?>											
					</ol>								
				</div>
			</div>															
		</div>								
	</div>
	<div id='FileboX_done'>
	       <dl style='display:none;'>                                 
		<dt id='TofileboX_dl1dt1'>
		<a target='_blank' href="<?php echo PROJECTOTHERSDIR.'filebox.php' ?>">
		<span id='FileboX'>FileboX</span>
		</a>
		</dt>	
	       </dl>	
	       <dl>                                 
		<dt>
		<input name='SubmiT' type='button' value='DONE' id='SubmiT'/>
		</dt>	
	       </dl>		       		
	</div>			
</div>
</div>