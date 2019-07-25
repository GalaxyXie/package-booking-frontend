<template>
  <el-container>
    <el-header>
      <h1>预约取件</h1>
    </el-header>
    <el-main>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="运单号:">
          <el-input v-model="form.orderId"></el-input>
        </el-form-item>
        <el-form-item label="预约时间:">
          <div class="block">
            <el-date-picker
              v-model="value2"
              type="datetime"
              placeholder="选择日期时间"
              align="right"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </div>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">预约</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "updateTime",

  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value2: "",
      
      form: {
        orderId: "",
      }
   
    };
  },

  methods: {
    formatDate(date, fmt) {
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      }
      let o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds()
      };
      for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
          let str = o[k] + ""; // o[M+]----------->8
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length === 1 ? str : this.padLeftZero(str)
          );
        }
      }
      return fmt;
    },
    padLeftZero(str) {
      return ("00" + str).substr(str.length);
    },
    onSubmit() {
      
      var d = new Date(this.value2);
      var resDate = this.formatDate(d, "yyyy-MM-dd hh:mm:ss");
      console.log(resDate);
      this.$store.dispatch("update", this.form);
      window.alert("Build Success ");
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
