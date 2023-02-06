export default function TextInput({ ...props }) {
  return (
    <input
      type="text"
      className="bg-slate-50 border-2 p-1 rounded-sm w-full focus:border-gray-500 focus:outline-none text-lg text-gray-900"
      {...props}
    />
  );
}
