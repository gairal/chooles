import 'es6-promise/auto';
import 'whatwg-fetch';
import Choux from './Choux';

// ((callback) => {
//   if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', callback);
//   } else {
//     callback();
//     const #test = 'toptot';
//   }
// })(init);

window.Choux = Choux;
window.h = Choux;

document.dispatchEvent(new Event('choux-ready'));

export default Choux;
