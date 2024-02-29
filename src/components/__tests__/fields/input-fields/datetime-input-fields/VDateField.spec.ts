import VDateField from "@/components/fields/input-fields/datetime-input-fields/VDateField.vue"
import { mount, type VueWrapper } from "@vue/test-utils"
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"
import { ref, type Ref } from "vue"

describe('@/components/fields/input-fields/datetime-input-fields/VDateField.vue', () => {
  let wrapper: VueWrapper
  const date: Ref<Date | null> = ref(null)

  afterEach(() => {
    date.value = null
  })

  beforeEach(() => {
    wrapper = mount(VDateField, {
      props: {
        date: date.value,
        'onUpdate:date': (e: Date | null) => {
          date.value = e
        }
      }
    })
  })

  test('checks setDate', () => {
    const expected: Date = new Date()
    wrapper.vm.setDate(expected)
    expect(date.value).toBe(expected)
  })

  test('properDate is null when dateString is empty', () => {
    wrapper.vm.dateString = ''
    expect(wrapper.vm.properDate).toBe(null)
  })

  test('properDate is the date generated from dateString when it is not empty', async () => {
    const dateString: string = '2024-02-29'
    wrapper.vm.dateString = dateString
    expect(wrapper.vm.properDate).toStrictEqual(new Date(dateString))
  })

  test('dateString is an empty string initially when model date is null', () => {
    expect(wrapper.vm.dateString).toBe('')
  })
})