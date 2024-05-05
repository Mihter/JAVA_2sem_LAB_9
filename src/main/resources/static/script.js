let url = '/list';

async function get()
{
    try {
        let response = await fetch(url);//отправил запрос
        let data = await response.json();//получил ответ в json
        return data;
    } catch (error) {
        console.log(error);
    }
}

async function getItem()
{
    let id = document.getElementById('inputId').value;
    try{
        window.location.href = "http://localhost:8080/list/" + id;
    }catch (error) {
        console.log(error);
    }
}

async function add()
{
    let newName = document.getElementById("new").value;
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: newName })
        });
        get().then(data => {
            display(data);
        });
    } catch (error) {
        console.log(error);
    }
}

async function del(id)
{
    try {
        let response = await fetch(url + '/' + id, { method: 'DELETE' });
        get().then(data => {
            display(data);
        });
    } catch (error) {
        console.log(error);
    }
}

async function purchase(id)
{
    try {
        let response = await fetch(url + '/' + id, { method: 'PUT'});
        get().then(data => {
            display(data);
        });
    } catch (error) {
        console.log(error);
    }
}

function display(products)
{
    let list = document.getElementById("list");
    list.innerHTML = "";

    for (let i = 0; i < products.length; i++)
    {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(products[i].name));

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        checkbox.checked = products[i].isPurchased;
        checkbox.onclick = function() {
            purchase(products[i].id);
        };
        li.appendChild(checkbox, li.firstChild);

        let deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("Отмена"));
        deleteButton.onclick = function() {
            del(products[i].id);
        };
        li.appendChild(deleteButton);
        list.appendChild(li);
    }
}

get().then(data => {
    display(data);
});