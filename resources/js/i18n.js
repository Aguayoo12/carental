import { createI18n } from 'vue-i18n';

const messages = {
    es: {
        $vuetify: {
            badge: 'Insignia',
            close: 'Cerrar',
            dataIterator: {
                noResultsText: 'No se encontraron registros coincidentes',
                loadingText: 'Cargando elementos...',
            },
            dataTable: {
                itemsPerPageText: 'Filas por página:',
                ariaLabel: {
                    sortDescending: ': Orden descendente. Activar para quitar orden.',
                    sortAscending: ': Orden ascendente. Activar para ordenar descendente.',
                    sortNone: ': Sin ordenar. Activar para ordenar ascendente.',
                },
                sortBy: 'Ordenar por',
            },
            dataFooter: {
                itemsPerPageText: 'Ítems por página:',
                itemsPerPageAll: 'Todos',
                nextPage: 'Página siguiente',
                prevPage: 'Página anterior',
                firstPage: 'Primera página',
                lastPage: 'Última página',
                pageText: '{0}-{1} de {2}',
            },
            datePicker: {
                itemsSelected: '{0} seleccionados',
                nextMonthAriaLabel: 'Mes siguiente',
                nextYearAriaLabel: 'Año siguiente',
                prevMonthAriaLabel: 'Mes anterior',
                prevYearAriaLabel: 'Año anterior',
                selectDate: 'Seleccionar fecha',
                enterDate: 'Ingresar fecha',
                dateFormat: 'Formato de fecha',
                header: 'Seleccionar Fecha',
            },
            // Añadir más traducciones según sea necesario
            noDataText: 'No hay datos disponibles',
            carousel: {
                prev: 'Visual anterior',
                next: 'Siguiente visual',
                ariaLabel: {
                    delimiter: 'Carrusel diapositiva {0} de {1}',
                },
            },
            calendar: {
                moreEvents: '{0} más',
            },
            fileInput: {
                counter: '{0} archivos',
                counterSize: '{0} archivos ({1} en total)',
            },
            // Añadir más claves de traducción según tus necesidades
        }
    }
};

const i18n = createI18n({
    legacy: false,
    locale: "es",
    fallbackLocale: "en",
    availableLocales: ["es", "en"],
    messages
});

export default i18n;