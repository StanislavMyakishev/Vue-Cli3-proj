<template>
    <!--Почему-то цвет не выставляется-->
    <v-footer
            dark
            height="auto"
    >
        <v-card
                absolute="true"
                flat
                tile
        >
            <!--<v-card-text>-->
            <!--<v-btn-->
            <!--v-for="icon in icons"-->
            <!--:key="icon"-->
            <!--class="mx-3 white&#45;&#45;text"-->
            <!--icon-->
            <!--&gt;-->
            <!--<v-icon size="24px">{{ icon }}</v-icon>-->
            <!--</v-btn>-->
            <!--</v-card-text>-->

            <!--Проблема: убираю этот текст - нижний футер слетает-->
            <v-card-text class=" white--text pt-0">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum.
            Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur
            dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada.
            Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel
            diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
            </v-card-text>

            <v-divider></v-divider>

                <v-card-actions class="dark primary justify-center">
                    &copy;2019 — <strong>Vuetify</strong>
                </v-card-actions>
        </v-card>
    </v-footer>
</template>