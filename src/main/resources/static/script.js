let url = '/list';

async function get()
{
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch (error) {
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

async function check(id)
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

        checkbox.checked = products[i].isCheck;
        checkbox.onclick = function() {
            check(products[i].id);
        };
        li.appendChild(checkbox, li.firstChild);

        let deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("Удалить"));
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