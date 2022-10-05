let inpName=document.getElementById('name')
let inpValue=document.getElementById('value')
let sub=document.getElementById('forms')
let edit_btn = document.createElement('button')
let del_btn = document.createElement('button')
let li_ind = document.createElement('li')
edit_btn.className = 'edit'
edit_btn.innerText = 'Edit'
del_btn.className = 'del'
del_btn.innerText = 'Del'
sub.addEventListener('submit', submitNodes)
function submitNodes(e)
{
    e.preventDefault();
    let obj = {name: inpName.value, value: inpValue.value}
    axios.post("https://crudcrud.com/api/24e5019e705344efa3e264d37ccd0792/objects", obj)
    .then((response) => {
        addDataInto(response)})
    .catch((err) => console.log(err))
    
}

function addDataInto(obj)
{
    let li_items = document.getElementById('lists');
    let lists = `<li id=${obj.name}>${obj.name} ${obj.value}
                <button onClick=deleteVal('${obj.name}${obj.value}','${obj.name}')>Delete</button> 
                <button onClick=editVal('${obj.name}${obj.value}','${obj.name}','${obj.value}')>Edit</button></li>`;
    li_items.innerHTML += lists;
    inpName.value = ""
    inpValue.value = ""
}

window.addEventListener("DOMContentLoaded", () =>{
    axios.get("https://crudcrud.com/api/24e5019e705344efa3e264d37ccd0792/objects")
    .then((responses) =>
    {
        for(var i=0;i<responses.data.length;i++)
        {
            addDataInto(responses.data[i])
        }
        
    }).catch((err) => console.log(err))
})
