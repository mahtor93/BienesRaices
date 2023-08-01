import path from 'path'

export default {
    mode: 'development',
    entry:{
        mapLocation: './src/js/mapLocation.js' 
    },
    output:{
        filename: '[name].js',
        path: path.resolve('public/js'),
    },
}