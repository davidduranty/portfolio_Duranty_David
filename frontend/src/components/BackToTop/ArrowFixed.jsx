const ArrowFixed = () => {
  return (
    <div className="arrow-fixed">
      <span
        className="arrow-scroll"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      >
        &#8678;
      </span>
    </div>
  );
};

export default ArrowFixed;
