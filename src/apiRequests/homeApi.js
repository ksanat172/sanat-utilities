
class HomeAPI {
  constructor() {}

  executeAPI(uri, methodType, content = null) {
    const url = "http://localhost:8000/"+uri;
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