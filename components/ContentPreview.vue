<script lang="ts" setup>
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import StarterKit from '@tiptap/starter-kit'
import { EditorContent, useEditor, VueNodeViewRenderer } from '@tiptap/vue-3'
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
import { all, createLowlight } from 'lowlight'
import CodeBlockComponent from './CodeBlockComponent.vue'

const props = defineProps<{
  content?: string
}>()

const lowlight = createLowlight(all)

const { md } = useUtils()

lowlight.register('html', html)
lowlight.register('css', css)
lowlight.register('js', js)
lowlight.register('ts', ts)

const modelValue = defineModel<string>({
  required: false,
})

const editor = useEditor({
  content: md.render(props.content || ''),
  editable: false,
  extensions: [
    StarterKit.configure({
      codeBlock: false,
    }),
    Image,
    Link.configure({
      openOnClick: false,
    }),
    Table.configure({
      resizable: true,
    }),
    TableRow,
    TableHeader,
    TableCell,
    CodeBlockLowlight
      .extend({
        addNodeView() {
          return VueNodeViewRenderer(CodeBlockComponent as any)
        },
      })
      .configure({ lowlight }),
  ],
  onUpdate: ({ editor }) => {
    modelValue.value = editor.getHTML()
  },
})
</script>

<template>
  <div>
    <div
      v-if="editor" class="ProseMirrorWrapper" :class="{
        'border-none': content,
      }"
    >
      <EditorContent
        :editor="editor" class="prose max-w-full" :class="{
          'p-0': content,
          'p-4': !content,
        }"
      />
    </div>
  </div>
</template>

<style lang="scss">
.ProseMirrorWrapper {
  @apply w-full rounded-md border border-slate-200 bg-white text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50;
}

.ProseMirror {
  @apply outline-none;
}

.prose code {
  @apply bg-black/10;

  &::before,
  &::after {
    content: none;
  }
}

.ProseMirror {
  @apply outline-none;
  table {
    border-collapse: collapse;
    margin: 0;
    overflow: hidden;
    table-layout: fixed;
    width: 100%;

    td,
    th {
      border: 2px solid #ced4da;
      box-sizing: border-box;
      min-width: 1em;
      padding: 3px 5px;
      position: relative;
      vertical-align: top;

      > * {
        margin-bottom: 0;
      }
    }

    th {
      background-color: #f1f3f5;
      font-weight: bold;
      text-align: left;
    }

    .selectedCell:after {
      background: rgba(200, 200, 255, 0.4);
      content: '';
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      pointer-events: none;
      position: absolute;
      z-index: 2;
    }

    .column-resize-handle {
      background-color: #adf;
      bottom: -2px;
      position: absolute;
      right: -2px;
      pointer-events: none;
      top: 0;
      width: 4px;
    }

    p {
      margin: 0;
    }
  }
}

.tiptap {
  :first-child {
    margin-top: 0;
  }

  pre {
    background: #2e2b29;
    border-radius: 0.5rem;
    color: #fff;
    font-family: 'JetBrainsMono', monospace;
    margin: 1.5rem 0;
    padding: 0.75rem 1rem;

    code {
      background: none;
      color: inherit;
      font-size: 0.8rem;
      border: none;
      padding: 0;
    }
  }
}
</style>
