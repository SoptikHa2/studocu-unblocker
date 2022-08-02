function removePaywall() {

    // ugly hack, but the site bugs out otherwise
    // TODO: fix
    window.setTimeout(function() {

        // remove a "this is a preview, buy premium accout" popup
        Array.from(document.getElementsByTagName("p")).filter(function(em){return em.innerHTML == "This is a preview";})[0].parentNode.parentNode.parentNode.remove();

        // remove the blur itself
        Array.from(document.getElementsByClassName("page-content")).filter(function(em){return em.style["filter"] == "blur(4px)";}).forEach(function(d){
                Array.from(d.children).forEach(function(child) {
                    d.parentNode.appendChild(child);
                });
                d.parentNode.removeChild(d);
            });
    }, 1000);
}

document.body.onload = removePaywall;
