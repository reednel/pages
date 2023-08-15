// similer products
const similerItems = (currentItem: any, allItems: any, slug: string) => {
  let categories: string[] = [];
  let tags: string[] = [];
  let spirits: string[] = [];
  let bottles: string[] = [];

  // set categories
  if (currentItem.data?.categories?.length > 0) {
    categories = currentItem.data.categories;
  }

  // set tags
  if (currentItem.data?.tags?.length > 0) {
    tags = currentItem.data.tags;
  }

  // set spirits
  if (currentItem.data?.spirits?.length > 0) {
    spirits = currentItem.data.spirits;
  }

  // set bottles
  if (currentItem.data?.bottles?.length > 0) {
    bottles = currentItem.data.bottles;
  }

  // filter by categories
  const filterByCategories = allItems.filter((item: any) =>
    categories.find((category) => item.data.categories.includes(category)),
  );
  
  // filter by tags
  const filterByTags = allItems.filter((item: any) =>
    tags.find((tag) => item.data.tags.includes(tag)),
  );

  // filter by spirits
  const filterBySpirits = allItems.filter((item: any) =>
    spirits.find((spirit) => item.data.spirits.includes(spirit)),
  );

  // filter by bottles
  const filterByBottles = allItems.filter((item: any) =>
    bottles.find((bottle) => item.data.bottles.includes(bottle)),
  );

  // merged after filter
  const mergedItems = [...new Set([...filterByCategories, ...filterByTags, ...filterBySpirits, ...filterByBottles])];

  // filter by slug
  const filterBySlug = mergedItems.filter((product) => product.slug !== slug);

  return filterBySlug;
};

export default similerItems;
