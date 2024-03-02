import VButton from "@/components/VButton.vue";
import { mount, type VueWrapper } from "@vue/test-utils";
import { beforeEach, describe, expect, test } from "vitest";

describe('@/components/VButton.vue', () => {
  let wrapper: VueWrapper

  const slot: string = 'Hello, World!'

  beforeEach(() => {
    wrapper = mount(VButton, {
      slots: {
        default: slot
      }
    })
  })
  
  test('isDisabled is true when props.disabled is true and props.loading is false', async () => {
    await wrapper.setProps({
      disabled: true,
      loading: false
    })
    expect(wrapper.vm.isDisabled).toBeTruthy()
  })
  
  test('isDisabled is true when props.disabled is false and props.loading is true', async () => {
    await wrapper.setProps({
      disabled: false,
      loading: true
    })
    expect(wrapper.vm.isDisabled).toBeTruthy()
  })
  
  test('buttonColorStyle is set according to props.color', () => {
    expect(wrapper.vm.buttonColorStyle).toStrictEqual({
      '--c-main': `var(--c-grey)`,
      '--c-hover': `var(--c-light-grey)`,
      '--c-active': `var(--c-dark-grey)`
    })
  })
  
  test('buttonPaddingStyle is set according to props.size when it is normal', () => {
    expect(wrapper.vm.buttonPaddingStyle).toStrictEqual({
      padding: '10px 15px'
    })
  })
  
  test('buttonPaddingStyle is set according to props.size when it is small', async () => {
    await wrapper.setProps({
      size: 'small'
    })
    expect(wrapper.vm.buttonPaddingStyle).toStrictEqual({
      padding: '5px 7px'
    })
  })
  
  test('buttonStyle is combination of buttonColorStyle and buttonPaddingStyle', () => {
    expect(wrapper.vm.buttonStyle).toStrictEqual({
      ...wrapper.vm.buttonColorStyle,
      ...wrapper.vm.buttonPaddingStyle
    })
  })
  
  test('loading is shown and span not when props.loading is true', async () => {
    await wrapper.setProps({
      loading: true
    })
    const loading = wrapper.find('[data-test="loading"]')
    const span = wrapper.find('[data-test="span"]')
    expect(loading.exists()).toBeTruthy()
    expect(span.exists()).toBeFalsy()
  })
  
  test('span is shown loading not when props.loading is false', () => {
    const loading = wrapper.find('[data-test="loading"]')
    const span = wrapper.find('[data-test="span"]')
    expect(loading.exists()).toBeFalsy()
    expect(span.exists()).toBeTruthy()
  })
  
  test('span displays the slot', () => {
    const span = wrapper.find('[data-test="span"]')
    expect(span.text()).toBe(slot)
  })
})