import SelectFieldOption from '@/components/fields/select-field/SelectFieldOption.vue'
import { flushPromises, mount, type VueWrapper } from "@vue/test-utils";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { ref, type Ref } from 'vue';
import { faker } from '@faker-js/faker';
import type { SelectFieldOption as TSelectFieldOption } from '@/types/SelectField';

describe('@/components/fields/select-field/SelectFieldOption.vue', () => {
  let wrapper: VueWrapper

  const selection: Ref<any> = ref(null)

  const option: Ref<TSelectFieldOption> = ref({
    label: faker.lorem.word(),
    value: null
  })

  afterEach(() => {
    selection.value = null
  })

  beforeEach(() => {
    wrapper = mount(SelectFieldOption, {
      props: {
        selection: selection.value,
        'onUpdate:selection': (e: any): void => {
          selection.value = e
        },
        option: option.value
      }
    })
  })

  test('isDisabled is true when selection value and option value are the same', () => {
    expect(wrapper.vm.isDisabled).toBeTruthy()
  })

  test('isDisabled is false when selection value and option value are different', async () => {
    await wrapper.setProps({
      selection: 1
    })
    expect(wrapper.vm.isDisabled).toBeFalsy()
  })

  test('SelectFieldDisabledOption shown and SelectFieldActiveOption is not when isDisabled true', () => {
    const active = wrapper.find('[data-test="active-option"]')
    const disabled = wrapper.find('[data-test="disabled-option"]')
    expect(active.exists()).toBeFalsy()
    expect(disabled.exists()).toBeTruthy()
  })

  test('SelectFieldActiveOption shown and SelectFieldDisabledOption is not when isDisabled false', async () => {
    await wrapper.setProps({
      selection: 1
    })
    const active = wrapper.find('[data-test="active-option"]')
    const disabled = wrapper.find('[data-test="disabled-option"]')
    expect(active.exists()).toBeTruthy()
    expect(disabled.exists()).toBeFalsy()
  })
})