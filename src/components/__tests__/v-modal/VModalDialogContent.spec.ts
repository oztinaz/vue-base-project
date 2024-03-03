import VModalDialogContent from '@/components/v-modal/VModalDialogContent.vue'
import { VueWrapper, shallowMount } from '@vue/test-utils'
import { beforeEach, describe, expect, test } from 'vitest'
import { ref, type Ref } from 'vue'

describe('@/components/v-modal/VModalDialogContent.vue', () => {
  let wrapper: VueWrapper

  const isOpen: Ref<boolean> = ref(false)

  beforeEach(() => {
    wrapper = shallowMount(VModalDialogContent, {
      props: {
        isOpen: isOpen.value,
        'onUpdate:isOpen': (e: boolean): void => {
          isOpen.value = e
        }
      }
    })
  })

  test('close make isOpen false', async () => {
    await wrapper.setProps({
      isOpen: true
    })

    wrapper.vm.close()

    expect(isOpen.value).toBeFalsy()
  })
})