import React from "react";

function Title({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <h1 className="text-gray-200 text-3xl font-bold group-hover:text-yellow-600 transition-all">
        {text}
      </h1>
      {/* <div className="w-40 h-2 bg-yellow-600 rounded-full"></div>
      <div className="w-40 h-2 bg-slate-400 rounded-full translate-x-2"></div> */}
    </div>
  );
}

export default React.memo(Title);