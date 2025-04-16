const similerItems = (currentItem: any, allItems: any, id: string) => {
  let categories: string[] = [];
  let tags: string[] = [];
  let bottles: string[] = [];
  let spirits: string[] = [];

  if (currentItem.data?.categories?.length > 0) {
    categories = currentItem.data.categories;
  }

  if (currentItem.data?.tags?.length > 0) {
    tags = currentItem.data.tags;
  }

  if (currentItem.data?.bottles?.length > 0) {
    bottles = currentItem.data.bottles;
  }

  if (currentItem.data?.spirits?.length > 0) {
    spirits = currentItem.data.spirits;
  }

  // filter by categories
  const filterByCategories = allItems.filter((item: any) =>
    categories.find((category) => item.data.categories.includes(category)),
  );
  
  // filter by tags
  const filterByTags = allItems.filter((item: any) =>
    tags.find((tag) => item.data.tags.includes(tag)),
  );

  // Filter by bottles
  const filterByBottles = allItems.filter((item: any) =>
    bottles.find((bottle) => item.data.bottles.includes(bottle)),
  );

  // Filter by spirits
  const filterBySpirits = allItems.filter((item: any) =>
    spirits.find((spirit) => item.data.spirits.includes(spirit)),
  );

  // merged after filter
  const mergedItems = [...filterByCategories, ...filterByTags, ...filterByBottles, ...filterBySpirits];

  // Remove self from list
  const filterByID = mergedItems.filter((item) => item.id !== id);

  // count instances of each item
  const itemCount = filterByID.reduce((accumulator: any, currentItem: any) => {
    accumulator[currentItem.id] = (accumulator[currentItem.id] || 0) + 1;
    return accumulator;
  }, {});

  // sort items by number of instances
  const sortedItems = filterByID.sort((a: any, b: any) => itemCount[b.id] - itemCount[a.id]);

  // remove items with fewer than 2 instances
  const filteredItems = sortedItems.filter((item: any) => itemCount[item.id] > 1);

  // remove duplicates
  const uniqueItems = [...new Set(filteredItems.map((item: any) => item.id))].map((id: string) => {
    return filteredItems.find((item: any) => item.id === id);
  });

  return uniqueItems;
};

export default similerItems;