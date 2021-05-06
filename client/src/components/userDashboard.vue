<template>
<div class="vue-template">
     <topnavbar />

      <br />
      <br />
      <br />
      <br />
      <br />
     <div id="app">
    <div style="margin:10% 25%; width: 250px;">
      <br>
      <ejs-autocomplete :dataSource='dataItem' :fields='dataFields'
      placeholder="Select a name" popupWidth="250px" 
      popupHeight="400px" :query='dataQuery' :highlight="true"> 
      </ejs-autocomplete>
    </div>
 </div>
 </div>

</template>

<script>

import Vue from "vue";
import { AutoCompletePlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(AutoCompletePlugin);
import { DataManager, WebApiAdaptor,
Query } from '@syncfusion/ej2-data';
// import topnavbar from "./topnavbar.vue";

export default Vue.extend({
  data: function() {
    return {
       dataItem: new DataManager({
         url: 'https://myappr.herokuapp.com/api/posts',
         adaptor: new WebApiAdaptor,
         crossDomain: true
        }), 
      dataFields:{ value: 'title' },
      dataQuery: new Query().select(['title', 'description']).take(9).requiresCount(),
      
    };
  }
}); 
</script>


<style>
@import url(https://cdn.syncfusion.com/ej2/material.css);
</style>



