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

window.addEventListener("DOMContentLoaded", () =>{
    axios.get("https://crudcrud.com/api/53d3fcb3bbc64e6785539a8d5d020aed/objects")
    .then((responses) =>
    {
        for(var i=0;i<responses.data.length;i++)
        {
            addDataInto(responses.data[i])
        }

    }).catch((err) => console.log(err))
})

sub.addEventListener('submit', submitNodes)
function submitNodes(e)
{
    e.preventDefault();
    let obj = {name: inpName.value, value: inpValue.value}
    axios.post("https://crudcrud.com/api/53d3fcb3bbc64e6785539a8d5d020aed/objects", obj)
    .then((response) => {
        addDataInto(obj,response.data._id)})
    .catch((err) => console.log(err))

}

function addDataInto(obj,id)
{
    let li_items = document.getElementById('lists');
    let lists = `<li id='${id}List'>${obj.name} ${obj.value}
                <button onClick=deleteVal('${id}')>Delete</button> 
                <button onClick=editVal('${id}','${obj.name}','${obj.value}')>Edit</button></li>`;
    li_items.innerHTML += lists;
    inpName.value = ""
    inpValue.value = ""
}

function deleteVal(id)
{
    axios.delete(`https://crudcrud.com/api/53d3fcb3bbc64e6785539a8d5d020aed/objects/${id}`)
    .then((response) =>
    {
        removeUser(id)
    }).catch((err) => console.log(err))
    
}
function removeUser(ids)
{
    const parentNode = document.getElementById('lists');
    const deleted = document.getElementById(`${ids}List`);
    if(deleted) {
        parentNode.removeChild(deleted)
    }
}
