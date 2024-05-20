<template>
    <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
            <v-text-field label="Introduzca una fecha" variant="outlined" v-bind="activatorProps" ></v-text-field>
        </template>

        <template v-slot:default="{ isActive }">
            <v-container>
                <v-row justify="space-around">
                    <ADatepicker/>
                </v-row>
            </v-container>
        </template>
    </v-dialog>
</template>

<script>
import Imput from '@/Components/form/Imput.vue';
import ADatepicker from '@/Components/form/a-datepicker.vue';
export default {
    data() {
        return {
            dialog: false,
        };
    },
    components: { Imput, ADatepicker }
}

</script>