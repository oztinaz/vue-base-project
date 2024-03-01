import ImageFieldUpload from "@/components/fields/image-fields/ImageFieldUpload.vue";
import { mount, type VueWrapper } from "@vue/test-utils";
import { beforeEach, describe, expect, test } from "vitest";
import { ref, type Ref } from "vue";

describe('', () => {
  let wrapper: VueWrapper

  const src: Ref<string> = ref('')

  beforeEach(() => {
    wrapper = mount(ImageFieldUpload, {
      props: {
        src: src.value,
        'onUpdate:src': (e: string): void => {
          src.value = e
        }
      }
    })
  })
  
  test('displays default image when src model is empty', () => {
    expect(wrapper.vm.displaySrc).toBe('/src/assets/default-image.png')
  })
})