<script setup lang="ts">
import { NodeViewContent, nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3'
import { computed } from 'vue'

const props = defineProps(nodeViewProps)

const languages = props.extension.options.lowlight.listLanguages()

const selectedLanguage = computed({
  get() {
    return props.node.attrs.language
  },
  set(language: string | null) {
    props.updateAttributes({ language })
  },
})
</script>

<template>
  <NodeViewWrapper class="code-block">
    <select v-model="selectedLanguage" contenteditable="false">
      <option :value="null">
        auto
      </option>
      <option disabled>
        —
      </option>
      <option v-for="(language, index) in languages" :key="index" :value="language">
        {{ language }}
      </option>
    </select>
    <pre><code><NodeViewContent /></code></pre>
  </NodeViewWrapper>
</template>

<style lang="scss">
.tiptap {
  .code-block {
    position: relative;

    select {
      position: absolute;
      background-color: var(--white);
      background-repeat: no-repeat;
      outline: none;
      background-repeat: no-repeat;
      background-position: right 0.1rem center;
      background-size: 1.25rem 1.25rem;

      border: none;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="White" d="M7 10l5 5 5-5z"/></svg>');
      right: 0.5rem;
      top: 0.5rem;
      background-color: #ffffff3b;
      padding: 2px 3px;
      border-radius: 6px;
      color: white;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-color: #ffffff3b;
      padding: 6px 9px;

      font-size: 12px;
    }
  }
}
</style>
