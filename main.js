// function registre() {
//     var nom = document.getElementById("nom").value;
//     var prenom = document.getElementById("prenom").value;
//     var date_de_naissance = document.getElementById("date_de_naissance").value;
//     var user3 = { nom: nom, prenom: prenom, date_de_naissance: date_de_naissance };
//     console.log(user3);
//     console.log(document.getElementById("nom").value, document.getElementById("prenom").value, document.getElementById("date_de_naissance").value, document.getElementById("Email").value, document.getElementById("mot_de_passe").value, document.getElementById("confirmer_mot_de_passe").value)
// }
function verif() {
    var ch = document.getElementById("userName").value;
    for (let i = 0; i < ch.length; i++) {

        if (ch[i] == ' ') {
            console.log("erreur");
            document.getElementById("userName").style.backgroundColor = 'red';

        }
    }
}
function verife() {
    var n = Date();
    console.log("date : ", n);
    var today = new Date();
    console.log(today.toLocaleDateString("en-US"));

    console.log(today.getFullYear());

    var date = document.getElementById("date_de_naissance").value;
    console.log(date)
    var mydate = new Date(date);

    var annee = mydate.getFullYear();
    console.log(annee);
    var x = today.getFullYear() - annee;
    console.log(x);

    if (x < 18) { console.log("invalid"); }
}








function validation() {
    var expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

    if (expressionReguliere.test(document.getElementById("Email").value)) {
        document.getElementById("Email").style.color = 'green';
    }
    else {

        document.getElementById("Email").style.color = 'red';
    }
    return false;
}


function valider_numero() {
    var nombre = document.getElementById("Telephone").value;
    var chiffres = new String(nombre);

    // Enlever tous les charactères sauf les chiffres
    chiffres = chiffres.replace(/[^0-9]/g, '');

    // Le champs est vide
    if (nombre == "") {
        alert("Le champs est vide !");
        return;
    }


    // Nombre de chiffres
    compteur = chiffres.length;

    if (compteur != 8) {
        alert("Assurez-vous de rentrer un numéro à 8 chiffres (xx-xxx-xxx)");
        return;
    }

    else {
        alert("Le numéro me semble bon !");
    }
}







function pswd() {
    var password = document.getElementById("mot_de_passe").value;
    if (password == '') { console.log('erreur'); }
    console.log("le pW : ", password);
    if (password.length < 8) {
        alert("invalid");
        return;
    }
    var pw = document.getElementById("mot_de_passe").value;
    console.log("Welcome : ");

    compteur = 0;
    if ((pw) == true)
        compteur++;
    if (majuscule(pw) == true)
        compteur++;
    if (minuscule(pw) == true)
        compteur++;
    if (PWisNumber(pw))
        compteur++;
    if (pw.length >= 8)
        compteur++;
    console.log(pw, " le compteur est : ", compteur);
    if (compteur > 3) {
        var msgMail2 = "le mot de passe fort";
        console.log(msgMail2);
        document.getElementById("RepPass2").innerHTML = msgMail2;
        document.getElementById("mot_de_passe").style.backgroundColor = "red";
    }

    else if (compteur == 2 || compteur == 3) {
        var msgMail2 = "le mot de passe moyenne";
        console.log(msgMail2);
        document.getElementById("RepPass2").innerHTML = msgMail2;
        document.getElementById("mot_de_passe").style.backgroundColor = "green";
    }

    else if (compteur == 1) {
        var msgMail2 = "le mot de passe faible";
        console.log(msgMail2);
        document.getElementById("RepPass2").innerHTML = msgMail2;
        document.getElementById("mot_de_passe").style.backgroundColor = "yellow";
    }

    function PWisNumber(pw) {
        var test = false;
        for (i = 0; i < pw.length; i++) {
            if (!isNaN(pw.charAt(i))) {           //if the string is a number, do the following
                test = true;
                break;
            }
        }
        if (test == true)
            return true;
        else
            return false;
    }
    function minuscule(pw) {
        var test = false;
        for (i = 0; i < pw.length; i++) {
            if (pw.charAt(i) === pw.charAt(i).toLowerCase()) {
                test = true;
                break;
            }
        }
        if (test == true)
            return true;
        else
            return false;
    }

    function majuscule(pw) {
        var test = false;
        for (i = 0; i < pw.length; i++) {
            if (pw.charAt(i) === pw.charAt(i).toUpperCase()) {
                test = true;
                break;
            }
        }
        if (test == true)
            return true;
        else
            return false;
    }

}



function validate() {

    var a = document.getElementById("mot_de_passe").value;
    var b = document.getElementById("confirmer_mot_de_passe").value;

    if (a != b) {
        console.log("Les mots de passe ne correspondent pas.");
    }
    else {
        console.log("Les mots de passe correspondent.");
    }
}


function registre() {
    var tabuser = JSON.parse(localStorage.getItem('tabUser'))
    if (tabuser == null) {
        tabuser = []
    }
    var a = document.getElementById("userName").value;
    var b = document.getElementById("nom").value;
    var c = document.getElementById("prenom").value;
    var d = document.getElementById("date_de_naissance").value;
    var e = document.getElementById("Email").value;
    var f = document.getElementById("Telephone").value;
    var g = document.getElementById("mot_de_passe").value;

     /* localStorage.setItem("userName", a);
     localStorage.setItem("nom", b);
     localStorage.setItem("Prenom", c);
     localStorage.setItem("date_de_naissance", d);
     localStorage.setItem("Email", e);
     localStorage.setItem("Telephone", f);
     localStorage.setItem("Mot de passe", g);
     localStorage.setItem("Confirmer mot de passe", h); */
    var obj = {
        userName: a,
        nom: b,
        Prenom: c,
        date_de_naissance: d,
        Email: e,
        Telephone: f,
        mot_de_passe: g


    }
    tabuser.push(obj)
    var str = JSON.stringify(tabuser)
    localStorage.setItem('tabUser', str)

    console.log(str);

    // var user1 = { nom: "rkik", prenom: "youssef", age: 30 };
    // console.log(user1);
    // var user2={nom:"ayedi",prenom:"ahmed",age:26};
    // console.log(user2);
    // console.log(document.getElementById("nom").value, document.getElementById("prenom").value, document.getElementById("age").value, document.getElementById("Email").value, document.getElementById("mot de passe").value, document.getElementById("confirmer mot de passe").value)
}
function getitem() {
    var x = localStorage.getItem("userName");
    document.getElementById("userName").value = x;
    var y = localStorage.getItem("nom");
    document.getElementById("nom").value = y;
    var z = localStorage.getItem("Prenom");
    document.getElementById("prenom").value = z;
    var w = localStorage.getItem("date_de_naissance");
    document.getElementById("date_de_naissance").value = w;
}
function login() {
    var tabuser = JSON.parse(localStorage.getItem('tabUser'))
    if (tabuser == null) {
        tabuser = []
    }
    var userName = document.getElementById("name").value;
    var mot_de_passe = document.getElementById("paswd").value;
    for (let i = 0; i < tabuser.length; i++) {
        if (tabuser[i].userName == userName && tabuser[i].mot_de_passe == mot_de_passe) {
             console.log("ok") 
             location.href = '../Dashboard/index1.html'
            }
        else
            console.log("erreur")
    }

}
//  addevent(event) 
//     const events = LocalStorage.getevents();

//     events.push(event);

// //     localStorage.setItem('events', JSON.stringify(events));
// addeventToList(event) {
//     const list = document.getElementById('event-list');
//     const row = document.createElement('tr');

//     row.innerHTML = `
//     <td>${event.task}</td>
//     <td>${event.date}</td>
//     <td><a href="#" class="delete">X</a></td>
//     `;
//     list.appendChild(row);
// }

class Book {
    constructor(task, date) {
        this.task = task;
        this.date = date;
    
    }
}

class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.task}</td>
        <td>${book.date}</td>
        <td><a href="#" class="delete">X</a></td>
        `;
        list.appendChild(row);
    }

    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`

        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');

        container.insertBefore(div, form);

        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('task').value = '';
        document.getElementById('date').value = '';
    }
}

class LocalStorage{
   static getBooks() {
       let books;
       if (localStorage.getItem('books') === null) {
           books = [];
       } else {
           books = JSON.parse(localStorage.getItem('books'));
       }

       return books;
    }

   static displayBooks() {
       const books = LocalStorage.getBooks();

       books.forEach(function (book) {
           const ui = new UI();

           ui.addBookToList(book);
       });
    }

   static addBook(book) {
       const books = LocalStorage.getBooks();

       books.push(book);

       localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBooks(isbn) {
        const books = LocalStorage.getBooks();

        books.forEach(function (book, index) {
            if (book.isbn ===  isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

document. addEventListener('DOMContentLoaded', LocalStorage.displayBooks);

// Event listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
    const task = document.getElementById('task').value;
        date = document.getElementById('date').value;


    const book = new Book(task, date);

    const ui = new UI();

    if (task === '' || date === '') {
        ui.showAlert('Please fill in all feilds', 'error');
    } else {

        ui.addBookToList(book);
        LocalStorage.addBook(book);

        ui.showAlert('Success! Event added!', 'success');
        ui.clearFields();
    }

    e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', function (e) {
    const ui = new UI();

    ui.deleteBook(e.target);
    LocalStorage.removeBooks(e.target.parentElement.previousElementSibling.textContent);

    ui.showAlert('Event removed!', 'success');
    e.preventDefault();
});