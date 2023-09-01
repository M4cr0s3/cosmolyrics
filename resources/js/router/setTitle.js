import { useRouter } from 'vue-router';

export default function setPageTitle() {
    const router = useRouter();

    router.beforeEach((to, from, next) => {
        if (to.meta.title) {
            document.title = to.meta.title;
        }
        next();
    });
}
