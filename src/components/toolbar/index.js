import Toolbar from './Toolbar.vue';
import ToolbarCreateBtn from './ToolbarCreateBtn.vue';
import ToolbarSearch from './ToolbarSearch.vue';

const install = (app) => {
  const T = app.component('Toolbar', Toolbar);
  T.ToolbarCreateBtn = app.component('ToolbarCreateBtn', CreateBtn);
  T.ToolbarSearch = app.component('ToolbarSearch', Search);
};

Toolbar.install = install;
Toolbar.CreateBtn = ToolbarCreateBtn;
Toolbar.Search = ToolbarSearch;

export default Toolbar;
export { default as ToolbarCreateBtn } from './ToolbarCreateBtn.vue';
export { default as ToolbarSearch } from './ToolbarSearch.vue';
