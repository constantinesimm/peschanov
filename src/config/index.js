export default {
    apiEndpoint: process.env.NODE_ENV === 'production'
        ? `${ window.location.protocol }//${ window.location.host }/api`
        : 'http://localhost:3000/api',

}