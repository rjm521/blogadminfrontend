import VueRouter from "vue-router"
import Vue from 'vue'

Vue.use(VueRouter)



/*login page */
// const login = () => import("@/page/login/login")
//
// /*content page*/
const manageArticle = () => import("@/page/content/manage-article")
const manageComment = () => import("@/page/content/manage-comment")
const manageImage = () => import("@/page/content/manage-image")
const postArticle = () => import("@/page/content/post-article")
//
//
// /*dashboard content*/
const index = () => import("@/page/dashboard/index")
//
// /*operation content*/
// const loop = () => import("@/page/operation/loop")
// const manageCategory = () => import("@/page/operation/manage-category")
//
// /*setting content*/
// const friendLink = () => import("@/page/settings/friend-link")
// const websizeInfo = () => import("@/page/settings/websize-info")
//
// /*user content*/
// const email = () => import("@/page/user/email")
// const info = () => import("@/page/user/info")
// const list = () => import("@/page/user/list")
// const resetPassword = () => import("@/page/user/reset-password")

/*base view content*/

const baseView = () => import("@/layout/base-view")
const rightView = () => import("@/layout/right-content")

const routes = [
    {
        path: '',
        component: baseView,
        redirect: "/index",
        children: [
            {
                path: "/index",
                component: index
            },
            {
                path: "/content",
                component: rightView,
                children: [
                    {
                        path: 'post-article',
                        component: postArticle
                    },
                    {
                        path: 'manage-article',
                        component: manageArticle
                    },
                    {
                        path: 'manage-comment',
                        component: manageComment
                    },
                    {
                        path: 'manageImage',
                        component: manageImage
                    }
                ]
            }
        ]
    }
];

const router = new VueRouter ({
    routes
});

export default router
