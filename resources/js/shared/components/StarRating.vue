<template>
    <div class="d-flex">
        <i class="fas fa-star" v-for="star in fullStar" :key="'fstar'+star"
         @click="$emit('input',star)"></i>
        <i class="fas fa-star-half-alt" v-if="halfStar"></i>
        <i class="far fa-star"  v-for="star in emptyStar" :key="'e star'+star" 
         @click="$emit('input',fullStar + star)"></i>
    </div>
</template>
<script>
export default {
  props: {
      value : Number
},
  computed: {
    halfStar(){
        return (this.value - Math.floor(this.value)) > 0.25 ;
    },
    fullStar(){
        return  Math.floor(this.value);
    }
    ,emptyStar(){
        return 5 - Math.ceil(this.value);
    }
},  
};
</script>
