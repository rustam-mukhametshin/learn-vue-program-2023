import InputSearch from "./InputSearch.vue";

export default {
    title: 'InputSearch',
    component: InputSearch,
}

const Template = () => ({
    components: {InputSearch},
    template: '<InputSearch></InputSearch>'
})

export const DoSearch = Template.bind({})
