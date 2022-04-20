<template>
  <div class="tags-con">
    <div
      ref="scrollCon"
      @DOMMouseScroll="handlescroll"
      @mousewheel="handlescroll"
      class="tags-outer-scroll-con"
    >
      <div
        ref="scrollBody"
        class="tags-inner-scroll-body"
        :style="{ left: tagBodyLeft + 'px', paddingLeft: outerPadding + 'px' }"
      >
        <transition-group name="taglist-moving-animation">
          <div
            ref="tabTagItems"
            class="tab-item"
            :class="{ active: item.key === currentTabKey }"
            v-for="item in tabs"
            :key="item.key"
            @click="goTag(item)"
          >
            <span class="tag-title text-truncate" :title="item.title">
              {{ item.title }}
            </span>

            <i
              class="close-icon vxe-icon--error"
              v-if="tabs.length > 1"
              @click.stop="closeTabByKey(item.key)"
            />
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Ref, Watch } from "vue-property-decorator";

import { DashboardTab } from "common-type/src/Dashboard";
import { RawLocation } from "vue-router";

import model from "model";

@Component({
  name: "AppDashboardTabs",
  components: {},
})
export default class AppDashboardTabs extends Vue {
  public tagBodyLeft = 0;
  public outerPadding = 7;

  public get tabs() {
    return model.dashboard.tabs;
  }

  public set tabs(tabs: DashboardTab[]) {
    model.dashboard.tabs = tabs;
  }

  public get currentTabKey() {
    return model.dashboard.currentTabKey;
  }

  @Ref("scrollCon")
  public scrollConComp!: HTMLDivElement;

  @Ref("scrollBody")
  public scrollBodyComp!: HTMLDivElement;

  // 关闭对应的tab
  public async closeTabByKey(tabKey: number) {
    await model.dashboard.closeTabByKey(tabKey, this.$router);
  }

  // 当前标签变化时更改标签位置
  @Watch("currentTabKey")
  public async onCurrentTabKeyChange(currentKey: number) {
    const tabIndex = this.tabs.findIndex(({ key }) => key === currentKey);
    if (tabIndex >= 0) {
      const tags = this.$refs.tabTagItems as HTMLElement[];
      await this.$nextTick();
      this.moveToTag(tags[tabIndex]);
    }
  }

  // 移动到Tag
  public moveToTag(tag: HTMLElement) {
    const outerWidth = this.scrollConComp.offsetWidth;
    const bodyWidth = this.scrollBodyComp.offsetWidth;
    if (bodyWidth < outerWidth) {
      this.tagBodyLeft = 0;
    } else if (tag.offsetLeft < -this.tagBodyLeft) {
      // 标签在可视区域左侧
      this.tagBodyLeft = -tag.offsetLeft + this.outerPadding;
    } else if (
      tag.offsetLeft > -this.tagBodyLeft &&
      tag.offsetLeft + tag.offsetWidth < -this.tagBodyLeft + outerWidth
    ) {
      // 标签在可视区域
      this.tagBodyLeft = Math.min(
        0,
        outerWidth - tag.offsetWidth - tag.offsetLeft - this.outerPadding
      );
    } else {
      // 标签在可视区域右侧
      this.tagBodyLeft = -(
        tag.offsetLeft -
        (outerWidth - this.outerPadding - tag.offsetWidth)
      );
    }
  }

  // 跳转到某个tag
  public goTag(tab: DashboardTab) {
    if (tab.key === this.currentTabKey) return;
    const location: RawLocation = {
      name: tab.name,
    };
    if (tab.isMultipleTab) {
      location.params = tab.params;
      location.query = tab.query;
    }
    this.$router.push(location);
  }

  // 关闭所有Tab
  public async closeAllTab() {
    await model.dashboard.closeAllTab(this.$router);
  }

  // 鼠标滚动事件
  public handlescroll(e: WheelEvent) {
    const type = e.type;
    let delta = 0;
    if (type === "DOMMouseScroll" || type === "mousewheel") {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      delta = e.wheelDelta ? e.wheelDelta : -(e.detail || 0) * 40;
    }

    const outerWidth = this.scrollConComp.offsetWidth;
    const bodyWidth = this.scrollBodyComp.offsetWidth;
    if (delta > 0) {
      this.tagBodyLeft = Math.min(0, this.tagBodyLeft + delta);
    } else {
      if (outerWidth < bodyWidth) {
        if (this.tagBodyLeft >= -(bodyWidth - outerWidth)) {
          this.tagBodyLeft = Math.max(
            this.tagBodyLeft + delta,
            outerWidth - bodyWidth
          );
        }
      } else {
        this.tagBodyLeft = 0;
      }
    }
  }

  /**
   * @description 初始化当前标签位置
   */
  public async mounted() {
    if (this.currentTabKey !== null) {
      this.onCurrentTabKeyChange(this.currentTabKey);
    }
  }
}
</script>
<style lang="scss" scoped>
$shadow: 0px -3px 5px -5px rgba(0, 0, 0, 0.17) inset;
.tab-item {
  font-size: 12px;
  color: #fffefe;
  vertical-align: bottom;
  display: inline-block;
  margin-left: 5px;
  height: 30px;
  border-radius: $len-radius $len-radius 0px 0px;
  cursor: pointer;
  user-select: none;
  background-color: #5f99ec;
  padding: 7px 32px 7px 16px;
  position: relative;
  box-shadow: $shadow;
  transition: background-color $time-fast-transition,
    height $time-fast-transition;
  &.active {
    height: 32px;
    background-color: #3269b7;
  }
}
.tags-con {
  height: 42px;
  overflow: hidden;
  background: #ffffff;
  position: relative;
}
.tags-outer-scroll-con {
  position: absolute;
  box-sizing: border-box;
  left: 0;
  right: 0;
  height: 100%;
}
.tags-inner-scroll-body {
  position: absolute;
  bottom: 0;
  overflow: visible;
  white-space: nowrap;
  transition: left $time-fast-transition ease;
}
.tag-title {
  display: inline-block;
  max-width: 145px;
}
.edit-tag {
  font-size: 16px;
  vertical-align: -4px;
  padding-left: 4px;
}
.close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  &::after {
    color: $color-primary;
  }
  &:hover {
    &::after {
      color: #57c7f9;
    }
  }
}
.popover-tags-wrapper {
  background-color: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 74px;
  border-left: 1px solid $color-border;
}
.popover-icon {
  width: 24px;
  height: 18px;
  padding: 2px 6px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  font-size: 14px;
  color: #fff;
  background-color: #d5d5d5;
  border-radius: 8px;
}
.more-popover {
  color: #767676;
  width: 210px;
  .close-all-icon {
    color: #e94810;
  }
  .close-all-text {
    margin-left: 10px;
  }
  .popover-tab-item {
    cursor: pointer;
    position: relative;
    padding: 4px 16px;
    line-height: 1.7;
    &.active {
      color: $color-primary;
      background-color: #f5f6f8;
      .close-item {
        color: #6098eb;
      }
    }
    > * {
      display: inline-block;
      vertical-align: middle;
    }
  }
  .popover-item-title {
    width: 130px;
    position: relative;
    top: -2px;
  }
  .popover-close-all-item {
    border-top: 1px solid $color-border;
    background-color: #f8f8f8;
    padding: 6px 0;
    cursor: pointer;
    text-align: center;
    padding-left: 0;
  }
  .close-item {
    font-size: 12px;
    position: absolute;
    right: 10px;
    top: 11px;
    color: #cdcdcd;
    &:hover {
      color: #e94810;
    }
  }
  .active-dot {
    display: inline-block;
    vertical-align: 1px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    margin-right: 8px;
    background-color: $color-primary;
  }
  .popover-scroll-wrapper {
    padding: 6px 0;
    max-height: 300px;
    overflow-y: auto;
  }
}
</style>
