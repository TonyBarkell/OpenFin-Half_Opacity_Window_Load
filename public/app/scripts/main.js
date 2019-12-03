

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

// Requires the Layouts v1 API to be imported, or built into the project
function undockWindow(){
    layouts.snapAndDock.undockWindow();
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
            url: url,
            frame: false,
            autoShow: true
        };
    
        fin.Window.create(winOption).then(
            console.log("window created")
        );
    }).catch(err => console.log(err));
}

//Once the DOM has loaded and the OpenFin API is ready
function onMain() {
    console.log("on main");
        fin.Window.getCurrentSync().getOptions()
            .then(opts => {
                serverPort = opts.customData;
                console.log("Server Port: " + serverPort);
            }).catch(err => console.log(err));
};

