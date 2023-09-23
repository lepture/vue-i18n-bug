<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SlotDemo from './SlotDemo.vue'

const { locale } = useI18n()
</script>

<template>
  <div>
    <span v-t="'home'"></span>
    <SlotDemo>
      <span v-t="'home'"></span>
    </SlotDemo>
    <select v-model="locale">
      <option value="en">English</option>
      <option value="ja">Japanese</option>
    </select>
  </div>
</template>
