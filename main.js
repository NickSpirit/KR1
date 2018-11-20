var section = document.querySelectorAll("section");

var portrait = document.querySelector("[data-link*='portrait']");
var password = document.querySelector("[data-link*='password']");
var block = document.querySelector("[data-link*='block']");
var slider = document.querySelector("[data-link*='slider']");

var menu = document.querySelector('.menu');
var form = document.querySelector('.form');
var pass = document.querySelector('#pass');
var submit = document.querySelector('.form_btn');

var colors = ['yellow', 'green', 'blue', 'pink', 'red', 'white', 'orange'];
var size = ['100px', '150px', '200px', '250px', '300px', '350px', '400px'];

document.querySelector('.block').onclick = function(e) {
 var s = size[(Math.random() * (size.length - 1)).toFixed(0)];
 this.style.width = s;
 this.style.height = s;
}
console.log(document.querySelector('.block'));

document.querySelector('.block').onclick = function(e) {
 this.style.backgroundColor = colors[(Math.random() * (colors.length - 1)).toFixed(0)];
}

menu.onclick = function (e) {
    var target = e.target;

    while (true) {
        if (target.tagName === 'SPAN') {
            target.classList.toggle('active');
            form.classList.toggle('active');
            return;
        }
        target = target.parentElement;
    };
};

pass.oninput = function (e) {
  if (this.value === 'password123') {
    submit.classList.remove('disabled');
  } else {
    if (!submit.classList.contains('disabled')) {
      submit.classList.add('disabled');
    }
  }
};

form.onsubmit = function (e) {
  if (!submit.classList.contains('disabled')) {
    this.submit();
  } else {
    e.preventDefault();
  }
};

portrait.onclick = function() {
    section.forEach(function(item, i) {
        if (item.dataset.name === portrait.innerHTML) {
            item.dataset.if = "true";
        } else {
            item.dataset.if = "false";
        }
    });
};
password.onclick = function() {
    section.forEach(function(item, i) {
        if (item.dataset.name === password.innerHTML) {
            item.dataset.if = "true";
        } else {
            item.dataset.if = "false";
        }
    });
};
block.onclick = function() {
    section.forEach(function(item, i) {
        if (item.dataset.name === block.innerHTML) {
            item.dataset.if = "true";
        } else {
            item.dataset.if = "false";
        }
    });
};
slider.onclick = function() {
    section.forEach(function(item, i) {
        if (item.dataset.name === slider.innerHTML) {
            item.dataset.if = "true";
        } else {
            item.dataset.if = "false";
        }
    });
};