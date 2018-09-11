export const GLOBALS = {
  breakpoints: {},
};

document.body.innerHTML = `
  <main class="js-main">
    <form class="js-form">
      <input type="text" name="firstname" value="foo" />
      <input type="text" name="lastname" value="bar" />
      <input type="text" value="fly" />
    </form>
    <div class="js-parent">
      <button type="button" class="js-butt">
    </div>
    <ul>
      <li class="item"></li>
      <li class="item"></li>
    </ul>
  </main>
`;

export default GLOBALS;
