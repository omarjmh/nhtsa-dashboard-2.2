export const server = {
    credentials: {
        access_token: ''
    },
    application: {
        secure: true,
        host: 'preview.zoomdata.com',
        port: 8443,
        path: '/zoomdata'
    },
    oauthOptions: {
        client_id: "bmh0c2FfY2xpZW50MTQ1ODA2NzM4MTE3NDdkNzAxZGIzLTA3MDMtNDk4Mi1iNThiLTQ4NzU2OTZkOTYwNw==",
        redirect_uri: "http://demos.zoomdata.com/nhtsa-dashboard-2.2/index.html",
        auth_uri: "https://preview.zoomdata.com/zoomdata/oauth/authorize",
        scope: ['read']
    }
};