import { renderHamburgerMenu } from './components/navMenu.js';
import { runIndexPage } from './pages/indexPage.js';
import { runAboutPage } from './pages/aboutPage.js';
import { runEtaPage } from './pages/etaPage.js';
import { runHistoryPage } from './pages/historyPage.js';
import { runMapPage } from './pages/mapPage.js';
import { runMenuPage } from './pages/menuPage.js';
import { runOrderOverviewPage } from './pages/order-overviewPage.js';
import { runOrdersPage } from './pages/ordersPage.js';
import { runProfilePage } from './pages/profilePage.js';
import { runReceiptPage } from './pages/receiptPage.js';
import { runRegisterPage } from './pages/registerPage.js';
import { openDropDownBasket } from './components/dropDownBasket.js';
import { runEditMenuPage } from './pages/editMenuPage.js';
import { checkUserStatus } from './components/validateUser.js';

console.log('Script.js loaded');

const path = window.location.pathname;
runIndexPage();
if (
	path === '/' ||
	path === '/index.html' ||
	path === '/yum-yum-gimme-sum/' ||
	path === 'https://lammai442.github.io/yum-yum-gimme-sum' ||
	window.location.pathname === '/yum-yum-gimme-sum.html' ||
	window.location.pathname === '/yum-yum-gimme-sum.' ||
	window.location.pathname ===
		'https://lammai442.github.io/yum-yum-gimme-sum/.'
) {
	runIndexPage();
	console.log('index.html');
} else if (path === '/about.html') {
	checkUserStatus();
	runAboutPage();
	renderHamburgerMenu();
	openDropDownBasket();
	console.log('about.html');
} else if (path === '/eta.html') {
	checkUserStatus();
	runEtaPage();
	renderHamburgerMenu();
	openDropDownBasket();
	console.log('eta.html');
} else if (path === '/history.html') {
	checkUserStatus();
	runHistoryPage();
	renderHamburgerMenu();
	openDropDownBasket();
	console.log('history.html');
} else if (path === '/map.html') {
	checkUserStatus();
	runMapPage();
	renderHamburgerMenu();
	openDropDownBasket();
	console.log('map.html');
} else if (path === '/menu.html') {
	checkUserStatus();
	runMenuPage();
	renderHamburgerMenu();
	openDropDownBasket();
	console.log('menu.html');
} else if (path === '/order-overview.html') {
	checkUserStatus();
	runOrderOverviewPage();
	renderHamburgerMenu();
	console.log('order-overview.html');
} else if (path === '/orders.html') {
	checkUserStatus();
	runOrdersPage();
	renderHamburgerMenu();
	openDropDownBasket();
	console.log('orders.html');
} else if (path === '/profile.html') {
	checkUserStatus();
	runProfilePage();
	renderHamburgerMenu();
	openDropDownBasket();
	console.log('profile.html');
} else if (path === '/receipt.html') {
	checkUserStatus();
	runReceiptPage();
	renderHamburgerMenu();
	openDropDownBasket();
	console.log('receipt.html');
} else if (path === '/register.html') {
	console.log('hej');

	runRegisterPage();
	console.log('register.html');
} else if (path === '/editMenu.html') {
	checkUserStatus();
	runEditMenuPage();
	renderHamburgerMenu();
	console.log('editMenu.html');
}
