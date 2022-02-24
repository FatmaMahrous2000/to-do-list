var data=[];

function add()
{
 var item= document.getElementById('input-text').value;
 if(item!="")
 {
 data.push(item);
 view();
 }
}

function view()
{
  var res='';
  var count=data.length;
  for(var i=0;i<count;i++)
  {

    res+='<div class="task col-9">'+data[i]+'</div><input type="checkbox" class="col-1 checkBox"><button class="delete col-1" onclick="remove('+ i +')"><i class="fa fa-trash-o"></i></button>';
  }
  document.getElementById('tasks').innerHTML=res;
  document.getElementById('input-text').value="";
  document.getElementById("input-text").placeholder = "What do you have planned ..... ?";
  
}


function remove(x)
{
  data.splice(x,1);
  if(data.length!=0)
  {
  view();
  }
  else
  {
    document.getElementById('tasks').innerHTML='<div id="tasks" class="row"> <p>Your to do list is empty</p></div>';
  }
}