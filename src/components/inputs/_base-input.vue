<template>
 <div>
   <input type="text" class="form-control"
          @input="handeInput"
          :type="inputType"
          :value="value"
          autocomplete="off"
          :class="{'is-invalid':form.errors.has(field)}"
   >
   <HasError :form="form" :field="field"/>
 </div>
</template>

<script>
export default {
  name: "base-input",
  props:{
    inputType:{
      type:String,
      default:'text'
    },
    value:{
      type:String,
      default: ''
    },
    form:{
      type:Object,
      required:true,

    },
    field:{
      type:String,
      required:true,

    }
  },
  methods:{
    handeInput(e){
     this.$emit('input',e.target.value)
    }
  }
}
</script>

<style scoped>

</style>
