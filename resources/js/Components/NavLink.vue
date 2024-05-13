<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    href: String,
    active: Boolean,
});

const classes = computed(() => {
    return props.active
    ? 'inline-flex items-center px-3 my-4 rounded border border-transparent bg-red-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:text-gray-700 focus:bg-gray-300 transition duration-150 ease-in-out'
    : 'inline-flex items-center px-3 my-4 rounded border border-transparent text-sm font-medium leading-5 text-gray-500 hover:bg-red-400 focus:outline-none focus:text-gray-700 focus:border-gray-300 focus:bg-gray-100 transition duration-150 ease-in-out';
});
</script>

<template>
    <Link :href="href" :class="classes" style="color: white;">
        <slot />
    </Link>
</template>
