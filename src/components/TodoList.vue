<template>
  <div class="md-5">
    <h1>TODO List Demo App</h1>
    <button type="button" class="btn btn-default add-button" @click="showAddModal = true">
      Add
    </button>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Task name</th>
          <th scope="col">Status</th>
          <th scope="col">Edit</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ todo.text }}</td>
          <td>
            <button type="button" class="btn btn-default">
              {{ todo.completed }}
            </button>
          </td>
          <td>
            <button type="button" class="btn btn-default" @click="editTodo(todo, index)">
              <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
            </button>
          </td>
          <td>
            <button @click="deleteTodo(index)" type="button" class="btn btn-default">
              <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <p>{{ todos }}</p>
    <TodoAddModal v-if="showAddModal" @close="showAddModal = false" @addTodo="addTodo" />
    <TodoEditModal
      v-if="showEditModal"
      @close="showEditModal = false"
      @updateTodo="updateTodo($event, todo, editedIndex)"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '../stores/TodoStore.js'
import TodoAddModal from './TodoAddModal.vue'
import TodoEditModal from './TodoEditModal.vue'

const store = useTodoStore()
const todos = store.todos

const showAddModal = ref(false)
const showEditModal = ref(false)
const editedIndex = ref(null)
const editedTodo = ref({})

const addTodo = (newTodo) => {
  store.addTodo(newTodo)
  showAddModal.value = false
}

const updateTodo = (updatedTodo, index) => {
  editedIndex.value = index
  editedTodo.value = { ...updatedTodo }
  showEditModal.value = true
}

const deleteTodo = (index) => {
  store.deleteTodo(index)
}
</script>

<style scoped></style>
