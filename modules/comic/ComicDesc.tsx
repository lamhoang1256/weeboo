interface ComicDescProps {
  label?: string;
  children: React.ReactNode;
}

const ComicDesc = ({ label, children }: ComicDescProps) => {
  if (label) {
    return (
      <div className="mt-6">
        <span className="font-bold mr-2">{label}:</span>
        <p className="leading-[26px]">{children}</p>
      </div>
    );
  }
  return <p className="leading-[26px]">{children}</p>;
};

export default ComicDesc;
