<script setup lang="ts">
import { ArrayUtils } from '@/utils/Array';
import { onMounted, onUpdated, ref, type Ref } from 'vue'

interface DraggableEvent extends Event {
  target: Element
}

const props = defineProps<{
  tag: string
}>()

const items = defineModel('items', {
  required: true,
  type: Array<any>
})

const component: Ref<HTMLElement | null> = ref(null)

const fromIndex: Ref<number> = ref(-1)
const toIndex: Ref<number> = ref(-1)

const dragStart = (event: DraggableEvent): void => {
  fromIndex.value = getClosestDataIndex(event) ?? -1
}

const dragEnter = (event: DraggableEvent): void => {
  addOverClass(event)
}

const dragLeave = (event: DraggableEvent): void => {
  removeOverClass(event)
}

const dragOver = (event: DraggableEvent): void => {
  event.preventDefault()
}

const drop = (event: DraggableEvent) => {
  toIndex.value = getClosestDataIndex(event) ?? -1
  swapItems(fromIndex.value, toIndex.value)
  removeOverClass(event)
}

const addOverClass = (event: DraggableEvent): void => {
  event.target.classList.add('over')
}

const removeOverClass = (event: DraggableEvent): void => {
  event.target.classList.remove('over')
}

const getClosestDataIndex = (event: DraggableEvent): number | null => {
  const closest: Element | null = getClosest(event)
  if (closest) {
    const dataIndex: string | null = getDataIndex(closest)
    if (dataIndex !== null) {
      return parseInt(dataIndex)
    }
  }
  return null
}

const getClosest = (event: DraggableEvent): Element | null => {
  return event.target.closest('[draggable=true]')
}

const getDataIndex = (element: Element): string | null => {
  return element.getAttribute('data-index')
}

const swapItems = (fromIndex: number, toIndex: number): void => {
  ArrayUtils.replace(items.value, fromIndex, toIndex)
}

const makeItemsDraggable = (): void => {
  if (component.value === null) {
    return
  }

  const items: NodeListOf<Element> | undefined = component.value.querySelectorAll('[draggable=true]')
  if (!items) {
    return
  }

  items.forEach((item: Element) => {
    addEventListeners(item)
  })
}

const addEventListeners = (item: Element): void => {
  item.addEventListener('dragstart', dragStart as EventListener)
  item.addEventListener('dragover', dragOver as EventListener)
  item.addEventListener('drop', drop as EventListener)
  item.addEventListener('dragenter', dragEnter as EventListener)
  item.addEventListener('dragleave', dragLeave as EventListener)
}

onMounted(() => {
  makeItemsDraggable()
})

onUpdated(() => {
  makeItemsDraggable()
})
</script>

<template>
  <component :is="props.tag" ref="component">
    <slot></slot>
  </component>
</template>

<style scoped>
:slotted([draggable=true]) {
  cursor: pointer;
}
</style>
