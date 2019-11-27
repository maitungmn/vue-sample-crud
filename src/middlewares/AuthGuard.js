export default (to, from, next) => {
  if (!localStorage.getItem("user")) {
    next({
      path: "/signin"
    });
  } else {
    next();
  }
};
