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
    let obj_serial = JSON.stringify(obj)
    axios.post("https://crudcrud.com/api/24e5019e705344efa3e264d37ccd0792/objects", obj)
    .then((response) => {
        console.log(response)})
    .catch((err) => console.log(err))
    let li_items = document.getElementById('lists');
    let lists = `<li id=${inpName.value}>${inpName.value} ${inpValue.value}
                <button onClick=deleteVal('${inpName.value}${inpValue.value}','${inpName.value}')>Delete</button> 
                <button onClick=editVal('${inpName.value}${inpValue.value}','${inpName.value}','${inpValue.value}')>Edit</button></li>`;
    li_items.innerHTML += lists;
    inpName.value = ""
    inpValue.value = ""
}
// Object.keys(localStorage).forEach((key) => 
// {
//     let keyes = localStorage.getItem(key);
//     let vals = JSON.parse(keyes);
//     let li_items = document.getElementById('lists');
//     let lists = `<li id=${vals.name}>${vals.name} ${vals.value}
//                 <button onClick=deleteVal('${vals.name}${vals.value}','${vals.name}')>Delete</button> 
//                 <button onClick=editVal('${vals.name}${vals.value}','${vals.name}','${vals.value}')>Edit</button></li>`;
//     li_items.innerHTML += lists;
// });
// function deleteVal(deletefunc,id)
// {
//     localStorage.removeItem(deletefunc)
//     removeUser(id)
// }
// function editVal(editfunc, name,value)
// {
//     document.getElementById('name').value = name;
//     document.getElementById('value').value = value;
//     localStorage.removeItem(editfunc)
//     removeUser(name)
// }
// function removeUser(id)
// {
//     const parentNode = document.getElementById('lists');
//     const deleted = document.getElementById(id);
//     if(deleted) {
//         parentNode.removeChild(deleted)
//     }
// }