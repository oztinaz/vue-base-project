import VModalDialogContentBody from '@/components/v-modal/VModalDialogContentBody.vue'
import { VueWrapper, flushPromises, shallowMount } from '@vue/test-utils'
import { beforeEach, describe, expect, test } from 'vitest'
import { ref, type Ref } from 'vue'

describe('@/components/v-modal/VModalDialogContentBody.vue', () => {
  let wrapper: VueWrapper

  const slot: string = 'Hello, World!'

  beforeEach(() => {
    wrapper = shallowMount(VModalDialogContentBody, {
      slots: {
        default: slot
      }
    })
  })

  test('checks slot', async () => {
    const div = wrapper.get('[data-test="body"]')
    expect(div.text()).toBe(slot)
  })
})