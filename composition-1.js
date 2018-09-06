function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

/*Output:
<div class='FancyBorder FancyBorder-blue>
    <h1 class="Dialog-title">
      Welcome
    </h1>
    <p class="Dialog-message">
      Thank you for visiting our spacecraft!
    </p>
</div>
*/
