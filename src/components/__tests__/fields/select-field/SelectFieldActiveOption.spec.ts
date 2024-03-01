import SelectFieldActiveOption from "@/components/fields/select-field/SelectFieldActiveOption.vue"
import { beforeEach, describe, expect, test } from "vitest"
import { flushPromises, shallowMount, type VueWrapper } from "@vue/test-utils"
import { faker } from "@faker-js/faker"
import type { SelectFieldOption } from "@/types/SelectField"
import { ref, type Ref } from "vue"

describe('@/components/fields/select-field/SelectFieldActiveOption.vue', () => {
  let wrapper: VueWrapper

  const selection: Ref<any> = ref(null)

  const option: SelectFieldOption = {
    label: faker.lorem.word(),
    value: 1
  }

  beforeEach(() => {
    wrapper = shallowMount(SelectFieldActiveOption, {
      props: {
        option: option,
        selection: selection.value,
        'onUpdate:selection': (e: boolean) => {
          selection.value = e
        }
      }
    })
  })

  test('checks label', () => {
    const div = wrapper.get('[data-test="option"]')
    expect(div.text()).toBe(option.label)
  })

  test('option div updates selection value when clicked', async () => {
    const div = wrapper.get('[data-test="option"]')
    await div.trigger('click')
    await flushPromises()
    expect(selection.value).toBe(option.value)
  })
})