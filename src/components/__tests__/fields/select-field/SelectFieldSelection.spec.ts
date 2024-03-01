import SelectFieldSelection from "@/components/fields/select-field/SelectFieldSelection.vue"
import { faker } from "@faker-js/faker"
import { flushPromises, mount, type VueWrapper } from "@vue/test-utils"
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"
import { ref, type Ref } from "vue"

describe('@/components/fields/select-field/SelectFieldSelection.vue', () => {
  let wrapper: VueWrapper

  const isOpen: Ref<boolean> = ref(false)

  const close = vi.fn()

  const open = vi.fn()

  const selection: any = null

  afterEach(() => {
    isOpen.value = false
  })

  beforeEach(() => {
    wrapper = mount(SelectFieldSelection, {
      props: {
        isOpen: isOpen.value,
        'onUpdate:isOpen': (e: boolean): void => {
          isOpen.value = e
        },
        close: close,
        open: open,
        selection: selection
      }
    })
  })

  test('selectionClass is only selection when isOpen is false', () => {
    expect(wrapper.vm.selectionClass).toBe('selection')
  })

  test('selectionClass is selection open when isOpen is true', async () => {
    await wrapper.setProps({
      isOpen: true
    })
    expect(wrapper.vm.selectionClass).toBe('selection open')
  })

  test('props.close is called once when toggle called while isOpen is true', async () => {
    await wrapper.setProps({
      isOpen: true
    })
    wrapper.vm.toggle()
    expect(close).toHaveBeenCalledOnce()
  })

  test('props.open is called once when toggle called while isOpen is false', () => {
    wrapper.vm.toggle()
    expect(open).toHaveBeenCalledOnce()
  })

  test('SelectFieldSelectionValueWithLabel is shown and SelectFieldSelectionValueWithoutLabel not when label has passed', async () => {
    await wrapper.setProps({
      label: faker.lorem.word()
    })
    const component1 = wrapper.find('[data-test="with-label"]')
    const component2 = wrapper.find('[data-test="without-label"]')

    expect(component1.exists()).toBeTruthy()
    expect(component2.exists()).toBeFalsy()
  })

  test('SelectFieldSelectionValueWithoutLabel is shown and SelectFieldSelectionValueWithLabel not when label has passed', () => {
    const component1 = wrapper.find('[data-test="with-label"]')
    const component2 = wrapper.find('[data-test="without-label"]')

    expect(component1.exists()).toBeFalsy()
    expect(component2.exists()).toBeTruthy()
  })

  test('FaCaretDownIcon is shown and FaCaretLeftIcon not when isOpen is true', async () => {
    await wrapper.setProps({
      isOpen: true
    })
    const icon1 = wrapper.find('[data-test="down-icon"]')
    const icon2 = wrapper.find('[data-test="left-icon"]')

    expect(icon1.exists()).toBeTruthy()
    expect(icon2.exists()).toBeFalsy()
  })

  test('FaCaretLeftIcon is shown and FaCaretDownIcon not when isOpen is false', () => {
    const icon1 = wrapper.find('[data-test="down-icon"]')
    const icon2 = wrapper.find('[data-test="left-icon"]')

    expect(icon1.exists()).toBeFalsy()
    expect(icon2.exists()).toBeTruthy()
  })
})