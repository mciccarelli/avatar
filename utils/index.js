export const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export const BreakLine = string => {
  return string.split('\n').map((item, key) => {
    return (
      <span key={key}>
        {item}
        <br />
      </span>
    );
  });
};
