<template>
    <div>
        <div class="row" v-if="error">Unkown error try again</div>
        <div class="row" v-else>
            <div :class="[{'col-md-4' : loading || !alreadyReviewed },{'d-none' : !loading && alreadyReviewed}]">
                <div class="card">
                    <div class="card-body">
                        <div v-if="loading">Loading......</div>
                        <div v-if="hasBooking">
                            <p>Stayed at <router-link :to="{name: 'bookable',params:{id:booking.bookable.bookable_id}}">
                                {{ booking.bookable.title }}</router-link></p>
                            <p>form: {{ booking.from }} to: {{ booking.to }} </p>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="[{'col-md-8' : loading || !alreadyReviewed },{'col-md-12' : !loading && alreadyReviewed}]">
                <div v-if="loading">Loading.........</div>
                <div v-else>
                    <div v-if="alreadyReviewed" class="text-center"><h3>You already reviewd this</h3></div>
                    <div v-else>
                        <div class="form-group">
                            <label class="text-muted">Select Rating</label>
                            <star-rating class="fa-3x" v-model="review.rating"></star-rating>
                            <!-- <star-rating :value="review.rating" class="fa-3x" @rating:changed="onRatingChanged"></star-rating> -->
                        </div>
                        <div class="form-group">
                            <label for="content" class="text-muted">Write your opinion</label>
                            <textarea name="content" cols="30" row="10" class="form-control"
                                      v-model="review.content"></textarea>
                        </div>
                        <button class="btn btn-primary btn-block" @click.prevent="submit" :disabled="loading">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            review :{
                id : null,
                rating : 0,
                content : null,
            },
            existingReivew: null,
            loading: false,
            booking: null,
            error : false,
        };
    },
    created() {
        this.review.id = this.$route.params.id;
        this.loading = true;
        axios.get(`/api/reviews/${this.review.id}`)
        .then(response => { this.existingReivew = response.data.data; }) // if you don't use curly brackets it will retun
        .catch(err => {
            if(err.response && err.response.status && err.response.status === 404 ) {
                return axios.get(`/api/booking-by-review/${this.review.id}`)
                .then(response => {
                    this.booking =response.data.data;
                })
                .catch(err => {
                    if(!err.response || !err.response.status || err.response.status !== 404 ){
                        this.error = true;
                    }
                });
            }
            this.error = true;
        })
        .then(()=> this.loading = false);
    },
    computed:{
        alreadyReviewed() {
            return this.hasReview || !this.booking ;
        },
        hasReview() {
          return this.existingReivew !== null;
        },
        hasBooking() {
          return this.booking !== null;
        },
    },
    methods:{
        submit() {
          this.loading = true;
          axios.post(`/api/reviews`,this.review)
            .then(response => console.log(response))
            .catch(err => this.error = err)
            .then(() => this.loading = false);
        },
    }
}
</script>
