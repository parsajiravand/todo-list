import Vue from "vue";
import moment from "moment";
Vue.filter("formatDate", (value, formatType = "LL") => {
  if (value) {
    return moment(value).format(formatType);
  }
  return "";
});
