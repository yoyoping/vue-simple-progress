import Progress from "./components/Progress"; //引入组件
const ProgressBar = {
  install(Vue, options) {
    Vue.component(`ProgressBar`, Progress); //全局组件
  }
};

export default ProgressBar; //导出
