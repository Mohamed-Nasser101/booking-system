<template>
    <div class="d-flex">
        <i class="fas fa-star" v-for="(star) in fullStar" :key="'fstar'+star"></i>
        <i class="fas fa-star-half-alt" v-if="halfStar"></i>
        <i class="far fa-star"  v-for="(star) in emptyStar" :key="'e star'+star"></i>
    </div>
</template>
<script>
export default {
  props: {
      rating : Number
},
  computed: {
    halfStar(){
        return (this.rating - Math.floor(this.rating)) > 0.25 ;
    },
    fullStar(){
        return  Math.floor(this.rating);
    }
    ,emptyStar(){
        return 5 - Math.ceil(this.rating);
    }
},  
};
</script>
