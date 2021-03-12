<template>
    <div class="row">
        <div class="col-md-8 pb-4">
            <div class="card">
                <div class="card-body">
                    <div v-if="loading">Data is loading</div>
                    <div v-else>
                        <p>{{ bookable.title }}</p>
                        <hr/>
                        <article>{{ bookable.description }}</article>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 pb-4">
            <availability></availability>
        </div>
    </div>
</template>
<script>
import Availability from "./availability";
export default ({
    components :{
        Availability
    },
    data() {
        return {
            bookable : null,
            loading : false
        }
    },
    created() {
        this.loading = true;
        axios.get(`/api/bookables/${this.$route.params.id}`)
        .then(response => {this.bookable = response.data.data; this.loading = false});
    },
})
</script>

