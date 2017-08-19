<?php
if($_GET['action']=='source_showmoreinfo'){
//Include each
require substr(dirname(__FILE__),0,-19).'/include/each.php';
//is dangerous operation check the uniqid
cUniqid();

	//filter for information filter for information filter for information
	//Include the function
	include PROJECTDIR.'include/engine/fu/fu_string.php';
	$data=array();
	$data['id']=string_filterid($_POST['id'],0,12);
	$data['aid']=string_filterid($_POST['aid'],0,12);	
	$data['cid']=string_filterid($_POST['cid'],0,12);
	//filter for information filter for information filter for information

	//infor to the browser infor to the browser infor to the browser
		/*infor to the browser:select the infor*/
		$result=sql_search("SELECT
			     name,des,type,ssize,fsize
			   FROM
			     He_casource1
			  WHERE
			id='{$data['id']}'
		          AND
		        aid='{$data['aid']}'
		       AND
		        cid='{$data['cid']}'
		          AND
			hid='{$_COOKIE['userid']}'
		           ");		
		if($result){
			$html=array();
			$html['name']=htmlF($result['name']);
			$html['des']=htmlF($result['des']);
			$html['ssize']=htmlF($result['ssize']);
			$html['fsize']=htmlF($result['fsize']);
			$html['type']=htmlF($result['type']);
			$html['caname']=htmlF($_POST['caname']);
			$html['cname']=htmlF($_POST['cname']);

			$html['full']=htmlF($_POST['full']);
		}
}	
?>
<link type='text/css' rel='stylesheet' href='<?php echo PROJECTCSSOTHERSDIR.'close/source/pictu/'.$html['full'].'.css'?>' />
<div id='SourcemoreinfO'>
	<div id='SourcemoreinfoforE' class='sourcemoreinfofore'>
		<div id='SourcemoreinfotitlE'>
			<dl>
			<dt>
			<span id='MoreinfohidE_title'>InfoS</span>
			</dt>
			</dl>	
		</div>
		<div id='SourcemoreinfohidE'>
			<dl>
			<dt>
			<span title='HiddeN' id='MoreinfohidE' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/source/moreinfohide.png';?>);"></span>
			</dt>
			</dl>	
		</div>
		<div id='SourcE_moreinfo'>
			<div id='SourcE_moreinfoname'>
				<dl>
				<dt><span>NamE</span></dt>
				<dt><span id='ImagenamE'><?php echo $html['name'];?></span></dt>
				</dl>		
			</div>
			<div id='SourcE_moreinfodes'>
					<dl>
					<dt>
						<span>DescriptioN</span>
					</dt>								                               
					<dt>
						<textarea readonly="readonly"><?php echo $html['des'];?></textarea>
					</dt>				
					</dl>				
			</div>
			<div id='SourcE_moreinfoothers'>
				<dl>
				<dt><span class='moreinfoothersframe'>SizE</span></dt>
				<dt><span class='moreinfoothersinfo'><?php echo $html['ssize'];?></span></dt>				
				</dl>
				
				<dl>
				<dt><span class='moreinfoothersframe'>File sizE</span></dt>
				<dt><span class='moreinfoothersinfo'><?php echo $html['fsize'];?></span></dt>				
				</dl>
				
				<dl>
				<dt><span class='moreinfoothersframe'>TypE</span></dt>
				<dt><span class='moreinfoothersinfo'><?php echo $html['type'];?></span></dt>				
				</dl>												
			</div>
			<div id='SourcE_moreinfofromca'>
				<dl>
				<dt><span>From albuM</span></dt>
				<dt><span id='FromcA'><?php echo $html['caname'];?></span></dt>		
				</dl>				
			</div>
			<div id='SourcE_moreinfofromc'>
				<dl>
				<dt><span>From closE</span></dt>
				<dt><span id='FromC'><?php echo $html['cname'];?></span></dt>		
				</dl>				
			</div>
		</div>
		<div id='SourcemoreinfobottoM' class='sourcemoreinfobottom'>
			<dl>
			<dt>
			<span></span>
			</dt>
			</dl>	
		</div>			
	</div>				
</div>




