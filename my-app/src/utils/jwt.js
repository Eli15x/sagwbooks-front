function base64EncodeUrl(str){
    return window.btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');
}

export function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

export function createJWT(token) {    
    // JWT header 
    var header = {
        alg: "RS256",
        typ: "JWT",
    };

    // create jwt without signature.
    const token_json =  base64EncodeUrl( JSON.stringify(header) ) + "." + base64EncodeUrl( JSON.stringify( token ) ) + ".";

    return token_json;
}