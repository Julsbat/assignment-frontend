export default function(page, fun) {
    if(page && fun)
    {
        routes.set(page, fun);
        return;
    }
    else
    {
        start();
        addClickListener();
    }
}

pathObject = {};

function addClickListener()
{
    $( 'a' ).on( "click", function(event) {
        event.preventDefault();
    });
}

function start()
{
    let path = window.location.pathname;
    directTo(path);
}

function directTo(newpath)
{
    const matchPlayer = /(\/players\/)([a-zA-Z0-9]+)/g;
    let url = "";
    let path = newpath;

    if(newpath.match(matchPlayer))
    {
        let splitted = matchPlayer.split('/');
        let playerId = splitted[1];
        console.log(playerId);
        url = playerId;

        if (newpath in pathObject )
        {
            newpath = '*';
        }

        if (window.history.state)
        {
            let lastviewed = window.history.state.pathname;

            if(path != lastviewed)
            {
                window.history.pushState({
                    pathname: path
                }, '', path)
            }

            let val = pathObject.get(route);
            return val(url);
        }
    }

}