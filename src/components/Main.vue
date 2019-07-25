<template>
  <el-container>
    <el-header>
      <span>菜鸟驿站</span>
      <el-button plain>All</el-button>
      <el-button plain @click="showDatedItems">已预约</el-button>
      <el-button plain>已取件</el-button>
      <el-button plain>未预约</el-button>
      <el-button type="primary" round>添加</el-button>
    </el-header>
    <el-main>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="orderId" label="运单号" width="180"></el-table-column>
        <el-table-column prop="customName" label="收件人" width="180"></el-table-column>
        <el-table-column prop="telephone" label="电话"></el-table-column>
        <el-table-column prop="status" label="状态"></el-table-column>
        <el-table-column prop="appointmentTime" label="预约时间"></el-table-column>
        <el-table-column prop="status" label>
          <template slot-scope="scope">
            <el-button v-if="scope.row.status!='已取件'">确认收件</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "Main",
  computed: {
    tableData() {
      console.log(this.$store.state.parcelsAll);
      return this.$store.state.parcelsAll;
    }
  },
  data() {
    return {};
  },
  methods: {
    showDatedItems() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
