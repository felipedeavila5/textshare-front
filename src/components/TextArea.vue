<template>
  <div class="card">
    <div data-test="text-area-header" class="card-header">TextShare</div>
    <div class="card-body">
      <h5 class="card-title" data-test="text-area-title">Enter the content you want to share:</h5>
      <textarea data-test="text-area-input" v-model="content" class="form-control" rows="15"></textarea>
    </div>
  </div>
  <LinksToShare v-if="text_id" :text_id="text_id"></LinksToShare>
</template>

<script>
import LinksToShare from "@/components/LinksToShare.vue";
import { new_text, get_text, update_text, not_found_text } from "../text";

export default {
  name: "TextArea",
  components: {
    LinksToShare,
  },
  data() {
    return {
      text_id: null,
      content: "",
      update_at: null,
      typing_at: null,
    };
  },
  methods: {
    get_text() {
      if (this.get_text_id_url) {
        return get_text(this.get_text_id_url);
      } else {
        return new_text();
      }
    },

    save_content() {
      update_text(this.text_id, this.content).then(() => {
        this.update_at = Date.now();
      });
    },
  },

  computed: {
    url_params() {
      return this.$route.params;
    },

    get_text_id_url() {
      return this.url_params["textid"];
    },
  },

  watch: {
    content() {
      this.typing_at = Date.now();
      this.save_content();
    },
  },

  mounted() {
    this.get_text()
    .then((text_obj) => {
      this.text_id = text_obj.data.uuid;
      this.content = text_obj.data.content;
      this.update_at = Date.now();
    })
    .catch((error)=>{
      if(error.response.status == 404){
        not_found_text('/not_found')
      }
    })
  },
};
</script>

<style>
</style>