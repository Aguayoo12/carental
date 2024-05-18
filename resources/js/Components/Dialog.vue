<template>
    <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
            <v-text-field label="Label" variant="outlined" v-bind="activatorProps" ></v-text-field>
        </template>

        <template v-slot:default="{ isActive }">
            <v-container>
                <v-row justify="space-around">
                    <v-date-picker
                    locale="es"
                    />
                </v-row>
            </v-container>
        </template>
    </v-dialog>
</template>

<script>
import Imput from '@/Components/form/Imput.vue';

export default {
    data() {
        return {
            dialog: false,
        };
    },
    components: { Imput }
}

</script>