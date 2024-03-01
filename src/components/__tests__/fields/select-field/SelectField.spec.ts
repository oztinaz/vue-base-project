import SelectField from "@/components/fields/select-field/SelectField.vue"
import type { SelectFieldOption } from "@/types/SelectField"
import { ArrayUtils } from "@/utils/Array"
import { flushPromises, mount, type VueWrapper } from "@vue/test-utils"
import { beforeEach, describe, expect, test } from "vitest"
import { ref, type Ref } from "vue"

describe('', () => {
  let wrapper: VueWrapper

  const selection: Ref<any> = ref(null)

  const options: SelectFieldOption[] = ArrayUtils.createRange(1).map((i: number): SelectFieldOption => {
    return {
      label: i.toString(),
      value: i
    }
  })

  beforeEach(() => {
    wrapper = mount(SelectField, {
      selection: selection.value,
      'onUpdate:selection': (e: any): void => {
        selection.value = e
      },
      options: options
    })
  })

  test('SelectFieldOptions not shown when isOpen is false', () => {
    const options = wrapper.find('[data-test="options"]')
    expect(options.exists()).toBeFalsy()
  })

  test('SelectFieldOptions is shown when isOpen is true', async () => {
    wrapper.vm.isOpen = true
    await flushPromises()
    const options = wrapper.find('[data-test="options"]')
    expect(options.exists()).toBeTruthy()
  })
})