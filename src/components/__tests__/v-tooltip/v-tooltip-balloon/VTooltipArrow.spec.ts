import VTooltipArrow from '@/components/v-tooltip/v-tooltip-balloon/VTooltipArrow.vue'
import { beforeEach, describe, expect, test } from 'vitest'
import { VueWrapper, shallowMount } from '@vue/test-utils'
import type { StyleValue } from 'vue'

describe('@/components/v-tooltip/v-tooltip-balloon/VTooltipArrow', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = shallowMount(VTooltipArrow, {
      props: {
        position: 'left'
      }
    })
  })

  test('checks borderColorProperty', () => {
    const expected: string = 'borderLeftColor'
    expect(wrapper.vm.borderColorProperty).toBe(expected)
  })

  test('checks arrowStyle', () => {
    const expected: StyleValue = {
      borderLeftColor: 'var(--c-grey)'
    }
    expect(wrapper.vm.arrowStyle).toStrictEqual(expected)
  })
})
