import { Headings } from '../const';

type HeadingProps = {
  tag?: string;
  text: string;
}

function Heading ({ tag, text }: HeadingProps) {
  switch (tag) {
    case Headings.H1:
      return <h1>{text}</h1>;
    case Headings.H2:
      return <h2>{text}</h2>;
    case Headings.H3:
      return <h3>{text}</h3>;
    default:
      return <h1>{text}</h1>;
  }
}

export default Heading;