<template>
    <div style="padding: 1.25rem">
        <h6 class="text-uppercase text-secondary font-weight-bolder pt-4">Review List</h6>
        <div v-if="loading">Loading....</div>
        <div v-else>
            <div class="border-bottom d-none d-md-block" v-for="(review,index) in reviews"
             :key="'review'+index">
            <div class="row pt-4">
                <div class="col-md-6">Piotr Jura</div>
                <div class="col-md-6 d-flex justify-content-end"><star-rating :rating="review.rating"></star-rating></div>
            </div>
            <div class="row">
                <div class="col-md-12">{{ review.created_at | fromNow }}</div>
            </div>
            <div class="row pt-4 pb-4">
                <div class="col-md-12">{{ review.content }}</div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
//import moment from "moment";
export default {
    props: {
        bookableId : String,
    },
    data() {
        return {
            loading : false,
            reviews : null,
            errors : null,
            status : null,
        }
    },
    created(){
        this.loading = true;

        axios.get(`/api/bookable/${this.bookableId}/reviews`)
        .then(response => this.reviews = response.data.data)
        .then(() => this.loading = false )
        .catch(error => {
            if (error.response.status === 422) this.errors = error.response.data.errors;
            this.status = error.response.status;
            });
    },
    // filters: {
    //     fromNow(value) {
    //         return moment(value).fromNow();
    //     }
    // },
}
</script>

<style scoped>

</style>
