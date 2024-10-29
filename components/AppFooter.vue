<script setup>
import { defineComponent, h } from 'vue'

const navigation = [
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/opeyemi-adeniran-276650ab/',
    },
    {
        name: 'Github',
        href: 'https://github.com/Horpey',
    },
]

const year = computed(() => new Date().getFullYear())
</script>

<template>
    <footer class="bg-white">
        <div class="mx-auto max-w-7xl py-12 md:flex md:items-center md:justify-between flex-col md:flex-row">
            <p class="mt-8 text-xs/6 text-gray-600 md:mt-0 mb-4 md:mb-0">&copy; {{year}} Adeniran Opeyemi. All rights reserved.</p>
            <div class="flex md:justify-center justify-start items-center gap-x-6 md:order-2">
                <a 
                    href="mailto:adeniran.opeyemi.ao@gmail.com"
                    class="text-gray-600 hover:text-gray-900 text-xs transition-colors">
                    <span>Email</span>
                </a>
                <span class="text-xs/6 text-gray-600 size-1.5 rounded-full bg-gray-200"></span>
                <a 
                    href="https://www.linkedin.com/in/opeyemi-adeniran-276650ab/"
                    class="text-gray-600 hover:text-gray-900 text-xs transition-colors">
                    <span>LinkedIn</span>
                </a>
                <span class="text-xs/6 text-gray-600 size-1.5 rounded-full bg-gray-200"></span>
                <a 
                    href="https://github.com/Horpey"
                    class="text-gray-600 text-xs hover:text-gray-900 transition-colors">
                    <span>Github</span>
                </a>
            </div>
        </div>
    </footer>
</template>