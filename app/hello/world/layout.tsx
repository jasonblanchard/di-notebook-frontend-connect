interface HelloWorldLayoutProps {
  children: React.ReactNode;
}

export default function HelloWorldLayout({ children }: HelloWorldLayoutProps) {
  return (
    <div>
      <header>HEADER</header>
      {children}
      <footer>FOOTER</footer>
    </div>
  );
}
