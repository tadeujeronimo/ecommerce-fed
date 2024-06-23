import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Admin from "../pages/Admin";
import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";

const routes = [
    { path: '/login', component: Login, isProtected: false, title: 'Login' },
    { path: '/register', component: Register, isProtected: false, title: 'Cadastro' },
    { path: '/', component: Home, isProtected: false, title: 'Home' },
    { path: '/admin', component: Admin, isProtected: true, title: 'Admin' },
    { path: '/admin/add-product', component: AddProduct, isProtected: true, title: 'Adicionar Produto' },
    { path: '/admin/edit-product/:id', component: EditProduct, isProtected: true, title: 'Editar Produto' },
];

export default routes;