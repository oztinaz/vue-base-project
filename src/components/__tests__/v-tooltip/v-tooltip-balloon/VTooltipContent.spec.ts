import VTooltipContent from '@/components/v-tooltip/v-tooltip-balloon/VTooltipContent.vue'
import { beforeEach, describe, expect, test } from 'vitest'
import { VueWrapper, shallowMount } from '@vue/test-utils'

describe('@/components/v-tooltip/v-tooltip-balloon/VTooltipContent', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = shallowMount(VTooltipContent, {
      slots: {
        default: 'Hello, World!'
      }
    })
  })

  test('checks slot', () => {
    const expected: string = 'Hello, World!'
    expect(wrapper.html()).toContain(expected)
  })
})
