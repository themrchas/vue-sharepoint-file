<template>
    <h2>{{mod}}</h2>
</template>

<script>

import { ref, defineComponent } from 'vue'

const fetchIt = async () => {

    const endpoint = "https://jsonplaceholder.typicode.com/users";

    try {
        let rawData = await fetch(endpoint);
        if (!rawData.ok)
            throw Error('error in fetch');

        let data = await rawData.json();
         
        return data
    }
    catch(err) {
        console.log(`fetchIt: Error - ${err}`);
        
    }

} //fetchIt

//export default defineComponent({
    export default defineComponent({

    name:'Test',

    props: {
        name: {
        type:String,
        required: true
        },
        age: {
            type:Number,
            required: true
        }
    },
    

    setup(props) {

        console.dir(`props.age is ${props.age}`);
       
        const mod = ref("Yes - money (from vue element)");

        return {
            mod
        }
    },
    async mounted() {

        console.log('the custom element has been mounted');

        let restData = await fetchIt();
        console.log(restData);

    }
    



})

   
</script>

<style lang="css" scoped>

</style>