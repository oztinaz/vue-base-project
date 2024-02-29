import ValidationTooltip from '@/components/validation-tooltip/ValidationTooltip.vue'
import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, expect, test } from 'vitest'
import { faker } from '@faker-js/faker'
import type { Validation } from '@/types/Validation'

describe('@/components/validation-tooltip/ValidationTooltip', () => {
  let wrapper: VueWrapper
  const input: string = faker.lorem.word()
  const validations: Validation[] = []

  beforeEach(() => {
    wrapper = mount(ValidationTooltip, {
      props: {
        input: input,
        validations: validations
      }
    })
  })

  test('checks default position', () => {
    expect(wrapper.vm.position).toBe('left')
  })
})
