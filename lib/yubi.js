var yubi=function(){};yubi.kernel=function(){};
yubi.Ajax=function(){
	var xhr;
    if(typeof XMLHttpRequest!=='undefined'){xhr=new XMLHttpRequest()}else{
        var versions = ["MSXML2.XmlHttp.5.0","MSXML2.XmlHttp.4.0","MSXML2.XmlHttp.3.0","MSXML2.XmlHttp.2.0","Microsoft.XmlHttp"];
        for(var i = 0, len = versions.length; i < len; i++) {
          try {xhr = new ActiveXObject(versions[i]);break;}catch(e){};
        }
    }
	yubi.Ajax=xhr;
};
yubi.JSON=function(url, callback) {
    var xhr;
    if(typeof XMLHttpRequest!=='undefined'){xhr=new XMLHttpRequest()}else{
        var versions = ["MSXML2.XmlHttp.5.0","MSXML2.XmlHttp.4.0","MSXML2.XmlHttp.3.0","MSXML2.XmlHttp.2.0","Microsoft.XmlHttp"];
        for(var i = 0, len = versions.length; i < len; i++) {
          try {xhr = new ActiveXObject(versions[i]);break;}catch(e){};
        }
    }
    xhr.onreadystatechange = ensureReadiness;
    function ensureReadiness(){
        if(xhr.readyState<4){return}
        if(xhr.status!==200){return}
        if(xhr.readyState===4){callback( JSON.parse( xhr.responseText ) );}
    }
    xhr.open('GET', url, true);
    xhr.send('');
}
yubi.POSTJSON=function(url, data, callback) {
    var xhr;
    if(typeof XMLHttpRequest!=='undefined'){xhr=new XMLHttpRequest()}else{
        var versions = ["MSXML2.XmlHttp.5.0","MSXML2.XmlHttp.4.0","MSXML2.XmlHttp.3.0","MSXML2.XmlHttp.2.0","Microsoft.XmlHttp"];
        for(var i = 0, len = versions.length; i < len; i++) {
          try {xhr = new ActiveXObject(versions[i]);break;}catch(e){};
        }
    }
    xhr.onreadystatechange = ensureReadiness;
    function ensureReadiness(){
        if(xhr.readyState<4){return}
        if(xhr.status!==200){return}
        if(xhr.readyState===4){callback( JSON.parse( xhr.responseText ) );}
    }
    xhr.open('POST', url, true);
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');	
    xhr.send(data);
}
