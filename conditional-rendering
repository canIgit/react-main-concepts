function WarningBanner1(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class WarningBanner extends React.Component{
  constructor(props){
    super(props);
    this.state = { 'warn': props.warn};
  }
  //Ref:https://hackernoon.com/common-pitfall-in-initialising-state-based-on-props-in-react-js-d56795a944aa
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
        if(nextProps.warn !== this.props.warn){
            this.setState({'warn':nextProps.warn});
        }
  }
  render(){
    // console.log(this.state.warn);
    if (!this.state.warn) {
      return null;
    }
    return (
      <div className="warning">
        Warning!
      </div>
    );
  }
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }
  
  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
