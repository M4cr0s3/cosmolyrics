import UButton from '../UButton.vue'
import UHeader from './UHeader.vue'
import UTopTable from './UTopTable.vue'

const components = [
    {
        name: UButton,
        component: UButton
    },
    {
        name: UHeader,
        component: UHeader
    },
    {
        name: UTopTable,
        component: UTopTable,
    },
]

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component)
        })
    }
}
