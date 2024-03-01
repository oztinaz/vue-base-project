import SelectFieldDisabledOption from "@/components/fields/select-field/SelectFieldDisabledOption.vue"
import { beforeEach, describe, expect, test } from "vitest"
import { shallowMount, type VueWrapper } from "@vue/test-utils"
import { faker } from "@faker-js/faker"
import type { SelectFieldOption } from "@/types/SelectField"

describe('@/components/fields/select-field/SelectFieldDisabledOption.vue', () => {
  let wrapper: VueWrapper

  const option: SelectFieldOption = {
    label: faker.lorem.word(),
    value: null
  }

  beforeEach(() => {
    wrapper = shallowMount(SelectFieldDisabledOption, {
      props: {
        option: option
      }
    })
  })

  test('checks label', () => {
    const div = wrapper.get('[data-test="option"]')
    expect(div.text()).toBe(option.label)
  })
})