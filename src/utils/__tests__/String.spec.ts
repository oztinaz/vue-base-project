import { StringUtils } from '@/utils/String'
import { describe, expect, test } from 'vitest'

describe('@/utils/StringUtils', () => {
  test('checks firstLetterUpperCase result', () => {
    const given: string = 'test'
    const result: string = StringUtils.firstLetterUpperCase(given)
    const expected: string = 'Test'

    expect(expected).toBe(result)
  })
})
