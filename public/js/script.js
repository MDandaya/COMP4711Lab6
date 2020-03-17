

function search() {
    var target = document.getElementById("search-bar").value;
    window.location = '/artists/' + target;
}

/**
 * Generates input nodes to create a new artist card.
 */
function createArtistParams() {

    if (document.querySelector('#add-form') != null) {
        document.querySelector('#add-form').remove();
        return;
    }

    let addForm = document.createElement("form");
    addForm.setAttribute("id", "add-form");
    addForm.setAttribute('action', '/artists/add');
    addForm.setAttribute('method', 'POST');

    let fieldName = document.createElement("input");
    fieldName.setAttribute("id", "field-name");
    fieldName.setAttribute("placeholder", "Artist Name")
    fieldName.setAttribute("maxlength", "40")
    fieldName.setAttribute('type', 'text');
    fieldName.setAttribute('name', 'name');

    let fieldAbout = document.createElement("input");
    fieldAbout.setAttribute("id", "field-about");
    fieldAbout.setAttribute("placeholder", "About Artist")
    fieldAbout.setAttribute("maxlength", "40");
    fieldAbout.setAttribute('type', 'text');
    fieldAbout.setAttribute('name', 'about');

    let fieldImage = document.createElement("input");
    fieldImage.setAttribute("id", "field-image");
    fieldImage.setAttribute("placeholder", "Image URL")
    fieldImage.setAttribute('type', 'text');
    fieldImage.setAttribute('name', 'imageURL');

    let addButton = document.createElement("button");
    addButton.setAttribute("class", "add-button");
    addButton.setAttribute("type", "submit");
    addButton.textContent = 'Add';

    addForm.appendChild(fieldName);
    addForm.appendChild(fieldAbout);
    addForm.appendChild(fieldImage);
    addForm.appendChild(addButton);

    let top = document.getElementById("top").appendChild(addForm);
}

function deleteNode(child) {

    var parent = child.parentNode;
    var imageurl = parent.children[0].getAttributeNode("src").value;
    var name = parent.children[1].children[0].textContent;
    var about = parent.children[1].children[2].textContent;

    // var xhr = new XMLHttpRequest();
    // xhr.open("POST", '/artists/delete', true);
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.send(JSON.stringify({
    //     'name': name,
    //     'about': about,
    //     'imageURL': imageurl
    // }));

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            window.location = '/artists/'
        }
    };
    xhttp.open("POST", '/artists/delete', true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify({
        'name': name,
        'about': about,
        'imageURL': imageurl
    }));

}
