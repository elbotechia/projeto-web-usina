const renderContentOnTargetId = (targetId, content) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.innerHTML = content;
  } else {
    console.error(`Element with ID ${targetId} not found.`);
  }
};

const changePage = () => {
  const location = window.location.pathname;

  if (location === "/" || location === "/3") {
    renderContentOnTargetId("app", "<h1>Welcome to the Home Page</h1>");
  } else if (location.includes("/about")) {
    renderContentOnTargetId(
      "app",
      "<h1>About Us</h1><p>This is the about page.</p>"
    );
  }
};

changePage();
