export class ArrayUtils {
  public static createRange(size: number, startAt: number = 0): number[] {
    return [...Array(size).keys()].map((i) => i + startAt)
  }

  public static replace<T>(array: T[], index1: number, index2: number): void {
    const element1: T = array[index1]
    const element2: T = array[index2]

    this.update(array, index1, element2)
    this.update(array, index2, element1)
  }

  public static update<T>(array: T[], index: number, value: T): void {
    array.splice(index, 1)
    array.splice(index, 0, value)
  }
}
