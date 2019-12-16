/*
    Example code demostrating how to have a window transisition from 50% Opcaity to 100%
    once the DOM content is loaded (The Window Opacity needs to be set to .5 (or other) 
    in the application configuration, or window options, waitForPageLoad should be 'false')
*/

// First add a Lidterner for the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    // The 2 second setTimeout here is used to simulate a slow load time
    // In prodiction code the function should not be wrapped in a setTimeout call
    setTimeout(setFullOpacity().then(() => console.log('opacity updated')).catch(err => console.error(err)), 2000);
});

// This function is called when the 'DOMContentLoaded' event is fired
// It uses the OpenFin API animate to transition from the windows current opcity state, to full opacity over 500ms
async function setFullOpacity() {
    // Set the animation to change the window opcaity to '1' (full opacity) over 500ms
    const transitions = {
        opacity: {
            opacity: 1,
            duration: 500
        }
    };
    const options = {
        interrupt: true,
        tween: 'ease-in'
    };

    // Get a reference to the current window and call animate
    // More inframtion on animate can be found at https://developer.openfin.co/docs/javascript/stable/tutorial-Window.animate.html
    const win = await fin.Window.getCurrent();
    return win.animate(transitions, options);
};

/*
    Generic Helper code
*/

function minimizeWindow(){
    var finWindow = fin.Window.getCurrentSync();
    finWindow.minimize().then(() => console.log('Window Minimized')).catch(err => console.log(err));
}

function restoreWindow(){
    var finWindow = fin.Window.getCurrentSync();
    finWindow.restore().then(() => console.log('Window Restored')).catch(err => console.log(err));
}

function maximizeWindow(){
    var finWindow = fin.Window.getCurrentSync();
    finWindow.maximize().then(() => console.log('Window Maximized')).catch(err => console.log(err));
}

function closeWindow(){
    var finWindow = fin.Window.getCurrentSync();
    finWindow.close().then(() => console.log('Window closed')).catch(err => console.log(err));
}

function openChildWindow(){
    var serverPort;
    fin.Window.getCurrentSync().getOptions()
    .then(opts => {
        serverPort = opts.customData;
        console.log("Server Port: " + serverPort);
        url = "http://localhost:" + serverPort +"/child.html"
        console.log(url);
        const winOption = {
            name:'child',
            defaultWidth: 300,
            defaultHeight: 300,
            saveWindowState : false,
            waitForPageLoad : false,
            opacity : .5,
            url: url,
            frame: false,
            autoShow: true
        };
    
        fin.Window.create(winOption).then(
            console.log("window created")
        );
    }).catch(err => console.log(err));
};

function onMain() {
    console.log("on main");
    fin.Window.getCurrentSync().getOptions().then(opts => {
        serverPort = opts.customData;
        console.log("Server Port: " + serverPort);
    }).catch(err => console.log(err));
};

