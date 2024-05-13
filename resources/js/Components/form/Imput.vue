<template>
    <v-row>
        <v-col cols="12" md="4">
            <label>{{label}}</label>
        </v-col>
        <v-col cols="12" md="8">
            <slot />
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: '',
        },
    },
}
</script>