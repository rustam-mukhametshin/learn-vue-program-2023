import Sort from "./Sort.vue";

export default {
    title: 'Sort',
    component: Sort,
}

const Template = () => ({
    components: { Sort },
    template: '<Sort></Sort>'
})

export const DoSort = Template.bind({})
