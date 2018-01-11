$('pre.highlight').find('.language-mermaid').each(function (index, item) {

    var newE = document.createElement('div');
    newE.setAttribute('class', 'mermaid');
    $(newE).text(item.innerText);
    $(item).parent().replaceWith(newE);
})