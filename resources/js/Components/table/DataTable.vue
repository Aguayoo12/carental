<template>
<v-card flat>
    <v-card-title class="d-flex align-center pe-2">
        <v-icon :icon="icon"></v-icon> &nbsp;
        {{title}}
        <v-spacer></v-spacer>

        <v-text-field
            v-model="search"
            density="compact"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="solo-filled"
            flat
            hide-details
            single-line
        ></v-text-field>
    </v-card-title>

    <v-divider></v-divider>
    <v-data-table v-model:search="search" :items="items">
        <template v-slot:item.image="{ item }">
            <v-card class="my-2" elevation="2" rounded>
            <v-img
                :src="asset('storage/img/'.item.image)"
                height="64"
                cover
            ></v-img>
            </v-card>
        </template>
    </v-data-table>
</v-card>
</template>

<script>
export default {
    name: "DataTable",

    props: {
        items: {
            type: Array,
            required: true
        },

        title: {
            type: String,
            required: true
        },

        icon: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            search: '',
        }
    },

}
</script>