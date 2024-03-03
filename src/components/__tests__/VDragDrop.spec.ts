import VDragDrop from "@/components/VDragDrop.vue";
import { VueWrapper, shallowMount } from "@vue/test-utils";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { ref, type Ref } from "vue";

describe('', () => {
  let wrapper: VueWrapper

  const numbers: Ref<number[]> = ref([1, 2])

  beforeEach(() => {
    wrapper = shallowMount(VDragDrop, {
      props: {
        items: numbers.value,
        'onUpdate:items': (e: number[]): void => {
          numbers.value = e
        },
        tag: 'div'
      }
    })
  })
  
  test('checks addEventListeners', () => {
    const item = {
      addEventListener: vi.fn().mockImplementation((name: string, eventListener: EventListener): void => {})
    }

    wrapper.vm.addEventListeners(item)

    expect(item.addEventListener).toHaveBeenCalledTimes(5)
    expect(item.addEventListener.mock.calls).toStrictEqual([
      ['dragstart', wrapper.vm.dragStart],
      ['dragover', wrapper.vm.dragOver],
      ['drop', wrapper.vm.drop],
      ['dragenter', wrapper.vm.dragEnter],
      ['dragleave', wrapper.vm.dragLeave],
    ])
  })
})