<template>
  <el-container>
    <el-header>
      <div>菜鸟驿站</div>
      <el-button type="success" @click="turnToUpdate()">预约订单</el-button>
      <el-button plain @click="getParcels">All</el-button>
      <el-button plain @click="getParcelByState('已预约')">已预约</el-button>
      <el-button plain @click="getParcelByState('已取件')">已取件</el-button>
      <el-button plain @click="getParcelByState('未预约')">未预约</el-button>
      <el-button type="primary" round @click="addParcel()">添加</el-button>
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
            <el-button v-if="scope.row.status!='已取件'" @click="updateParcel(scope.row)" >确认收件</el-button>
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
      return this.$store.state.parcelsAll;
    }
  },
  methods: {
    turnToUpdate(){
      this.$router.push({ name: 'updateTime' }) ;
    },
    addParcel() {
       this.$router.push({ name: 'AddParcel' }) ;
    },
    getParcelByState(status){
        this.$store.dispatch("getItemByStatus",status);
    },
    getParcels(){
      this.$store.dispatch("getItem");
    },
    updateParcel(order){
        
        this.$confirm('您确定收到包裹了吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          order.status='已取件';
          this.$store.dispatch("updateItem",order);
          this.$message({
            type: 'success',
            message: '收货成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消确认'
          });          
        });
        console.log(order);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
