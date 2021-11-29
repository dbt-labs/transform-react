function parseJwt(
  token?: string
):
  | { ["https://hasura.io/jwt/claims"]: { ["x-hasura-user-id"]: string } }
  | false {
  if (!token) {
    return false;
  }
  var base64Url = token.split(".")[1];
  var base64 = base64Url?.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
const getUserIdFromToken = (token?: string) => {
  let parsedToken = parseJwt(token);
  if (parsedToken) {
    return parsedToken["https://hasura.io/jwt/claims"]["x-hasura-user-id"];
  } else {
    return false;
  }
};

export default getUserIdFromToken;
