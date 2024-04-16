export default function Container({ children, ...rest }) {
  return (
    <div className="container mx-auto px-5 lg-px-10" {...rest}>
      {children}
    </div>
  );
}
