 <template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form Two - Contact Us</h3>
        <p>填写以下内容</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <label>随便说点啥：</label>
        <textarea></textarea>
      </div>
      <div slot="form-controls">
        <button @click="handleSubmit">发送</button>
      </div>
    </form-helper>
  </div>
</template>
 
 <script>
import formHelper from "./FormHelper";
export default {
  components: { formHelper },
  data() {
    return {};
  },
  methods: {
    handleSubmit() {
      alert("thanks for submitting form one & contacting us");
    }
  }
};
</script>
 
 <style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>