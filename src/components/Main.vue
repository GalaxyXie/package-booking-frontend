<template>
  <el-container>
  <el-header>
    <span>菜鸟驿站</span>
    <el-button plain>All</el-button>
    <el-button plain>已预约</el-button>
    <el-button plain>已取件</el-button>
    <el-button plain>未预约</el-button>
    <el-button plain>添加</el-button>
    
  </el-header>
  <el-main>  
      <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="ORDER_ID"
        label="运单号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="CUSTOM_NAME"
        label="收件人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="TELEPHONE "
        label="电话">
      </el-table-column>
       <el-table-column
        prop="STATUS"
        label="状态">
      </el-table-column>
       <el-table-column
        prop="APPOINTMENT_TIME"
        label="预约时间">
      </el-table-column>
    </el-table>
  </el-main>
</el-container>
</template>

<script>
export default {
  name: "Main",
  computed: {
    itemsShow() {
      return this.$store.state.itemsShow;
      
    }
  },
  data() {
    return {
      tableData:this.$store.parcelsAll,
    }
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
