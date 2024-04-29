<template>

  <form class="controlArea" @submit.prevent="addTodo">
    <input type="text" placeholder="Your task" class="textInput" v-model="input"/>
    <button type="submit" class="saveButton">Add</button>
  </form>

  <div class="listArea">

    <div v-if="todos.length" class="list">
      <div v-for="(todo,i) in todos" class="todoItem">
        <span>{{ todo }}</span>
        <Icon name="clarity:times-circle-solid" class="close" @click="deleteTodo(i)"/>
      </div>

    </div>

    <div v-else class="emptyTodos">
      Todos is empty
    </div>
  </div>

  <button v-if="todos.length" type="button" class="clearButton" @click="clearTodos">
    Clear
  </button>

</template>

<script lang="ts" setup>

const todos = ref<any[]>([])
const input = ref<string>()
const addTodo = () => {
  todos.value.push(input.value);
  clearInput();
}

const deleteTodo = (id: number) => todos.value = todos.value.filter((e, i) => i !== id)
const clearInput = () => input.value = ''
const clearTodos = () => todos.value = []
</script>

<style lang="scss">
@mixin transitionDuration {
  @apply transition duration-300
}

.controlArea {
  @apply
  flex
  gap-2;
}

.clearButton {
  @include transitionDuration;

  @apply
  bg-red-300
  w-full
  p-1
  rounded
  mt-2
  shadow
  hover:bg-red-200
  text-zinc-800
  font-bold
}

.textInput {
  @include transitionDuration;
  @apply
  px-4 py-2
  bg-white
  outline-none
  rounded
  hover:shadow
  ring-1
  text-sm
  text-gray-800;

}

.saveButton {
  @apply
  px-4 py-2
  bg-blue-800
  rounded
  text-white
  hover:bg-blue-700;
}

.listArea {
  @apply
  mt-2 p-2
  rounded
  bg-white
  border-2
  border-gray-300
  shadow
  min-h-48
  flex justify-center items-center;

  .list {
    @apply
    self-baseline
    w-full
    space-y-2;

    .todoItem {
      @include transitionDuration;
      @apply
      bg-gray-800
      text-gray-200
      p-1 px-2
      rounded
      flex
      items-center
      justify-between
      hover:bg-gray-700;


      .close {
        @apply
        hover:text-red-400
        cursor-pointer;
      }
    }
  }

  .emptyTodos {
    @apply
    rounded
    text-gray-500
    px-4 py-2;
  }


}
</style>