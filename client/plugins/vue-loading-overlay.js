import Vue from 'vue';
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
// Init plugin  
Vue.use(Loading,{
    loader : 'bars',
    color : 'rgb(0,171,0)',
    backgroundColor: 'rgb(75,75,75,0.5)',
    opacity: 0.5,
    width: 90,
    height: 100,
    zIndex: 999
});
