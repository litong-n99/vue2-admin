import Vue from "vue";
import "xe-utils";
import VXETable from "vxe-table";

VXETable.setup({
  size: "mini",
  zIndex: 2000,
  table: {
    showOverflow: "tooltip",
    resizable: true,
    autoResize: true,
    border: true,
    stripe: true,
    highlightHoverRow: true,
    highlightCurrentRow: true,
  },
});

Vue.use(VXETable);
