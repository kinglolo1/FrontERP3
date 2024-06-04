import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
 
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'bi bi-speedometer2',
    class: '',
    extralink: false,
    submenu: [
    ]
  },
  {
    path: '/component/Users',
    title: 'Users',
    icon: 'bi bi-bell',
    class: '',
    extralink: false,
    submenu: [    
    ]
  },
  {
    path: '/component/Category',
    title: 'Category',
    icon: 'bi bi-patch-check',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/Products',
    title: 'Products',
    icon: 'bi bi-hdd-stack',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/Barcode',
    title: 'Barcode',
    icon: 'bi bi-card-text',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/Purchase-Orders',
    title: 'Purchase Orders',
    icon: 'bi bi-menu-app',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/Sales-Orders',
    title: 'Sales Orders',
    icon: 'bi bi-dice-1',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/Reports',
    title: 'Reports',
    icon: 'bi bi-pause-btn',
    class: '',
    extralink: false,
    submenu: []
  },

  {
    path: '/about',
    title: 'About',
    icon: 'bi bi-people',
    class: '',
    extralink: false,
    submenu: []
  }
];
