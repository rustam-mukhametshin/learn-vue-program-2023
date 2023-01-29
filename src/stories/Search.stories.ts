import Search from "./Search.vue";


export default {
    title: 'Search',
    component: Search,
}

const Template = () => ({
    components: { Search },
    template: '<Search></Search>'
})

export const DoSearch = Template.bind({})
