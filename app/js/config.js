define([], function () {

    _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g
    };

    return {
        apiKey: 'AIzaSyAXbo6wTOSuo2dxVFsZAzmW76pvn5u4Ufs',
        scopes: 'https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/userinfo.profile',
        clientId: '320353855197.apps.googleusercontent.com'
    };
});