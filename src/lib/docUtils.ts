import { getEntries } from "@lib/contentParser";

import type {
  DocsEntry,
  MenuItem,
  MenuItemWithDraft,
} from "@/types";

import { doc_browser_order } from "@/config/docs.json";

// Fetch the collection with type
const docs = await getEntries("docs") as DocsEntry[];

// Helper function to capitalize the first letter of a string
export const capitalizeFirstLetter = (str: string) => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Sort items according to side_nav_menu_order
function sortItems(
  items: MenuItemWithDraft[],
  orderMap: Map<string, number>,
): MenuItemWithDraft[] {
  return items.slice().sort((a, b) => {
    const aIndex = orderMap.get(a.id) ?? Infinity;
    const bIndex = orderMap.get(b.id) ?? Infinity;
    return aIndex - bIndex;
  });
}

// Function to build nested menu structure
function buildMenu(items: DocsEntry[]): MenuItem[] {
  const menu: MenuItemWithDraft[] = [];

  // Create a map to quickly look up the order of all items
  const orderMap = new Map(
    doc_browser_order.map((item, index) => [item, index]),
  );

  // Helper function to sort top-level items
  function sortTopLevel(items: MenuItemWithDraft[]): MenuItemWithDraft[] {
    const topLevelItems = items.filter((item) => !item.id.includes("/"));
    const nestedItems = items.filter((item) => item.id.includes("/"));

    // Sort top-level items
    const sortedTopLevelItems = sortItems(topLevelItems, orderMap);

    // Sort nested items by their respective parent folders
    const nestedMenu: MenuItemWithDraft[] = [];
    nestedItems.forEach((item) => {
      const parts = item.id.split("/");
      let currentLevel = nestedMenu;

      // Traverse and insert items into the correct position
      parts.forEach((part: string, index: number) => {
        let existingItem = currentLevel.find(
          (i) => i.id === parts.slice(0, index + 1).join("/"),
        );

        if (!existingItem) {
          existingItem = {
            title: capitalizeFirstLetter(part),
            id: parts.slice(0, index + 1).join("/"),
            draft: item.draft,
            children: [],
          };
          currentLevel.push(existingItem);
        }
        currentLevel = existingItem.children;
      });
    });

    // For each top-level item, attach sorted nested items
    sortedTopLevelItems.forEach((item) => {
      if (item.children) {
        item.children = sortItems(item.children, orderMap);
      }
    });

    return sortedTopLevelItems;
  }

  items.forEach((item) => {
    const parts = item.id.split("/"); // Split id into parts
    let currentLevel = menu;

    // Traverse the menu structure based on folder depth
    parts.forEach((part: string, index: number) => {
      let existingItem = currentLevel.find(
        (i) => i.id === parts.slice(0, index + 1).join("/"),
      );

      if (!existingItem) {
        existingItem = {
          title:
            index === parts.length - 1
              ? capitalizeFirstLetter(item.data.title || "")
              : capitalizeFirstLetter(part),
          id: parts.slice(0, index + 1).join("/"),
          draft: item.data.draft,
          children: [],
        };
        currentLevel.push(existingItem);
      } else {
        // Update title if necessary
        if (index === parts.length - 1) {
          existingItem.title = capitalizeFirstLetter(item.data.title || "");
        }
      }

      currentLevel = existingItem.children;
    });
  });

  // Sort top-level items based on menu_order and attach nested items
  const topLevelMenu = sortTopLevel(menu);

  return topLevelMenu;
}

export const menu = buildMenu(docs);