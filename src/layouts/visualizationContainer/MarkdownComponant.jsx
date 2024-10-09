import ReactMarkdown from "react-markdown";
import { propTypes } from "react-bootstrap/esm/Image";

export default function MarkdownComponant({ text }) {

  MarkdownComponant.propTypes = {
    text: propTypes.String,
  };

  const componentSettings = {
    h1: ({ node, ...props }) => <h1 className="fs-3" {...props} />,  
    h2: ({ node, ...props }) => <h2 className="fs-4" {...props} />,  
    h3: ({ node, ...props }) => <h3 className="fs-5" {...props} />,  
    p: ({ node, ...props }) => <p className="fs-6" {...props} />,    
  };

  return (
    <div style={{ height: '440px'}} className="custom-scroll">
      <ReactMarkdown 
       components={componentSettings}>{text}</ReactMarkdown>
    </div>
  );
}
