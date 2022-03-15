<template>
  <client-only>
    <gmap-autocomplete @place_changed="handleChange" :selectFirstOnEnter="true" :options="{
      types:['(cities)']
    }">
    <template v-slot:input="slotProps">
      <input ref="input" :value="formatted_address"
             class="form-control"
             v-on:listeners = "slotProps.listeners"
             v-on:attrs="slotProps.attrs" />
    </template>
    </gmap-autocomplete>
  </client-only>
</template>

<script>
export default {
  name: "Gmaps",
  data() {
    return {
      formatted_address: ''
    }
  },
  methods: {
    handleChange(place) {
      console.log(place)
    }
  }
}
</script>

<style scoped>

</style>
