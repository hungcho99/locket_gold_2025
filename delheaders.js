/*
by Myoko 
ins: _1diorz
*/
var modifiedHeaders = $request.headers;
modifiedHeaders["X-RevenueCat-ETag"] = "";
modifiedHeaders["baggage"] = "";
$done({ headers: modifiedHeaders });
