/*********************************************
 *需要的execComand()参数如下
 ********************************************* 
 *
 *
 *
 *
 *
 *
 */
function Undo()
{document.execCommand('Undo',false);}
function Redo()
{document.execCommand('Redo',false);}


function Copy()
{document.execCommand('Copy');}
function Cut()
{document.execCommand('Cut');}

function Paste()
{document.execCommand('Paste');}
function PasteC()
{document.execCommand('ms-pasteContentOnly');}