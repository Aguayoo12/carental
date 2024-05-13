<template>
    <div class="max-w-4xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" style="position: relative; z-index: 2; top: -60px;">
        <v-row>
            <Dialog/>
        </v-row>
        <v-row>
            <v-col cols="12" md="6"></v-col>
            <v-col cols="12" md="6"></v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6"></v-col>
            <v-col cols="12" md="4"></v-col>
            <v-col cols="4" md="2">
                <SecondaryButton>Buscar</SecondaryButton>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import SecondaryButton from '@/Components/buttons/SecondaryButton.vue';
import Dialog from '@/Components/Dialog.vue';
export default {
    name: "SearchCars",
    data() {
        return {
            people: [1, 2, 3, 4, 5, 6, 7],
        };
    },
    methods: {},
    components: { SecondaryButton, Dialog }
}
</script>
