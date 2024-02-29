import { ArrayUtils } from '@/utils/Array'
import { describe, expect, test } from 'vitest'

describe('@/utils/ArrayUtils', () => {
  test('checks createRange result', () => {
    const expected: number = 5
    const result: number[] = ArrayUtils.createRange(expected)

    expect(result).toHaveLength(expected)
  })
})
