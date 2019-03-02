export const savePageAndPerPage = (page, per_page, total, sub) => {
  const subDetails = localStorage.getItem(sub);
  if (subDetails) {
    const mySub = JSON.parse(subDetails);
    mySub.page = page;
    mySub.per_page = per_page;
    mySub.total = total;
    localStorage.setItem(sub, JSON.stringify(mySub));
  } else {
    localStorage.setItem(
      sub,
      JSON.stringify({
        page,
        per_page,
        total
      })
    );
  }
};

export const retrieveNextPage = sub => {
  const subDetails = JSON.parse(localStorage.getItem(sub));
  if (subDetails !== null && subDetails !== undefined) {
    let currentPage = subDetails.page;
    let totalPages = Math.floor(subDetails.total / subDetails.per_page) + 1;
    return (currentPage + 1) % totalPages === 0
      ? 1
      : (currentPage + 1) % totalPages;
  } else {
    return 1;
  }
};
