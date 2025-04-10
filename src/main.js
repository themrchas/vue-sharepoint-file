import { defineCustomElement } from 'vue'

import { createVuetify } from 'vuetify';

//import * as components from 'vuetify/components'
import { VApp, VContainer, VFileInput } from 'vuetify/components'
import * as directives from 'vuetify/directives'


import 'vuetify/styles'

import  Test  from './components/TestElement.ce.vue'

const vuetify = createVuetify({
    components : {
        VApp, VContainer, VFileInput
    },
    directives,
  })

/*
const vuetify = createVuetify({
    components,
    directives,
  })
    */

//const element = defineCustomElement(Test);


const element = defineCustomElement(Test, {
    configureApp(app) {
        app.use(vuetify)
    }
});

customElements.define('test-element',element);