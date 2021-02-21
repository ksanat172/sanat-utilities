
class HomeAPI {
  constructor() {}

  executeAPI(uri, methodType, content = null) {
    const url = "https://sanat-node-server.herokuapp.com/"+uri;
    return new Promise((resolve, reject) => {
      const method = methodType;
      const request = new XMLHttpRequest();
      request.open(method, url, true);
      request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

      request.onload = function () {
        const response = request.getResponseHeader("Content-Type").includes("json") ? JSON.parse(request.response) : request.response;
        resolve(response);
      };

      if (content !=null ) request.send(JSON.stringify(content));
      else request.send();
    });
  }
}

const homeapi = new HomeAPI();
export default homeapi;


// beforeSend: function (xhr) {
//   xhr.setRequestHeader ("Authorization", "Basic " + btoa(username + ":" + password));
// },