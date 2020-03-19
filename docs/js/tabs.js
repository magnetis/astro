// Adapted from Inclusive Components book (https://inclusive-components.design/)
export const assembleTabs = () => {
  window.requestAnimationFrame(() => {
    const tabbed = document.querySelector('.a-tabbed');
    const tablist = tabbed.querySelector('ul');
    const tabs = tablist.querySelectorAll('a');
    const panels = tabbed.querySelectorAll('[id^="section"]');

    // The tab switching
    const switchTab = (oldTab, newTab) => {
      newTab.focus();
      // Make the active tab focusable by the user
      newTab.removeAttribute('tabindex');
      // Set the selected state
      newTab.setAttribute('aria-selected', 'true');
      oldTab.removeAttribute('aria-selected');
      oldTab.setAttribute('tabindex', '-1');
      // Get the indices of the new and old tabs to find the correct tab panels to show and hide
      let index = Array.prototype.indexOf.call(tabs, newTab);
      let oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
      panels[oldIndex].hidden = true;
      panels[index].hidden = false;
    };

    // Add the tablist role to the first <ul> in the a.tabbed container
    tablist.setAttribute('role', 'tablist');

    // Add semantics and remove user focusability for each tab
    Array.prototype.forEach.call(tabs, (tab, i) => {
      tab.setAttribute('role', 'tab');
      tab.setAttribute('id', `tab${i + 1}`);
      tab.setAttribute('tabindex', '-1');
      tab.parentNode.setAttribute('role', 'presentation');

      // Handle clicking of tabs for mouse users
      tab.addEventListener('click', e => {
        e.preventDefault();
        let currentTab = tablist.querySelector('[aria-selected]');
        if (e.currentTarget !== currentTab) {
          switchTab(currentTab, e.currentTarget);
        }
      });

      // Handle keydown events for keyboard users
      tab.addEventListener('keydown', e => {
        // Get the index of the current tab in the tabs node list
        let index = Array.prototype.indexOf.call(tabs, e.currentTarget);

        // Determine arrow key pressed
        let dir =
          e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : null;

        // Switch to the new tab if it exists
        if (dir !== null) {
          e.preventDefault();

          // Find correct tab to focus
          let newIndex;
          if (tabs[dir]) {
            newIndex = dir;
          } else {
            // Loop around if adjacent tab doesn't exist
            newIndex = dir === index - 1 ? tabs.length - 1 : 0;
          }
          switchTab(e.currentTarget, tabs[newIndex]);
          tabs[newIndex].focus();
        }
      });
    });

    // Add tab panel semantics and hide them all
    Array.prototype.forEach.call(panels, (panel, i) => {
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('tabindex', '-1');
      panel.setAttribute('aria-labelledby', tabs[i].id);
      panel.hidden = true;
    });

    // Initially activate the first tab and reveal the first tab panel
    tabs[0].removeAttribute('tabindex');
    tabs[0].setAttribute('aria-selected', 'true');
    panels[0].hidden = false;
  });
};

const HandleTabs = () => {
  assembleTabs();
  return null;
};

export default HandleTabs;
