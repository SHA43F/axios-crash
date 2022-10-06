let inpName=document.getElementById('name')
let inpValue=document.getElementById('value')
let submitButton=document.getElementById('forms')

window.addEventListener("DOMContentLoaded", () =>{
    axios.get("https://crudcrud.com/api/12a4e6eb6ae74c8c81c135c1bec54025/objects")
    .then((responses) =>
    {
        for(var i=0;i<responses.data.length;i++)
        {
            addDataInto(responses.data[i])
        }

    }).catch((err) => console.log(err))
})

submitButton.addEventListener('submit', submitNodes)
function submitNodes(e)
{
    e.preventDefault();
    let obj = {name: inpName.value, value: inpValue.value}
    axios.post("https://crudcrud.com/api/12a4e6eb6ae74c8c81c135c1bec54025/objects", obj)
    .then((response) => {
        addDataInto(response.data)})
    .catch((err) => console.log(err))

}

function addDataInto(obj)
{
    let li_items = document.getElementById('lists');
    let lists = `<li id='${obj._id}List'>${obj.name} ${obj.value}
                <button onClick=deleteVal('${obj._id}')>Delete</button> 
                <button onClick=editVal('${obj._id}')>Edit</button></li>`;
    li_items.innerHTML += lists;
    inpName.value = ""
    inpValue.value = ""
}

function deleteVal(id)
{
    axios.delete(`https://crudcrud.com/api/12a4e6eb6ae74c8c81c135c1bec54025/objects/${id}`)
    .then((response) =>
    {
        removeUser(id)
    }).catch((err) => console.log(err))
    
}
function editVal(id)
{
    axios.delete(`https://crudcrud.com/api/12a4e6eb6ae74c8c81c135c1bec54025/objects/${id}`)
    .then((response) =>
    {
        removeUser(id)
    }).catch((err) => console.log(err))
}

function removeUser(id)
{
    const parentNode = document.getElementById('lists');
    const deleted = document.getElementById(`${id}List`);
    if(deleted) {
        parentNode.removeChild(deleted)
    }
}
