import { defineCustomElement } from 'vue'
import  Test  from './components/TestElement.ce.vue'

const element = defineCustomElement(Test);

customElements.define('test-element',element);