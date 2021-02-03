let APIURL = '';

switch (window.location.hostname) {
    // this is the local host name of your react app
    // case 'localhost' || '127.0.0.1':
    case 'localhost':
    case '127.0.0.1':
        // this is the local host name of your API
        APIURL = 'http://localhost:3500';
        break;
    // this is the deployed react application
    case 'a-a-rons-movieflix.herokuapp.com':
        // this is the full url of your deployed API
        APIURL = 'https://movieflix-server.herokuapp.com/'
}

export default APIURL;