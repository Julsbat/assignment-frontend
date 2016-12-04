var pathObject = {};

export default function (page, fun) {
    if (page && fun) {
        pathObject[page] = fun;
        const route = page.split('/').map(function (part) {
            // is static
            if (part.substr(0, 1) !== ':') {
                return part
            }
            const name = part.substr(1)
            return '(a-z)+'
        }).join('\/')
        console.log(route)
        pathObject[route] = fun;
        return;
    }
    else {
        start();
        addClickListener();
    }
}


function addClickListener() {
    $('a').on("click", function (event) {
        event.preventDefault();
    });
}

function start() {
    let path = window.location.pathname;
    directTo(path);
}

function directTo(newpath) {
    if (pathObject[newpath]) {
        return pathObject[newpath]();
    }
    const matchPlayer = /(\/players\/)([a-zA-Z0-9]+)/g;

    for (var i in pathObject) {
        if (pathObject[i] === newpath) {
            return pathObject[i]();
        }
    }

}