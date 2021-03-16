<template>
  <div>
    <h6 class="text-uppercase text-secondary font-weight-bolder">Check Availability
        <span v-if="noAvailability" class="text-danger">(No Availability)</span>
        <span v-if="hasAvailability" class="text-success">(has Availability)</span>
    </h6>

    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="from">From</label>
        <input type="text" name="from" class="form-control form-control-sm" placeholder="Start date"
               v-model="from" @keyup.enter="check" :class="{'is-invalid' : this.errorFor('from')}" required/>
          <div class="invalid-feedback" v-for="(error,index) in this.errorFor('from')" :key="'from' + index">
              {{ index+1 +'-'+error }}
          </div>
      </div>

      <div class="form-group col-md-6">
        <label for="to">To</label>
        <input type="text" name="to" class="form-control form-control-sm" placeholder="End date" v-model="to"
               @keyup.enter="check" :class="{'is-invalid' : this.errorFor('to')}" required/>
          <div class="invalid-feedback" v-for="(error,index) in this.errorFor('to')" :key="'to' + index"> {{  index+1 +'-'+error }}</div>
      </div>
    </div>

    <button class="btn btn-secondary btn-block" @click="check" :disabled="loading">Check!</button>
  </div>
</template>

<script>
export default({
    props: {
        bookableId : [String,Number],
    },
    data() {
      return{
          from     : this.$store.state.lastSearch.from,
          to       : this.$store.state.lastSearch.to,
          loading  : false,
          status   : null,
          errors   : null
      };
    },
    methods: {    //dont access it with this
        check(){   //but this not i dont kow why
            this.loading = true;
            this.errors = null ;   // to get new fresh errors every request

            // this.$store.commit('setLastSearch',{
            //    from: this.from,
            //    to: this.to,
            // });

            this.$store.dispatch('setLastSearch',{
                from: this.from,
                to: this.to,
            });

            axios.get(`/api/bookable/${this.boookableId}/show?from=${this.from}&to=${this.to}`)
            .then(response => {
                this.status  = response.status; })
                .catch(error => {         //any code other than the 200s
                if (error.response.status === 422){    //something went wrong not the wrong we submit
                    this.errors = error.response.data.errors;

                }
                this.status = error.response.status;
            });

            this.loading = false;
        },
        errorFor(field){
           return this.hasErrors  && this.errors[field] ? this.errors[field] : null ;
        },
    },
    computed :{   //dont access it with this
        hasErrors(){
            return this.status === 422 && this.errors != null;
        },
        hasAvailability(){
            return this.status === 200;
        },
        noAvailability(){
            return this.status === 404;
        },
    },
})
</script>
<style scoped>
label {
  font-size: 0.7rem;
  text-transform: uppercase;
  color: gray;
  font-weight: bolder;
}
.is-invalid {
border-color: #b22222;
background-image: none;
}

.invalid-feedback{
border-color: #b22222;
}
</style>
