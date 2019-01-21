import Vue from 'nativescript-vue';

import Home from './components/Home';

import firebase from 'nativescript-plugin-firebase';

firebase
	.init({
		// Optionally pass in properties for database, authentication and cloud messaging,
		// see their respective docs.
	})
	.then(
		instance => {
			console.log('firebase.init done');
		},
		error => {
			console.log(`firebase.init error: ${error}`);
		}
	);
Vue.prototype.$firebase = firebase;
Vue.registerElement(
	'MLKitTextRecognition',
	() => require('nativescript-plugin-firebase/mlkit/textrecognition').MLKitTextRecognition
);
Vue.registerElement(
	'MLKitCustomModel',
	() => require('nativescript-plugin-firebase/mlkit/custommodel').MLKitTextRecognition
);
Vue.config.silent = TNS_ENV === 'production';

new Vue({
	render: h => h('frame', [h(Home)]),
}).$start();
