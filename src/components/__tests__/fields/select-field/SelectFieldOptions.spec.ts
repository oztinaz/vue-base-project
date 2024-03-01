import SelectFieldOptions from '@/components/fields/select-field/SelectFieldOptions.vue'
import { mount, type VueWrapper } from "@vue/test-utils";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { ref, type Ref } from 'vue';
import { ArrayUtils } from '@/utils/Array';
import type { SelectFieldOption } from '@/types/SelectField';

describe('@/components/fields/select-field/SelectFieldOptions.vue', () => {
  let wrapper: VueWrapper

  const selection: Ref<any> = ref(null)

  const range: number = 5

  const options: SelectFieldOption[] = ArrayUtils.createRange(range).map((item: number): SelectFieldOption => {
    return {
      label: item.toString(),
      value: item
    }
  })

  afterEach(() => {
    selection.value = null
  })

  beforeEach(() => {
    wrapper = mount(SelectFieldOptions, {
      props: {
        selection: selection.value,
        'onUpdate:selection': (e: any): void => {
          selection.value = e
        },
        options: options
      }
    })
  })

  test('displays all options when search query is empty', () => {
    const optionDivs = wrapper.findAll('[data-test="option"]')
    expect(optionDivs).toHaveLength(range)
  })

  test('displays only filtered options when search query is not empty', () => {
    wrapper.vm.searchQuery = '1'
    const optionDivs = wrapper.findAll('[data-test="option"]')
    expect(optionDivs).toHaveLength(wrapper.vm.options.length)
  })

  test('optionSearch not shown when searchable is false', () => {
    const optionSearch = wrapper.find('[data-test="option-search"]')
    expect(optionSearch.exists()).toBeFalsy()
  })

  test('optionSearch is shown when searchable is true', async () => {
    await wrapper.setProps({
      searchable: true
    })
    const optionSearch = wrapper.find('[data-test="option-search"]')
    expect(optionSearch.exists()).toBeTruthy()
  })
})