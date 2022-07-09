interface ComicMetaGroupProps {
  label: string;
  content: string;
}

const ComicMetaGroup = ({ label, content }: ComicMetaGroupProps) => {
  return (
    <div className="mt-2">
      <span className="font-bold mr-2">{label}:</span>
      <span>{content}</span>
    </div>
  );
};

export default ComicMetaGroup;
