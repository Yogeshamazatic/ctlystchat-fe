let DEBUG = false;
let HOST_URL = "https://ctlyst-chat.herokuapp.com/";
let SOCKET_URL = "ws://ctlyst-chat.herokuapp.com";

// let HOST_URL = "http://127.0.0.1:8000";
// let SOCKET_URL = "ws://127.0.0.1:8000";

if (DEBUG) {
  HOST_URL = "http://127.0.0.1:8000";
  SOCKET_URL = "ws://127.0.0.1:8000";
}

export { HOST_URL, SOCKET_URL };
