import { Component } from 'react';
import { AccordionContainer, AccordionContent } from './styles';

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = { height: 0 };
    this.updateHeight = this.updateHeight.bind(this);
  }

  componentDidMount() {
    this.updateHeight();
    window.addEventListener('resize', this.updateHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateHeight);
  }

  componentDidUpdate() {
    this.updateHeight();
  }

  updateHeight() {
    if (this.state.height != this.div.clientHeight)
      this.setState({ height: this.div.clientHeight });
  }

  render() {
    const { open, ready, children } = this.props;
    const { height } = this.state;
    return (
      <div
        id="accordion"
        ref={div => {
          this.div = div;
        }}
      >
        <AccordionContainer>
          <AccordionContent open={open} ready={ready} height={height}>
            {children}
          </AccordionContent>
        </AccordionContainer>
      </div>
    );
  }
}
