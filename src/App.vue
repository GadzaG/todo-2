<template>
  <div class="app">
    <TodoList />
  </div>
</template>

<script>
import { provide } from 'vue'
import { useTodoStore } from '../stores/TodoStore.js'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
  },
  setup() {
    const store = useTodoStore()
    provide('todoStore', store)
  }
}
</script>
