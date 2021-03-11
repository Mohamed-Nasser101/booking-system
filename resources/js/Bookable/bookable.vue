<template>
    <div class="row">
        <div class="col-md-8">
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
        <div class="col-md-4">ccc</div>
    </div>
</template>
<script>
export default ({
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

