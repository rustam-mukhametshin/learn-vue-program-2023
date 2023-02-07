import List from "./List.vue";


export default {
    title: 'List',
    component: List,
}

const Template = () => ({
    components: { List },
    template: '<List></List>'
})

export const DoShow = Template.bind({})
