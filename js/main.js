/*var myText1 = '<!doctype html><html class="no-js" lang=""><head><meta charset="utf-8"><meta charset="utf-8"><meta charset="utf-8">';

var myArray= myText1.split('');

var timelooper;

function loop() {
    if(myArray.length > 0)
    {
        document.getElementById('anim-text').innerHTML += myArray.shift();

    }else
    {
        clearTimeout(timelooper);
    }

    timelooper = setTimeout('loop(20)', 70);
}
loop();*/

var text = '<span class="keyword">function</span> <span class="function">CV</span>() {\n\t<span class="variable">$CV</span> = <span class="string">\'Vous pouvez télécharger mon cv !\'</span>;\n\t<span class="variable">$PDF</span> = <span class="function">En cliquant juste en dessous</span>;\n\t<span class="keyword">if</span>(<span class="variable">$interested</span> === <span class="keyword">true</span>) {\n\t\t<a href=\"img/Alexandre-Smagghe-CV.pdf" target="_blank"><span class="function">$CV + $PDF = Mon-CV.pdf</span>();</a>\n\t}\n}';

var currentChar = 1;
var htmltag = false;
var cache = '';


function type() {
    var str = text.substr(0, currentChar);
    var last = str.substr(str.length - 1, str.length);
    if (last != '<' && last != '>' & last != '/') {
        $("#anim-text").html(str);
    }
    currentChar++;
    if (currentChar <= text.length) {
        if (last == '<') {
            htmltag = true;
        } else if (last == '>') {
            htmltag = false;
        }
        if (htmltag) {
            setTimeout(type, 1);
        } else {
            setTimeout(type, 50);
        }
    }
}

$(document).ready(function () {
    $("#anim-text").html("");
    setTimeout(type, 2000);
});

$(document).on("scroll", function() {

    if($(document).scrollTop()>100) {
        $("#nav").removeClass("nav").addClass("nav-small");
        $("#menu").addClass("menu-height");
    } else {
        $("#nav").removeClass("nav-small").addClass("nav");
        $("#menu").removeClass("menu-height");
    }

});

$('#projet-3').click(function () {
    $("#proj-starW").animate({
        height: "100%"
    }, 5000)
});


var modal = document.getElementById('modal');
var back = document.getElementById('back');


window.onload = function () {
    var allBtn = document.querySelectorAll(".btn-proj-prod");

    for (i = 0; i < allBtn.length; i++) {
        element = allBtn[i];
        element.addEventListener("click", function () {
            modal.classList.add('modal-large');
            back.classList.add('back-large');
            back.addEventListener('click', function () {
                modal.classList.remove('modal-large');
                back.classList.remove('back-large');
            })

        })
    }
};


