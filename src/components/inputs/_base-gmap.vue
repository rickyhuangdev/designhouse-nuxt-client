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
  props: {
    initialValue: {
      type: String,
      required: false
    }
  },
  watch: {
    initialValue(newValue) {
      this.formatted_address = newValue
    }
  },

  data() {
    return {
      formatted_address: ''
    }
  },
  methods: {
    handleChange(place) {
      if (!place || !place.geometry) {
        this.$emit('no-result-found', place)
        return false
      }
      if (place.address_components !== undefined) {
        let returnData = {};
        returnData.latitude= place.geometry.location.lat()
        returnData.longitude = place.geometry.location.lng()
        returnData.formatted_address = place.formatted_address
        this.$emit('address-response', returnData)
      } else {
        this.$emit('no-result-found', place)
      }
    }
  }
}
</script>

<style scoped>

</style>
