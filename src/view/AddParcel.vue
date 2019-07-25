<template>
  <el-container>
    <el-header>
      <h1>包裹入库</h1>
    </el-header>
    <el-main>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="运单号:">
          <el-input v-model="form.orderId"></el-input>
        </el-form-item>
        <el-form-item label="收件人:">
          <el-input v-model="form.customName"></el-input>
        </el-form-item>
        <el-form-item label="电话:">
          <el-input v-model="form.telephone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "AddParcel",
 
  data() {
    return {
      form: {
        orderId: "",
        customName: "",
        telephone: "",
        status: "未预约",
      }
    };
  },
  methods: {
    onSubmit() {
     this.$store.dispatch("addItem",this.form);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
