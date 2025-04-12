<template>
    <h2>{{mod}}</h2>
    <v-app>
    <v-container>
      <v-file-input
        label="Upload your file"
      />
    </v-container>
  </v-app>
  <h2>End of template</h2>
</template>

<script>

import { ref, defineComponent } from 'vue';

import { Logger, LogLevel, ConsoleListener } from '@logger';
import { sp } from '@sp';
import "@sp/webs";
import "@sp/lists"
import "@sp/sites"
//import {IContextInfo  } from "@sp/sites"
import { Web } from '@sp/presets/all'
////import { SPFetchCli ent } from '@sp';
//import { SPFetchClient } from '@nodejs';

//import { SPFetchClient } from '@nodejs';

/*
const spt = sp().using(RequestDigest()).using(DefaultHeaders());
spt.web.lists.get().then(console.log);
*/


const fetchIt = async () => {

//console.log('randmstring is',getRandomString(10));

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

        Logger.subscribe(new ConsoleListener());
       
         Logger.activeLogLevel = LogLevel.Verbose;

         Logger.write("yes - money logger",LogLevel.Info);

         Logger.write(`sp is ${sp}`,LogLevel.Info);


         
         sp.setup({
    sp: {
       // baseUrl: "https://nshqdev.sharepoint.com/teams/classic/"
     baseUrl: "https://command.nshq.nato.int/sites/CS/ikm/KnowledgePortal/sandbox/chaskm/"
    }
})


 /* Worked!!!!  
         sp.setup({
    pageContext: { 
        web: {
            baseUrl: "https://nshqdev.sharepoint.com/teams/classic/",
            absoluteUrl:  "https://nshqdev.sharepoint.com/teams/classic/"
        }
    } 
});
*/

/*
const fakeCtx = {
    pageContext: {
        legacyPageContext: _spPageContextInfo, // actually, i just added this for good measure...
        web: {
            absoluteUrl: _spPageContextInfo.webAbsoluteUrl // this, i think, is all PnPjs needed
        }
    }
}
    */

Logger.write(`sp did it again is ${sp}`,LogLevel.Info);

sp.site.getContextInfo().then(ctx => {console.log("site ctx is ",ctx)})

sp.web.lists.ensure('HillbillyTemplates').then(data => {
   // sp.web.lists.ensure('PNPTest').then(data => {
    console.log('ensuring list exists is',data);
})





        // let w = new Web("{https://nshqdev.sharepoint.com/teams/classic/Vue}");

        /*
        let w = new Web("https://nshqdev.sharepoint.com/teams/classic/Vue");
         w.get().then(w => { console.log("money",w)});
         */



 /*        const spt = sp().using(RequestDigest()).using(DefaultHeaders());
spt.web.lists.get().then(console.log);
*/


    /*    const sp = spfi().using(RequestDigest()).using(DefaultHeaders());
        sp.web.lists.get().then(console.log);
    */



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