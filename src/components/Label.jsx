export default function Label({ children, ...props }) {
  return (
    <label
      className="text-lg text-gray-800 font-sans tracking-tight inline-block"
      {...props}
    >
      {children}
    </label>
  );
}
