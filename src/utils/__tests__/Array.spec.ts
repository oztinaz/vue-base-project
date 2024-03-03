import { ArrayUtils } from '@/utils/Array'
import { describe, expect, test, vi } from 'vitest'

describe('@/utils/ArrayUtils', () => {
  test('checks createRange result', () => {
    const expected: number = 5
    const result: number[] = ArrayUtils.createRange(expected)

    expect(result).toHaveLength(expected)
  })

  test('update uses array.splice', () => {
    const array = [1, 2]
    const spy = vi.spyOn(array, 'splice')

    ArrayUtils.update(array, 1, 3)

    expect(spy).toHaveBeenCalledTimes(2)
    expect(spy.mock.calls).toStrictEqual([
      [1, 1],
      [1, 0, 3]
    ])
    expect(array[1]).toBe(3)
  })

  test('replace uses ArrayUtils.update', () => {
    const array = [1, 2]
    const spy = vi.spyOn(ArrayUtils, 'update')

    ArrayUtils.replace(array, 0, 1)

    expect(spy).toHaveBeenCalledTimes(2)
    expect(spy.mock.calls).toStrictEqual([
      [array, 0, 2],
      [array, 1, 1]
    ])
    expect(array[0]).toBe(2)
    expect(array[1]).toBe(1)
  })
})
