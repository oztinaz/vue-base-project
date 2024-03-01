import DatetimeField from "@/components/fields/input-fields/datetime-input-fields/DatetimeField.vue"
import { mount, type VueWrapper } from "@vue/test-utils";
import { beforeEach, describe, expect, test } from "vitest";
import { ref, type Ref } from "vue";

describe('@/components/fields/input-fields/datetime-input-fields/DatetimeField.vue', () => {
  let wrapper: VueWrapper

  const datetime: Ref<Date | null> = ref(null)

  beforeEach(() => {
    wrapper = mount(DatetimeField, {
      props: {
        datetime: datetime.value,
        'onUpdate:datetime': (e: Date | null) => {
          datetime.value = e
        }
      }
    })
  })

  test('date is null initially when datetime is null', () => {
    expect(wrapper.vm.date).toBe(null)
  })

  test('date is initially the value datetime has', async () => {
    const date = new Date()
    wrapper = mount(DatetimeField, {
      props: {
        datetime: date
      }
    })
    expect(wrapper.vm.date).toStrictEqual(date)
  })

  test('time is empty string initially when datetime is null', () => {
    expect(wrapper.vm.time).toBe('')
  })

  test('time is initially the value datetime has', async () => {
    const date = new Date()
    wrapper = mount(DatetimeField, {
      props: {
        datetime: date
      }
    })
    expect(wrapper.vm.time).toStrictEqual(`${date.getHours()}:${date.getMinutes()}`)
  })
})