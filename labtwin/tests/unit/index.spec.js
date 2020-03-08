import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Index from '@/components/Index.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Index.vue', () => {
  let actions
  let store
  let getters
  let mutations
  let state

  beforeEach(() => {

     state = {
      events: [],
      totalPages: "",
      isLoading: false
    };

    actions = {
      fetchEvents: jest.fn(),
      sortEvents: jest.fn()
    }

    getters = {
      allEvents: () => [
        {"name": "LA Clippers vs. Los Angeles Lakers", "dates":{"start":{"localDate":"2020-03-08"}},"priceRanges":[{"type":"standard","currency":"USD","min":399.0,"max":1099.0}]
      }
      ],
      isLoading: () => false
    }

    mutations = {
      setTotalPages: () => 10
    }

    store = new Vuex.Store({
      modules: {
        myModule: {
          state,
          actions,
          getters
        }
      }
    })
  })

//Action Test
  it('calls fetchEvent on load', () => {
    const wrapper = shallowMount(Index, { store, stubs: ['router-link'], localVue });
    expect(actions.fetchEvents).toHaveBeenCalled();
  })

  it('calls sortEvent when thead name is clicked', () => {
    const wrapper = shallowMount(Index, { store, stubs: ['router-link'], localVue });
    wrapper.find('#name').trigger('click');
    expect(actions.sortEvents).toHaveBeenCalled();
  })

  //UI Test

  // it("renders favourite routelink", () => {
  //   const wrapper = shallowMount(Index, { store, stubs: ['router-link'], localVue });
  //   expect(wrapper.find('router-link').exists()).toBe(true);
  // })

  it("renders page title", () => {
    const wrapper = shallowMount(Index, { store, stubs: ['router-link'], localVue });
    expect(wrapper.html()).toContain('<h1>Events Page</h1>')
  })


  it("renders table data", () => {
    const wrapper = shallowMount(Index, { store, stubs: ['router-link'], localVue });
    expect(wrapper.html()).toContain('<td style="padding-right: 20px;">LA Clippers vs. Los Angeles Lakers</td>')
    expect(wrapper.html()).toContain('<td>2020-03-08</td>')
    expect(wrapper.html()).toContain('<td>399</td>')
  })

  it("renders pagination", () => {
    const wrapper = shallowMount(Index, { store, stubs: ['router-link'], localVue });
    expect(wrapper.html()).toContain('<pagination-stub></pagination-stub>')
  })

  // it("renders pagination", () => {
  //   const wrapper = shallowMount(Index, { store, stubs: ['router-link'], localVue });
  //   expect(wrapper.store.state.totalPages).toBe(10);
  // })

//Router test



})



// continue to mock the response - tomorrow
  // it('contains loader', () => {
  //   const wrapper = mount(Index, { store, localVue });
  //   expect(wrapper.exists()).toBe(true);
  //   expect(wrapper.find('div.progress').exists()).toBe(true);
  //   const vm = wrapper.vm;
  //   console.log(wrapper.html());
  // })

