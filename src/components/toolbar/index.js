import Toolbar from './Toolbar.vue';
import ToolbarCreateBtn from './ToolbarCreateBtn.vue';
import ToolbarSearch from './ToolbarSearch.vue';
import ToolbarCount from './ToolbarCount.vue';
import ToolbarTop from './ToolbarTop.vue';
import ToolbarBottom from './ToolbarBottom.vue';
import ToolbarLeftSide from './ToolbarLeftSide.vue';
import ToolbarRightSide from './ToolbarRightSide.vue';
import ToolbarAvatarGroup from './ToolbarAvatarGroup.vue';

const install = (app) => {
  const T = app.component('Toolbar', Toolbar);
  T.ToolbarCreateBtn = app.component('ToolbarCreateBtn', CreateBtn);
  T.ToolbarSearch = app.component('ToolbarSearch', Search);
  T.ToolbarCount = app.component('ToolbarCount', Count);
  T.ToolbarTop = app.component('ToolbarTop', Top);
  T.ToolbarBottom = app.component('ToolbarBottom', Bottom);
  T.ToolbarLeftSide = app.component('ToolbarLeftSide', LeftSide);
  T.ToolbarRightSide = app.component('ToolbarRightSide', RightSide);
  T.ToolbarAvatarGroup = app.component('ToolbarAvatarGroup', AvatarGroup);
};

Toolbar.install = install;
Toolbar.CreateBtn = ToolbarCreateBtn;
Toolbar.Search = ToolbarSearch;
Toolbar.Count = ToolbarCount;
Toolbar.Top = ToolbarTop;
Toolbar.Bottom = ToolbarBottom;
Toolbar.LeftSide = ToolbarLeftSide;
Toolbar.RightSide = ToolbarRightSide;
Toolbar.AvatarGroup = ToolbarAvatarGroup;

export default Toolbar;
export { default as ToolbarCreateBtn } from './ToolbarCreateBtn.vue';
export { default as ToolbarSearch } from './ToolbarSearch.vue';
export { default as ToolbarCount } from './ToolbarCount.vue';
export { default as ToolbarTop } from './ToolbarTop.vue';
export { default as ToolbarBottom } from './ToolbarBottom.vue';
export { default as ToolbarLeftSide } from './ToolbarLeftSide.vue';
export { default as ToolbarRightSide } from './ToolbarRightSide.vue';
export { default as ToolbarAvatarGroup } from './ToolbarAvatarGroup.vue';
