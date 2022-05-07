<template>
  <div id="links-to-share" class="card">
    <div data-test="links-to-share-header" class="card-header">Share your Text:</div>
    <div class="card-body">
      <input
        class="form-control form-control-lg"
        type="text"
        aria-label=".form-control-lg example"
        :value="url_to_share"
        data-test="links-to-share-input"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "LinksToShare",
  props: ["text_id"],

  computed: {
    url_to_share() {
      return this.url + "/text/" + this.text_id;
    },

    url() {
      return window.location.host;
    },
  },
};
</script>

<style>
#links-to-share {
  margin-top: 5px;
}
</style>