import VModalOpener from '@/components/v-modal/VModalOpener.vue'
import { VueWrapper, flushPromises, shallowMount } from '@vue/test-utils'
import { beforeEach, describe, expect, test } from 'vitest'
import { ref, type Ref } from 'vue'

describe('@/components/v-modal/VModalOpener.vue', () => {
  let wrapper: VueWrapper

  const isOpen: Ref<boolean> = ref(false)

  beforeEach(() => {
    wrapper = shallowMount(VModalOpener, {
      props: {
        isOpen: isOpen.value,
        'onUpdate:isOpen': (e: boolean): void => {
          isOpen.value = e
        }
      }
    })
  })

  test('open make isOpen true', async () => {
    await wrapper.setProps({
      isOpen: false
    })

    wrapper.vm.open()

    expect(isOpen.value).toBeTruthy()
  })

  test('open make isOpen true', async () => {
    await wrapper.setProps({
      isOpen: false
    })
    await wrapper.get('[data-test="opener"]').trigger('click')
    await flushPromises()

    expect(isOpen.value).toBeTruthy()
  })
})